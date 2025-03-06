import './App.css';
import { useState } from 'react';
import Card from './components/Card';
import flashcards from './flashcards';

const App = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isSliding, setIsSliding] = useState(false);

  const handleNextCard = () => {
    setCurrentCardIndex((prevIndex) => {
      let newIndex;
      do {
        newIndex = Math.floor(Math.random() * flashcards.length);
      } while (newIndex === prevIndex);
      return newIndex;
    });
  
    setIsSliding(true);
    setIsFlipped(false);

    setTimeout(() => {
      setIsSliding(false);
    }, 300);
  };
  
  return (
    <div className="App">
      <header>
        <h1>Are You Smarter than a Fifth Grader?</h1>
        <h2>Category: {flashcards[currentCardIndex].category}</h2>
      </header>
      <main>
        <div className={`card-container ${isSliding ? 'sliding' : ''}`}>
          <Card 
            question={flashcards[currentCardIndex].question}
            answer={flashcards[currentCardIndex].answer}
            category={flashcards[currentCardIndex].category}
            isFlipped={isFlipped}
            setIsFlipped={setIsFlipped}
            preventAnimation={isSliding}
          />
        </div>
        <button onClick={handleNextCard}>Next Card</button>
      </main>
    </div>
  )
}

export default App