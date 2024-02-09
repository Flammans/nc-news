import React, { useEffect, useState } from 'react';
import './CreateCommentForm.scss';
import { createComment } from '../../utils/utils.js';
import { useSelector } from 'react-redux';
import Authorisation from '../Authorisation/Authorisation.jsx';
import Loader from '../Loader/Loader.jsx';

const CreateCommentForm = ({ articleId, comments, setComments }) => {

  const [commentBody, setCommentBody] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorAlert, setErrorAlert] = useState(null);
  const user = useSelector((state) => state.user.user);

  const formHandle = (e) => {
    e.preventDefault();
    setIsLoading(true);
    createComment(articleId, user.username, commentBody).then((response) => {
      if (response) {
        setComments([...comments, response]);
        setCommentBody('');
      } else {
        setErrorAlert('Error: Comment not published');
      }
      setIsLoading(false);
    });
  };

  return (user ? (
      <form className="form-block" onSubmit={formHandle}>
        <div className="row">
          <div className="col-12 mb-4">
            <div className="form-group">
              <label className="comment-label mb-2 fs-4" htmlFor="comment">Comment</label>
              <textarea
                id="comment"
                className="form-input"
                placeholder="Your text"
                value={commentBody}
                onChange={({ target }) => {
                  setCommentBody(target.value);
                }}
                required
              ></textarea>
            </div>
          </div>
          {isLoading ? (<Loader/>) : (<button className="btn btn-form">Comment</button>)}
          {errorAlert && (
            <div className="alert alert-danger" role="alert">{errorAlert}</div>
          )}
        </div>
      </form>
    ) : (
      <Authorisation/>
    )
  );
};

export default CreateCommentForm;