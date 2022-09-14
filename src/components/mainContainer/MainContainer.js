import React, { useState } from "react";

// Main Container SubComponents
import Header from '../header/Header';
import Jumbo from "../header/jumbo/Jumbo";
import HomePage from "../body/pages/homePage/HomePage";
import AboutPage from "../body/pages/aboutPage/AboutPage";
import ProjectPage from "../body/pages/projectPage/ProjectPage";
import ResumePage from "../body/pages/resumePage/ResumePage";
import ContactPage from "../body/pages/contactPage/ContactPage";
import Footer from "../footer/Footer";
// CSS
import './main.css';


export default function MainContainer() {
    // Current Page State
    const [currentPage, setCurrentPage] = useState('HomePage');
    // Render Page State
    const renderPage = () => {
        if (currentPage === 'HomePage') {
            return <HomePage />;
        };
        if (currentPage === 'AboutPage') {
            return <AboutPage />
        };
        if (currentPage === 'ProjectPage') {
            return <ProjectPage />;
        };
        if (currentPage === 'ResumePage') {
            return <ResumePage />;
        };
        if (currentPage === 'ContactPage') {
            return <ContactPage />;
        }
    };
    // Handle Page Change
    const handlePageChange = (page) => setCurrentPage(page);

    return(
        <main>
            <Header currentPage={currentPage} handlePageChange={handlePageChange} />
            <Jumbo />
            <div className="mainContain">
                {renderPage()}
            </div>
            <Footer />
        </main>
    )
}