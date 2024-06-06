
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../Styles/Modal.css'; 
import Toast, { notifySuccess, notifyError } from '../components/Toast';

const EditProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then(res => res.json())
      .then(data => {
        setProduct(data);
        setTitle(data.title);
        setDescription(data.description);
      })
      .catch(error => console.error('Error fetching product:', error));
  }, [id]);

  const handleSave = () => {
    fetch(`https://dummyjson.com/products/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...product, title, description })
    })
      .then(res => {
        if (!res.ok) {
          throw new Error('Failed to update product');
        }
        return res.json();
      })
      .then(data => {
        notifySuccess('Product updated successfully');
        navigate('/products'); 
      })
      .catch(error => {
        console.error('Error updating product:', error);
        notifyError('Failed to update product');
      });
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="edit-product-page">
      <Toast />
      <h2>Edit Product</h2>
      <label htmlFor="id">ID</label>
      <input type="text" id="id" value={product.id} disabled />
      <label htmlFor="title">Title</label>
      <input
        type="text"
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label htmlFor="description">Description</label>
      <textarea
        id="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
   <button onClick={handleSave} className="save-button">Save</button>
<button onClick={() => navigate('/products')} className="cancel-button">Cancel</button>

    </div>
  );
};

export default EditProductPage;
