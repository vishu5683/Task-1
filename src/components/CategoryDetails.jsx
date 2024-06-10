import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../Styles/CategoryDetails.css'; 
import Card from '../components/Card'; 
import Layoutdesign from '../pages/Layout/Layoutdesign';
import Loader from '../components/Loader';
import withLoader from '../components/withLoader';

const CategoryDetails = ({ isLoading, setIsLoading }) => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://dummyjson.com/products/category/${category}`)
      .then(res => res.json())
      .then(data => {
        if (data && Array.isArray(data.products)) {
          setProducts(data.products);
        }
      })
      .catch(error => console.error('Error fetching products:', error))
      .finally(() => setIsLoading(false));
  }, [category, setIsLoading]);

  return (
    <Layoutdesign>
      <div className="category-details-container">
        <h1>{category.charAt(0).toUpperCase() + category.slice(1)}</h1>
        {isLoading ? <Loader /> : (
          <div className="product-list">
            {products.map((product) => (
              <Card
                key={product.id}
                title={product.title}
                description={product.description}
                buttonText="Buy Now"
                image={product.thumbnail}
              />
            ))}
          </div>
        )}
      </div>
    </Layoutdesign>
  );
};

export default withLoader(CategoryDetails);
