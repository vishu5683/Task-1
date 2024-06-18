import React from 'react';
import Layoutdesign from '../Layout/Layoutdesign';
import '../../Styles/customerCare.css'; 

const Dashbo = () => {
  return (
    <Layoutdesign>
      <div className="support-container">
        <h1>Customer Support</h1>
        <p>Welcome to our customer support page. How can we assist you today?</p>

        <div className="support-options">
          <div className="option">
            <h2>FAQs</h2>
            <p>Find answers to common questions.</p>
          </div>
          <div className="option">
            <h2>Contact Us</h2>
            <p>Get in touch with our support team.</p>
          </div>
          <div className="option">
            <h2>Live Chat</h2>
            <p>Chat with a support representative.</p>
          </div>
        </div>
      </div>
    </Layoutdesign>
  );
}

export default Dashbo;
