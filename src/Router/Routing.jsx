import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginUi from '../components/LoginUi';
import ForgotPassword from "../pages/ForgotPassword";
import Dashboard from '../components/Dashboard';

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<LoginUi />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/dashboard" element={<Dashboard/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default Routing;
