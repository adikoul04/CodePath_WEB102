import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function CoinDetail() {
  const API_KEY = import.meta.env.VITE_APP_API_KEY;
  const params = useParams();
  const [fullDetails, setFullDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getCoinDetail = async () => {
      try {
        setIsLoading(true);
        // First API call for price data
        const details = await fetch(
          `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${params.symbol}&tsyms=USD&api_key=` +
            API_KEY
        );
        
        // Second API call for coin metadata
        const description = await fetch(
          `https://min-api.cryptocompare.com/data/all/coinlist?fsym=${params.symbol}&api_key=` +
            API_KEY
        );
        
        // Check if responses are ok
        if (!details.ok || !description.ok) {
          throw new Error('Failed to fetch data');
        }
        
        const detailsJson = await details.json();
        const descripJson = await description.json();
        
        // Make sure the data exists in the responses
        if (!detailsJson.DISPLAY || !detailsJson.DISPLAY[params.symbol]) {
          throw new Error('Price data not available');
        }
        
        if (!descripJson.Data || !descripJson.Data[params.symbol]) {
          throw new Error('Coin information not available');
        }
        
        setFullDetails({
          "numbers": detailsJson.DISPLAY, 
          "textData": descripJson.Data
        });
      } catch (err) {
        console.error("Error fetching coin details:", err);
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    
    getCoinDetail();
  }, [params.symbol, API_KEY]);

  if (isLoading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  if (!fullDetails || !fullDetails.numbers || !fullDetails.textData) {
    return <div className="error">No data available for this coin</div>;
  }

  // Get the USD data for this symbol
  const coinUsdData = fullDetails.numbers[params.symbol].USD;
  const coinData = fullDetails.textData[params.symbol];

  return (
    <div className="whole-page">
      <div className="coin-detail-container">
        <h1>{coinData.FullName}</h1>
        <div className="coin-overview">
          <img
            className="coin-image"
            src={`https://www.cryptocompare.com${coinUsdData.IMAGEURL}`} 
            alt={`Icon for ${params.symbol} cryptocurrency`}
          />
          <div className="coin-price">
            <h2>Current Price: {coinUsdData.PRICE}</h2>
          </div>
        </div>
        
        <div className="coin-description">
          <h3>About {coinData.FullName}</h3>
          <p>{coinData.Description || "No description available"}</p>
          <p>This coin was built with the algorithm: {coinData.Algorithm || "Not specified"}</p>
        </div>
        
        <div className="coin-stats">
          <h3>Market Statistics</h3>
          <table>
            <tbody>
              <tr>
                <th>Launch Date</th>
                <td>{coinData.AssetLaunchDate || "Not available"}</td>
              </tr>
              <tr>
                <th>Website</th>
                <td>{coinData.AssetWebsiteUrl || "Not available"}</td>
              </tr>
              <tr>
                <th>Whitepaper</th>
                <td>{coinData.AssetWhitepaperUrl || "Not available"}</td>
              </tr>
              <tr>
                <th>Monetary Symbol</th>
                <td>{params.symbol}</td>
              </tr>
              <tr>
                <th>Market</th>
                <td>{coinUsdData.MARKET || "Not available"}</td>
              </tr>
              <tr>
                <th>Last Transaction</th>
                <td>{coinUsdData.LASTUPDATE || "Not available"}</td>
              </tr>
              <tr>
                <th>Last Transaction Value</th>
                <td>{coinUsdData.LASTVOLUME || "Not available"}</td>
              </tr>
              <tr>
                <th>Volume</th>
                <td>{coinUsdData.VOLUME24HOUR || "Not available"}</td>
              </tr>
              <tr>
                <th>Today's Open Price</th>
                <td>{coinUsdData.OPENDAY || "Not available"}</td>
              </tr>
              <tr>
                <th>Highest Price during the Day</th>
                <td>{coinUsdData.HIGHDAY || "Not available"}</td>
              </tr>
              <tr>
                <th>Lowest Price during the Day</th>
                <td>{coinUsdData.LOWDAY || "Not available"}</td>
              </tr>
              <tr>
                <th>Change from Previous Day</th>
                <td>{coinUsdData.CHANGE24HOUR || "Not available"}</td>
              </tr>
              <tr>
                <th>Market Cap</th>
                <td>{coinUsdData.MKTCAP || "Not available"}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default CoinDetail;