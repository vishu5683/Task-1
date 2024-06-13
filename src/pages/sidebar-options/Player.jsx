import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import '../../Styles/profile.css';
import Layoutdesign from '../Layout/Layoutdesign';

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
      <div className="profile-container">
        <h1>Profile</h1>
        <div className="profile-content">
          <div className="profile-pic-section">
            <img src={profilePic || 'https://via.placeholder.com/150'} alt="Profile" className="profile-pic" />
            <input type="file" accept="image/*" onChange={handleProfilePicChange} className="profile-pic-input" />
          </div>
          <div className="profile-details">
            <p><strong>Name:</strong> {auth.username || 'N/A'}</p>
            <p><strong>Email:</strong> {auth.email || 'N/A'}</p>
            <p><strong>Phone:</strong> {auth.phoneNumber || 'N/A'}</p>
            <p><strong>Gender:</strong></p>
            <select value={gender} onChange={(e) => setGender(e.target.value)} className="gender-select">
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>
      </div>
    </Layoutdesign>
  );
};

export default Profile;
