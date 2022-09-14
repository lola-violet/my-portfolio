import React from "react";
// Bootstrap Components
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
// CSS
import './menu.css';

export default function Menu() {
    return(
        <Navbar expand="lg" fixed="top" bg="black" variant="dark" >
            <Container className="container-fluid">
                {/* <Navbar.Brand href="#home">Lola Applegate</Navbar.Brand> */}
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" >
                    <Nav className="me-auto customNav">
                        <Nav.Link href="#home" className="d-flex customNavLink">Home</Nav.Link>
                        <Nav.Link href="#about" className="d-flex customNavLink">About</Nav.Link>
                        <Nav.Link href="#projects" className="d-flex customNavLink">Projects</Nav.Link>
                        <Nav.Link href="#contact" className="d-flex customNavLink">Contact</Nav.Link>
                        <Nav.Link href="#resume" className="d-flex customNavLink">Resume</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}