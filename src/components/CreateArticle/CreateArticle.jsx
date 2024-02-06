import React, { useState } from 'react';
import './CreateArticle.css';

const CreateArticle = () => {

  const [articleName, setArticleName] = useState("");
  const [articleTopic, setArticleTopic] = useState("");
  const [articleDescription, setArticleDescription] = useState("");
  const [articleImgUrl, setArticleImgUrl] = useState("");
  const [articleSubmitted, setArticleSubmitted] = useState(false);

  const [topics, setTopics] = useState([]);


  const handleSubmit = (event) => {
    event.preventDefault();
    setArticleSubmitted(true);
  }


  return (
    <div className={"create-article"}>
      {articleSubmitted ? <p>Thank you for posting an new article!</p> : null}
      <h2>Create New Article</h2>
      <form onSubmit={handleSubmit}>
        <label>Article Name:</label>
        <input
          className={'base-input'}
          type="text"
          value={articleName}
          onChange={({ target }) => {
            setArticleName(target.value);
          }}
          required
        ></input>
        <label>Description:</label>
        <input
          className={'base-input'}
          type="text"
          value={articleDescription}
          onChange={({ target }) => {
            setArticleDescription(target.value);
          }}
          required
        ></input>
        <label>Image URL:</label>
        <input
          className={'base-input'}
          type="text"
          value={articleImgUrl}
          onChange={({ target }) => {
            setArticleImgUrl(target.value);
          }}
          required
        ></input>
        <label>Category:</label>
        <select
          className={'base-input'}
          value={articleTopic}
          onChange={({ target }) => {
            setArticleTopic(target.value);
          }}
        >
          {topics.map((topic) => (
            <option key={topic.slug}>{topic.slug}</option>
          ))}
        </select>
        <button type="submit" className={'base-button'}>Post</button>
      </form>
    </div>
  );
}

export default CreateArticle;