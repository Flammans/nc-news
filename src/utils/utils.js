import axios from 'axios';

export const urlRegex =
  /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?$/i;
export const userNameRegex = /^[A-Za-z0-9]+$/;
export const userNameRegexFindNumber = /[0-9]/;
export const userNameRegexFindLetter = /[A-Za-z]/;

const api = axios.create({
  baseURL: 'https://api.nc-news.viktorkhasenko.com/api/',
  timeout: 90_000,
});

export const fetchUserByUserName = (username) => {
  return api.get(`users/${encodeURIComponent(username)}`)
    .then((response) => {
      return response.data.user;
    }).catch((error) => {
      console.log('Error fetching data', error);
    });
};

export const createNewUser = (userName, userAvatar) => {
  const userData = {
    username: userName,
    avatar_url: userAvatar,
  };
  return api.post('users', userData).then((response) => {
    return response.data.user;
  }).catch((error) => {
    console.log('Error creating new user', error);
    return null;
  });
};

export const fetchArticles = (params = {}) => {

  return api.get(`articles`, {
    params,
  })
    .then((response) => {
      return {
        articles: response.data.articles,
        total_count: response.data.total_count,
      };
    }).catch((error) => {
      console.log('Error fetching data', error);
    });
};

export const fetchArticleByArticleId = (article_id) => {
  return api.get(`articles/${encodeURIComponent(article_id)}`)
    .then((response) => {
      return response.data.article;
    }).catch((error) => {
      console.log('Error fetching data', error);
    });
};

export const fetchCommentsByArticleId = (article_id) => {
  return api.get(`articles/${encodeURIComponent(article_id)}/comments`)
    .then((response) => {
      return response.data.comments;
    }).catch((error) => {
      console.log('Error fetching data', error);
    });
};

export const updateArticleVote = (article_id, inc_votes) => {
  return api.patch(`articles/${encodeURIComponent(article_id)}`, { inc_votes })
    .then((response) => {
      return response.data.article;
    }).catch((error) => {
      console.log('Error update data', error);
    });
};

export const updateCommentVote = (comment_id, inc_votes) => {
  return api.patch(`comments/${encodeURIComponent(comment_id)}`, { inc_votes })
    .then((response) => {
      return response.data.comment;
    }).catch((error) => {
      console.log('Error update data', error);
    });
};

export const createComment = (article_id, username, body) => {
  return api.post(`articles/${encodeURIComponent(article_id)}/comments`, { username, body })
    .then((response) => {
      return response.data.comment;
    }).catch((error) => {
      console.log('Error create new comment', error);
    });
};

export const deleteComment = (comment_id) => {
  return api.delete(`comments/${encodeURIComponent(comment_id)}`)
    .then((response) => {
      return response.status;
    }).catch((error) => {
      console.log('Error update data', error);
    });
};
