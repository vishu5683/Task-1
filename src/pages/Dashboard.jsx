import React, { useState, useEffect } from 'react';
import Layout from './Layout/Layoutdesign';
import '../Styles/Banner.css';
import LogoPic from "../pages/assets/ecom logo.jpg";

const Dashboard = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(response => response.json())
      .then(data => setProducts(data.products))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  return (
    <Layout>
      <div className="dashboard-container">
        <h1 className="dashboard-title">Welcome to the Dashboard</h1>
        <p className="dashboard-description">This is your dashboard where you can manage various aspects of the application.</p>
        <img className="dashboard-image" src={LogoPic} alt="Placeholder" />        <div className="products-container">
          <h2 className="products-title">Featured Products</h2>
          <div className="products-grid">
            {products.map(product => (
              <div key={product.id} className="product-card">
                <img src={product.thumbnail} alt={product.title} className="product-image" />
                <h3 className="product-title">{product.title}</h3>
                <p className="product-price">${product.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
