import React from "react";
import { Link } from "react-router-dom";
import githubLogo from "../Assets/Images/github.png";

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg ">
      <div class="container-fluid">
        <a class="navbar-brand" style={{fontSize: "30px", color: "white", paddingLeft: "20px"}} href="#">Minsa</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse text-center" id="navbarText">
          <ul class="navbar-nav mx-auto mb-2 mb-lg-0 text-primary">

            <li><Link class = "nav-link text-white" to="/">Home</Link></li>
            <li><Link class = "nav-link text-white" to="/about">About</Link></li>
            <li><Link class = "nav-link text-white" to="/contact">Contact</Link></li>
            <li><Link class = "nav-link text-white" to="/hobby">Hobby</Link></li>
            <li><Link class = "nav-link text-white" to="/skill">Skill</Link></li>
          </ul>
          <span class="navbar-text text-white mx-5">
            <p>Aminudin Muhibbullah      <a href="https://github.com/Minsa111/test-Profile/tree/main"><img src={githubLogo} style={{width: "30px", height: "30px"}} alt="" /></a></p> 
          </span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
