import React from "react";
import { Link } from "react-router-dom";

class Header extends React.Component {
  state = {
    isToggle: false,
  };

  toggleHandle = () => {
    this.setState({
      isToggle: !this.state.isToggle,
    });
  };

  render() {
    return (
      <section className="nav-area">
        <div className="container">
          <div className="header-inner">
            <div className="logo">Sell.</div>

            <nav>
              <ul className="navbar-links">
                <li className="navbar-link">
                  <Link to="/">
                    <i class="fad fa-home"></i>
                  </Link>
                </li>
                <li className="navbar-link">
                  <Link to="/">
                    <i class="fad fa-search-plus"></i>
                  </Link>
                </li>
                <li className="navbar-link">
                  <Link to="/">
                    <i class="fad fa-id-card-alt"></i>
                  </Link>
                </li>

                <li className="navbar-link">
                  <Link to="/">
                    <i class="fad fa-sun"></i>
                  </Link>
                </li>
                <li className="navbar-link">
                  <Link to="/">
                    <i class="fal fa-moon"></i>
                  </Link>
                </li>
              </ul>
            </nav>
            <div className="auth-area">
              <Link to="/">
                <i class="fad fa-user-alt"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Header;
