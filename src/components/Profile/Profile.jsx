import React, { useEffect, useState } from 'react';
import './Profile.scss';
import { fetchUserByUserName } from '../../utils/utils.js';
import { useParams } from 'react-router-dom';
import errorImage from '../../assets/error-404.jpg'

const Profile = () => {

  const { username } = useParams();

  const [userData, setUserData] = useState(null);
  const [errorAlert, setErrorAlert] = useState(null);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    fetchUserByUserName(username).then((response) => {

      console.log('response')
      console.log(response)

      if(response){
        setUserData(response);
        setIsLoading(false);
      } else {
        setErrorAlert('User not found');
      }
    })
  }, []);



  return (
    <div className='main container'>
      {
        isLoading ? (
          <p> Loading... </p>
        ) : (
          errorAlert ? (
            <>
              <img src={errorImage} className="m-auto w-50 d-flex" alt=""/>
              <div className="alert alert-danger m-auto w-50 d-flex" role="alert">
                {errorAlert}
              </div>
            </>
          ) : (
            <div className="profile">
              <div className="d-flex justify-content-center align-items-center flex-column">
                <h1 className="page-title">Profile</h1>
                <p><b>Username</b> {userData.username}</p>
                <p><b>Name</b> {userData.name}</p>
                <img width='120' src={`https://api.multiavatar.com/${userData.username}.svg`} alt={userData.username + ' Avatar'} className="avatar"/>
              </div>
            </div>
          )
        )

      }
    </div>
  );
}

export default Profile;