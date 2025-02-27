import React, { useEffect, useRef } from 'react';
import './App.css';
import Grid from './components/Grid';

const App = () => {
  const gridRef = useRef(null);

  useEffect(() => {
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
      card.style.setProperty('--animation-order', index);
    });
  }, []);

  return (
    <div className="App">
      <header>
        <h1>Swim Resources</h1>
        <h2 className="Subtitle">Your Complete Guide to Swimming</h2>
      </header>
      <main ref={gridRef}>
        <Grid />
      </main>
      <footer>
        <p>Created with 💙 for swimming enthusiasts</p>
      </footer>
    </div>
  );
};

export default App;