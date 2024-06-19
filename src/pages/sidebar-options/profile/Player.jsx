import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import {  Typography, Avatar, Button, Select, MenuItem, InputLabel, FormControl, Grid, Container, Paper } from '@mui/material';
import { styled } from '@mui/system';
import Layoutdesign from '../../Layout/Layoutdesign';
import '../../../Styles/profile.css';

const ProfileContainer = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  marginTop: theme.spacing(4),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}));

const ProfileContent = styled(Grid)(({ theme }) => ({
  marginTop: theme.spacing(2),
}));

const Profile = () => {
  const auth = useSelector((state) => state.auth) || {};

  const [profilePic, setProfilePic] = useState(auth.profilePic || '');
  const [gender, setGender] = useState(auth.gender || 'Male');

  const handleProfilePicChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setProfilePic(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <Layoutdesign>
      <Container maxWidth="sm">
        <ProfileContainer elevation={3}>
          <Typography variant="h4" component="h1">Profile</Typography>
          <ProfileContent container spacing={3}>
            <Grid item xs={12} md={4} container direction="column" alignItems="center">
              <Avatar src={profilePic || 'https://via.placeholder.com/150'} alt="Profile" sx={{ width: 150, height: 150 }} />
              <Button variant="contained" component="label" sx={{ mt: 2 }}>
                Upload Photo
                <input type="file" accept="image/*" hidden onChange={handleProfilePicChange} />
              </Button>
            </Grid>
            <Grid item xs={12} md={8}>
              <Typography variant="body1"><strong>Name:</strong> {auth.username || 'N/A'}</Typography>
              <Typography variant="body1"><strong>Email:</strong> {auth.email || 'N/A'}</Typography>
              <Typography variant="body1"><strong>Phone:</strong> {auth.phoneNumber || 'N/A'}</Typography>
              <FormControl fullWidth sx={{ mt: 2 }}>
                <InputLabel id="gender-select-label">Gender</InputLabel>
                <Select
                  labelId="gender-select-label"
                  value={gender}
                  label="Gender"
                  onChange={(e) => setGender(e.target.value)}
                >
                  <MenuItem value="Male">Male</MenuItem>
                  <MenuItem value="Female">Female</MenuItem>
                  <MenuItem value="Other">Other</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </ProfileContent>
        </ProfileContainer>
      </Container>
    </Layoutdesign>
  );
};

export default Profile;
