import React, {useState, useEffect} from 'react';
import {Login} from './Login';
import {Signup} from './Signup';
import {Home} from './Home';
import './App.css';
import { BrowserRouter as Router} from 'react-router-dom';
import {Routes, Route} from 'react-router-dom';


function App() {
  return (
    <Router>
      <div>
        <section>                              
            <Routes>                                                                        
               <Route path="/" element={<Home/>}/>
               <Route path="/signup" element={<Signup/>}/>
               <Route path="/login" element={<Login/>}/>
            </Routes>                    
        </section>
      </div>
    </Router>
  );
}

export default App;
