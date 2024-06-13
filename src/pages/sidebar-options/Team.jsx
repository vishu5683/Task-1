import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteAddress } from '../../containers/reducer/cartSlice';
import "../../Styles/addressList.css";
import Layoutdesign from '../Layout/Layoutdesign';

const AddressList = () => {
  const savedAddresses = useSelector((state) => state.cart.savedAddresses);
  const dispatch = useDispatch();

  const handleDelete = (addressId) => {
    dispatch(deleteAddress(addressId));
  };

  return (
    <Layoutdesign>
      <div className="address-list-container">
        <h2 className="address-list-title">Saved Addresses</h2>
        <div className="address-cards">
          {savedAddresses.map((address) => (
            <div key={address.id} className="address-card">
              <div className="address-details">
                <div>{address.name}</div>
                <div>{address.street}</div>
                <div>{address.city}, {address.state}, {address.zip}</div>
                <div>{address.country}</div>
              </div>
              <button className="delete-address-button" onClick={() => handleDelete(address.id)}>Delete</button>
            </div>
          ))}
        </div>
      </div>
    </Layoutdesign>
  );
};

export default AddressList;
