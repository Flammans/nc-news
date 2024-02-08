import React, { useEffect } from 'react';
import './Header.css';
import Nav from '../Nav/Nav.jsx';

const Header = () => {

  return (
    <header className={'header'}>
      <div className="container">
        <div className="row">
          <Nav/>
        </div>
      </div>
    </header>
  );
};

export default Header;