import React from 'react';
import "./Dash.css";
import { useSelector } from 'react-redux';
import { FaBars } from "react-icons/fa";
import { useNavigate } from 'react-router-dom'; 
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Header = ({ toggleSidebar }) => {
  const navigate = useNavigate(); 
  const auth = useSelector((state) => state.auth);
  const cartItems = useSelector((state) => state.cart?.items || []);

  const cartItemCount = cartItems.length;

  return (
    <div>
      <header className="header">
        <div className="logo-container">
          <FaBars className="hamburger-icon" onClick={toggleSidebar} /> 
          <span onClick={() => navigate('/dashboard')} className="logo">Logo</span>
        </div>
        {auth.username && (
          <div className="user-info">
            <span>{auth.username}</span>
            <span>{auth.phoneNumber}</span>
            <span>{auth.email}</span>
          </div>
        )}
        <div className="icons-container">
          <div className="cart-icon-container" onClick={() => navigate('/products/cart')}>
            <ShoppingCartIcon className="icon" /> 
            {cartItemCount > 0 && <span className="cart-counter">{cartItemCount}</span>}
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
