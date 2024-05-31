import React from 'react';
import { useNavigate, useMatch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../containers/auth/authSlice';
import "./Dash.css";
import Toast, { notifySuccess } from '../components/Toast';

const Sidebar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth); 

  const matchProducts = useMatch('/products');
  const matchProductDetail = useMatch('/products/product-detail/:id');
  const matchEventManagement = useMatch('/products/categories');
  const matchDashboard = useMatch('/dashbo');
  const matchView = useMatch('/view');
  const matchTeam = useMatch('/team');
  const matchGameUpdate = useMatch('/game-update');
  const matchPlayer = useMatch('/player');
  const matchAddProduct = useMatch('/add-product');

  const handleNavigation = (path) => {
    navigate(path);
  };

  const handleLogout = () => {
    console.log('Redux State before logout:', auth); 
    dispatch(logout());
    console.log('Redux State after logout:', auth);
    notifySuccess('Logout successful!');
    navigate('/');
  };

  return (
    <div className="sidebar">
      <Toast />
      <div className="list-group">
        <button 
          onClick={() => handleNavigation('/products')} 
          className={`list-group-item list-group-item-action ${(matchProducts || matchProductDetail || matchAddProduct) ? 'active' : ''}`}
        >
          Products
        </button>
        <button 
          onClick={() => handleNavigation('/products/categories')} 
          className={`list-group-item list-group-item-action ${matchEventManagement ? 'active' : ''}`}
        >
          Categories
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
};

export default Sidebar;
