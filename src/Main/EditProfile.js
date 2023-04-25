import React, {useState, useEffect} from 'react';
import {NavBar} from '../Tools/NavBar';
import Button from 'react-bootstrap/Button';
import { Row, Col } from 'react-bootstrap';
import { get, child , ref, getDatabase, update} from 'firebase/database';
import './Profile.css';
import './EditProfile.css';
import { useNavigate } from 'react-router-dom';



export const EditProfile = () => {
    const navigate = useNavigate();
    const [userProfile, setUserProfile] = useState([]);
    const database = ref(getDatabase());
    const [email, setEmail] = useState('')
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [gradYear, setGradYear] = useState('');
    const [bio, setBio] = useState('');
    const [city, setCity] = useState('');
    const [pronouns, setPronouns] = useState('');
    const [tags, setTags] = useState([]);
    const {comm, setComm} = useState([]);



    useEffect(() => {
        getProfile();
    }, []);

    //redundant so get rid of later to make more concise by sending info as a prop or something...idk 
    function getProfile(){
        get(child(database, 'users/'+ 'mia23'))
            .then((snapshot) => {
                let tempProfile = [];
                if(snapshot.exists()){
                    let keyName = snapshot.key;
                    let data = snapshot.val();
                    tempProfile.push({"key": keyName, "data": data});
                    setUserProfile(tempProfile);
                }
                else{
                   console.log('no data found');
                }
            }).catch((error) => {
                console.log(error);
            })
    }

    //create object with all the user info to update
    function updatedUser(){
        updatedUser = [];
        if(email){
            updatedUser.push({"email":email})
        }
        if(firstName){
            updatedUser.push({"firstName":firstName})
        }
        if(lastName){
            updatedUser.push({"lastName":lastName})
        }
        if(gradYear){
            updatedUser.push({"gradYear":gradYear})
        }
        if(bio){
            updatedUser.push({"bio":bio})
        }
        if(city){
            updatedUser.push({"city":city})
        }
        if(pronouns){
            updatedUser.push({"pronouns":pronouns})
        }
        return updatedUser;
    }

    //updates profile if info changed 
    function updateProfile(){
        //console.log(updatedUser());
        console.log(tags);
        const user = updatedUser()[0];
        if(user){
            update(child(database, 'users/'+ 'mia23'), user )
            .then(() => console.log("successfully updates"))
            .catch((error) => {
                console.log(error);
            })
        }
    }

    const onSave = (e) =>{
        e.preventDefault();
        updateProfile();
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
                    {row.data.photoUrl ? <img id = "profilepic" src={row.data.photoUrl} alt="Profile Photo"></img> : <img id = "profilepic" src={'https://t4.ftcdn.net/jpg/01/86/29/31/360_F_186293166_P4yk3uXQBDapbDFlR17ivpM6B1ux0fHG.jpg'} alt="Profile Photo"></img> }
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
                                        onChange={(e) => setFirstName(e.target.value)}                                                                                  

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
                                        onChange={(e) => setLastName(e.target.value)}                                                                                
                                        placeholder={row.data.lastName}
                                    />
                                </div>
                                { row.data.pronouns ? <div>
                                    <label className = "label" htmlFor="pronouns">
                                        Pronouns
                                    </label>
                                    <select class="custom-select" className="pronoun-selector"
                                    onChange={(e) => setPronouns(e.target.value)}>
                                        <option selected>Currently: {row.data.pronouns} </option>
                                        <option value="she/her/hers">she/her/hers</option>
                                        <option value="he/him/hers">he/him/his</option>
                                        <option value="they/them/theirs">they/them/theirs</option>
                                    </select>
                                </div>: <div>
                                    <label className = "label" htmlFor="pronouns">
                                        Pronouns
                                    </label>
                                    <select class="custom-select" className="pronoun-selector"  
                                    onChange={(e) => setPronouns(e.target.value)}>
                                        <option selected>Select Pronouns </option>
                                        <option value="she/her/hers">she/her/hers</option>
                                        <option value="he/him/hers">he/him/his</option>
                                        <option value="they/them/theirs">they/them/theirs</option>
                                    </select>
                                </div>}
                                {row.data.city ? <div>
                                    <label className = "label" htmlFor="city">
                                        City
                                    </label>
                                    <select class="custom-select" className="city-selector"
                                    onChange={(e) => setCity(e.target.value)}>
                                        <option selected>Currently: {row.data.city} </option>
                                        <option value="Chapel Hill, NC">Chapel Hill, NC</option>
                                        <option value="New York, NY">New York, NY</option>
                                        <option value="Raleigh, NC">Raleigh, NC</option>
                                        <option value="Atlanta, GA">Atlanta, GA</option>
                                        <option value="Charlotte, NC">Charlotte, NC</option>
                                        <option value="Dallas, TX">Dallas, TX</option>
                                    </select>
                                </div>:<div>
                                    <label className = "label" htmlFor="city"
                                    onChange={(e) => setCity(e.target.value)}>
                                        City
                                    </label>
                                    <select class="custom-select" className="city-selector">
                                        <option selected>Choose City </option>
                                        <option value="Chapel Hill, NC">Chapel Hill, NC</option>
                                        <option value="New York, NY">New York, NY</option>
                                        <option value="Raleigh, NC">Raleigh, NC</option>
                                        <option value="Atlanta, GA">Atlanta, GA</option>
                                        <option value="Charlotte, NC">Charlotte, NC</option>
                                        <option value="Dallas, TX">Dallas, TX</option>
                                    </select>
                                </div> }
                                <div>
                                    <label className = "label" htmlFor="grad-year">
                                        Grad Year
                                    </label>
                                    <input
                                        id="grad-year"
                                        name="gradyear"
                                        type="gradyear"                                    
                                        required
                                        onChange={(e) => setGradYear(e.target.value)}                                                                                   
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
                                        onChange={(e) => setEmail(e.target.value)}                                
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
                                    <label  className = "label" htmlFor="tags"
                                    onChange={(e) => setTags(e.target.value)}>
                                        Tags
                                    </label>
                                    <select class="custom-select" className="tag-profile-selector">
                                        <option selected> Choose.. </option>
                                        <option value="Coffee">Coffee </option>
                                        <option value="Hiking">Hiking</option>
                                        <option value="Looking for Roommates">Looking for Roommates</option>
                                        <option value="Seeking Advice">Seeking Advice</option>
                                        <option value="Running">Running</option>
                                        <option value="Night Life">Night Life</option>
                                        <option value="Video Games">Video Games</option>
                                        <option value="Reading">Reading</option>
                                    </select>
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
                                        onChange={(e) => setBio(e.target.value)}                                            
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