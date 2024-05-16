import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./Dash.css";

const Sidebar = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    navigate('/');
  };

  return (
    <div className="sidebar">
      <div className="list-group">
        <button onClick={() => handleNavigation('/game-management')} className="list-group-item list-group-item-action">Game Management</button>
        <button onClick={() => handleNavigation('/event-management')} className="list-group-item list-group-item-action">Event Management</button>
        <button onClick={() => handleNavigation('/dashbo')} className="list-group-item list-group-item-action">Dashboard</button>
        <button onClick={() => handleNavigation('/view')} className="list-group-item list-group-item-action">View</button>
        <button onClick={() => handleNavigation('/team')} className="list-group-item list-group-item-action">Team Creation View</button>
        <button onClick={() => handleNavigation('/game-update')} className="list-group-item list-group-item-action">Games update</button>
        <button onClick={() => handleNavigation('/player')} className="list-group-item list-group-item-action">Player</button>
      </div>
      <button onClick={handleLogout} className="logout-button">Logout</button>
    </div>
  );
}

export default Sidebar;
