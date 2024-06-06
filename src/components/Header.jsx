import React from 'react';
import "./Dash.css";
import { MdHeadphones } from "react-icons/md";
import { useSelector } from 'react-redux';

const Header = () => {
  const auth = useSelector((state) => state.auth);

  return (
    <div>
      <header className="header">
        <div className="logo">Logo</div>
        {auth.username && (
          <div className="user-info">
            <span>{auth.username}</span>
            <span>{auth.phoneNumber}</span> {/* Display phoneNumber */}
            <span>{auth.email}</span>
          </div>
        )}
        <MdHeadphones className="icon" />
      </header>
    </div>
  );
};

export default Header;
