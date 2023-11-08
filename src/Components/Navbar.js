import React from "react";
import PropTypes from "prop-types";

export default function Navbar(props) {
  let mystyle = {
    color : 'white',
    backgroundColor: 'Black'
  }

  return (
    <div className="container" style = {mystyle}>
      <nav className="navbar navbar-expand-lg bg-body-tertiary"  style = {mystyle}>
        <div className="container-fluid"  style = {mystyle}>
          <a className="navbar-brand"  style = {mystyle} href="#">
            {props.title}
          </a>
          <button  style = {mystyle}
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"  style = {mystyle}></span>
          </button>
          <div className="collapse navbar-collapse"  style = {mystyle} id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0"  style = {mystyle}>
              <li className="nav-item"  style = {mystyle}>
                <a className="nav-link active"  style = {mystyle} aria-current="page" href="#">
                  {props.homer}
                </a>
              </li>
              <li className="nav-item"  style = {mystyle}>
                <a className="nav-link"  style = {mystyle} href="#">
                  {props.TextUtils}
                </a>
              </li>
            </ul>
            <form className="d-flex"  style = {mystyle} role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-success"  style = {mystyle} type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

Navbar.propTypes = 
{ title: PropTypes.string.isRequired, 
homer: PropTypes.string };

Navbar.defaultProps = {
    title: 'Set title here',
    homer: 'About type here'
};