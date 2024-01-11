import React from "react";
import { Link } from "react-router-dom";
import githubLogo from "../Assets/github.png";

function Navbar() {
  return (
    <div className="header">
      <div className="navbar">
        <div className="logo">
          <Link to="/">Minsa</Link>
        </div>
        <div className="menu">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/About">About</Link></li>
            <li><Link to="/Contact">Contact</Link></li>
            <li><Link to="/Hobby">Hobby</Link></li>
            <li><Link to="/Skill">Skill</Link></li>
          </ul>
        </div>
        <div className="contact-info">
          <ul>
            <li style={{ marginRight: '80px' }}>Aminudin Muhibbullah</li>
            <li>
              <a href="https://github.com/Minsa111" >
                <img src={githubLogo} className="imgprofile" alt="GitHub Logo" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
