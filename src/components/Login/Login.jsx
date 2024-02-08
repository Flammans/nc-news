import React from 'react';
import './Login.scss';
import { fetchUserByUserName } from '../../utils/utils.js';
import { setUser } from '../../stores/auth.store.js';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Login = ({ }) => {

  const [username, setUsername] = React.useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    fetchUserByUserName(username).then((userData) => {
      if(userData){
        dispatch(setUser(userData))
        navigate('/');
      } else {
        alert('error')
      }

    });
  };

  return (
    <div className={'login'}>
      <div className="row d-flex align-items-center justify-content-center h-100">
        <div className="col-md-8 col-lg-7 col-xl-6">
          <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
               className="img-fluid" alt="Phone image"/>
        </div>
        <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
          <form onSubmit={handleLogin}>
            <div className="form-outline mb-4">

              <label htmlFor="user-name" className="form-label">User Name:</label>
              <input
                id="user-name"
                className="form-control form-control-lg"
                type="text"
                value={username}
                onChange={({ target }) => {
                  setUsername(target.value);
                }}
                required
              ></input>
            </div>

            <button type="submit" className="btn btn-primary btn-lg btn-block">Log in</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;