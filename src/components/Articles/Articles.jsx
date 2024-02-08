import React from 'react';
import './Articles.css';
import Article from '../Article/Article.jsx';
import { Link } from 'react-router-dom';

const Articles = ({articles}) => {

  return (
    <ul className={'list-of-articles'}>
      {articles.map(article => (
        <li key={article.title}>
          <Link to={'articles/' + article.article_id}>
            <Article article={article}/>
          </Link>
        </li>
        )
      )}
    </ul>
  );
}

export default Articles;