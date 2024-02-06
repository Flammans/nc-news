import React from 'react';
import './Error.css';

const Error = ({ error }) => {
  return (
    <div className={'error'}>
      <p>{error}</p>
    </div>
  );
}

export default Error;