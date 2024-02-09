import React, { useState } from 'react';
import './Pagination.scss';

const Pagination = ({page, perPage, articlesCount, setPerPage, pagesCount, setPage}) => {

  const handleNextPage = () => {
    setPage(pagesCount > page ? page + 1 : page);
  }

  const handlePrevPage =() => {
    setPage(page > 1 ? page - 1 : page);
  }

  const handleAllPages = () => {
    setPerPage(articlesCount);
    setPage(1);
  }

  return (
    <ul className="pagination">
      <li className={'page-item  ' + (page === 1 ? 'disabled' : '')}>
        <button className="page-link" tabIndex="-1" onClick={() => handlePrevPage()}>Previous</button>
      </li>
      <li className="page-item active">
        <span className="page-link">{page} / {pagesCount}</span>
      </li>
      <li className={'page-item ' + (page === pagesCount ? 'disabled' : '')}>
        <button className="page-link" onClick={() => handleNextPage()}>Next</button>
      </li>
      <li className={'page-item'}>
        <button className="page-link" onClick={() => handleAllPages()}>All ({articlesCount} Articles)
        </button>
      </li>
    </ul>
  );
}

export default Pagination;