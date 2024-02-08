import React, { useEffect, useState } from 'react';
import './Comments.css';
import { fetchCommentsByArticleId } from '../../utils/utils.js';
import Comment from '../Comment/Comment.jsx';
import CreateCommentForm from '../CreateCommentForm/CreateCommentForm.jsx';

const Comments = ({ articleId }) => {

  const [isLoading, setIsLoading] = useState(true);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetchCommentsByArticleId(articleId).then((items) => {
      setComments(items);
      setIsLoading(false);
    });
  }, []);

  return (<>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="container">
          <div className="be-comment-block">
            <h3 className="comments-title">Comments ({comments.length})</h3>

            {comments.map(comment => (
              <Comment comment={comment}  key={comment.comment_id}/>
              )
            )}

            <CreateCommentForm />
          </div>
        </div>
        )
      }
    </>
  );
};

export default Comments;