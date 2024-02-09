import { Route, Routes } from 'react-router-dom';
import './utils/utils.css'
import './App.css'
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import CreateArticle from './components/CreateArticle/CreateArticle.jsx';
import Authorisation from './components/Authorisation/Authorisation.jsx';
import Main from './components/Main/Main.jsx';
import Article from './components/Article/Article.jsx';
import Profile from './components/Profile/Profile.jsx';
import Topics from './components/Topics/Topics.jsx';
import NotFoundPage from './components/NotFoundPage/NotFoundPage.jsx';

function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/" element={<Main />} />
        <Route path="/new" element={<CreateArticle />}/>
        <Route path="/log-in" element={<Authorisation />}/>
        <Route path="/articles/:article_id" element={<Article />}/>
        <Route path="/topics/:topic" element={<Topics />}/>
        <Route path="/profile/:username" element={<Profile />}/>
      </Routes>
      <Footer />
    </>
  )
}

export default App
