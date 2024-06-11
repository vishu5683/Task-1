import React from 'react';
import { useNavigate, useMatch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../containers/auth/authSlice';
import { notifySuccess } from '../components/Toast';
import { List, ListItem, ListItemIcon, ListItemText} from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import CategoryIcon from '@mui/icons-material/Category';
import ProductsIcon from '@mui/icons-material/Store';
import ViewIcon from '@mui/icons-material/Visibility';
import TeamIcon from '@mui/icons-material/Group';
import GameUpdateIcon from '@mui/icons-material/SportsEsports';
import PlayerIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import "../Styles/sidebar.css"; // Ensure this path is correct

const Sidebar = ({ isOpen, toggleSidebar }) => {
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
    toggleSidebar(); // Close sidebar on navigation
  };

  const handleLogout = () => {
    console.log('Redux State before logout:', auth);
    dispatch(logout());
    console.log('Redux State after logout:', auth);
    notifySuccess('Logout successful!');
    navigate('/');
    toggleSidebar(); // Close sidebar on logout
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <List component="nav" className="list-group">
        <ListItem
          button
          onClick={() => handleNavigation('/products')}
          selected={matchProducts || matchProductDetail || matchAddProduct}
        >
          <ListItemIcon >
            <ProductsIcon className="sidebar-icon" />
          </ListItemIcon>
          {isOpen && <ListItemText className="list-item-text" primary="Products" />}
        </ListItem>
        <ListItem
          button
          onClick={() => handleNavigation('/products/categories')}
          selected={matchEventManagement}
        >
          <ListItemIcon>
            <CategoryIcon className="sidebar-icon" />
          </ListItemIcon>
          {isOpen && <ListItemText className="list-item-text" primary="Categories" />}
        </ListItem>
        <ListItem
          button
          onClick={() => handleNavigation('/dashbo')}
          selected={matchDashboard}
        >
          <ListItemIcon>
            <DashboardIcon className="sidebar-icon" />
          </ListItemIcon>
          {isOpen && <ListItemText className="list-item-text" primary="Dashboard" />}
        </ListItem>
        <ListItem
          button
          onClick={() => handleNavigation('/view')}
          selected={matchView}
        >
          <ListItemIcon>
            <ViewIcon className="sidebar-icon" />
          </ListItemIcon>
          {isOpen && <ListItemText className="list-item-text" primary="View" />}
        </ListItem>
        <ListItem
          button
          onClick={() => handleNavigation('/team')}
          selected={matchTeam}
        >
          <ListItemIcon>
            <TeamIcon className="sidebar-icon" />
          </ListItemIcon>
          {isOpen && <ListItemText className="list-item-text" primary="Team Creation View" />}
        </ListItem>
        <ListItem
          button
          onClick={() => handleNavigation('/game-update')}
          selected={matchGameUpdate}
        >
          <ListItemIcon>
            <GameUpdateIcon className="sidebar-icon" />
          </ListItemIcon>
          {isOpen && <ListItemText className="list-item-text" primary="Games Update" />}
        </ListItem>
        <ListItem
          button
          onClick={() => handleNavigation('/player')}
          selected={matchPlayer}
        >
          <ListItemIcon>
            <PlayerIcon className="sidebar-icon" />
          </ListItemIcon>
          {isOpen && <ListItemText className="list-item-text" primary="Player" />}
        </ListItem>
      </List>
      <hr className="sidebar-divider" />
      <ListItem
        button
        onClick={handleLogout}
        className="logout-button"
      >
        <ListItemIcon>
          <LogoutIcon className="sidebar-icon" />
        </ListItemIcon>
        {isOpen && <ListItemText className="list-item-text" primary="Logout" />}
      </ListItem>
    </div>
  );
};

export default Sidebar;
