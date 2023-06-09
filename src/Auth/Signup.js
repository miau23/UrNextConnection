import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import {  createUserWithEmailAndPassword } from 'firebase/auth';
import { ref, set } from "firebase/database";
import { auth, database} from '../firebase';
import Button from 'react-bootstrap/Button';
import { Row, Col } from 'react-bootstrap';
import logo from "./../Tools/UrNextConnectionLogo.png";
import './Login.css';
 
export const Signup = () => {
    const navigate = useNavigate();

    const navigateLogin = () => {
        navigate("/login");
    };
 
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [onyen, setOnyen] = useState('');
    const [gradYear, setGradYear] = useState('');
    let commList = {};

   function writeUserData(uid) {
        commList.email = email;
        set(ref(database, 'users/' + uid), {
            firstName: firstName,
            lastName: lastName,
            onyen: onyen,
            gradYear:gradYear,
            email:email,
            hidden: false,
            firstLogin: true,
            comm: commList
        }).then(() => {
            console.log('successfully added user');
        }).catch((error)=> {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage); 
        });
    }
 
    const onSubmit = async (e) => {
      e.preventDefault()
     
      await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            writeUserData(user.uid);
            navigate("/login")
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
            // ..
        });
 
   
    }
 
  return (
    <main >        
        <section>
            <Row>
                <Col align="center">
                    <div>                  
                        <img id = "smalllogo" src={logo} alt="UrNextConnection Logo"></img>      
                        <h1 className ="signupheader"> Create an Account</h1>                                                                            
                        <form>
                            <div>
                                <label className = "labels" htmlFor="first-name">
                                    First Name
                                </label>
                                <input
                                    id="first-name"
                                    name="firstname"
                                    type="firstname"                                    
                                    required
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}                                                                                  
                                    placeholder="First Name"
                                />
                            </div>
                            <div>
                                <label className = "labels" htmlFor="last-name">
                                    Last Name
                                </label>
                                <input
                                    id="last-name"
                                    name="lastname"
                                    type="lastname"                                    
                                    required   
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}                                                                                
                                    placeholder="Last Name"
                                />
                            </div>
                            <div>
                                <label className = "labels" htmlFor="onyen">
                                    Onyen
                                </label>
                                <input
                                    id="onyen"
                                    name="onyen"
                                    type="onyen"                                    
                                    required
                                    value={onyen}
                                    onChange={(e) => setOnyen(e.target.value)}                                                                                   
                                    placeholder="Onyen"
                                />
                            </div>
                            <div>
                                <label className = "labels" htmlFor="grad-year">
                                    Grad Year
                                </label>
                                <input
                                    id="grad-year"
                                    name="gradyear"
                                    type="gradyear"                                    
                                    required
                                    value={gradYear}
                                    onChange={(e) => setGradYear(e.target.value)}                                                                                   
                                    placeholder="Grad Year"
                                />
                            </div>                                                                                                              
                            <div>
                                <label className = "labels" htmlFor="email-address">
                                    Email address
                                </label>
                                <input
                                    id="email-address"
                                    type="email"
                                    label="Email address"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}  
                                    required                                    
                                    placeholder="Email address"                                
                                />
                            </div>

                            <div>
                                <label  className = "labels" htmlFor="password">
                                    Password
                                </label>
                                <input
                                    id="password"
                                    type="password"
                                    label="Create password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)} 
                                    required                                 
                                    placeholder="Password"              
                                />
                            </div>                                             
                            <div id = "verifybuttonholder">
                            <Button
                                className="verifybtn"
                                type="submit" 
                                onClick={onSubmit}                        
                            >  
                                Verify                                
                            </Button>
                            </div>                                           
                        </form>
                            <p className ="loginPrompt">Already have an account?</p>
                            <div className="Login">
                                <Button className = "login-btn" onClick={navigateLogin}>Login</Button>
                            </div>               
                    </div>
                                        
                </Col>
            </Row>
        </section>
    </main>
  )
}
