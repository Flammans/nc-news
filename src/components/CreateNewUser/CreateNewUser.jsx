import React, { useState } from 'react';
import './CreateNewUser.css';
import { createNewUser, urlRegex, userNameRegex, userNameRegexFindLetter, userNameRegexFindNumber } from '../../utils/utils.js';

const CreateNewUser = ({setUser}) => {

  const [userName, setUserName] = useState('');
  const [userNameError, setUserNameError] = useState(false);
  const [userAvatar, setUserAvatar] = useState('');
  const [userAvatarError, setUserAvatarError] = useState(false);

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
    if (urlRegex.test(userAvatar) || userAvatar === "") {
      setUserAvatarError(false)
      return true;
    } else {
      setUserAvatarError(true)
      return false;
    }
  };

  const handleSubmit = (event) => {
    event?.preventDefault();


    if(validateUsername() && validateAvatarUrl()){

      createNewUser().then((user) => setUser(user));
    }


  }

  return (
    <form onSubmit={handleSubmit} id="registrationForm" className={'form'}>

      <div className="input-group">
        <label htmlFor={'user-name'}>User Name*</label>
        <input
          type="text"
          className="username"
          placeholder="User Name"
          id="user-name"
          value={userName}
          onChange={({ target }) => {
            setUserName(target.value);
            validateUsername();
          }}
          required/>
        {userNameError && (
          <div id="username-error" role="alert">Username must contain letters and numbers</div>
        )}
      </div>

      <div className="input-group">
        <label htmlFor="avatar-url">Avatar Image url </label>
        <input type="text"
               className="avatarUrl"
               placeholder="Avatar Image url"
               id="avatar-url"
               value={userAvatar}
               onChange={({ target }) => {
                 setUserAvatar(target.value);
                 validateAvatarUrl();
               }}
        />
        {userAvatarError && (
          <div id="avatar-error" role="alert">Invalid avatar URL</div>
        )}
      </div>

      <h4>* Required</h4>

      <button className="base-button" id="submit">Submit</button>

    </form>
  );
}

export default CreateNewUser;