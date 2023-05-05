import React from 'react';
import {NavBar} from '../Tools/NavBar'
import { Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import './Connections.css';
import emma from "../Tools/emma.png";



export const Connections = () => {
    return (
    <div>
        <NavBar></NavBar>
        <div id="all-page-padding">
        <h1 className ="pend-conn">Pending Connections</h1>
        <Row className="conn-box">
            <div id="conn-padding"></div>
            <Col className ="col-sm-2">
            <img id= "connProf" src={emma} alt="connection profile"></img>
            </Col>
            <Col className ="col-sm-2">
                <Row>
                    <h3 className="connName">Emma Chamberlain '21</h3>
                </Row>
                <Row>
                    <p className="connCity"> New York, NY</p>
                </Row>
            </Col>
            <Col className ="col-sm-6">
                <Row>
                <Col  align ="center" className ="extra col-sm-3">
                    <p className=" text tags">Coffee</p>
                </Col>
                <Col align ="center" className ="extra col-sm-3">
                    <p className="text tags">Hiking</p>
                </Col>
                <Col align ="center" className ="extra col-sm-3">
                    <p className="text tags">Video Games</p>
                </Col>
                <Col  align ="center" className ="extra col-sm-3">
                    <p className="text tags">Seeking Advice</p>
                </Col>
                </Row>
            </Col>
            <Col className="col-sm-2">
                <Row>
                <Col className ="extra col-sm-6">
                    <Button className="deny-btn">Deny</Button>
                </Col>
                <Col className ="extra col-sm-6">
                    <Button className="accept-btn">Accept</Button>
                </Col>
                </Row>
            </Col>
        </Row>
        <p> See More </p>
        <h1 className ="my-conn">My Connections</h1>
        <h2 className='add-search'>Add Search Criteria</h2>
        </div>
    </div>
    )
}