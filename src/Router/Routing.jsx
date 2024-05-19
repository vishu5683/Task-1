import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ForgotPassword from "../pages/ForgotPassword";
import Dashboard from '../pages/Dashboard';
import GameManagement from '../pages/sidebar-options/GameManagement';
import Gameup from '../pages/sidebar-options/Gameup';
import Player from '../pages/sidebar-options/Player';
import Team from '../pages/sidebar-options/Team';
import EventMangement from '../pages/sidebar-options/EventMangement';
import Dashbo from '../pages/sidebar-options/Dashbo';
import View1 from '../pages/sidebar-options/View1';
import LoginUi from '../pages/LoginUi';
import PrivateRoutes from './PrivateRoutes';
import PublicRoutes from './PublicRoutes';

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PublicRoutes><LoginUi /></PublicRoutes>} />
        <Route path="/forgot-password" element={<PublicRoutes><ForgotPassword /></PublicRoutes>} />
        <Route path="/dashboard" element={<PrivateRoutes><Dashboard /></PrivateRoutes>} />
        <Route path="/game-management" element={<PrivateRoutes><GameManagement /></PrivateRoutes>} />
        <Route path="/event-management" element={<PrivateRoutes><EventMangement /></PrivateRoutes>} />
        <Route path="/game-update" element={<PrivateRoutes><Gameup /></PrivateRoutes>} />
        <Route path="/player" element={<PrivateRoutes><Player /></PrivateRoutes>} />
        <Route path="/team" element={<PrivateRoutes><Team /></PrivateRoutes>} />
        <Route path="/dashbo" element={<PrivateRoutes><Dashbo /></PrivateRoutes>} />
        <Route path="/view" element={<PrivateRoutes><View1 /></PrivateRoutes>} />
      </Routes>
    </BrowserRouter>
  );
}

export default Routing;
