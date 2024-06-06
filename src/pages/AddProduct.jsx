import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/AddProduct.css';
import Toast, { notifySuccess, notifyError } from '../components/Toast';
import Layoutdesign from './Layout/Layoutdesign';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
  title: yup.string().required('Title is required'),
  description: yup.string().required('Description is required'),
  price: yup
    .number()
    .typeError('Price must be a number')
    .positive('Price must be a positive number')
    .required('Price is required'),
  thumbnail: yup.mixed().required('Thumbnail is required')
});

const AddProduct = () => {
  const { register, handleSubmit, formState: { errors }, setValue } = useForm({
    resolver: yupResolver(schema)
  });
  const [preview, setPreview] = useState(null);
  const navigate = useNavigate();

  const handleThumbnailChange = (e) => {
    const file = e.target.files[0];
    setValue('thumbnail', file); // Set value for react-hook-form
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

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append('title', data.title);
    formData.append('description', data.description);
    formData.append('price', data.price);
    formData.append('thumbnail', data.thumbnail);

    try {
      const response = await fetch('https://dummyjson.com/products/add', {
        method: 'POST',
        body: formData
      });
      const result = await response.json();
      if (result) {
        notifySuccess('Product added successfully!');
        navigate('/products');
      }
    } catch (error) {
      notifyError('Failed to add product');
      console.error('Error:', error);
    }
  };

  return (
    <Layoutdesign>
      <div className="add-product-container">
        <Toast />
        <h1>Add Product</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="add-product-form">
          <div className="form-group">
            <label>Title</label>
            <input
              type="text"
              {...register('title')}
              placeholder="Enter title"
            />
            {errors.title && <p className="error-message">{errors.title.message}</p>}
          </div>
          <div className="form-group">
            <label>Description</label>
            <textarea
              {...register('description')}
              placeholder="Enter description"
            />
            {errors.description && <p className="error-message">{errors.description.message}</p>}
          </div>
          <div className="form-group">
            <label>Price</label>
            <input
              type="text"
              {...register('price')}
              placeholder="Enter price"
            />
            {errors.price && <p className="error-message">{errors.price.message}</p>}
          </div>
          <div className="form-group">
            <label>Thumbnail</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleThumbnailChange}
            />
            {errors.thumbnail && <p className="error-message">{errors.thumbnail.message}</p>}
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
