import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginUi from '../components/LoginUi';
import ForgotPassword from "../pages/ForgotPassword";
import Dashboard from '../components/Dashboard';


import GameManagement from '../components/sidebar-options/GameManagement';
import Gameup from '../components/sidebar-options/Gameup';
import Player from '../components/sidebar-options/Player';
import Team from '../components/sidebar-options/Team';
import EventMangement from '../components/sidebar-options/EventMangement';
import Dashbo from '../components/sidebar-options/Dashbo';
import View1 from '../components/sidebar-options/View1';

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
