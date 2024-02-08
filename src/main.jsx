import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import authStore from './stores/auth.store.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={authStore}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
)
