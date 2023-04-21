import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap'
import logo from "./dark-blue-logo.png";
import './NavBar.css';

export const NavBar = () => {
    return (
    <div>
       <Navbar expand="lg" className = "nav-bar">
            <LinkContainer to="/homePage">
                <Navbar.Brand>
                    <img id="nav-logo" src={logo} alt="UrNextConnection Logo"></img>  
                </Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <LinkContainer to="/homePage">
                        <Nav.Link className = "nav-titles"> Explore </Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/connections">
                        <Nav.Link className = "nav-titles"> Connections </Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/profile">
                        <Nav.Link className = "nav-titles"> Profile </Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/help"> 
                        <Nav.Link className = "nav-titles-help"> Help </Nav.Link>
                    </LinkContainer>
                </Nav>
            </Navbar.Collapse>
       </Navbar>
    </div>
    )
}