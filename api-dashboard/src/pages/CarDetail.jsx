import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

function CarDetail() {
  const { id } = useParams();
  const { state } = useLocation();
  const [car, setCar] = useState(state?.car || null);
  const [expandedIndex, setExpandedIndex] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!car) {
      console.warn("No car data found. Make sure to access this page by clicking a card.");
    }
  }, [car]);

  if (!car) return <p>Car not found</p>;

  const showPrev = () => {
    setExpandedIndex((prev) => (prev === 0 ? car.photoUrls.length - 1 : prev - 1));
  };

  const showNext = () => {
    setExpandedIndex((prev) => (prev === car.photoUrls.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="app-container">
      <div className="car-detail-actions">
        <button onClick={() => navigate('/')} className="back-btn">← Home</button>
      </div>

      <h2>{car.year} {car.make} {car.model}</h2>
      <p><strong>Price:</strong> {car.price}</p>
      <p><strong>Mileage:</strong> {car.mileage}</p>
      <p><strong>Location:</strong> {car.city}, {car.state}</p>
      <p><strong>Condition:</strong> {car.condition}</p>
      <p><strong>Dealer:</strong> {car.dealerName}</p>

      {expandedIndex !== null && (
        <div className="overlay" onClick={() => setExpandedIndex(null)}>
          <span className="nav-arrow left" onClick={(e) => { e.stopPropagation(); showPrev(); }}>&#10094;</span>
          <img
            src={car.photoUrls[expandedIndex]}
            alt="Expanded view"
            className="expanded-img"
            onClick={(e) => e.stopPropagation()}
          />
          <span className="nav-arrow right" onClick={(e) => { e.stopPropagation(); showNext(); }}>&#10095;</span>
        </div>
      )}

      <div className="photo-gallery">
        {car.photoUrls.map((url, i) => (
          <img
            key={i}
            src={url}
            alt={`Car view ${i}`}
            onClick={() => setExpandedIndex(i)}
            onError={e => e.target.src = 'https://via.placeholder.com/300x200'}
          />
        ))}
      </div>
    </div>
  );
}

export default CarDetail;
