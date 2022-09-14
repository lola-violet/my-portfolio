import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

// Bootstrap CDN
import 'bootstrap/dist/css/bootstrap.min.css';
// Site Components
import MainContainer from './components/mainContainer/MainContainer';
import Jumbo from './components/header/jumbo/Jumbo';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

import HomePage from './components/body/pages/homePage/HomePage';
import ProjectPage from './components/body/pages/projectPage/ProjectPage';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Jumbo />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/projects' element={<ProjectPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>

  );
}

export default App;
