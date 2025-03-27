import React, { useState, useEffect } from "react";
import "./App.css";
import loadingIcon from '../src/assets/loading_icon.png';

const API_KEY = import.meta.env.VITE_DOG_API_KEY;
const API_URL = "https://api.thedogapi.com/v1/images/search";

const App = () => {
  const [dog, setDog] = useState(null);
  const [history, setHistory] = useState([]);
  const [banList, setBanList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchRandomDog = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`${API_URL}?has_breeds=true&limit=1`, {
        headers: { "x-api-key": API_KEY },
      });
      const data = await response.json();

      if (data.length === 0) {
        setDog(null);
        setIsLoading(false);
        return;
      }

      const fetchedDog = data[0];
      const breedInfo = fetchedDog.breeds[0];

      if (
        banList.includes(breedInfo.breed_group) ||
        banList.includes(breedInfo.origin) ||
        banList.some((ban) => breedInfo.temperament.includes(ban))
      ) {
        fetchRandomDog();
        return;
      }

      setDog(fetchedDog);
      setHistory(prev => {
        const filteredHistory = prev.filter(h => h.breeds[0].name !== fetchedDog.breeds[0].name);
        const newHistory = [fetchedDog, ...filteredHistory].slice(0, 10);
        return newHistory;
      });
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching dog data:", error);
      setDog(null);
      setIsLoading(false);
    }
  };

  const handleBan = (attribute) => {
    if (!banList.includes(attribute)) {
      setBanList([...banList, attribute]);
    }
  };

  const handleUnban = (attribute) => {
    setBanList(banList.filter(item => item !== attribute));
  };

  useEffect(() => {
    fetchRandomDog();
  }, []);

  return (
    <div className="container">
      <div className="sidebar">
        <h3>Viewed History</h3>
        <div className="history-list">
          {history.map((d, index) => (
            <div key={d.id || index}>
              {d.breeds[0].name}
            </div>
          ))}
        </div>
      </div>

      <div className="main">
        <h1>Veni Vici: Discover Dogs!</h1>
        {isLoading ? (
          <div className="loading-container">
            <img 
              src={loadingIcon} 
              alt="Loading..." 
              className="loading-icon"
            />
            <div>Loading...</div>
          </div>
        ) : dog ? (
          <>
            <div className="dog-card">
              <h2>{dog.breeds[0].name}</h2>
              <img src={dog.url} alt={dog.breeds[0].name} />
              <p className="attribute-hint">
                🐾 Click any trait below to ban similar dogs with that characteristic!
              </p>
              <div className="attributes">
                {dog.breeds[0].breed_group && (
                  <button onClick={() => handleBan(dog.breeds[0].breed_group)}>
                    {dog.breeds[0].breed_group}
                  </button>
                )}
                {dog.breeds[0].origin && (
                  <button onClick={() => handleBan(dog.breeds[0].origin)}>
                    {dog.breeds[0].origin}
                  </button>
                )}
                {dog.breeds[0].temperament &&
                  dog.breeds[0].temperament.split(", ").map((temp, index) => (
                    <button key={index} onClick={() => handleBan(temp)}>
                      {temp}
                    </button>
                  ))}
              </div>
            </div>
            <button className="discover-btn" onClick={fetchRandomDog}>
              Discover!
            </button>
          </>
        ) : (
          <div className="dog-card">
            <h2>No dogs found!</h2>
            <p>Please remove some attributes from the ban list and try again.</p>
            <button className="discover-btn" onClick={fetchRandomDog}>
              Try Again
            </button>
          </div>
        )}
      </div>

      <div className="sidebar">
        <h3>🚫 Ban List</h3>
        <p className="ban-hint">Woof! Click to remove from ban list</p>
        <div className="ban-list">
          {banList.map((item, index) => (
            <button
              key={index}
              className="ban-item"
              onClick={() => handleUnban(item)}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
