import React from "react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">{props.name}</Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item mx-2">
                <Link className="nav-link" to="/about">{props.about}</Link>
              </li>
            </ul>
              <button type="button" style= {{display: props.mode === 'dark'? 'block':'none'}} onClick ={props.buttonColorFunc['Blue']} className="btn btn-outline-primary mx-1 my-1">Blue</button>
              <button type="button" style= {{display: props.mode === 'dark'? 'block':'none'}} onClick ={props.buttonColorFunc['Green']} className="btn btn-outline-success mx-1 my-1">Green</button>
              <button type="button" style= {{display: props.mode === 'dark'? 'block':'none'}} onClick ={props.buttonColorFunc['Red']} className="btn btn-outline-danger mx-1 my-1">Red</button>
              <button type="button" style= {{display: props.mode === 'dark'? 'block':'none'}} onClick ={props.buttonColorFunc['Yellow']} className="btn btn-outline-warning mx-1 my-1">Yellow</button>
              <button type="button" style= {{display: props.mode === 'dark'? 'block':'none'}} onClick ={props.buttonColorFunc['Black']} className="btn btn-outline-light mx-1 my-1">Black</button>
            <div className={`form-check form-switch text-${props.mode === 'dark'? 'light': 'dark'}`}>
              <input className="form-check-input mx-1" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault"/>
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
            </div>
          </div>
        </div>
      </nav>
  );
}

Navbar.propTypes = {
    name : PropTypes.string.isRequired,
    about : PropTypes.string.isRequired
}

Navbar.defaultProps = {
    name : 'Set title here',
    about : 'About'
}
