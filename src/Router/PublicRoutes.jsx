import React from 'react';
import { Navigate } from 'react-router-dom';

const PublicRoutes = ({ children }) => {
  const isLoggedIn = localStorage.getItem('isLoggedIn');

  return !isLoggedIn ? children : <Navigate to="/dashboard" />;
}

export default PublicRoutes;
