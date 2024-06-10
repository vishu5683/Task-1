import React from 'react';
import "./Dash.css";
import { MdHeadphones } from "react-icons/md";
import { useSelector } from 'react-redux';
import { FaBars } from "react-icons/fa";
import { useNavigate } from 'react-router-dom'; 

const Header = ({ toggleSidebar }) => {
  const navigate = useNavigate(); 
  const auth = useSelector((state) => state.auth);

  return (
    <div>
      <header className="header">
        <div className="logo-container">
          <FaBars className="hamburger-icon" onClick={toggleSidebar} /> 
          <span onClick={() => navigate('/Dashboard')} className="logo">Logo</span>
        </div>
        {auth.username && (
          <div className="user-info">
            <span>{auth.username}</span>
            <span>{auth.phoneNumber}</span>
            <span>{auth.email}</span>
          </div>
        )}
        <MdHeadphones className="icon" />
      </header>
    </div>
  );
};

export default Header;
