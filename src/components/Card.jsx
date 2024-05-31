import React from 'react';
import '../Styles/Card.css';

const Card = ({ title, description, buttonText, image, onDelete }) => {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <h2 className="card-title">{title}</h2>
      <p className="card-description">{description}</p>
      <button className="card-button">{buttonText}</button>
      <button className="delete-button" onClick={onDelete}>Delete</button>
    </div>
  );
}

export default Card;
