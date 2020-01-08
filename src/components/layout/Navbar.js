import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Config from "../../config/default";

import NavbarLinks from "./NavbarLinks";

class Navbar extends Component {
  render() {
    const {
      APP_NAME,
      user: { name }
    } = this.props;
    return (
      <nav className="navbar fixed-top navbar-expand-sm navbar-dark bg-nav">
        <Link to="/" className="navbar-brand">
          <i className="fas fa-paw brand-logo"></i>
          <span>{" " + Config.APP_NAME}</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="See Options..."
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div id="navbarContent" className="collapse navbar-collapse">
          <NavbarLinks name={name} />
        </div>
      </nav>
    );
  }
}

Navbar.defaultProps = {
  user: {
    name: "User"
  }
};

Navbar.propTypes = {
  user: PropTypes.object.isRequired
};

export default Navbar;
