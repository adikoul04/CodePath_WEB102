const Card = ({ 
  question, 
  answer, 
  category, 
  isFlipped, 
  onFlip, 
  preventAnimation, 
  isCorrect, 
  hasSubmitted 
}) => {
  return (
    <div 
      className={`card 
        ${isFlipped ? 'flipped' : ''} 
        ${preventAnimation ? 'no-flip-animation' : ''} 
        ${hasSubmitted && isCorrect ? 'correct-answer' : ''} 
        ${hasSubmitted && isCorrect === false ? 'incorrect-answer' : ''} 
        category-${category.toLowerCase()}`}
      onClick={onFlip}
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