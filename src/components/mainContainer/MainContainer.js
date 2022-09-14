import React, { useState } from "react";

// Main Container SubComponents
import Header from '../header/Header';
import Jumbo from "../header/jumbo/Jumbo";
import HomePage from "../body/pages/homePage/HomePage";


export default function MainContainer() {
    // Current Page State
    const [currentPage, setCurrentPage] = useState('HomePage');
    // Render Page State
    const renderPage = () => {
        if (currentPage === 'HomePage') {
            return <HomePage />;
        };
    }
    // Handle Page Change
    const handlePageChange = (page) => setCurrentPage(page);

    return(
        <>
            <Header currentPage={currentPage} handlePageChange={handlePageChange} />
            <Jumbo />
            <div className="bodyBlock">
                {renderPage()}
            </div>
        </>
    )
}