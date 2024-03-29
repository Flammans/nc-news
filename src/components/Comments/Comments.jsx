import React, { useEffect, useState } from 'react';
import './Comments.css';
import { fetchCommentsByArticleId } from '../../utils/utils.js';
import Comment from '../Comment/Comment.jsx';
import CreateCommentForm from '../CreateCommentForm/CreateCommentForm.jsx';
import comment from '../Comment/Comment.jsx';
import Loader from '../Loader/Loader.jsx';

const Comments = ({ articleId }) => {

  const [isLoading, setIsLoading] = useState(true);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetchCommentsByArticleId(articleId).then((items) => {
      if(items){
        setComments(items.reverse());
      }
    }).finally(() => {
      setIsLoading(false);
    })
  }, []);

  const removeComment = (commentId) => {
    setComments(comments.filter(comment => comment.comment_id !== commentId));
  }

  return (<>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="container">
          <div className="be-comment-block">
            <h3 className="comments-title">Comments ({comments.length})</h3>

            {comments.map(comment => (
              <Comment comment={comment}  key={comment.comment_id} removeComment={removeComment} />
              )
            )}

            <CreateCommentForm articleId={articleId} comments={comments} setComments={setComments} />
          </div>
        </div>
        )
      }
    </>
  );
};

export default Comments;