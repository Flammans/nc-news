import React from 'react';
import './Login.css';
import { fetchUserByUserName } from '../../utils/utils.js';

const Login = ({ setUser }) => {

  const [username, setUsername] = React.useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchUserByUserName(username).then((userData) => setUser(userData));
  }

  return (
    <div className={'login'}>
      <form onSubmit={handleSubmit} className={'form'}>

        <label htmlFor={'user-name'}>User Name:</label>
        <input
          id={'user-name'}
          className={'base-input'}
          type="text"
          value={username}
          onChange={({ target }) => {
            setUsername(target.value);
          }}
          required
        ></input>

        <button type="submit" className={'base-button'}>Log In</button>
      </form>
    </div>
  );
}

export default Login;