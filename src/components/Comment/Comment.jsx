import React, { useState } from 'react';
import './Comment.scss';
import FormattedDate from '../FormattedDate/FormattedDate.jsx';
import { deleteComment, updateCommentVote } from '../../utils/utils.js';
import { useSelector } from 'react-redux';

const Comment = ({ comment, removeComment }) => {

  const user = useSelector((state) => state.user.user);
  const [votes, setVotes] = useState(comment.votes);

  const handleVote = (inc_votes) => {
    updateCommentVote(comment.comment_id, inc_votes)
        .then(() => {
          setVotes(votes + inc_votes);
        });
    };

  const handleDelete = () => {
    deleteComment(comment.comment_id).then((response) => {
      if(response){
        removeComment(comment.comment_id);
      }
    })
  };

  return (<>
    <div className="be-comment mb-5">
      <div className="be-img-comment">
        <a href="#">
          <img src={`https://api.multiavatar.com/${comment.author}.svg`} alt="" className="be-ava-comment"/>
        </a>
      </div>
      <div className="be-comment-content">
        <div className="be-comment-header">
          <div className="be-comment-name"><b>{comment.author}</b></div>
          <div className="be-comment-date">
            <span className="be-comment-time">
				      <FormattedDate isoDateTime={comment.created_at}/>
				    </span>
            { comment.author === user?.username && (
              <button className="be-comment-delete" onClick={() => handleDelete()}>delete</button>
            )}
          </div>
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