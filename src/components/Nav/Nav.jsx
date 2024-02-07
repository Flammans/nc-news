import React from 'react';
import './Nav.css';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className={'nav'}>
        <NavLink to="/" className={({ isActive }) => isActive ? 'active' : undefined}>Home</NavLink>
        <NavLink to="/new" className={({ isActive }) => isActive ? 'active' : undefined}>New Article</NavLink>
        <NavLink to="/log-in" className={({ isActive }) => isActive ? 'active' : undefined}>Log In</NavLink>
    </nav>
  );
}

export default Nav;