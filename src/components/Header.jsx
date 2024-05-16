import React from 'react'
import "./Dash.css";
import { MdHeadphones } from "react-icons/md";
const Header = () => {
  return (
    <div>
        <header className="header">
        <div className="logo">Logo</div>
        <MdHeadphones className="icon" />
      </header>
    </div>
  )
}

export default Header
