import { ref, getDatabase, onValue} from 'firebase/database';
import React, { useState, useEffect} from 'react';
import {NavBar} from '../Tools/NavBar';
import { Row, Col } from 'react-bootstrap';
import './HomePage.css';
import Button from 'react-bootstrap/Button';





export const HomePage = () => {
    const [allUsers, setAllUsers] = useState([]);
    const database = ref(getDatabase(), 'users/');
    
    useEffect(() => {
        getAllUsers();
    }, []);
    
   function getAllUsers(){
        onValue(database, (snapshot) => {
            let tempUsers = [];
            snapshot.forEach(childSnapshot => {
                let keyName = childSnapshot.key;
                let data = childSnapshot.val();
                tempUsers.push({"key": keyName, "data": data});
            })
            setAllUsers(tempUsers);
        })
        /*keys.forEach(onyen => {
            get(child(database2, 'users/'+ onyen))
            .then((snapshot) => {
                if(snapshot.exists()){
                    console.log(snapshot.val())
                }
                else{
                   console.log('no data found');
                }
            }) .catch((error) => {
                console.log(error);
            })
        })*/
    }


    return (
    <div>
        <NavBar></NavBar>
        <h1 className ="explore">Explore</h1>
        <h2 className = "addSearch">Add Search Criteria</h2>
        <Row>
            <Col>
            <div className='city-box'>
                <label className = "city-search" htmlFor="city">
                    City
                </label>
                <select class="custom-select" className="city-search-selector">
                    <option selected> Choose.. </option>
                    <option value="Chapel Hill, NC">Chapel Hill, NC</option>
                    <option value="New York, NY">New York, NY</option>
                    <option value="Raleigh, NC">Raleigh, NC</option>
                    <option value="Atlanta, GA">Atlanta, GA</option>
                    <option value="Charlotte, NC">Charlotte, NC</option>
                    <option value="Dallas, TX">Dallas, TX</option>
                    <option value="Washington, DC">Washington, DC</option>
                </select>
            </div>
            </Col>
            <Col>
            <div className='grad-year-box'>
                <label className = "grad-year-search" htmlFor="city">
                    Grad Year
                </label>
                <select class="custom-select" className="min-selector">
                    <option selected> Select Min </option>
                    <option value="2027">2027</option>
                    <option value="2026">2026</option>
                    <option value="2025">2025</option>
                    <option value="2024">2024</option>
                    <option value="2023">2023</option>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                </select>
                <select class="custom-select" className="max-selector">
                    <option selected>Select Max </option>
                    <option value="2027">2027</option>
                    <option value="2026">2026</option>
                    <option value="2025">2025</option>
                    <option value="2024">2024</option>
                    <option value="2023">2023</option>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                </select>
                
            </div>
            </Col>
            <Col>
                <div className='tag-box'>
                    <label className = "tag-search" htmlFor="city">
                        Tags
                    </label>
                    <select className="custom-select tag-search-selector">
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
            </Col>
        </Row>
        <Row>
        {allUsers.map((row, index) => {
        return(
                <Col className ="col-sm-3">
                    <div className ="card-holder">
                    <div className="card user-cards">
                    {row.data.photoUrl ? <img id="user-image" className="card-img-top" src={row.data.photoUrl} alt="Card"></img>: <img id="user-image" className="card-img-top" src='https://t4.ftcdn.net/jpg/01/86/29/31/360_F_186293166_P4yk3uXQBDapbDFlR17ivpM6B1ux0fHG.jpg'alt="Card"></img> }
                        <div class="card-body">
                            <h4 className ="card-title" class="card-title"> {row.data.firstName + ' ' + row.data.lastName}</h4>
                            <p className ="card-content" class ="card-text">{row.data.gradYear} </p>
                            <Button className="plus-button"> plus </Button>
                        </div>
                    </div>
                    </div>
                </Col>
        )
        })}
        </Row>
    </div>
    )
}