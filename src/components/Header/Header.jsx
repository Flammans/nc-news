import React from 'react';
import './Header.css';
import Logo from '../Logo/Logo.jsx';
import Nav from '../Nav/Nav.jsx';

const Header = () => {
  return (
    <header className={'header'}>
      <div className="header-content">
        <Nav />
      </div>
    </header>
  );
};

export default Header;