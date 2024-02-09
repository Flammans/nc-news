import React, { useEffect, useState } from 'react';
import './Articles.css';
import Article from '../Article/Article.jsx';
import { Link, useParams } from 'react-router-dom';
import { fetchArticles } from '../../utils/utils.js';
import Loader from '../Loader/Loader.jsx';
import Pagination from '../Pagination/Pagination.jsx';

const Articles = () => {

  const { topic } = useParams();

  const [isLoading, setIsLoading] = useState(true);
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [articlesCount, setArticlesCount] = useState(0);
  const [perPage, setPerPage] = useState(10);
  const [pagesCount, setPagesCount] = useState(1)

  useEffect(() => {
    fetchArticles({
      topic,
      p: page,
      limit: perPage
    }).then((items) => {
      setArticles(items.articles);
      setArticlesCount(items.total_count);
      setPagesCount(Math.ceil(items.total_count / perPage));
      setIsLoading(false);
    });
  }, [page, perPage, topic]);

  return (
    isLoading ? (
      <Loader />
    ) : (
      <div className='row'>
        {articles.map(article => (
            <Link to={'articles/' + article.article_id} key={article.title} className="col-md-6">
              <Article article={article}/>
            </Link>
          )
        )}
        { articlesCount > perPage && (
          <Pagination page={page}
                      setPage={setPage}
                      articlesCount={articlesCount}
                      perPage={perPage}
                      setPerPage={setPerPage}
                      pagesCount={pagesCount}
                      setPagesCount={setPagesCount}
          />
        ) }
      </div>
    )
  );
}

export default Articles;