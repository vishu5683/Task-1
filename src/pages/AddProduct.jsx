import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/AddProduct.css';
import Toast, { notifySuccess, notifyError } from '../components/Toast'; // Adjust the import path as needed

const AddProduct = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [thumbnail, setThumbnail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('https://dummyjson.com/products/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title,
        description,
        price: Number(price),
        thumbnail,
        /* add other fields as needed */
      }),
    })
      .then(res => res.json())
      .then(data => {
        if (data) {
          notifySuccess('Product added successfully!');
          navigate('/products');
        }
      })
      .catch(error => {
        notifyError('Failed to add product');
        console.error('Error:', error);
      });
  };

  return (
    <div className="add-product-container">
      <Toast />
      <h1>Add Product</h1>
      <form onSubmit={handleSubmit} className="add-product-form">
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Price</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Thumbnail URL</label>
          <input
            type="text"
            value={thumbnail}
            onChange={(e) => setThumbnail(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="add-product-button">Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;
