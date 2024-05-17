import React from 'react';
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';

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