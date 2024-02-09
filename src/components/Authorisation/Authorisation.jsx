import React from 'react';
import './Authorisation.scss';
import Login from '../Login/Login.jsx';
import CreateNewUser from '../CreateNewUser/CreateNewUser.jsx';

const Authorisation = () => {
  const [isLogin, setIsLogin] = React.useState(true);

  return (
    <div className={'authorisation'}>

      <div className="container">
        <ul className="tabs-menu">
          <li onClick={() => setIsLogin(true)} className={isLogin ? 'active' : ''}>Log In</li>
          <li onClick={() => setIsLogin(false)} className={!isLogin ? 'active' : ''}>Registration</li>
        </ul>


        {isLogin ? <Login/> : <CreateNewUser/>}
      </div>

    </div>
  );
}

export default Authorisation;