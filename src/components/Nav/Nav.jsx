import React, { useEffect, useState } from 'react';
import './Nav.scss';
import { NavLink, useNavigate } from 'react-router-dom';
import { Collapse } from 'bootstrap';
import Logo from '../Logo/Logo.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../stores/auth.store.js';
import { fetchTopics } from '../../utils/utils.js';

const Nav = () => {

  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [topics, setTopics] = useState([]);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  useEffect(() => {
    document.querySelectorAll('.collapse').forEach(collapseEl => new Collapse(collapseEl, {
      toggle: false,
    }));
    fetchTopics().then((response) => {
      if (response) {
        setTopics(response);
      }
    });
  }, []);

  return (
    <nav className="navbar navbar-expand-lg sticky-top flex-wrap">
      <div className="container-fluid w-100">
        <Logo/>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-0 ms-auto mb-2 mb-lg-0 d-flex align-items-center">
            <li className="nav-item">
              <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Home</NavLink>
            </li>
            {/*<li className="nav-item">*/}
            {/*  <NavLink to="/new" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>New Article</NavLink>*/}
            {/*</li>*/}

            {user ? (
              <li className="nav-item">
                <span className="nav-link nav-link-log-out" onClick={() => handleLogout()}>Log out</span>
              </li>
            ) : (
              <li className="nav-item">
                <NavLink to="/log-in" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Log In</NavLink>
              </li>
            )}

            {user && (
              <NavLink to={'/profile/' + user.username} className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                <img width="36" height="36" src={`https://api.multiavatar.com/${user.username}.svg`} alt="User Avatar"/>
              </NavLink>
            )}

          </ul>
          {/*<form className="d-flex" role="search">*/}
          {/*  <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>*/}
          {/*  <button className="btn btn-outline-success" type="submit">Search</button>*/}
          {/*</form>*/}
        </div>

      </div>
      <div className="container-fluid justify-content-end w-100">
        <div className="navbar m-0 p-0 flex-row w-100">
          <ul className="navbar-nav me-0 ms-auto mb-0 d-flex align-items-center  flex-row">
            {topics.map(topic => (
                <li className="nav-item p-1" key={topic.slug}>
                  <NavLink to={'/topics/' + topic.slug} className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>{topic.slug}</NavLink>
                </li>
              ),
            )}
          </ul>
        </div>

      </div>
    </nav>
  );
};

export default Nav;