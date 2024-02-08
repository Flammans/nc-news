import React from 'react';
import './Logo.css';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to={'/'} className="logo" >
      <span><b>NC </b>News</span>
    </Link>
  );
}

export default Logo;