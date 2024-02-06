import React, { useEffect, useState } from 'react';
import './Article.css';
import { useParams } from 'react-router-dom';
import { fetchArticleByArticleId } from '../../utils/utils.js';

const Article = ({ article:data }) => {
  const { article_id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [article, setArticle] = useState(data);

  useEffect(() => {
    if (!article) {
      fetchArticleByArticleId(article_id).then((item) => {
        setArticle(item);
        setIsLoading(false);
      });
    } else {
      setIsLoading(false);
    }
  }, []);

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ): (
        <section className={ article_id ? 'article-full' : 'article-short' }>
          <picture className="article-picture">
            <img src={article.article_img_url} alt={article.title} onError={(err) => {
              err.target.onError = null;
              err.target.src = 'https://www.svgrepo.com/show/508699/landscape-placeholder.svg';
            }}/>
          </picture>
          <div className="article-content">
            <h2 className="article-name">{article.title}</h2>
            {article.body && (
              <p className="article-desc">
              {article.body}
              </p>
            )}
            <p>
              <span className="article-topic">
                <b>Topic:</b> {article.topic}
              </span>
            </p>
          </div>
        </section>
      )}
    </>
  );
};

export default Article;