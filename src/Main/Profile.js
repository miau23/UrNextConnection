import React, {useEffect, useState} from 'react';
import { get, child , ref, getDatabase} from 'firebase/database';
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
        const uid = localStorage.getItem("uid");
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
                    {row.data.photoUrl ? <img id = "profilepic" src={row.data.photoUrl} alt="Profile"></img> : <img id = "profilepic" src={'https://t4.ftcdn.net/jpg/01/86/29/31/360_F_186293166_P4yk3uXQBDapbDFlR17ivpM6B1ux0fHG.jpg'} alt="Profile"></img> }
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
                        {row.data.comm ? 
                        <Row>
                        <Col align= 'center'>
                            <h3 className = 'text tags pref'> Email ({row.data.comm.email})</h3>
                        </Col>
                        </Row>: <div></div>}
                    </Row>
                    {row.data.comm.instagram ? <Row>
                        <Col align= 'center'>
                            <h3 className = 'text tags pref'> Instagram ({row.data.comm.instagram})</h3>
                        </Col>
                    </Row>: <div></div>}
                    {row.data.comm.number ?<Row>
                        <Col align= 'center'>
                            <h3 className = 'text tags pref'> Phone Number ({row.data.comm.number})</h3>
                        </Col>
                    </Row>: <div></div> }
                    <h2 className ='label'> Tags </h2>
                    <Row align="center">
                    {row.data.tags? 
                    <div>
                    {row.data.tags.tagsList.map((trow, i) => {
                        return(
                        
                        <Col align = "center" className ="col-sm-4">
                            <h3 className = 'text tags'> {trow} </h3>
                        </Col>
                        )

                    })} </div> :  <h3 className = 'text'>please select tags</h3>}
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