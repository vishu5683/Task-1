import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ForgotPassword from "../pages/ForgotPassword";
import Dashboard from '../pages/Dashboard';
import Products from '../pages/sidebar-options/Products';
import Gameup from '../pages/sidebar-options/Gameup';
import Player from '../pages/sidebar-options/Player';
import Team from '../pages/sidebar-options/Team';
import EventMangement from '../pages/sidebar-options/EventMangement';
import Dashbo from '../pages/sidebar-options/Dashbo';
import View1 from '../pages/sidebar-options/View1';
import LoginUi from '../pages/LoginUi';
import PrivateRoutes from './PrivateRoutes';
import PublicRoutes from './PublicRoutes';
import ProductDetails from '../components/ProductDetails';
import Toast from '../components/Toast'; 
import AddProduct from '../pages/AddProduct';
import Categories from '../components/Categories';
import CategoryDetails from '../components/CategoryDetails';

const Routing = () => {
  return (
    <BrowserRouter>
      <Toast />
      <Routes>
        <Route path="/" element={<PublicRoutes><LoginUi /></PublicRoutes>} />
        <Route path="/forgot-password" element={<PublicRoutes><ForgotPassword /></PublicRoutes>} />
        <Route path="/dashboard" element={<PrivateRoutes><Dashboard /></PrivateRoutes>} />
        <Route path="/products" element={<PrivateRoutes><Products /></PrivateRoutes>} />
        <Route path="/products/product-detail/:id" element={<PrivateRoutes><ProductDetails /></PrivateRoutes>} /> 
        <Route path="/products/categories" element={<PrivateRoutes><EventMangement /></PrivateRoutes>} />
        <Route path="/game-update" element={<PrivateRoutes><Gameup /></PrivateRoutes>} />
        <Route path="/player" element={<PrivateRoutes><Player /></PrivateRoutes>} />
        <Route path="/team" element={<PrivateRoutes><Team /></PrivateRoutes>} />
        <Route path="/dashbo" element={<PrivateRoutes><Dashbo /></PrivateRoutes>} />
        <Route path="/view" element={<PrivateRoutes><View1 /></PrivateRoutes>} />
        <Route path="/add-product" element={<PrivateRoutes><AddProduct /></PrivateRoutes>} />
        <Route path="/categories" element={<PrivateRoutes><Categories /></PrivateRoutes>} />
        <Route path="/category/:category" element={<PrivateRoutes><CategoryDetails /></PrivateRoutes>} />
      </Routes>
    </BrowserRouter>
  );
}

export default Routing;
