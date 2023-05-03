import { ref, getDatabase, onValue} from 'firebase/database';
import React, { useState, useEffect} from 'react';
import {NavBar} from '../Tools/NavBar';
import { Row, Col } from 'react-bootstrap';
import './HomePage.css';
import Button from 'react-bootstrap/Button';





export const HomePage = () => {
    const [allUsersUnTouched, setAllUsersUnTouched] = useState([]);
    const [allUsers, setAllUsers] = useState([]);
    const database = ref(getDatabase(), 'users/');
    const [city, searchCity] = useState('')
    const [maxGrad, searchMaxGrad] = useState('');
    const [minGrad, searchMinGrad] = useState('');
    const [tags,searchTags] = useState('');
    
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
            setAllUsersUnTouched(tempUsers);
        })
    }
    const onSearch = (e) =>{
        e.preventDefault();
        console.log(allUsers);
        let searchUsers = allUsersUnTouched;
        if(city){
            searchUsers = searchUsers.filter(user => user.data.city === city);
        }
        if(minGrad) {
            searchUsers = searchUsers.filter(user => user.data.gradYear >= minGrad)
        }
        if(maxGrad) {
            searchUsers = searchUsers.filter(user => user.data.gradYear <= maxGrad)
        }
        if(tags) {
            console.log("here")
            console.log(searchUsers.filter(user => user.data.tags !== undefined))
            console.log(searchUsers.filter(user => user.data.tags !== undefined).filter(user => user.data.tags.tagsList.find(tag => tag === tags) !== undefined))
            searchUsers = searchUsers.filter(user => user.data.tags !== undefined).filter(user => user.data.tags.tagsList.find(tag => tag === tags) !== undefined)
        
        }
        console.log(searchUsers);
        setAllUsers(searchUsers);
    }
    const onReset = (e) =>{
        e.preventDefault();
        searchCity('');
        searchMaxGrad('');
        searchMinGrad('');
        searchTags('');
        setAllUsers(allUsersUnTouched);
    }

    return (
    <div>
        <NavBar></NavBar>
        <h1 className ="explore">Explore</h1>
        <h2 className = "addSearch">Add Search Criteria</h2>
        <Row>
            <Col className ="col-sm-3">
            <div className='city-box'>
                <label className = "city-search" htmlFor="city">
                    City
                </label>
                <select class="custom-select" className="city-search-selector"
                onChange={(e) => searchCity(e.target.value)}>
                    <option selected> {city} </option>
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
            <Col className ="col-sm-3">
            <div className='grad-year-box'>
                <label className = "grad-year-search" htmlFor="city">
                    Grad Year
                </label>
                <select class="custom-select" className="min-selector"
                onChange={(e) => searchMinGrad(e.target.value)}>
                    <option selected> {minGrad} </option>
                    <option value="2027">2027</option>
                    <option value="2026">2026</option>
                    <option value="2025">2025</option>
                    <option value="2024">2024</option>
                    <option value="2023">2023</option>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                </select>
                <select class="custom-select" className="max-selector"
                onChange={(e) => searchMaxGrad(e.target.value)}>
                    <option selected>{maxGrad} </option>
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
            <Col className ="col-sm-3">
                <div className='tag-box'>
                    <label className = "tag-search" htmlFor="city">
                        Tags
                    </label>
                    <select className="custom-select tag-search-selector"
                    onChange={(e) => searchTags(e.target.value)}>
                        <option selected> {tags} </option>
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
            <Col className = "col-sm-1">
                <div  id="searchPadding">
                    <Button className="reset-button" onClick ={onReset}> Reset </Button>
                </div>
            </Col>
            <Col className ="col-sm-2">
            <div id="searchPadding">
                <Button className="search-button" onClick ={onSearch}> Search </Button>
            </div>
            </Col>
        </Row>
        <Row>
        {allUsers.map((row, index) => {
        return(
                <Col className ="col-sm-3" key={row.data.onyen}>
                    <div className ="card-holder">
                    <div className="card user-cards">
                    {row.data.photoUrl ? <img id="user-image" className="card-img-top" src={row.data.photoUrl} alt="Card"></img>: <img id="user-image" className="card-img-top" src='https://t4.ftcdn.net/jpg/01/86/29/31/360_F_186293166_P4yk3uXQBDapbDFlR17ivpM6B1ux0fHG.jpg'alt="Card"></img> }
                        <div className="card-body">
                            <h4 className ="card-title"> {row.data.firstName + ' ' + row.data.lastName}</h4>
                            <p className ="card-content card-text">{row.data.gradYear} </p>
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