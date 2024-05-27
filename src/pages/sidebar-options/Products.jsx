import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layoutdesign from '../Layout/Layoutdesign';
import Card from '../../components/Card';
import '../../Styles/Product.css';
import ReactPaginate from 'react-paginate';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const navigate = useNavigate();

  const fetchProducts = (currentPage) => {
    const limit = 10;
    const skip = currentPage * limit;

    fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`)
      .then(res => res.json())
      .then(data => {
        setProducts(data.products);
        setPageCount(Math.ceil(data.total / limit));
      })
      .catch(error => console.error('Error fetching products:', error));
  };

  useEffect(() => {
    fetchProducts(currentPage);
  }, [currentPage]);

  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
  };

  const handleAddProduct = () => {
    navigate('/add-product');
  };

  return (
    <Layoutdesign>
      <div className="products-container">
        <div className="products-header">
          <h1 className="products-title">Products</h1>
          <button className="add-product-button" onClick={handleAddProduct}>Add Products</button>
        </div>
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
        <ReactPaginate
          previousLabel={'Previous'}
          nextLabel={'Next'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          containerClassName={'pagination'}
          activeClassName={'active'}
        />
      </div>
    </Layoutdesign>
  );
};

export default Products;
