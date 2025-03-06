const Card = ({ question, answer, category, isFlipped, setIsFlipped, preventAnimation }) => {
    const handleFlip = () => {
      setIsFlipped(!isFlipped);
    };
  
    return (
      <div 
        className={`card ${isFlipped ? 'flipped' : ''} ${preventAnimation ? 'no-flip-animation' : ''} category-${category.toLowerCase()}`}
        onClick={handleFlip}
      >
        <div className="card-inner">
          <div className="card-front">
            <p>{question}</p>
          </div>
          <div className="card-back">
            <p>{answer}</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default Card;