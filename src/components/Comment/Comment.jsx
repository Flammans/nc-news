import React, { useState } from 'react';
import './Comment.scss';
import FormattedDate from '../FormattedDate/FormattedDate.jsx';
import { updateCommentVote } from '../../utils/utils.js';

const Comment = ({ comment }) => {


  const [votes, setVotes] = useState(comment.votes);

  const handleVote = (inc_votes) => {
    updateCommentVote(comment.comment_id, inc_votes)
        .then(() => {
          setVotes(votes + inc_votes);
        });
    };

  return (<>
    <div className="be-comment">
      <div className="be-img-comment">
        <a href="#">
          <img src={`https://api.multiavatar.com/${comment.author}.svg`} alt="" className="be-ava-comment"/>
        </a>
      </div>
      <div className="be-comment-content">
        <div className="be-comment-header">
          <span className="be-comment-name"><a href="#">{comment.author}</a></span>
          <span className="be-comment-time">
				  <FormattedDate isoDateTime={comment.created_at}/>
				</span>
        </div>
        <div className="be-comment-body">
          <p className="be-comment-text">{comment.body}</p>
          <div className="be-comment-vote">
            <button className="be-comment-vote-btn" onClick={() => handleVote(-1)}>-</button>
            <span className="be-comment-votes">{votes}</span>
            <button className="be-comment-vote-btn" onClick={() => handleVote(1)}>+</button>
          </div>
        </div>
      </div>
    </div>
  </>);
};

export default Comment;