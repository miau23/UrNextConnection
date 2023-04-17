import React from 'react';
import {Login} from './Login';
import {Signup} from './Signup';
import {Home} from './Home';
import {HomePage} from './HomePage';
import {Connections} from './Connections';
import {Help} from './Help';
import {Profile} from './Profile';
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
