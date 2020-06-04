import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logout } from "../../actions/securityActions";

class Navbar extends Component {
  logoutClick() {
    this.props.logout();
    window.location.href = "/";
  }

  render() {
    const { validToken, user } = this.props.security;

    const loggedinHeader = (
      <div className="collapse navbar-collapse" id="mobile-nav">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={`/account`} className="nav-link">
              Accounts
            </Link>
          </li>
        </ul>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link to="/account" className="nav-link">
              {user.sub}
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/logout"
              className="nav-link"
              onClick={this.logoutClick.bind(this)}
            >
              Logout
            </Link>
          </li>
        </ul>
      </div>
    );

    const loggedoutHeader = (
      <div className="collapse navbar-collapse" id="mobile-nav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link to="/register" className="nav-link">
              Sign Up
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/login" className="nav-link">
              Login
            </Link>
          </li>
        </ul>
      </div>
    );
    let headerLinks;
    if (validToken && user) {
      headerLinks = loggedinHeader;
    } else {
      headerLinks = loggedoutHeader;
    }
    return (
      <div>
        <nav className="navbar navbar-static-top navbar-expand-sm navbar-dark bg-primary mb-4">
          <div className="container">
            <Link to="/account" className="navbar-brand">
              Online Banking
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#mobile-nav"
            >
              <span className="navbar-toggler-icon" />
            </button>
            {headerLinks}
          </div>
        </nav>
      </div>
    );
  }
}
Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  security: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  security: state.security,
});
export default connect(mapStateToProps, { logout })(Navbar);
