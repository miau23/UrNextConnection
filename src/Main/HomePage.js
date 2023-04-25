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
        {allUsers.map((row, index) => {
        return(
                <Col>
                    <div className ="card-holder">
                    <div class="card" className ="user-cards">
                    <img id="user-image" class="card-img-top" src={row.data.photoUrl} alt="Card image"></img>
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