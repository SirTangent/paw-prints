import React, { Component, Fragment } from "react";
import { Link, Links } from "react-router-dom";
import PropTypes from "prop-types";

import { ROLE_ADMIN, ROLE_GUEST } from "../../types/roles";

class NavbarLinks extends Component {
  render() {
    const { name, role } = this.props;

    switch (role) {
      case ROLE_ADMIN:
        return (
          <Fragment>
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  <i className="fas fa-tachometer-alt"></i> Dashboard
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="far fa-user"></i> Hi {name}
                </a>
                <div
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <Link to="/" className="dropdown-item">
                    <i className="fas fa-cog"></i> Account Settings
                  </Link>
                  <div className="dropdown-divider"></div>
                  <Link to="/" className="dropdown-item text-danger">
                    Logout
                  </Link>
                </div>
              </li>
            </ul>
          </Fragment>
        );
        break;
      case ROLE_GUEST:
      default:
        return (
          <Fragment>
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  <i className="fas fa-info-circle"></i> About
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  <i className="fas fa-sign-in-alt"></i> Sign In
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  <i className="far fa-plus-square"></i> Register
                </Link>
              </li>
            </ul>
          </Fragment>
        );

    }
  }
}

NavbarLinks.propTypes = {
  name: PropTypes.string.isRequired
};

NavbarLinks.defaultProps = {
  role: ROLE_GUEST
};

export default NavbarLinks;
