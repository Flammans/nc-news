import React, { useEffect } from 'react';
import './Nav.css';
import { NavLink } from 'react-router-dom';
import { Collapse } from 'bootstrap';
import Logo from '../Logo/Logo.jsx';

const Nav = () => {

  useEffect(() => {
    document.querySelectorAll('.collapse').forEach(collapseEl => new Collapse(collapseEl, {
      toggle: false,
    }));
  }, []);

  return (
    <nav className="navbar navbar-expand-lg sticky-top">
      <div className="container-fluid">
        <Logo />
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-0 ms-auto mb-2 mb-lg-0 ">
            <li className="nav-item">
              <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/new" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>New Article</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/log-in" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Log In</NavLink>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Nav;