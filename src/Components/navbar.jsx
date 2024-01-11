import React from "react";
import githubLogo from "../Assets/github.png";

function Navbar() {
  return (
    <div class="header">
      <div class="navbar">
        <div class="logo">
          <a href="/">Minsa</a>
        </div>
        <div class="menu">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/">Contact</a></li>
            <li><a href="/">Hobby</a></li>
            <li><a href="/">Skill</a></li>
          </ul>
        </div>
        <div class="contact-info">
          <ul>
            <li style={{ marginRight: '80px' }}>Aminudin Muhibbullah</li>
            <li>
              <a href="https://github.com/Minsa111" >
                <img src={githubLogo} class="imgprofile" alt="GitHub Logo" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
export default Navbar;