import React from 'react';
import { useNavigate, useLocation, } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../containers/auth/authSlice';
import { notifySuccess } from '../components/Toast';
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import CategoryIcon from '@mui/icons-material/Category';
import ProductsIcon from '@mui/icons-material/Store';
import ViewListIcon from '@mui/icons-material/ViewList';  // Changed Icon for View Orders
import HomeIcon from '@mui/icons-material/Home';          // Changed Icon for Addresses
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';  // Changed Icon for Wallet
import PersonIcon from '@mui/icons-material/Person';      // Changed Icon for Profile
import LogoutIcon from '@mui/icons-material/Logout';
import "../Styles/sidebar.css";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname.startsWith(path);
  };

  const handleNavigation = (path) => {
    navigate(path);
    if (isOpen) {
      toggleSidebar();
    }
  };

  const handleLogout = () => {
    dispatch(logout());
    notifySuccess('Logout successful!');
    navigate('/');
    if (isOpen) {
      toggleSidebar();
    }
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <List component="nav" className="list-group">
        <ListItem
          button
          onClick={() => handleNavigation('/products')}
          selected={isActive('/products')}
        >
          <ListItemIcon>
            <ProductsIcon className="sidebar-icon" />
          </ListItemIcon>
          {isOpen && <ListItemText className="list-item-text" primary="Products" />}
        </ListItem>
        <ListItem
          button
          onClick={() => handleNavigation('/products/categories')}
          selected={isActive('/products/categories')}
        >
          <ListItemIcon>
            <CategoryIcon className="sidebar-icon" />
          </ListItemIcon>
          {isOpen && <ListItemText className="list-item-text" primary="Categories" />}
        </ListItem>
       
        <ListItem
          button
          onClick={() => handleNavigation('/view-orders')}
          selected={isActive('/view-orders')}
        >
          <ListItemIcon>
            <ViewListIcon className="sidebar-icon" />
          </ListItemIcon>
          {isOpen && <ListItemText className="list-item-text" primary="View Orders" />}
        </ListItem>
        <ListItem
          button
          onClick={() => handleNavigation('/Address-List')}
          selected={isActive('/Address-List')}
        >
          <ListItemIcon>
            <HomeIcon className="sidebar-icon" />
          </ListItemIcon>
          {isOpen && <ListItemText className="list-item-text" primary="Manage Addresses" />}
        </ListItem>
        <ListItem
          button
          onClick={() => handleNavigation('/wallet')}
          selected={isActive('/wallet')}
        >
          <ListItemIcon>
            <AccountBalanceWalletIcon className="sidebar-icon" />
          </ListItemIcon>
          {isOpen && <ListItemText className="list-item-text" primary="Wallet" />}
        </ListItem>
        <ListItem
          button
          onClick={() => handleNavigation('/profile')}
          selected={isActive('/profile')}
        >
          <ListItemIcon>
            <PersonIcon className="sidebar-icon" />
          </ListItemIcon>
          {isOpen && <ListItemText className="list-item-text" primary="Profile" />}
        </ListItem>
        <ListItem
          button
          onClick={() => handleNavigation('/dashbo')}
          selected={isActive('/dashbo')}
        >
          <ListItemIcon>
            <DashboardIcon className="sidebar-icon" />
          </ListItemIcon>
          {isOpen && <ListItemText className="list-item-text" primary="Customer Support" />}
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
