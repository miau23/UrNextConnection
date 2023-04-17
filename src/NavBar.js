import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap'
import logo from "./UrNextConnectionLogo.png";

export const NavBar = () => {
    return (
    <div>
       <Navbar expand="lg">
            <LinkContainer to="/homePage">
                <Navbar.Brand>
                    <img src={logo} alt="UrNextConnection Logo"></img>  
                </Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <LinkContainer to="/homePage">
                        <Nav.Link> Explore </Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/connections">
                        <Nav.Link> Connections </Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/profile">
                        <Nav.Link> Profile </Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/help"> 
                        <Nav.Link> Help </Nav.Link>
                    </LinkContainer>
                </Nav>
            </Navbar.Collapse>
       </Navbar>
    </div>
    )
}