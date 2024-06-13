// src/components/Address.jsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { saveAddress } from '../containers/reducer/cartSlice';
import { notifySuccess } from '../components/Toast'; // Importing notifySuccess from the Toast component
import '../Styles/address.css';
import Layoutdesign from '../pages/Layout/Layoutdesign';

const Address = () => {
  const [address, setAddress] = useState({
    name: '',
    street: '',
    city: '',
    state: '',
    zip: '',
    country: ''
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddress(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSaveAndProceed = (e) => {
    e.preventDefault();
    dispatch(saveAddress(address));
    notifySuccess('Address saved successfully');
    navigate('/payment');
  };

  const handleSelectAddress = (selectedAddress) => {
    setAddress(selectedAddress);
  };

  // Placeholder for retrieving saved addresses
  const savedAddress = {
    name: 'John Doe',
    street: '123 Main St',
    city: 'City',
    state: 'State',
    zip: '12345',
    country: 'Country'
  };

  return (
    <Layoutdesign>
      <div className="address-container">
        <h1 className="address-title">Shipping Address</h1>
        <form className="address-form" onSubmit={handleSaveAndProceed}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={address.name}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="street"
            placeholder="Street Address"
            value={address.street}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="city"
            placeholder="City"
            value={address.city}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="state"
            placeholder="State"
            value={address.state}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="zip"
            placeholder="ZIP Code"
            value={address.zip}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="country"
            placeholder="Country"
            value={address.country}
            onChange={handleChange}
            required
          />
          <button type="submit" className="save-address-button">Save Address and Proceed to Payment</button>
        </form>
        <div className="address-options">
          <button className="select-address-button" onClick={() => handleSelectAddress(savedAddress)}>Select Address</button>
        </div>
      </div>
    </Layoutdesign>
  );
};

export default Address;
