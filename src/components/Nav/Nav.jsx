import React from 'react';
import './Nav.css';
import { NavLink } from 'react-router-dom';
import Logo from '../Logo/Logo.jsx';

const Nav = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Logo/>
      </div>
      <div className="flex-none gap-2">
        <ul className="menu menu-vertical lg:menu-horizontal bg-base-000 rounded-box">
          <li><NavLink to="/" className={({ isActive }) => isActive ? 'active' : undefined}>Home</NavLink></li>
          <li><NavLink to="/new" className={({ isActive }) => isActive ? 'active' : undefined}>New Article</NavLink></li>
          <li><NavLink to="/log-in" className={({ isActive }) => isActive ? 'active' : undefined}>Log In</NavLink></li>
        </ul>
        <div className="form-control">
          <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto"/>
        </div>
      </div>
    </div>
  )
    ;
};

export default Nav;