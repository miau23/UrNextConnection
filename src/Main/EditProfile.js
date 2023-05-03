import React, {useState, useEffect} from 'react';
import {NavBar} from '../Tools/NavBar';
import Button from 'react-bootstrap/Button';
import { Row, Col } from 'react-bootstrap';
import { get, child , ref, getDatabase, update} from 'firebase/database';
import './Profile.css';
import './EditProfile.css';
import { useNavigate } from 'react-router-dom';

let updatedUser = {};
let tagsList = [];
let commList = {};


export const EditProfile = () => {
    const navigate = useNavigate();
    const [userProfile, setUserProfile] = useState([]);
    const database = ref(getDatabase());
    //state objects for all the different parts of the profile
    const [email, setEmail] = useState('')
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [gradYear, setGradYear] = useState('');
    const [bio, setBio] = useState('');
    const [city, setCity] = useState('');
    const [pronouns, setPronouns] = useState('');
    const [tags1, setTags1] = useState('');
    const [tags2, setTags2] = useState('');
    const [tags3, setTags3] = useState('');
    const [tags4, setTags4] = useState('');
    const [commEmail, setCommEmail] = useState('');
    const [commNum, setCommNum] = useState('');
    const [commInsta, setCommInsta]= useState('');
    const uid = localStorage.getItem("uid");





    useEffect(() => {
        getProfile();
    }, []);

    //redundant so get rid of later to make more concise by sending info as a prop or something...idk 
    function getProfile(){
        get(child(database, 'users/'+ uid))
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
    function updateUser(){
        console.log(pronouns + city);
        if(email){
            updatedUser.email = email;
        }
        if(firstName){
            updatedUser.firstName = firstName
        }
        if(lastName){
            updatedUser.lastName = lastName
        }
        if(gradYear){
            updatedUser.gradYear = gradYear
        }
        if(bio){
            updatedUser.bio = bio 
        }
        if(city){
            updatedUser.city = city 
        }
        if(pronouns){
            updatedUser.pronouns = pronouns
        }
        if(tags1){
            tagsList.push(tags1);
        }
        if(tags2){
            tagsList.push(tags2);
        }
        if(tags3){
            tagsList.push(tags3);
        }
        if(tags4){
            tagsList.push(tags4);
        }
        if(tagsList.length !== 0){
            updatedUser.tags = {'tagsList': tagsList};
        }
        if(commEmail){
            commList.email = commEmail;
        }
        if(commInsta){
            commList.instagram = commInsta;
        }
        if(commNum){
            commList.number = commNum;
        }
        console.log(commList)
        if(Object.keys(commList).length !==0){
            updatedUser.comm = commList
        }
        console.log("updated user is " + updatedUser)
        return updatedUser;
    }

    //updates profile if info changed 
    function updateProfile(){
        //console.log(updatedUser());
        const user = updateUser();
        console.log(user);
        if(user){
            update(child(database, 'users/'+ uid), user )
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
                    {row.data.photoUrl ? <img id = "profilepic" src={row.data.photoUrl} alt="Profile"></img> : <img id = "profilepic" src={'https://t4.ftcdn.net/jpg/01/86/29/31/360_F_186293166_P4yk3uXQBDapbDFlR17ivpM6B1ux0fHG.jpg'} alt="Profile"></img> }
                    <div id="padding"></div>
                    <Button className = 'edit-photo-btn' > Edit Photo </Button>
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
                                    >
                                        City
                                    </label>
                                    <select class="custom-select" className="city-selector"
                                    onChange={(e) => setCity(e.target.value)}>
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
                                    <label  className = "sub-label" htmlFor="comm">
                                        Email
                                    </label>
                                    <input
                                        id="comm-email"
                                        type="comm-email"
                                        label="comm-email"
                                        required                                 
                                        placeholder={row.data.email}  
                                        onChange={(e) => setCommEmail(e.target.value)}             
                                    />
                                    <label  className = "sub-label" htmlFor="comm">
                                        Instagram
                                    </label>
                                    <input
                                        id="comm-insta"
                                        type="comm-insta"
                                        label="comm-insta"
                                        required                                 
                                        placeholder="Instagram" 
                                        onChange={(e) => setCommInsta(e.target.value)}             
                                    />
                                    <label  className = "sub-label" htmlFor="comm">
                                        Phone Number
                                    </label>
                                    <input
                                        id="comm-num"
                                        type="comm-num"
                                        label="comm-num"
                                        required                                 
                                        placeholder="Phone Number"  
                                        onChange={(e) => setCommNum(e.target.value)}            
                                    />
                                </div>
                                <div>
                                    <label  className = "label" htmlFor="tags">
                                        Tags
                                    </label>
                                    <select class="custom-select" className="tag-profile-selector"
                                    onChange={(e) => setTags1(e.target.value)}>
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
                                    <select class="custom-select" className="tag-profile-selector"
                                    onChange={(e) => setTags2(e.target.value)}>
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
                                    <select class="custom-select" className="tag-profile-selector"
                                    onChange={(e) => setTags3(e.target.value)}>
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
                                    <select class="custom-select" className="tag-profile-selector"
                                    onChange={(e) => setTags4(e.target.value)}>
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
                                <input type="checkbox" checked data-toggle="toggle"/>   
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