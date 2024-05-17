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

const Routing = () => {
  return (
    <BrowserRouter>
      
               <Routes>
            <Route exact path="/" element={<LoginUi />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/game-management" element={<GameManagement />} />
            <Route path="/event-management" element={<EventMangement />} />
            <Route path="/game-update" element={<Gameup />} />
            <Route path="/player" element={<Player />} />
            <Route path="/team" element={<Team />} />
            <Route path="/Dashbo" element={<Dashbo/>} />
            <Route path="/view" element={<View1/>} />
          </Routes>
      
    </BrowserRouter>
  );
}

export default Routing;
