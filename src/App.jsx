import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './utils/utils.css'
import './App.css'
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import CreateArticle from './components/CreateArticle/CreateArticle.jsx';
import Authorisation from './components/Authorisation/Authorisation.jsx';
import { fetchArticles } from './utils/utils.js';
import Main from './components/Main/Main.jsx';
import Article from './components/Article/Article.jsx';

function App() {
  const [user, setUser] = useState([]);

  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/new" element={<CreateArticle />}/>
        <Route path="/log-in" element={<Authorisation user={user} setUser={setUser}/>}/>
        <Route path="/articles/:article_id" element={<Article />}/>
      </Routes>
      <Footer />
    </>
  )
}

export default App
