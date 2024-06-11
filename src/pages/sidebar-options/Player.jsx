import React, { useState, useEffect } from 'react';
import Layoutdesign from '../../pages/Layout/Layoutdesign';
import '../../Styles/Product.css';

const Player = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://dummyjson.com/recipes')
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result); // Inspect the structure of the response
          setLoading(false);
          if (Array.isArray(result.recipes)) {
            setRecipes(result.recipes);
          } else {
            setRecipes([]);
            setError(new Error('Unexpected response format'));
          }
        },
        (error) => {
          setLoading(false);
          setError(error);
        }
      );
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <Layoutdesign>
      <div>
        <h1>Team Management</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Team Management content goes here.</p>
        <h2>Recipes</h2>
        <ul>
          {recipes.map(recipe => (
            <li key={recipe.id}>{recipe.title}</li>
          ))}
        </ul>
      </div>
    </Layoutdesign>
  );
};

export default Player;
