import React from 'react';
import PropTypes from 'prop-types';
import '../Styles/Card.css';

const Card = ({ title, description, buttonText, image, onDelete, onButtonClick, onAddToCart }) => {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
        <div className="card-buttons">
          <button className="card-button" onClick={onButtonClick}>{buttonText}</button>
          <button className="card-button" onClick={onAddToCart}>Add to Cart</button>
          <button className="card-button delete-button" onClick={onDelete}>Delete</button>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  onButtonClick: PropTypes.func.isRequired,
  onAddToCart: PropTypes.func.isRequired,
};

export default Card;
