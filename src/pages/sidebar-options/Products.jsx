import React, { useEffect, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../containers/reducer/cartSlice';
import Layoutdesign from '../Layout/Layoutdesign';
import Card from '../../components/Card';
import '../../Styles/Product.css';
import ReactPaginate from 'react-paginate';
import Alert from '../../components/Alert';
import Toast, { notifySuccess, notifyError } from '../../components/Toast';
import Loader from '../../components/Loader';
import withLoader from '../../components/withLoader';

const Products = ({ isLoading, setIsLoading }) => {
  const [products, setProducts] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const fetchProducts = useCallback((currentPage, searchQuery = '') => {
    setIsLoading(true);
    const limit = 12;
    const skip = currentPage * limit;
    let url;

    if (searchQuery) {
      url = `https://dummyjson.com/products/search?q=${searchQuery}&limit=${limit}&skip=${skip}`;
    } else {
      url = `https://dummyjson.com/products?limit=${limit}&skip=${skip}`;
    }

    fetch(url)
      .then(res => res.json())
      .then(data => {
        setProducts(data.products);
        setPageCount(Math.ceil(data.total / limit));
      })
      .catch(error => console.error('Error fetching products:', error))
      .finally(() => setIsLoading(false));
  }, [setIsLoading]);

  useEffect(() => {
    fetchProducts(currentPage, searchQuery);
  }, [currentPage, searchQuery, fetchProducts]);

  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
  };

  const handleAddProduct = () => {
    navigate('/add-product');
  };

  const handleDeleteProduct = (productId) => {
    const onConfirm = () => {
      fetch(`https://dummyjson.com/products/${productId}`, {
        method: 'DELETE'
      })
        .then(res => res.json())
        .then(() => {
          setProducts(products.filter(product => product.id !== productId));
          notifySuccess('Item deleted successfully');
        })
        .catch(error => {
          console.error('Error deleting product:', error);
          notifyError('Failed to delete item');
        });
    };

    const onCancel = () => {
      console.log('Deletion cancelled');
    };

    Alert({ onConfirm, onCancel });
  };

  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      fetchProducts(0, searchQuery);
    }
  };

  const handleBuyNow = (productId) => {
    navigate(`/products/product-detail/${productId}`);
  };

  return (
    <Layoutdesign>
      <div className="products-container">
        <div className="products-header">
          <h1 className="products-title">Products</h1>
          <div className="search-add-container">
            <div className="search-container">
              <i className="fas fa-search search-icon"></i>
              <input
                type="search"
                className="search-input"
                placeholder="Search"
                aria-label="Search"
                aria-describedby="search-addon"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={handleSearch}
              />
            </div>
            <button className="add-product-button" onClick={handleAddProduct}>Add Products</button>
          </div>
        </div>
        <div className="product-list">
          {isLoading ? <Loader /> : products.map((product) => (
            <Card
              key={product.id}
              title={product.title}
              description={product.description}
              buttonText="Buy Now"
              image={product.thumbnail}
              onDelete={() => handleDeleteProduct(product.id)}
              onButtonClick={() => handleBuyNow(product.id)}
              onAddToCart={() => dispatch(addToCart({ id: product.id, title: product.title, price: product.price, quantity: 1 }))}
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
      <Toast />
    </Layoutdesign>
  );
};

export default withLoader(Products);
