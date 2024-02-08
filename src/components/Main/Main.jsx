import React, { useEffect, useState } from 'react';
import './Main.css';
import Articles from '../Articles/Articles.jsx';
import { fetchArticles } from '../../utils/utils.js';

const Main = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchArticles().then((items) => {
      setArticles(items);
      setIsLoading(false);
    });
  }, []);

  return (
    <div className={'main'}>
      <h1 className={'page-title'}>Latest News</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <Articles articles={articles}/>
      )}
    </div>
  );
}

export default Main;