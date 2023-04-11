import React, {useState} from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {  createUserWithEmailAndPassword  } from 'firebase/auth';
import { auth } from './firebase';
 
export const Signup = () => {
    const navigate = useNavigate();
 
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
 
    const onSubmit = async (e) => {
      e.preventDefault()
     
      await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user);
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
            <div>
                <div>                  
                    <h1> Sign Up </h1>                                                                            
                    <form>
                        <div>
                            <label htmlFor="first-name">
                                First Name
                            </label>
                            <input
                                id="first-name"
                                name="firstname"
                                type="firstname"                                    
                                required                                                                                
                                placeholder="First Name"
                            />
                        </div>
                        <div>
                            <label htmlFor="last-name">
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
                            <label htmlFor="onyen">
                                Onyen
                            </label>
                            <input
                                id="onyen"
                                name="onyen"
                                type="onyen"                                    
                                required                                                                                
                                placeholder="Onyen"
                            />
                        </div>
                        <div>
                            <label htmlFor="grad-year">
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
                            <label htmlFor="email-address">
                                Email address
                            </label>
                            <input
                                type="email"
                                label="Email address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}  
                                required                                    
                                placeholder="Email address"                                
                            />
                        </div>

                        <div>
                            <label htmlFor="password">
                                Password
                            </label>
                            <input
                                type="password"
                                label="Create password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)} 
                                required                                 
                                placeholder="Password"              
                            />
                        </div>                                             
                        
                        <button
                            type="submit" 
                            onClick={onSubmit}                        
                        >  
                            Verify                                
                        </button>
                                                                     
                    </form>
                   
                    <p>
                        Already have an account?{' '}
                        <NavLink to="/login" >
                             Login
                        </NavLink>
                    </p>                   
                </div>
            </div>
        </section>
    </main>
  )
}
