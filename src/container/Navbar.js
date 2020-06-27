import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <section className="nav-area">
      <div className="container">
        <div className="header-inner">
          <div className="logo">Sell.</div>

          <nav>
            <ul className="navbar-links">
              <li className="navbar-link">
                <Link to="/">Home</Link>
              </li>
              <li className="navbar-link">
                <Link to="/">Services</Link>
              </li>
              <li className="navbar-link">
                <Link to="/">About</Link>
              </li>
              <li className="navbar-link">
                <Link to="/">Contact</Link>
              </li>
              <li className="navbar-link">
                <Link to="/">Contact</Link>
              </li>
            </ul>
          </nav>
          <div className="auth-area">
            <div className="login-cta">
              <Link to="/">Login</Link>
            </div>
            <div className="login-cta">
              <Link to="/">Sign Up</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
