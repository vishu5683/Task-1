import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../Styles/ProductDetails.css';
import Layoutdesign from '../pages/Layout/Layoutdesign';
import ReactStars from 'react-rating-stars-component';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const ProductDetails = () => {
  const { id } = useParams(); // Extract the product ID from the URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Add navigate hook

  useEffect(() => {
    // Fetch product details based on the ID
    fetch(`https://dummyjson.com/products/${id}`)
      .then(res => res.json())
      .then(data => {
        setProduct(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error">Error fetching product details: {error.message}</div>;
  }

  const handleBuyNow = () => {
    navigate('/products/address');
  };

  return (
    <Layoutdesign>
      <div className="product-details-container">
        <div className="product-image">
          <Carousel showThumbs={false} autoPlay infiniteLoop>
            {product.images.map((image, index) => (
              <div key={index}>
                <img src={image} alt={`${product.title} ${index + 1}`} />
              </div>
            ))}
          </Carousel>
        </div>
        <div className="product-info">
          <h1 className="product-title">{product.title}</h1>
          <p className="product-description">{product.description}</p>
          <div className="product-price-discount">
            <p className="product-price"><strong>Price:</strong> ${product.price}</p>
            <p className="product-discount"><strong>Discount:</strong> {product.discountPercentage}%</p>
          </div>
          <div className="product-rating">
            <strong>Rating:</strong>
            <ReactStars
              count={5}
              value={product.rating}
              size={24}
              activeColor="#ffd700"
              edit={false}
            />
          </div>
          <p className="product-stock"><strong>Stock:</strong> {product.stock} units available</p>
          <p className="product-brand"><strong>Brand:</strong> {product.brand}</p>
          <p className="product-category"><strong>Category:</strong> {product.category}</p>
          <button className="buy-button" onClick={handleBuyNow}>Buy Now</button>
        </div>
      </div>
    </Layoutdesign>
  );
}

export default ProductDetails;
