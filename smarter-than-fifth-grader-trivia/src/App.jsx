import './App.css';
import { useState, useEffect } from 'react';
import Card from './components/Card';
import flashcards from './flashcards';

const App = () => {
  const [cardHistory, setCardHistory] = useState([0]);
  const [historyIndex, setHistoryIndex] = useState(0);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isSliding, setIsSliding] = useState(false);
  
  const [userGuess, setUserGuess] = useState('');
  const [isCorrect, setIsCorrect] = useState(null);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  
  const [currentStreak, setCurrentStreak] = useState(0);
  const [longestStreak, setLongestStreak] = useState(0);

  const [shuffledDeck, setShuffledDeck] = useState([...Array(flashcards.length).keys()]);

  useEffect(() => {
    setCurrentCardIndex(cardHistory[historyIndex]);
    setIsFlipped(false);
    setUserGuess('');
    setIsCorrect(null);
    setHasSubmitted(false);
    setIsSliding(true);
    
    setTimeout(() => {
      setIsSliding(false);
    }, 300);
  }, [historyIndex, cardHistory]);

  // Update longest streak whenever current streak changes
  useEffect(() => {
    if (currentStreak > longestStreak) {
      setLongestStreak(currentStreak);
    }
  }, [currentStreak]);

  // Initialize shuffled deck
  useEffect(() => {
    shuffleDeck();
  }, []);

  // Handle going to the next card
  const handleNextCard = () => {
    if (historyIndex < cardHistory.length - 1) {
      setHistoryIndex(historyIndex + 1);
    } else {
      const nextIndex = (currentCardIndex + 1) % flashcards.length;
      setCardHistory([...cardHistory.slice(0, historyIndex + 1), nextIndex]);
      setHistoryIndex(historyIndex + 1);
    }
  };

  // Handle going to the previous card
  const handlePreviousCard = () => {
    if (historyIndex > 0) {
      setHistoryIndex(historyIndex - 1);
    }
  };

  // Shuffle the deck
  const shuffleDeck = () => {
    const newDeck = [...Array(flashcards.length).keys()];
    for (let i = newDeck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newDeck[i], newDeck[j]] = [newDeck[j], newDeck[i]];
    }
    setShuffledDeck(newDeck);
    
    // Reset history with first card from shuffled deck
    setCardHistory([newDeck[0]]);
    setHistoryIndex(0);
  };

  // Check if the user's answer is correct
  const checkAnswer = () => {
    if (!userGuess.trim()) return;
    
    const correctAnswer = flashcards[currentCardIndex].answer.toLowerCase();
    const userAnswer = userGuess.toLowerCase();
    
    const isAnswerCorrect = correctAnswer.includes(userAnswer) || userAnswer.includes(correctAnswer);
    
    setIsCorrect(isAnswerCorrect);
    setHasSubmitted(true);
    setIsFlipped(true);
    
    if (isAnswerCorrect) {
      setCurrentStreak(currentStreak + 1);
    } else {
      setCurrentStreak(0);
    }
  };

  // Reset streak when flipping card without submitting
  const handleFlip = () => {
    if (!hasSubmitted) {
      setCurrentStreak(0);
    }
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="App">
      <header>
        <h1>Are You Smarter than a Fifth Grader?</h1>
        <h2>Category: {flashcards[currentCardIndex].category}</h2>
        <div className="streak-counter">
          <span>Current Streak: {currentStreak}</span>
          <span>Longest Streak: {longestStreak}</span>
        </div>
      </header>
      <main>
        <div className={`card-container ${isSliding ? 'sliding' : ''}`}>
          <Card 
            question={flashcards[currentCardIndex].question}
            answer={flashcards[currentCardIndex].answer}
            category={flashcards[currentCardIndex].category}
            isFlipped={isFlipped}
            onFlip={handleFlip}
            preventAnimation={isSliding}
            isCorrect={isCorrect}
            hasSubmitted={hasSubmitted}
          />
        </div>
        
        {!isFlipped && !hasSubmitted && (
          <div className="answer-form">
            <input
              type="text"
              value={userGuess}
              onChange={(e) => setUserGuess(e.target.value)}
              placeholder="Enter your answer..."
              className="answer-input"
              onKeyDown={(e) => e.key === 'Enter' && checkAnswer()}
            />
            <button onClick={checkAnswer} className="submit-btn">Submit</button>
          </div>
        )}
        
        {(isFlipped || hasSubmitted) && (
          <div className={`feedback-message ${isCorrect === true ? 'correct' : isCorrect === false ? 'incorrect' : ''}`}>
            {isCorrect === true && 'Correct! Great job!'}
            {isCorrect === false && 'Incorrect. Try again next time!'}
            {isCorrect === null && 'Flipped to see answer. Streak reset.'}
          </div>
        )}
        
        <div className="button-container">
          <button 
            onClick={handlePreviousCard} 
            disabled={historyIndex === 0}
            className="nav-btn prev-btn"
          >
            Previous
          </button>
          <button onClick={shuffleDeck} className="shuffle-btn">
            Shuffle
          </button>
          <button onClick={handleNextCard} className="nav-btn next-btn">
            Next
          </button>
        </div>
      </main>
    </div>
  );
};

export default App;