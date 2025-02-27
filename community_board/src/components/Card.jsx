import React from "react";

const Card = (props) => {
    return (
        <div className={`card ${props.category.toLowerCase()}`}>
            <div className="card-header">
                <h3>{props.title}</h3>
            </div>
            <div className="card-image">
                <img src={props.image} alt={props.title} />
            </div>
            <div className="card-content">
                <p>{props.description}</p>
            </div>
            <div className="card-action">
                <a href={props.link} target="_blank" rel="noopener noreferrer">
                    <button>Learn More</button>
                </a>
            </div>
        </div>
    )
}

export default Card;