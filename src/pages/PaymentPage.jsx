import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { notifySuccess } from '../components/Toast';
import { addOrder } from '../containers/reducer/OrderSilce';
import { clearCart } from '../containers/reducer/cartSlice';
import { deductMoney } from '../containers/reducer/walletSlice';
import Layoutdesign from '../pages/Layout/Layoutdesign';
import '../Styles/payment.css';

const Payment = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.items);
  const address = useSelector((state) => state.cart.address);
  const wallet = useSelector((state) => state.wallet);
  const [paymentMethod, setPaymentMethod] = useState('');

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleConfirmPayment = () => {
    if (!paymentMethod) {
      alert('Please select a payment method');
      return;
    }

    if (paymentMethod === 'Wallet') {
      if (total > wallet.balance) {
        alert('Insufficient balance in wallet');
        return;
      }
      dispatch(deductMoney(total));
    }

    const orderId = Date.now();
    const newOrder = {
      id: orderId,
      items: cartItems,
      address,
      total,
      status: 'Pending',
      paymentMethod,
    };

    dispatch(addOrder(newOrder));
    dispatch(clearCart());
    notifySuccess('Payment successful. Order placed!');
    navigate('/view-orders');
  };

  const renderPaymentDetails = () => {
    switch (paymentMethod) {
      case 'Wallet':
        return <div className="wallet-details">Balance: ₹{wallet.balance}</div>;
      case 'UPI':
        return (
          <div className="upi-details">
            <label htmlFor="upi-id">UPI ID:</label>
            <input type="text" id="upi-id" placeholder="Enter your UPI ID" />
          </div>
        );
      case 'Card':
        return (
          <div className="card-details">
            <label htmlFor="card-number">Card Number:</label>
            <input type="text" id="card-number" placeholder="Enter card number" />
            <label htmlFor="expiry-date">Expiry Date:</label>
            <input type="text" id="expiry-date" placeholder="MM/YY" />
            <label htmlFor="cvv">CVV:</label>
            <input type="text" id="cvv" placeholder="CVV" />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <Layoutdesign>
      <div className="payment-container">
        <h1 className="payment-title">Payment</h1>
        <div className="payment-details">
          <div className="payment-summary">
            <h2>Order Summary</h2>
            <div>
              {cartItems.map(item => (
                <div key={item.id}>
                  {item.title} - ${item.price} x {item.quantity}
                </div>
              ))}
            </div>
            <h3>Total: ${total.toFixed(2)}</h3>
          </div>
          <div className="payment-methods">
            <h2>Payment Methods</h2>
            <div className="payment-method-option">
              <input
                type="radio"
                id="wallet"
                name="paymentMethod"
                value="Wallet"
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              <label htmlFor="wallet">Pay via Wallet</label>
            </div>
            <div className="payment-method-option">
              <input
                type="radio"
                id="upi"
                name="paymentMethod"
                value="UPI"
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              <label htmlFor="upi">Pay via UPI</label>
            </div>
            <div className="payment-method-option">
              <input
                type="radio"
                id="card"
                name="paymentMethod"
                value="Card"
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              <label htmlFor="card">Pay via Card</label>
            </div>
          </div>
          <div className="payment-method-details">
            {renderPaymentDetails()}
          </div>
        </div>
        <div className="payment-actions">
          <button className="confirm-payment-button" onClick={handleConfirmPayment}>Confirm Payment</button>
          <button className="cancel-payment-button" onClick={() => navigate('/cart')}>Cancel</button>
        </div>
      </div>
    </Layoutdesign>
  );
};

export default Payment;
