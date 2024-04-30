import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '../src/styles/index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Projects from './sections/Projects';
import BlogPage from './sections/Blog';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/blog/:slug' element={<BlogPage />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
