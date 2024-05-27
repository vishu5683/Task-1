import React from 'react';
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';
import "../../Styles/Layout.css"

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