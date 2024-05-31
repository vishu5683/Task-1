import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/AddProduct.css';
import Toast, { notifySuccess, notifyError } from '../components/Toast';
import Layoutdesign from './Layout/Layoutdesign';

const AddProduct = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [thumbnail, setThumbnail] = useState('');
  const [preview, setPreview] = useState(null);
  const navigate = useNavigate();

  const handleThumbnailChange = (e) => {
    const file = e.target.files[0];
    setThumbnail(file);
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    } else {
      setPreview(null);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

  
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('price', Number(price));
    formData.append('thumbnail', thumbnail);

    fetch('https://dummyjson.com/products/add', {
      method: 'POST',
      body: formData,
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
    <Layoutdesign>
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
              placeholder="Enter title"
            />
          </div>
          <div className="form-group">
            <label>Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              placeholder="Enter description"
            />
          </div>
          <div className="form-group">
            <label>Price</label>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
              placeholder="Enter price"
            />
          </div>
          <div className="form-group">
            <label>Thumbnail</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleThumbnailChange}
              required
            />
            {preview && (
              <div className="image-preview">
                <img src={preview} alt="Image Preview" />
              </div>
            )}
          </div>
          <button type="submit" className="add-product-button">Add Product</button>
        </form>
      </div>
    </Layoutdesign>
  );
};

export default AddProduct;
