import React, { useEffect, useState } from 'react';
import './Articles.css';
import Article from '../Article/Article.jsx';
import { Link, useLocation, useParams } from 'react-router-dom';
import { fetchArticles } from '../../utils/utils.js';
import Loader from '../Loader/Loader.jsx';
import Pagination from '../Pagination/Pagination.jsx';
import {Dropdown} from 'bootstrap';

const Articles = () => {

  const { topic } = useParams();

  const [isLoading, setIsLoading] = useState(true);
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [articlesCount, setArticlesCount] = useState(0);
  const [perPage, setPerPage] = useState(10);
  const [pagesCount, setPagesCount] = useState(1);
  const [order, setOrder] = useState('ASC');
  const [sortBy, setSortBy] = useState('created_at');
  const [sortByPlaceholder, setSortByPlaceholder] = useState('Date');

  const location = useLocation();

  useEffect(() => {
    fetchArticles({
      topic,
      p: page,
      limit: perPage,
      order,
      sort_by: sortBy,
    }).then((items) => {
      setArticles(items.articles);
      setArticlesCount(items.total_count);
      setPagesCount(Math.ceil(items.total_count / perPage));
      setIsLoading(false);
    });

  }, [page, perPage, topic, order, sortBy]);

  useEffect(() => {
    document.querySelectorAll('.dropdown-toggle').forEach(element => new Dropdown(element));
  }, []);

  return (
    isLoading ? (
      <Loader />
    ) : (

      <div className='row'>

        {location.pathname !== '/' && (
          <>
            <div className="d-flex justify-content-between">
              <div className="mb-4">
                <div className="d-flex justify-content-end">
                  <div className="btn-group">
                    <div className="dropdown">
                      <button className="btn btn-lg btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Sort by: {sortByPlaceholder}
                      </button>
                      <div className="dropdown-menu p-0 bg-opacity-100 rounded-0">
                        <button className='btn btn-lg btn-secondary rounded-0 w-100' onClick={() => {
                          setSortBy('author');
                          setSortByPlaceholder('Author');
                        }}>Author
                        </button>
                        <button className='btn btn-lg btn-secondary rounded-0 w-100' onClick={() => {
                          setSortBy('comment_count');
                          setSortByPlaceholder('Comments count');
                        }}>Comments
                        </button>
                        <button className='btn btn-lg btn-secondary rounded-0 w-100' onClick={() => {
                          setSortBy('votes');
                          setSortByPlaceholder('Votes');
                        }}>Votes
                        </button>
                        <button className='btn btn-lg btn-secondary rounded-0 w-100' onClick={() => {
                          setSortBy('created_at');
                          setSortByPlaceholder('Date');
                        }}>Date
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <div className="d-flex justify-content-end">
                  <div className="btn-group">
                    <div className="dropdown">
                      <button className="btn btn-lg btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Order: {order}
                      </button>
                      <div className="dropdown-menu p-0 bg-opacity-100 rounded-0">
                        <button className='btn btn-lg btn-secondary rounded-0 w-100' onClick={() => setOrder('ASC')}>ASC</button>
                        <button className='btn btn-lg btn-secondary rounded-0 w-100' onClick={() => setOrder('DESC')}>DESC</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {articles.map(article => (
            <Link to={'/articles/' + article.article_id} key={article.title} className="col-md-6">
              <Article article={article}/>
            </Link>
          ),
        )}
        {articlesCount > perPage && (
          <Pagination page={page}
                      setPage={setPage}
                      articlesCount={articlesCount}
                      perPage={perPage}
                      setPerPage={setPerPage}
                      pagesCount={pagesCount}
                      setPagesCount={setPagesCount}
          />
        )}
      </div>
    )
  );
}

export default Articles;