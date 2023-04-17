import React, {useState} from 'react';
import {  signInWithEmailAndPassword} from 'firebase/auth';
import { auth } from './firebase';
import { NavLink, useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import { Row, Col } from 'react-bootstrap';
import logo from "./UrNextConnectionLogo.png";
import './Login.css';
 
export const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
       
    const onLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            navigate("/homePage")
            console.log(user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
        });
       
    }
 
    return(
        <>
            <main >        
                <section>
                    <Row>
                        <Col align="center">
                            <div>
                                <img id = "smalllogo" src={logo} alt="UrNextConnection Logo"></img>                                            
                                <h3 className ="loginheader"> Returning User? </h3>                       
                                                            
                                <form>                                           
                                    <div>
                                        <label className = "labels" htmlFor="email-address">
                                            Email address
                                        </label>
                                        <input
                                            id="email-address"
                                            name="email"
                                            type="email"                                    
                                            required                                                                                
                                            placeholder="Email address"
                                            onChange={(e)=>setEmail(e.target.value)}
                                        />
                                    </div>

                                    <div>
                                        <label className = "labels" htmlFor="password">
                                            Password
                                        </label>
                                        <input
                                            id="password"
                                            name="password"
                                            type="password"                                    
                                            required                                                                                
                                            placeholder="Password"
                                            onChange={(e)=>setPassword(e.target.value)}
                                        />
                                    </div>
                                                        
                                    <div id="loginbuttonholder">
                                        <Button className="loginpagebtn"                                    
                                            onClick={onLogin}>      
                                            Login                                                                  
                                        </Button>
                                    </div>                               
                                </form>

                                <div className = "signUp">
                                    <NavLink to="/signup">
                                        Sign up
                                    </NavLink>
                                </div>            
                            </div>
                        </Col>
                    </Row>
                </section>
            </main>
        </>
    )
}