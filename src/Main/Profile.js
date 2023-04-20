import React from 'react';
import {NavBar} from '../Tools/NavBar';
import Button from 'react-bootstrap/Button';
import { Row, Col } from 'react-bootstrap';
import mia from "../Tools/Uitz_Mia_photojpeg.jpg";
import './Profile.css';



export const Profile = () => {
    return (
    <div>
        <NavBar></NavBar>
        <Row>
            <Col align='center'>
            <h1 className ='profile'> Profile </h1>
            <img id = "profilepic" src={mia} alt="Profile Photo"></img> 
            <div id="padding"></div>                                           
            <Button className = 'edit-profile-btn'> Edit Profile </Button>
            <div id="padding">
            </div>
            <h2 className ='label'> Name </h2>
            <div>
                <h3 className = 'text'> Mia Uitz</h3>
            </div>
            <h2 className ='label'>Pronouns</h2>
            <div>
                <h3 className = 'text'>she/her/hers</h3>
            </div>
            <h2 className ='label'>City</h2>
            <div>
                <h3 className = 'text'>New York, NY</h3>
            </div>
            <h2 className ='label'> Grad Year</h2>
            <div>
                <h3 className = 'text'> 2023</h3>
            </div>
            <h2 className ='label'> Email </h2>
            <div>
                <h3 className = 'text'> mia@live.unc.edu</h3>
            </div>
            <h2 className ='label'> Preferred Method(s) of Communication</h2>
            <Row>
                <Col align= 'center'>
                    <h3 className = 'text tags pref'> Email (mia@live.unc.edu)</h3>
                </Col>
            </Row>
            <Row>
                <Col align= 'center'>
                    <h3 className = 'text tags pref'> Instagram (@Mia)</h3>
                </Col>
             </Row>
            <h2 className ='label'> Tags </h2>
            <Row>
                <Col>
                    <h3 className = 'text tags'> Coffee</h3>
                </Col>
                <Col>
                    <h3 className = 'text tags'> Gym</h3>
                </Col>
                <Col>
                    <h3 className = 'text tags'> Looking for Recommendations</h3>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h3 className = 'text tags'> SWE</h3>
                </Col>
                <Col>
                    <h3 className = 'text tags'> Basketball</h3>
                </Col>
                <Col>
                    <h3 className = 'text tags'> Women</h3>
                </Col>
            </Row>
            <h2 className ='label'> Bio </h2>
            <div>
                <h3 className = 'text'> You haven't written a bio yet</h3>
            </div>
            <div id="padding">
            </div>
            <Button className = 'blocked-users-btn'> View Blocked Users </Button>
            <div id="padding">
            </div>
            <Button className = 'logout-btn'> Logout </Button>
            <div id="bottom"></div>
            </Col>
        </Row>
    </div>
    )
}