import React from 'react';
import {Login} from './Auth/Login';
import {Signup} from './Auth/Signup';
import {Home} from './Auth/Home';
import {HomePage} from './Main/HomePage';
import {Connections} from './Main/Connections';
import {Help} from './Main/Help';
import {Profile} from './Main/Profile';
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
               <Route path="/homePage" element={<HomePage/>}/>
               <Route path="/connections" element={<Connections/>}/>
               <Route path="/help" element={<Help/>}/>
               <Route path="/profile" element={<Profile/>}/>
            </Routes>                    
        </section>
      </div>
    </Router>
  );
}

export default App;
