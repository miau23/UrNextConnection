import React, {useState} from 'react';
import {NavBar} from '../Tools/NavBar';
import Button from 'react-bootstrap/Button';
import { Row, Col } from 'react-bootstrap';
import './Profile.css';
import mia from "../Tools/Uitz_Mia_photojpeg.jpg";
import { useNavigate } from 'react-router-dom';



export const EditProfile = () => {
    const navigate = useNavigate();
    const onSave = (e) =>{
        e.preventDefault();
        navigate("/profile");
    }

    return (
        <div>
            <NavBar></NavBar>
            <Row>
                <Col align="center">
                    <h1 className ='profile'> Edit Profile </h1>
                    <img id = "profilepic" src={mia} alt="Profile Photo"></img> 
                    <div id="padding"></div>                                           
                        <form>
                                <div>
                                    <label className = "label" htmlFor="first-name">
                                        First Name
                                    </label>
                                    <input
                                        id="first-name"
                                        name="firstname"
                                        type="firstname"                                    
                                        required
                                    />
                                </div>
                                <div>
                                    <label className = "label" htmlFor="last-name">
                                        Last Name
                                    </label>
                                    <input
                                        id="last-name"
                                        name="lastname"
                                        type="lastname"                                    
                                        required   
                                        placeholder="Last Name"
                                    />
                                </div>
                                <div>
                                    <label className = "label" htmlFor="pronouns">
                                        Pronouns
                                    </label>
                                    <input
                                        id="pronouns"
                                        name="pronouns"
                                        type="pronouns"                                    
                                        required
                                        placeholder="pronouns"
                                    />
                                </div>
                                <div>
                                    <label className = "label" htmlFor="city">
                                        City
                                    </label>
                                    <input
                                        id="city"
                                        name="city"
                                        type="city"                                    
                                        required
                                        placeholder="city"
                                    />
                                </div>
                                <div>
                                    <label className = "label" htmlFor="grad-year">
                                        Grad Year
                                    </label>
                                    <input
                                        id="grad-year"
                                        name="gradyear"
                                        type="gradyear"                                    
                                        required
                                        placeholder="Grad Year"
                                    />
                                </div>                                                                                                              
                                <div>
                                    <label className = "label" htmlFor="email-address">
                                        Email address
                                    </label>
                                    <input
                                        id="email-address"
                                        type="email"
                                        label="Email address"
                                        required                                    
                                        placeholder="Email address"                                
                                    />
                                </div>

                                <div>
                                    <label  className = "label" htmlFor="comm">
                                        Preferred Method of Communication
                                    </label>
                                    <input
                                        id="comm"
                                        type="comm"
                                        label="comm"
                                        required                                 
                                        placeholder="Preferred Method of Communication"              
                                    />
                                </div>
                                <div>
                                    <label  className = "label" htmlFor="tags">
                                        Tags
                                    </label>
                                    <input
                                        id="tags"
                                        type="tags"
                                        label="tags"
                                        required                                 
                                        placeholder="tags"              
                                    />
                                </div>
                                <div>
                                    <label  className = "label" htmlFor="bio">
                                        Bio
                                    </label>
                                    <input
                                        id="bio"
                                        type="bio"
                                        label="bio"
                                        required                                 
                                        placeholder="Bio"              
                                    />
                                </div>                                                 
                                <div id = "verifybuttonholder">
                                <Button
                                    className='edit-profile-btn'
                                    onClick={onSave}>                             
                                    Save Profile                                
                                </Button>
                                </div>
                                <h2>no longer need your account?</h2>
                                <h3> hide my profile from other users</h3>
                                <p>toggle place holder</p>   
                                <h3>I want to permanently delete my account</h3>  
                                <Button className = 'blocked-users-btn'> Delete Account </Button> 
                                <div id="bottom"></div>                                    
                        </form>
                        
                </Col>
            </Row>
        </div>
    )
}