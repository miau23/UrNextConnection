import React, {useEffect, useState} from 'react';
import { get, child , ref, getDatabase, onValue} from 'firebase/database';
import {NavBar} from '../Tools/NavBar';
import Button from 'react-bootstrap/Button';
import { Row, Col } from 'react-bootstrap';
import './Profile.css';
import { useNavigate } from 'react-router-dom'



export const Profile = () => {
    const navigate = useNavigate();
    const [userProfile, setUserProfile] = useState([]);
    const database = ref(getDatabase());
    useEffect(() => {
        getProfile();
    }, []);

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
            }) .catch((error) => {
                console.log(error);
            })
    }

    const onEdit = (e) => {
        e.preventDefault();
        navigate("/editProfile");
    }
    return (
    <div>
        <NavBar></NavBar>
        <Row>
            <Col align='center'>
            <h1 className ='profile'> Profile </h1>
            {userProfile.map((row) => {
                return(
                <div>
                    {row.data.photoUrl ? <img id = "profilepic" src={row.data.photoUrl} alt="Profile Photo"></img> : <img id = "profilepic" src={'https://t4.ftcdn.net/jpg/01/86/29/31/360_F_186293166_P4yk3uXQBDapbDFlR17ivpM6B1ux0fHG.jpg'} alt="Profile Photo"></img> }
                    <div id="padding"></div>                                           
                    <Button className = 'edit-profile-btn' onClick={onEdit}> Edit Profile </Button>
                    <div id="padding">
                    </div>
                    <h2 className ='label'> Name </h2>
                    <div>
                        <h3 className = 'text'> {row.data.firstName + ' ' + row.data.lastName}</h3>
                    </div>
                    <h2 className ='label'>Pronouns</h2>
                    <div>
                        {row.data.pronouns ?  <h3 className = 'text'>{row.data.pronouns}</h3> : <h3 className = 'text'>please set pronouns</h3>}   
                    </div>
                    <h2 className ='label'>City</h2>
                    <div>
                    {row.data.city ?  <h3 className = 'text'>{row.data.city}</h3> : <h3 className = 'text'>please select city</h3>}   
                    </div>
                    <h2 className ='label'> Grad Year</h2>
                    <div>
                        <h3 className = 'text'> {row.data.gradYear}</h3>
                    </div>
                    <h2 className ='label'> Email </h2>
                    <div>
                        <h3 className = 'text'> {row.data.email}</h3>
                    </div>
                    <h2 className ='label'> Preferred Method(s) of Communication</h2>
                    <Row>
                        <Col align= 'center'>
                            <h3 className = 'text tags pref'> Email (mia@live.unc.edu)</h3>
                        </Col>
                    </Row>
                    <Row>
                        <Col align= 'center'>
                            <h3 className = 'text tags pref'> Instagram (@Mia)</h3>
                        </Col>
                    </Row>
                    <h2 className ='label'> Tags </h2>
                    <Row>
                        <Col>
                            <h3 className = 'text tags'> Coffee</h3>
                        </Col>
                        <Col>
                            <h3 className = 'text tags'> Gym</h3>
                        </Col>
                        <Col>
                            <h3 className = 'text tags'> Looking for Recommendations</h3>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h3 className = 'text tags'> SWE</h3>
                        </Col>
                        <Col>
                            <h3 className = 'text tags'> Basketball</h3>
                        </Col>
                        <Col>
                            <h3 className = 'text tags'> Women</h3>
                        </Col>
                    </Row>
                    <h2 className ='label'> Bio </h2>
                    <div>
                        {row.data.bio ?  <h3 className = 'text'>{row.data.bio}</h3> : <h3 className = 'text'>You haven't written a bio yet</h3>}   
                    </div>
                </div>)

            })}
            <div id="padding">
            </div>
            <Button className = 'blocked-users-btn'> View Blocked Users </Button>
            <div id="padding">
            </div>
            <Button className = 'logout-btn'> Logout </Button>
            <div id="bottom"></div>
            </Col>
        </Row>
    </div>
    )
}