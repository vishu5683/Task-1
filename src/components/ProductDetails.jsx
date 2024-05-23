import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../Styles/ProductDetails.css';
import Layoutdesign from '../pages/Layout/Layoutdesign';
import ReactStars from 'react-rating-stars-component';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles

const ProductDetails = () => {
  const { id } = useParams(); // Extract the product ID from the URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching product details: {error.message}</div>;
  }

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
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          <p><strong>Price:</strong> ${product.price}</p>
          <p><strong>Discount:</strong> {product.discountPercentage}%</p>
          <p><strong>Rating:</strong>
            <ReactStars
              count={5}
              value={product.rating}
              size={24}
              activeColor="#ffd700"
              edit={false}
            />
          </p>
          <p><strong>Stock:</strong> {product.stock} units available</p>
          <p><strong>Brand:</strong> {product.brand}</p>
          <p><strong>Category:</strong> {product.category}</p>
          <button className="buy-button">Buy</button>
        </div>
      </div>
    </Layoutdesign>
  );
}

export default ProductDetails;
