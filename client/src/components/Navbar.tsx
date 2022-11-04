import React from "react";
import logo from "../assets/images/maplestory_nav_image.jpg";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <a href="/" className="navbar-item">
          <h1 className="is-size-5 columns">
            <img className="mx-3" src={logo} alt="logo" />
            <div className="has-text-black">Maplestory Boss Calculator</div>
          </h1>
        </a>
      </div>
    </nav>
  );
}
