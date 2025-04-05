import { useState, useEffect } from 'react'
import CoinInfo from "./Components/CoinInfo";
import './App.css'
const API_KEY = import.meta.env.VITE_APP_API_KEY;

function App() {
  const [list, setList] = useState(null)
  const [filteredResults, setFilteredResults] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  
  const searchItems = searchValue => {
    setSearchInput(searchValue);
    if (searchValue !== "" && list) {
      const filteredData = Object.keys(list.Data).filter((coinKey) => 
        list.Data[coinKey].FullName.toLowerCase().includes(searchValue.toLowerCase()) ||
        list.Data[coinKey].Symbol.toLowerCase().includes(searchValue.toLowerCase())
      );
      setFilteredResults(filteredData);
    } else {
      // When search is cleared, reset filtered results
      setFilteredResults([]);
    }
  };

  useEffect(() => {
    const fetchAllCoinData = async () => {
      const response = await fetch(
        "https://min-api.cryptocompare.com/data/all/coinlist?&api_key=" 
        + API_KEY
      );
      const json = await response.json();
      setList(json);
    };

    fetchAllCoinData().catch(console.error);
  }, []);

  return (
    <div className="whole-page">
      <h1>My Crypto List</h1>
      <input
        type="text"
        placeholder="Search..."
        onChange={(inputString) => searchItems(inputString.target.value)}
      />
      <ul>
      {searchInput.length > 0
        ? filteredResults.map((coinKey) => 
            list.Data[coinKey].PlatformType === "blockchain" ? 
            <CoinInfo
              key={list.Data[coinKey].Symbol}
              image={list.Data[coinKey].ImageUrl}
              name={list.Data[coinKey].FullName}
              symbol={list.Data[coinKey].Symbol}
            />
            : null
          )
        : list && Object.keys(list.Data || {}).map((coinKey) => 
            list.Data[coinKey].PlatformType === "blockchain" ? 
            <CoinInfo
              key={list.Data[coinKey].Symbol}
              image={list.Data[coinKey].ImageUrl}
              name={list.Data[coinKey].FullName}
              symbol={list.Data[coinKey].Symbol}
            />
            : null
          )
      }
      </ul>
    </div>
  )
}

export default App