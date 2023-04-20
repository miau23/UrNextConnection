import React from 'react';
import {NavBar} from '../Tools/NavBar'
import { Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import './Help.css';


export const Help = () => {
    return (
    <div>
        <NavBar></NavBar>
        <Row>
            <Col align="center">
                <h1 className = "header-1"> FAQ</h1>
                <h2 className = "header-2"> What is UrNextConnection?</h2>
                <h3 className = "header-3"> UrNextConnection is a website that allows current and graduated students of UNC Chapel Hill to find other UNC people in their city! Connect with other Tar Heels to get recommendations of things to do in your city, find potential roommates and friends, help newcomers navigate the area, and more.</h3>
                <h2 className = "header-2">How long does verification usually take?</h2>
                <h3 className = "header-3">Verification is usually instantaneous when using a UNC email. If you are an alumni, we should usually verify you in a matter of minutes but this can sometimes take up to 2 days.</h3>
                </Col>
        </Row>
        <Row>
            <Col align="right">
                <h2 className = "header-2" id="seemore"> see more</h2>
            </Col>
        </Row>
        <Row>
            <Col align="left" className ="contact-form">
            <h1 className = "header-1">Contact Us</h1>
                <form>                                           
                    <div>
                        <label className = "labels" htmlFor="Name">
                            Name
                        </label>
                        <input
                            id="name"
                            name="name"
                            type="name"                                    
                            required                                                                                
                        />
                    </div>
                    <div>
                        <label className = "labels" htmlFor="Email">
                            Email
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"                                    
                            required                                                                                
                        />
                    </div>
                    <div>
                        <label className = "labels" htmlFor="Subject">
                            Subject
                        </label>
                        <input
                            id="subject"
                            name="subject"
                            type="subject"                                    
                            required                                                                                
                        />
                    </div>
                    <div>
                        <label className = "labels" htmlFor="Message">
                            Message
                        </label>
                        <input
                            id="message"
                            name="message"
                            type="message"                                    
                            required                                                                                
                        />
                    </div>
                                        
                    <div className ="sendbtnholder">
                        <Button className="send-button">  
                            Send!                                                                  
                        </Button>
                    </div>                               
                </form>

            </Col>
        </Row>
    </div>
    )
}