import React, { useState } from 'react';
import '../Styles/Modal.css';

const EditProductModal = ({ product, onSave, onClose }) => {
  const [title, setTitle] = useState(product.title);
  const [description, setDescription] = useState(product.description);

  const handleSave = () => {
    onSave({ ...product, title, description });
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Edit Product</h2>
        <label htmlFor="id">ID</label>
        <input
          type="text"
          id="id"
          value={product.id}
          disabled
        />
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
        <button onClick={handleSave}>Save</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};

export default EditProductModal;
