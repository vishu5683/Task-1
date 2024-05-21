import React, { useEffect, useState } from 'react';
import Layoutdesign from '../Layout/Layoutdesign';
import Card from '../../components/Card';
import '../../Styles/Product.css'; 

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(data => {
        // Set the fetched products data to state
        setProducts(data.products);
      })
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  return (
    <Layoutdesign>
      <div className="products-container">
        <h1 className="products-title">Products</h1>
        <p className="products-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Product content goes here.</p>
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
      </div>
    </Layoutdesign>
  );
};

export default Products;






// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Layoutdesign from '../Layout/Layoutdesign';
// import Card from '../../components/Card';
// import '../../Styles/Product.css';

// const Products = () => {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetch('https://dummyjson.com/products')
//       .then(res => res.json())
//       .then(data => {
//         setProducts(data.products);
//         setLoading(false);
//       })
//       .catch(error => {
//         setError(error);
//         setLoading(false);
//       });
//   }, []);

//   const handleCardClick = (id) => {
//     navigate(`/product/${id}`);
//   };

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error fetching products: {error.message}</div>;
//   }

//   return (
//     <Layoutdesign>
//       <div className="products-container">
//         <h1 className="products-title">Products</h1>
//         <p className="products-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Product content goes here.</p>
//         <div className="product-list">
//           {products.map((product) => (
//             <div key={product.id} onClick={() => handleCardClick(product.id)} className="product-card">
//               <Card
//                 title={product.title}
//                 description={product.description}
//                 buttonText="View Details"
//                 image={product.thumbnail}
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </Layoutdesign>
//   );
// };

// export default Products;
