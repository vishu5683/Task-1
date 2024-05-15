import React from 'react';
import "./Dash.css";
import { MdHeadphones } from "react-icons/md";

const Dashboard = () => {
  return (
    <div>
      <header className="header">
        <div className="logo">Logo</div>
        <MdHeadphones className="icon" />
      </header>
      <div className="container">
        <div className="sidebar">
          <div className="list-group">
            <a href="#" className="list-group-item list-group-item-action active">
              Game Management
            </a>
            <a href="#" className="list-group-item list-group-item-action">Event Management</a>
            <a href="#" className="list-group-item list-group-item-action">Dashboard</a>
            <a href="#" className="list-group-item list-group-item-action">User Management</a>
            <a href="#" className="list-group-item list-group-item-action">Referral Management</a>
            <a href="#" className="list-group-item list-group-item-action">Live Casting</a>
            <a href="#" className="list-group-item list-group-item-action">Notification</a>
            <a href="#" className="list-group-item list-group-item-action">View</a>
            <a href="#" className="list-group-item list-group-item-action">Team Creation View</a>
            <a href="#" className="list-group-item list-group-item-action">Games update</a>
            <a href="#" className="list-group-item list-group-item-action">Player</a>
          </div>
          <a href="#" className="logout-button" tabIndex="-1" aria-disabled="true">Logout</a>
        </div>
        <div className="content">
          <h1>Welcome to the Dashboard</h1>
          <p>This is your dashboard where you can manage various aspects of the application.</p>
          {/* <img src="https://via.placeholder.com/800x400" alt="Placeholder" /> */}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;