import React, { useEffect, useState } from 'react';
import './Main.css';
import Articles from '../Articles/Articles.jsx';

const Main = () => {
  return (
    <div className={'main'}>
      <h1 className={'page-title'}>Latest News</h1>
      <Articles />
    </div>
  );
}

export default Main;