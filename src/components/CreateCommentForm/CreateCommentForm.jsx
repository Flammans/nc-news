import React, { useEffect, useState } from 'react';
import './CreateCommentForm.scss';

const CreateCommentForm = () => {

  return (
    <form className="form-block">
      <div className="row">
        <div className="col-12 mb-4">
          <div className="form-group">
            <input className="form-input" type="text" placeholder="Your name" />
          </div>
        </div>
        <div className="col-12 mb-4">
          <div className="form-group">
            <textarea className="form-input" required="" placeholder="Your text"></textarea>
          </div>
        </div>
        <button className="btn btn-primary">submit</button>
      </div>
    </form>
  )

};

export default CreateCommentForm;