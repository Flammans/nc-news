import React from 'react';
import './Comment.css';
import FormattedDate from '../FormattedDate/FormattedDate.jsx';

const Comment = ({ comment }) => {

  return (<>
    <div className="comment">
      <span className="comment-author">{comment.author}</span>
      <span className="comment-body">{comment.body}</span>
      <span className="comment-date">
        <FormattedDate isoDateTime={comment.created_at}/>
      </span>
      <button className="comment-vote-btn">-</button>
      <span className="comment-votes">{comment.votes}</span>
      <button className="comment-vote-btn">+</button>
    </div>
  </>);
};

export default Comment;