import React, { useEffect, useState } from 'react';
import './Article.scss';
import { useParams } from 'react-router-dom';
import { fetchArticleByArticleId, updateArticleVote } from '../../utils/utils.js';
import Comments from '../Comments/Comments.jsx';
import FormattedDate from '../FormattedDate/FormattedDate.jsx';
import Loader from '../Loader/Loader.jsx';

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

  const voteHandle = (article_id, inc_votes) => {
    updateArticleVote(article_id, inc_votes).then((result) => {
      setArticle(result);
    })
  }

  return (
    <>
      {isLoading ? (
        <Loader />
      ): ( article_id ? (
          <div className='container'>
            <article className="blog-post">
              <h1 className="mb-5">{article.title} <span className="badge text-bg-warning">{article.topic}</span></h1>

              <div className="article-content clearfix mb-3">
                <picture className="article-picture rounded float-start me-md-3 mb-3">
                  <img className="mw-100" src={article.article_img_url} alt={article.title} onError={(err) => {
                    err.target.onError = null;
                    err.target.src = 'https://www.svgrepo.com/show/508699/landscape-placeholder.svg';
                  }}/>
                </picture>

                {article.body}
              </div>

              <p className="blog-post-meta"><b><FormattedDate isoDateTime={article.created_at}/></b> by <b>{article.author}</b></p>

              <div className="article-vote">
                <button className="article-vote-btn" onClick={() => voteHandle(article_id, -1)}>-</button>
                <span className="article-votes">{article.votes}</span>
                <button className="article-vote-btn" onClick={() => voteHandle(article_id, 1)}>+</button>
              </div>

              {article_id && (<Comments articleId={article_id}/>)}

            </article>
          </div>
        ) : (
          <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div className="col p-4 d-flex flex-column position-static">
              <strong className="d-inline-block mb-2 text-primary-emphasis">{article.topic}</strong>
              <h3 className="mb-0">{article.title}</h3>
              <div className="mb-1 text-body-secondary"><FormattedDate isoDateTime={article.created_at}/></div>
            </div>
            <div className="col-auto d-none d-md-flex">
              <picture className="bd-placeholder-img">
                <img src={article.article_img_url} alt={article.title} onError={(err) => {
                  err.target.onError = null;
                  err.target.src = 'https://www.svgrepo.com/show/508699/landscape-placeholder.svg';
                }}/>
              </picture>
            </div>
          </div>
        )

      )}
    </>
  );
};

export default Article;