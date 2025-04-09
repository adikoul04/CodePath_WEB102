import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ScatterChart, Scatter, XAxis, YAxis, Tooltip, BarChart, Bar, CartesianGrid, Legend } from 'recharts';

const API_KEY = import.meta.env.VITE_APP_API_KEY;

const calculateAverages = (records) => {
  const validPrices = records
    .filter(car => !car.price.toLowerCase().includes('accepting_offers'))
    .map(car => parseFloat(car.price.replace(/[^\d.]/g, '')))
    .filter(p => !isNaN(p));

  const mileages = records
    .map(car => {
      if (car.mileage.toLowerCase() === "new") return 0;
      const numeric = parseFloat(car.mileage.replace(/[^\d.]/g, ''));
      return isNaN(numeric) ? null : numeric;
    })
    .filter(m => m !== null);

  const avgPrice = validPrices.reduce((acc, p) => acc + p, 0) / validPrices.length || 0;
  const avgMileage = mileages.reduce((acc, m) => acc + m, 0) / mileages.length || 0;

  return {
    avgPrice: `$${Math.round(avgPrice).toLocaleString()}`,
    avgMileage: `${Math.round(avgMileage).toLocaleString()} Miles`
  };
};

function Dashboard() {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(false);
  const [baselineTotalCount, setBaselineTotalCount] = useState(null);

  const [inputFilters, setInputFilters] = useState({
    make: '',
    model: '',
    yearMin: '',
    priceMax: ''
  });

  const [searchFilters, setSearchFilters] = useState({
    make: '',
    model: '',
    yearMin: '',
    priceMax: ''
  });

  const [avgPrice, setAvgPrice] = useState('N/A');
  const [avgMileage, setAvgMileage] = useState('N/A');
  const [totalCount, setTotalCount] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    fetchCars();
  }, [searchFilters]);

  const fetchCars = async () => {
    setLoading(true);
    let url = `/api/api/listings?apikey=${API_KEY}`;
    const { make, model, yearMin, priceMax } = searchFilters;

    if (make) url += `&make=${encodeURIComponent(make)}`;
    if (model) url += `&model=${encodeURIComponent(model)}`;
    if (yearMin) url += `&year_min=${encodeURIComponent(yearMin)}`;
    if (priceMax) url += `&price_max=${encodeURIComponent(priceMax)}`;

    try {
      const res = await fetch(url);
      const data = await res.json();

      const { records, totalCount } = data;

      // Save the baseline total count on the first fetch only
      if (baselineTotalCount === null) {
        setBaselineTotalCount(totalCount);
      }

      const hasQuery = make || model || yearMin || priceMax;

      // Check if filters were used but results returned are unchanged
      if (hasQuery && totalCount === baselineTotalCount) {
        setCars([]);
        setTotalCount(0);
        setAvgPrice('N/A');
        setAvgMileage('N/A');
      } else {
        setCars(records);
        setTotalCount(totalCount);
        const { avgPrice, avgMileage } = calculateAverages(records);
        setAvgPrice(avgPrice);
        setAvgMileage(avgMileage);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputFilters(prev => ({ ...prev, [name]: value }));
  };

  const handleSearch = () => {
    setSearchFilters({ ...inputFilters });
  };

  const scatterData = cars.map(car => ({
    mileage: car.mileageUnformatted,
    price: car.priceUnformatted,
  })).filter(c => c.mileage && c.price);

  const yearCounts = Object.values(
    cars.reduce((acc, car) => {
      if (!acc[car.year]) acc[car.year] = { year: car.year, count: 0 };
      acc[car.year].count++;
      return acc;
    }, {})
  );

  return (
    <div className="app-container">
      <h1>Car Listings</h1>

      <div className="filters">
        <input
          name="make"
          placeholder="Make"
          value={inputFilters.make}
          onChange={handleInputChange}
        />
        <input
          name="model"
          placeholder="Model"
          value={inputFilters.model}
          onChange={handleInputChange}
        />
        <input
          name="yearMin"
          placeholder="Min Year"
          type="number"
          value={inputFilters.yearMin}
          onChange={handleInputChange}
        />
        <input
          name="priceMax"
          placeholder="Max Price"
          type="number"
          value={inputFilters.priceMax}
          onChange={handleInputChange}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      <div className="stats-container">
        <p><strong>Total Cars:</strong> {totalCount}</p>
        <p><strong>Average Price:</strong> {avgPrice}</p>
        <p><strong>Average Mileage:</strong> {avgMileage}</p>
      </div>

      {cars.length > 0 && (
        <div className="charts">
            <ScatterChart width={500} height={300}>
            <XAxis dataKey="mileage" name="Mileage" />
            <YAxis dataKey="price" name="Price" />
            <Tooltip />
            <Scatter data={scatterData} fill="#8884d8" />
            </ScatterChart>

            <BarChart width={500} height={300} data={yearCounts}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="count" fill="#82ca9d" />
            </BarChart>
        </div>
        )}


      <div className="car-list">
        {loading ? (
          <p className="loading">Loading...</p>
        ) : cars.length === 0 ? (
          <div className="no-cars-message-wrapper">
            <p className="no-cars-message">No cars found for the selected filters.</p>
          </div>
        ) : (
          cars.map(car => (
            <div
              key={car.id}
              className="car-item"
              onClick={() => navigate(`/car/${car.id}`, { state: { car } })}
            >
              <img src={car.primaryPhotoUrl} alt={car.make} onError={e => e.target.src = 'https://via.placeholder.com/300x200'} />
              <div className="car-details">
                <h3>{car.year} {car.make} {car.model}</h3>
                <p>{car.price} - {car.mileage}</p>
                <p>{car.city}, {car.state}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Dashboard;
