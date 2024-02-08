import React from 'react';
import './Authorisation.scss';
import Login from '../Login/Login.jsx';
import CreateNewUser from '../CreateNewUser/CreateNewUser.jsx';

const Authorisation = ({user, setUser}) => {
  const [isLogin, setIsLogin] = React.useState(true);

  return (
    <div className={'main authorisation'}>

      <div className="container">
        <ul className="tabs-menu">
          <li onClick={() => setIsLogin(true)} className={isLogin ? 'active' : ''}>Log In</li>
          <li onClick={() => setIsLogin(false)} className={!isLogin ? 'active' : ''}>Registration</li>
        </ul>


        {isLogin ? <Login user={user} setUser={setUser}/> : <CreateNewUser user={user} setUser={setUser}/>}
      </div>

    </div>
  );
}

export default Authorisation;