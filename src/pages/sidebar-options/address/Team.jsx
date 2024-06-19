// src/components/AddressList.jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteAddress, setDefaultAddress } from '../../../containers/reducer/addressSlice';
import Layoutdesign from '../../Layout/Layoutdesign';
import { Card, CardContent, Typography, IconButton, Button, Container, Grid, Box } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import "../../../Styles/addressList.css";

const AddressList = () => {
  const savedAddresses = useSelector((state) => state.address.savedAddresses);
  const defaultAddressId = useSelector((state) => state.address.defaultAddressId);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDelete = (addressId) => {
    dispatch(deleteAddress(addressId));
  };

  const handleSetDefault = (addressId) => {
    dispatch(setDefaultAddress(addressId));
  };

  const handleAddNewAddress = () => {
    navigate('/address');
  };

  return (
    <Layoutdesign>
      <Container className="address-list-container">
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
          <Typography variant="h4" className="address-list-title" gutterBottom>
            Saved Addresses
          </Typography>
          <Button 
            variant="contained" 
            color="primary" 
            startIcon={<AddIcon />} 
            className="add-address-button"
            onClick={handleAddNewAddress}
          >
            Add New Address
          </Button>
        </Box>
        <Grid container spacing={3} className="address-cards">
          {savedAddresses.map((address) => (
            <Grid item xs={12} sm={6} md={4} key={address.id}>
              <Card className={`address-card ${address.id === defaultAddressId ? 'default-address-card' : ''}`}>
                <CardContent>
                  <Typography variant="h6">{address.name}</Typography>
                  <Typography>{address.street}</Typography>
                  <Typography>{`${address.city}, ${address.state}, ${address.zip}`}</Typography>
                  <Typography>{address.country}</Typography>
                  <Button
                    variant="outlined"
                    color="primary"
                    onClick={() => handleSetDefault(address.id)}
                    className="set-default-button"
                  >
                    {address.id === defaultAddressId ? 'Default Address' : 'Set as Default'}
                  </Button>
                </CardContent>
                <IconButton
                  color="secondary"
                  onClick={() => handleDelete(address.id)}
                  className="delete-address-button"
                >
                  <DeleteIcon />
                </IconButton>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Layoutdesign>
  );
};

export default AddressList;
