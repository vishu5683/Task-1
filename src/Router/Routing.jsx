import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ForgotPassword from "../pages/login/ForgotPassword";
import Dashboard from '../pages/Dashboard';
import Products from '../pages/sidebar-options/products/Products';
import Gameup from '../pages/sidebar-options/wallet/Gameup';
import Player from '../pages/sidebar-options/profile/Player';
import Team from '../pages/sidebar-options/address/Team';
import Dashbo from '../pages/sidebar-options/customer support/Dashbo';
import View1 from '../pages/sidebar-options/orders/View1';
import LoginUi from '../pages/login/LoginUi';
import TestFirebase from '../pages/TestFirebase';
import PrivateRoutes from './PrivateRoutes';
import PublicRoutes from './PublicRoutes';
import ProductDetails from '../components/ProductDetails';
import Toast from '../components/Toast'; 
import AddProduct from '../pages/sidebar-options/products/AddProduct';
import Categories from '../components/Categories';
import CategoryDetails from '../components/CategoryDetails';
import EditProductPage from '../pages/EditProductPage';
import Cart from '../components/Cart'; 
import Address from '../pages/Address';
import PaymentPage from '../pages/PaymentPage';
import Chatbot from '../pages/Chatbot';
import EventManagement from '../pages/sidebar-options/Categories/EventMangement';

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
        <Route path="/products/categories" element={<PrivateRoutes><EventManagement /></PrivateRoutes>} />
        <Route path="/wallet" element={<PrivateRoutes><Gameup /></PrivateRoutes>} />
        <Route path="/profile" element={<PrivateRoutes><Player /></PrivateRoutes>} />
        <Route path="/Address-List" element={<PrivateRoutes><Team /></PrivateRoutes>} />
        <Route path="/dashbo" element={<PrivateRoutes><Dashbo /></PrivateRoutes>} />
        <Route path="/view-orders" element={<PrivateRoutes><View1 /></PrivateRoutes>} />
        <Route path="/add-product" element={<PrivateRoutes><AddProduct /></PrivateRoutes>} />
        <Route path="/categories" element={<PrivateRoutes><Categories /></PrivateRoutes>} />
        <Route path="/category/:category" element={<PrivateRoutes><CategoryDetails /></PrivateRoutes>} />
        <Route path="/test-firebase" element={<PublicRoutes><TestFirebase /></PublicRoutes>} /> 
        <Route path="/edit-product/:id" element={<PrivateRoutes><EditProductPage /></PrivateRoutes>} />
        <Route path="/cart" element={<PrivateRoutes><Cart /></PrivateRoutes>} /> 
        <Route path="/address" element={<PrivateRoutes><Address /></PrivateRoutes>} />
        <Route path="/payment" element={<PrivateRoutes><PaymentPage /></PrivateRoutes>} />
        <Route path="/chatbot" element={<PrivateRoutes><Chatbot /></PrivateRoutes>} />

      </Routes>
    </BrowserRouter>
  );
}

export default Routing;
