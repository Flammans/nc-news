import React from 'react';
import './NotFoundPage.scss';

const NotFoundPage = ({ errorText = '404 Page not found'}) => {


  return (
    <div className='main container'>
      <div className="alert alert-danger m-auto w-50 d-flex" role="alert">
        {errorText}
      </div>
    </div>
  );
}

export default NotFoundPage;