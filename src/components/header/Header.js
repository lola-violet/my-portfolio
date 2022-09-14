import React from "react";
// Header SubComponents

// Bootstrap Components
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// CSS
import './header.css';

export default function Header({ currentPage, handlePageChange }) {
    return(
        <header className="headerBlock">
            <Navbar expand="lg" fixed="top" bg="black" variant="dark" >
                <Container className="container-fluid">
                    {/* <Navbar.Brand href="#home">Lola Applegate</Navbar.Brand> */}
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" >
                        <Nav className="me-auto customNav">
                            <Nav.Link href="/" 
                                className={currentPage === 'Home' ? 'customNavLink nav-active' : 'customNavLink'}
                                onClick={() => handlePageChange('Home')}
                                >Home
                                </Nav.Link>
                            <Nav.Link href="/about" 
                                className={currentPage === 'About' ? 'customNavLink nav-active' : 'customNavLink'}
                                onClick={() => handlePageChange('About')}
                                >About</Nav.Link>
                            <Nav.Link href="/projects" 
                                className={currentPage === 'Projects' ? 'customNavLink nav-active' : 'customNavLink'}
                                onClick={() => handlePageChange('Projects')}
                                >Projects</Nav.Link>
                            <Nav.Link href="/resume" 
                                className={currentPage === 'Resume' ? 'customNavLink nav-active' : 'customNavLink'}
                                onClick={() => handlePageChange('Resume')}
                                >Resume</Nav.Link>
                            <Nav.Link href="/contact" 
                                className={currentPage === 'Contact' ? 'customNavLink nav-active' : 'customNavLink'}
                                onClick={() => handlePageChange('Contact')}
                                >Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}