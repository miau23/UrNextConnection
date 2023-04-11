import React from 'react';
import logo from "./UrNextConnectionLogo.png";
import './Home.css';

export const Home = () => {
    return (
        <div>
            <img src={logo} alt="UrNextConnection Logo"></img>
            <div className="welcome-statement">
                <h3>Connect with fellow UNC students and alumni in your city!</h3>
            </div>
            <button className = "signupbtn">Sign Up</button>
            <div className="already">
                <p>Already have an account?</p>
            </div>
                <button className = "loginbtn">Login</button>
        </div>
    );
}