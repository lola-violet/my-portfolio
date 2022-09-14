import React, { useState } from "react";

// Main Container SubComponents
import Header from '../header/Header';
import Jumbo from "../header/jumbo/Jumbo";
import HomePage from "../body/pages/homePage/HomePage";
import ProjectPage from "../body/pages/projectPage/ProjectPage";
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
        if (currentPage === 'About') {
            return <ProjectPage />
        }
        if (currentPage === 'ProjectPage') {
            return <ProjectPage />;
        }
    }
    // Handle Page Change
    const handlePageChange = (page) => setCurrentPage(page);

    return(
        <main>
            <Header currentPage={currentPage} handlePageChange={handlePageChange} />

            <Jumbo />
            <div className="mainContain">
            {renderPage()}
            </div>
        </main>
    )
}