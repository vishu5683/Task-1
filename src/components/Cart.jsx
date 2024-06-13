import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { incrementQuantity, decrementQuantity, removeItem, clearCart } from '../containers/reducer/cartSlice';
import '../Styles/cart.css';
import Layoutdesign from '../pages/Layout/Layoutdesign';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleBuyNow = () => {
    navigate('/address');
  };

  // Calculate total amount
  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <Layoutdesign>
      <div className="cart-container">
        <h1 className="cart-title">Shopping Cart</h1>
        <div className="cart-content">
          {cartItems.length > 0 ? (
            <>
              <ul className="cart-items">
                {cartItems.map((item, index) => (
                  <li key={index} className="cart-item">
                    <div className="item-info">
                      <div className="item-details">
                        <h2 className="item-title">{item.title}</h2>
                        <p className="item-price">${item.price} x {item.quantity}</p>
                        <div className="quantity-controls">
                          <button onClick={() => dispatch(decrementQuantity(item.id))}>-</button>
                          <span>{item.quantity}</span>
                          <button onClick={() => dispatch(incrementQuantity(item.id))}>+</button>
                        </div>
                      </div>
                    </div>
                    <button className="remove-button" onClick={() => dispatch(removeItem(item.id))}>Remove</button>
                  </li>
                ))}
              </ul>
              <div className="cart-total">
                <h2>Total Amount: ${totalAmount.toFixed(2)}</h2>
              </div>
              <div className="cart-actions">
                <button className="buy-now-button" onClick={handleBuyNow}>Buy Now</button>
                <button className="clear-cart-button" onClick={() => dispatch(clearCart())}>Empty Cart</button>
              </div>
            </>
          ) : (
            <p className="empty-cart">Your cart is empty.</p>
          )}
        </div>
      </div>
    </Layoutdesign>
  );
};

export default Cart;
