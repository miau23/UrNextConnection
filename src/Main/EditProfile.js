import React, {useState, useEffect} from 'react';
import {NavBar} from '../Tools/NavBar';
import Button from 'react-bootstrap/Button';
import { Row, Col } from 'react-bootstrap';
import { get, child , ref, getDatabase, onValue} from 'firebase/database';
import './Profile.css';
import './EditProfile.css';
import { useNavigate } from 'react-router-dom';



export const EditProfile = () => {
    const navigate = useNavigate();
    const [userProfile, setUserProfile] = useState([]);
    const database = ref(getDatabase());
    useEffect(() => {
        getProfile();
    }, []);

    //redundant so get rid of later to make more concise by sending info as a prop or something...idk 
    function getProfile(){
        get(child(database, 'users/'+ 'mia23'))
            .then((snapshot) => {
                let tempProfile = [];
                if(snapshot.exists()){
                    console.log(snapshot.val())
                    let keyName = snapshot.key;
                    let data = snapshot.val();
                    tempProfile.push({"key": keyName, "data": data});
                    setUserProfile(tempProfile);
                }
                else{
                   console.log('no data found');
                }
            }) .catch((error) => {
                console.log(error);
            })
    }

    const onSave = (e) =>{
        e.preventDefault();
        navigate("/profile");
    }

    return (
        <div>
            <NavBar></NavBar>
            {userProfile.map((row) => {
                return(
            <Row>
                <Col align="center">
                    <h1 className ='profile'> Edit Profile </h1>
                    <img id = "profilepic" src={row.data.photoUrl} alt="Profile Photo"></img> 
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
                                        placeholder={row.data.firstName}                                
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
                                        placeholder={row.data.lastName}
                                    />
                                </div>
                                <div>
                                    <label className = "label" htmlFor="pronouns">
                                        Pronouns
                                    </label>
                                    <select class="custom-select" className="pronoun-selector">
                                        <option selected>Currently: {row.data.pronouns} </option>
                                        <option value="she/her/hers">she/her/hers</option>
                                        <option value="he/him/hers">he/him/his</option>
                                        <option value="they/them/theirs">they/them/theirs</option>
                                    </select>
                                </div>
                                <div>
                                    <label className = "label" htmlFor="city">
                                        City
                                    </label>
                                    <select class="custom-select" className="city-selector">
                                        <option selected>Currently: {row.data.city} </option>
                                        <option value="Chapel Hill, NC">Chapel Hill, NC</option>
                                        <option value="New York, NY">New York, NY</option>
                                        <option value="Raleigh, NC">Raleigh, NC</option>
                                        <option value="Atlanta, GA">Atlanta, GA</option>
                                        <option value="Charlotte, NC">Charlotte, NC</option>
                                        <option value="Dallas, TX">Dallas, TX</option>
                                    </select>
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
                                        placeholder={row.data.gradYear}
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
                                        placeholder={row.data.email}                              
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
                                        placeholder={row.data.bio}             
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
             )})}
        </div>
    )
}