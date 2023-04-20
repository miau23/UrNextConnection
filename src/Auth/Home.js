import React from 'react';
import logo from "../Tools/UrNextConnectionLogo.png";
import './Home.css';
import {useNavigate} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { Row, Col } from 'react-bootstrap';


export const Home = () => {
    const navigate = useNavigate();

    const navigateSignUp = () => {
        navigate("/signup");
    };
    const navigateLogin = () => {
        navigate("/login");
    };
    return (
        <div>
            <Row className = "welcome">
                <Col align ="center">
                    <img id = "biglogo" src={logo} alt="UrNextConnection Logo"></img>
                    <div className="welcome-statement">
                        <h3 id="welcomeStatement">Connect with fellow UNC students and alumni in your city!</h3>
                    </div>
                    <div className="signup-button">
                        <Button className = "signupbtn" onClick={navigateSignUp}>Sign Up</Button>
                    </div>
                    <div className="already">
                        <p>Already have an account?</p>
                    </div>
                        <Button className = "loginbtn" onClick={navigateLogin}>Login</Button>
                </Col>
            </Row>
        </div>
    );
}