import React from 'react';
import './Topics.scss';
import Articles from '../Articles/Articles.jsx';
import { useParams } from 'react-router-dom';

const Topics = () => {

  const { topic } = useParams();

  return (
    <div className={'main'}>
      <h1 className={'page-title  mb-4'}>Topic: {topic}</h1>
      <Articles />
    </div>
  );
}

export default Topics;