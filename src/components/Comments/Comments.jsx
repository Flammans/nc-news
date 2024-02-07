import React, { useEffect, useState } from 'react';
import './Comments.css';
import { fetchCommentsByArticleId } from '../../utils/utils.js';
import Comment from '../Comment/Comment.jsx';

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
      <ul className={'comments'}>
        {comments.map(comment => (
            <li key={comment.comment_id}>
              <Comment comment={comment}/>
            </li>
          )
        )}
      </ul>)
    }
  </>);
};

export default Comments;