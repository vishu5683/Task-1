// src/components/Address.jsx
import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { saveAddress } from '../containers/reducer/cartSlice';
import { notifySuccess } from '../components/Toast';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import '../Styles/address.css';
import Layoutdesign from '../pages/Layout/Layoutdesign';

const containerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: -3.745,
  lng: -38.523
};

const Address = () => {
  const [address, setAddress] = useState({
    name: '',
    street: '',
    city: '',
    state: '',
    zip: '',
    country: ''
  });
  const [marker, setMarker] = useState(center);
  const [showMap, setShowMap] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'YOUR_GOOGLE_MAPS_API_KEY' // Replace with your Google Maps API key
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddress(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSaveAndProceed = (e) => {
    e.preventDefault();
    dispatch(saveAddress({ ...address, location: marker }));
    notifySuccess('Address saved successfully');
    navigate('/payment');
  };

  const handleSelectAddress = (selectedAddress) => {
    setAddress(selectedAddress);
  };

  const onMapClick = useCallback((event) => {
    setMarker({ lat: event.latLng.lat(), lng: event.latLng.lng() });
  }, []);

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
        {showMap ? (
          <>
            <div className="map-container">
              {isLoaded ? (
                <GoogleMap
                  mapContainerStyle={containerStyle}
                  center={marker}
                  zoom={10}
                  onClick={onMapClick}
                >
                  <Marker position={marker} />
                </GoogleMap>
              ) : (
                <div>Loading map...</div>
              )}
            </div>
            <div className="address-options">
              <button
                className="enter-address-manually-button"
                onClick={() => setShowMap(false)}
              >
                Enter Address Manually
              </button>
            </div>
          </>
        ) : (
          <>
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
              <button
                className="select-address-button"
                onClick={() => handleSelectAddress(savedAddress)}
              >
                Select Saved Address
              </button>
              <button
                className="back-to-map-button"
                onClick={() => setShowMap(true)}
              >
                Back to Map
              </button>
            </div>
          </>
        )}
      </div>
    </Layoutdesign>
  );
};

export default Address;