import React from 'react';
import './Articles.css';
import Article from '../Article/Article.jsx';
import { Link } from 'react-router-dom';

const Articles = ({articles}) => {

  return (
    <div className='row'>
      {articles.map(article => (
        <Link to={'articles/' + article.article_id} key={article.title} className="col-md-6">
          <Article article={article}/>
        </Link>
        )
      )}
    </div>
  );
}

export default Articles;