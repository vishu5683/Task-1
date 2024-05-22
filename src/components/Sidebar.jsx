import React from 'react';
import { useNavigate, useMatch } from 'react-router-dom';
import "./Dash.css";

const Sidebar = () => {
  const navigate = useNavigate();

  const matchProducts = useMatch('/products');
  const matchProductDetail = useMatch('/product-detail/:id');
  const matchEventManagement = useMatch('/event-management');
  const matchDashboard = useMatch('/dashbo');
  const matchView = useMatch('/view');
  const matchTeam = useMatch('/team');
  const matchGameUpdate = useMatch('/game-update');
  const matchPlayer = useMatch('/player');

  const handleNavigation = (path) => {
    navigate(path);
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate('/');
  };

  return (
    <div className="sidebar">
      <div className="list-group">
        <button 
          onClick={() => handleNavigation('/products')} 
          className={`list-group-item list-group-item-action ${(matchProducts || matchProductDetail) ? 'active' : ''}`}
        >
          Products
        </button>
        <button 
          onClick={() => handleNavigation('/event-management')} 
          className={`list-group-item list-group-item-action ${matchEventManagement ? 'active' : ''}`}
        >
          Event Management
        </button>
        <button 
          onClick={() => handleNavigation('/dashbo')} 
          className={`list-group-item list-group-item-action ${matchDashboard ? 'active' : ''}`}
        >
          Dashboard
        </button>
        <button 
          onClick={() => handleNavigation('/view')} 
          className={`list-group-item list-group-item-action ${matchView ? 'active' : ''}`}
        >
          View
        </button>
        <button 
          onClick={() => handleNavigation('/team')} 
          className={`list-group-item list-group-item-action ${matchTeam ? 'active' : ''}`}
        >
          Team Creation View
        </button>
        <button 
          onClick={() => handleNavigation('/game-update')} 
          className={`list-group-item list-group-item-action ${matchGameUpdate ? 'active' : ''}`}
        >
          Games update
        </button>
        <button 
          onClick={() => handleNavigation('/player')} 
          className={`list-group-item list-group-item-action ${matchPlayer ? 'active' : ''}`}
        >
          Player
        </button>
      </div>
      <button onClick={handleLogout} className="logout-button">Logout</button>
    </div>
  );
}

export default Sidebar;
