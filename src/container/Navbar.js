import React from "react";

import "../assets/main.css";

class Navbar extends React.Component {
  render() {
    return (
      <header className="container">
        <img
          className="logo"
          width="auto"
          height="30"
          src={require("../assets/Mark with Circle Shape + Logotype on light.png")}
          alt=""
        />
        <nav>
          <ul className="navbar-links">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Work</a>
            </li>
          </ul>
        </nav>
        <a className="cta" href="#">
          <button className="contact-button">Contact</button>
        </a>
      </header>
    );
  }
}

export default Navbar;
