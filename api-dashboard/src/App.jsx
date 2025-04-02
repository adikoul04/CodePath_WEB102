import { useState, useEffect } from 'react';
import './App.css';

const API_KEY = import.meta.env.VITE_APP_API_KEY;

function App() {
  const [cars, setCars] = useState([]);
  const [makeQuery, setMakeQuery] = useState('');
  const [modelQuery, setModelQuery] = useState('');
  const [yearMin, setYearMin] = useState('');
  const [priceMax, setPriceMax] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [apiResponse, setApiResponse] = useState(null);
  const [hasSearched, setHasSearched] = useState(true);
  const [debugURL, setDebugURL] = useState('');
  const [totalCount, setTotalCount] = useState(0);
  const [baselineTotalCount, setBaselineTotalCount] = useState(null);
  const [avgPrice, setAvgPrice] = useState('N/A');
  const [avgMileage, setAvgMileage] = useState('N/A');

  const calculateAverages = (records) => {
    if (!records || records.length === 0) {
      return { avgPrice: 'N/A', avgMileage: 'N/A', hasOffers: false };
    }

    // Process prices - filter out "accepting_offers" and convert valid prices to numbers
    const validPrices = records
      .filter(car => !car.price.toLowerCase().includes('accepting_offers'))
      .map(car => parseFloat(car.price.replace(/[^\d.]/g, '')));

    const hasOffers = records.some(car => car.price.toLowerCase().includes('accepting_offers'));
    const sumPrice = validPrices.reduce((acc, curr) => acc + curr, 0);
    const avgPriceNum = validPrices.length > 0 ? sumPrice / validPrices.length : 0;

    // Process mileages (handle "New" as 0, remove commas and " Miles", then convert to number)
    const mileages = records.map(car => {
      if (car.mileage.toLowerCase() === "new") return 0;
      return parseFloat(car.mileage.replace(/[^\d.]/g, ''))
    });
    const sumMileage = mileages.reduce((acc, curr) => acc + curr, 0);
    const avgMileageNum = sumMileage / mileages.length;

    return {
      avgPrice: validPrices.length > 0 
        ? `$${avgPriceNum.toLocaleString(undefined, {maximumFractionDigits: 0})}${hasOffers ? ', but some are accepting offers' : ''}`
        : 'N/A',
      avgMileage: `${avgMileageNum.toLocaleString(undefined, {maximumFractionDigits: 0})} Miles`,
      hasOffers
    };
  };

  const fetchCars = async () => {
    setLoading(true);
    setError(null);
    setHasSearched(true);
    
    // Reset averages
    setAvgPrice('N/A');
    setAvgMileage('N/A');

    let url = `/api/api/listings?apikey=${API_KEY}`;

    if (makeQuery) url += `&make=${encodeURIComponent(makeQuery)}`;
    if (modelQuery) url += `&model=${encodeURIComponent(modelQuery)}`;
    if (yearMin) url += `&year_min=${encodeURIComponent(yearMin)}`;
    if (priceMax) url += `&price_max=${encodeURIComponent(priceMax)}`;

    let debugUrlTemp = url.replace(/\?apikey=[^&]*/, '?apikey=[HIDDEN]');
    setDebugURL(debugUrlTemp);

    try {
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error(`API error: ${response.status} ${response.statusText}`);
      }
      
      const data = await response.json();
      setApiResponse(data);

      if (data && typeof data.totalCount === "number") {
        if (baselineTotalCount === null) {
          setBaselineTotalCount(data.totalCount);
        }

        if ((makeQuery || modelQuery) && data.totalCount === baselineTotalCount) {
          setCars([]);
          setTotalCount(0);
          setAvgPrice('N/A');
          setAvgMileage('N/A');
          // Set specific debug JSON for unrecognized make/model
          setApiResponse({
            totalCount: 0,
            totalCountFormatted: "0",
            hitsCount: 0,
            records: [],
            promotedAggregations: []
          });
        } else {
          const recordsToShow = data.records.slice(0, 10);
          setCars(recordsToShow);
          setTotalCount(data.totalCount);
          
          // Calculate averages
          const { avgPrice, avgMileage } = calculateAverages(recordsToShow);
          setAvgPrice(avgPrice);
          setAvgMileage(avgMileage);
        }
      } else {
        setCars([]);
        setTotalCount(0);
        setError("Invalid API response format");
      }
    } catch (error) {
      console.error("Error fetching cars:", error);
      setError(`Fetch error: ${error.message}`);
      setCars([]);
      setTotalCount(0);
    } finally {
      setLoading(false);
    }
  };

  // Load cars when the component first mounts
  useEffect(() => {
    fetchCars();
  }, []);

  return (
    <div className="app-container">
      <h1>Car Listings</h1>
      
      <div className="filters">
        <input 
          type="text" 
          placeholder="Search by make..." 
          value={makeQuery} 
          onChange={(e) => setMakeQuery(e.target.value)}
        />
        <input 
          type="text" 
          placeholder="Search by model..." 
          value={modelQuery} 
          onChange={(e) => setModelQuery(e.target.value)}
        />
        <input 
          type="number" 
          placeholder="Min Year" 
          value={yearMin} 
          onChange={(e) => setYearMin(e.target.value)}
        />
        <input 
          type="number" 
          placeholder="Max Price" 
          value={priceMax} 
          onChange={(e) => setPriceMax(e.target.value)}
        />
        <button onClick={fetchCars}>Search</button>
      </div>

      {hasSearched && !loading && (
        <div className="stats-container">
          <p><strong>Total Cars Available:</strong> {totalCount}</p>
          {totalCount > 0 && (
            <>
              <p><strong>Average Price:</strong> {avgPrice}</p>
              <p><strong>Average Mileage:</strong> {avgMileage}</p>
            </>
          )}
        </div>
      )}
      
      {error && (
        <div className="error-message">
          <p>{error}</p>
        </div>
      )}
      
      <details className="debug-panel">
        <summary>Debug Info</summary>
        <p><strong>API URL:</strong> {debugURL}</p>
        <pre>{JSON.stringify(apiResponse, null, 2)}</pre>
      </details>
      
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="car-list">
          {cars.length > 0 ? (
            cars.map(car => (
              <div key={car.id} className="car-item">
                <img 
                  src={car.primaryPhotoUrl} 
                  alt={`${car.make} ${car.model}`}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://via.placeholder.com/300x200?text=No+Image";
                  }}
                />
                <div className="car-details">
                  <h3>{car.year} {car.make} {car.model}</h3>
                  <p>{car.price} - {car.mileage}</p>
                  <p>{car.city}, {car.state}</p>
                </div>
              </div>
            ))
          ) : hasSearched ? (
            <p className="no-cars-message">No cars found matching your search criteria. <br/><br/>Notes: <br/>The <em>Make</em> and <em>Model</em> search fields are case sensitive (Ex: Ram, BMW, Urus, iX)<br/>The API does not allow searching for a model without a make <br/> If the specified model does not match what the API has, the API will return all models of the specified make</p>
          ) : (
            <p>No cars found</p>
          )}
        </div>
      )}
    </div>
  );
}

export default App;