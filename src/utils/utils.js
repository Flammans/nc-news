import axios from 'axios';

export const urlRegex =
  /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?$/i;
export const userNameRegex = /^[A-Za-z0-9]+$/;
export const userNameRegexFindNumber = /[0-9]/;
export const userNameRegexFindLetter = /[A-Za-z]/;

export const API = 'https://api.nc-news.viktorkhasenko.com/api/';

export const fetchUserByUserName = (username) => {
  return axios.get(`${API}users/${encodeURIComponent(username)}`)
    .then((response) => {
      return response.data.user;
    }).catch((error)=>{
      console.log('Error fetching data', error);
    })
};

export const createNewUser = (userName, userAvatar) => {
  const userData = {
    username: userName,
    avatar_url: userAvatar
  }
  return axios.post(API + 'users', userData).then((response) => {
    return response.data.user;
  }).catch((error)=>{
    console.log('Error creating new user', error);
    return null;
  })
}

export const fetchArticles = (query = '') => {
  return axios.get(`${API}articles?title=${encodeURIComponent(query)}`)
    .then((response) => {
      return response.data.articles;
    }).catch((error)=>{
      console.log('Error fetching data', error);
    })
};

export const fetchArticleByArticleId = (article_id) => {
  return axios.get(`${API}articles/${encodeURIComponent(article_id)}`)
    .then((response) => {
      return response.data.article;
    }).catch((error)=>{
      console.log('Error fetching data', error);
    })
};