import React, { useState } from "react";
import logo from "../assets/images/maplestory_nav_image.jpg";

export default function Navbar() {
  const [navbarBurgerToggled, setNavbarBurgerToggled] = useState(false);

  return (
    <nav className="navbar is-primary" style={{backgroundColor: "orange"}}>
      <div className="navbar-brand">
        <a
          href="/"
          className="navbar-item"
          onClick={() => setNavbarBurgerToggled(!navbarBurgerToggled)}
          style={{justifyContent: "center"}}
        >
          <h1 className="is-size-5" style={{color: "black"}}><img src={logo} alt="logo"/>  Maplestory Boss Calculator</h1>
        </a>
        <a
          className="navbar-burger burger"
          onClick={() => setNavbarBurgerToggled(!navbarBurgerToggled)}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
    </nav>
  );
}
