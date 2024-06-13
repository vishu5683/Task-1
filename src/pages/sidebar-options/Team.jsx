import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteAddress } from '../../containers/reducer/cartSlice';
import Layoutdesign from '../Layout/Layoutdesign';
import { Card, CardContent, Typography, IconButton, Button, Container, Grid, Box } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import "../../Styles/addressList.css";

const AddressList = () => {
  const savedAddresses = useSelector((state) => state.cart.savedAddresses);
  const dispatch = useDispatch();

  const handleDelete = (addressId) => {
    dispatch(deleteAddress(addressId));
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
          >
            Add New Address
          </Button>
        </Box>
        <Grid container spacing={3} className="address-cards">
          {savedAddresses.map((address) => (
            <Grid item xs={12} sm={6} md={4} key={address.id}>
              <Card className="address-card">
                <CardContent>
                  <Typography variant="h6">{address.name}</Typography>
                  <Typography>{address.street}</Typography>
                  <Typography>{`${address.city}, ${address.state}, ${address.zip}`}</Typography>
                  <Typography>{address.country}</Typography>
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
