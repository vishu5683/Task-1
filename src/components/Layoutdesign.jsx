import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

const Layoutdesign = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <Sidebar />
      <div className="content">
        {children}
      </div>
    </div>
  );
}

export default Layoutdesign;