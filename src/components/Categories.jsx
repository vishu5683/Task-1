import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/Categories.css'; 
import Layoutdesign from '../pages/Layout/Layoutdesign';

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://dummyjson.com/products/categories')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          setCategories(data);
        } else if (data && Array.isArray(data.categories)) {
          setCategories(data.categories);
        }
      })
      .catch(error => console.error('Error fetching categories:', error));
  }, []);

  const handleCategoryClick = (category) => {
    navigate(`/category/${category.slug}`);
  };

  return (
    <Layoutdesign>
    <div className="categories-container">
      <h1>Product Categories</h1>
      <ul className="categories-list">
        {categories.map((category) => (
          <li key={category.slug} onClick={() => handleCategoryClick(category)}>
            {category.name}
          </li>
        ))}
      </ul>
    </div>
      </Layoutdesign>
  );
};

export default Categories;
