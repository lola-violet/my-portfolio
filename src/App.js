import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

// Bootstrap CDN
import 'bootstrap/dist/css/bootstrap.min.css';
// Site Components
import Header from './components/header/Header';
import Jumbo from './components/header/jumbo/Jumbo';
import HomePage from './components/body/pages/homePage/HomePage';
import AboutPage from './components/body/pages/aboutPage/AboutPage';
import ProjectPage from './components/body/pages/projectPage/ProjectPage';
import ResumePage from './components/body/pages/resumePage/ResumePage';
import ContactPage from './components/body/pages/contactPage/ContactPage';
import Footer from './components/footer/Footer';


function App() {
  return (
    // <div className='app'>
      <BrowserRouter>
        <Header />
        <Jumbo />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/projects' element={<ProjectPage />} />
          <Route path='/resume' element={<ResumePage />} />
          <Route path='/contact' element={<ContactPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    // </div>

  );
}

export default App;
