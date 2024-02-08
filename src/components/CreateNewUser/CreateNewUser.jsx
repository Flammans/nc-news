import React, { useState } from 'react';
import './CreateNewUser.css';
import { createNewUser, urlRegex, userNameRegex, userNameRegexFindLetter, userNameRegexFindNumber } from '../../utils/utils.js';
import { setUser } from '../../stores/auth.store.js';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const CreateNewUser = () => {

  const [userName, setUserName] = useState('');
  const [userNameError, setUserNameError] = useState(false);
  const [userAvatar, setUserAvatar] = useState('');
  const [userAvatarError, setUserAvatarError] = useState(false);
  const dispatch = useDispatch();
  const [errorAlert, setErrorAlert] = useState(null);
  const navigate = useNavigate();


  const validateUsername = () => {

    if (userNameRegex.test(userName)
      && userNameRegexFindNumber.test(userName)
      && userNameRegexFindLetter.test(userName)) {

      setUserNameError(false);
      return true;
    } else {
      setUserNameError(true);
      return false;
    }
  };

  const validateAvatarUrl = () => {
    if (urlRegex.test(userAvatar) || userAvatar === '') {
      setUserAvatarError(false);
      return true;
    } else {
      setUserAvatarError(true);
      return false;
    }
  };

  const handleSubmit = (event) => {
    event?.preventDefault();

    if (validateUsername() && validateAvatarUrl()) {

      createNewUser(userName, userAvatar).then((user) => {
        if(user) {
          dispatch(setUser(user));
          navigate('/')
        } else {
          setErrorAlert('Sorry, registration not available');
        }
      });

    }

  };


  return (
    <div className="row d-flex align-items-center justify-content-center h-100">
      <div className="col-md-8 col-lg-7 col-xl-6">
        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
             className="img-fluid" alt="Phone image"/>
      </div>
      <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
        <form onSubmit={handleSubmit}>
          <div className="form-outline mb-4">


            <label htmlFor="user-name" className="form-label">User Name:</label>
            <input
              id="user-name"
              type="text"
              className="form-control form-control-lg username"
              placeholder="User Name"
              value={userName}
              onChange={({ target }) => {
                setUserName(target.value);
                validateUsername();
              }}
              autoComplete="off"
              required/>
            {userNameError && (
              <div className="alert alert-warning d-flex align-items-center  mt-2" role="alert">
                Username must contain letters and numbers
              </div>
            )}
          </div>

          <div className="form-outline mb-4">


            <label htmlFor="avatar-url" className="form-label">Avatar Image url </label>
            <input type="text"
                   className="form-control form-control-lg avatarUrl"
                   placeholder="Avatar Image url"
                   id="avatar-url"
                   value={userAvatar}
                   onChange={({ target }) => {
                     setUserAvatar(target.value);
                     validateAvatarUrl();
                   }}
            />
            {userAvatarError && (
              <div className="alert alert-warning d-flex align-items-center mt-2" role="alert">
                Invalid avatar URL
              </div>
            )}
          </div>

          <button type="submit" className="btn btn-primary btn-lg btn-block">Sign in</button>

          { errorAlert && (
            <div className="alert alert-danger mt-4" role="alert">
              {errorAlert}
            </div>
          )}

        </form>
      </div>
    </div>);
};

export default CreateNewUser;