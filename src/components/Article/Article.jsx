import React, { useEffect, useState } from 'react';
import './Article.css';
import { useParams } from 'react-router-dom';
import { fetchArticleByArticleId } from '../../utils/utils.js';
import Comments from '../Comments/Comments.jsx';

const Article = ({ article: data }) => {
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
      ) : (

        article_id ? (<section className={article_id ? 'article article-full' : 'article article-short'}>
            {article_id && (<h1 className="page-title">{article.title}</h1>)}
            <picture className="article-picture">
              <img src={article.article_img_url} alt={article.title} onError={(err) => {
                err.target.onError = null;
                err.target.src = 'https://www.svgrepo.com/show/508699/landscape-placeholder.svg';
              }}/>
            </picture>
            <div className="article-content">
              {!article_id && (<h2 className="article-name">{article.title}</h2>)}
              {article.body && (
                <p className="article-desc">
                  {article.body}
                </p>
              )}
              <p>
              <span className="article-topic">
                <b>Topic: </b> {article.topic}
              </span>
              </p>
            </div>

            {article_id && (<Comments articleId={article_id}/>)}

          </section>
        ) : (
          <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure><img src={article.article_img_url} alt={article.title}/></figure>
            <div className="card-body">
              <h2 className="card-title">{article.title}</h2>
            </div>
          </div>
        )
      )
      }
    </>
  )
    ;
};

export default Article;