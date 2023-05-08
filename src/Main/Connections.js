import React from 'react';
import {NavBar} from '../Tools/NavBar'
import { Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import './Connections.css';
import emma from "../Tools/emma.png";
import bob from "../Tools/bob_ross.jpeg"



export const Connections = () => {
    return (
    <div>
        <NavBar></NavBar>
        <div id="all-page-padding">
        <h1 className ="pend-conn">Pending Connections</h1>
        <Row className="conn-box">
            <div id="conn-padding"></div>
            <Col className ="col-sm-2">
            <div className='picPadding'>
            </div>
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
        <div id="padding"></div>
        <Row className="conn-box">
            <div id="conn-padding"></div>
            <Col className ="col-sm-2">
            <div className='picPadding'>
            <img id= "connProf" src={bob} alt="connection profile"></img>
            </div>
            </Col>
            <Col className ="col-sm-2">
                <Row>
                    <h3 className="connName">Bob Ross '23</h3>
                </Row>
                <Row>
                    <p className="connCity"> Washington, D.C.</p>
                </Row>
            </Col>
            <Col className ="col-sm-6">
                <Row>
                <Col  align ="center" className ="extra col-sm-3">
                    <p className=" text tags">Reading</p>
                </Col>
                <Col align ="center" className ="extra col-sm-3">
                    <p className="text tags">Looking for Roommates</p>
                </Col>
                <Col align ="center" className ="extra col-sm-3">
                    <p className="text tags">Hiking</p>
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
        <p className='seemore'> See More </p>
        <h1 className ="my-conn">My Connections</h1>
        <Row>
                <Col className ="col-sm-3">
                    <div className ="card-holder">
                    <div className="card user-cards">
                    <img id="user-image" className="card-img-top" src='https://media.licdn.com/dms/image/C4E03AQHVrcC4pXy6sg/profile-displayphoto-shrink_400_400/0/1631906467602?e=1687996800&v=beta&t=pZLFxxrBjmJFp4sSsWsBqr7RL9dxNb2KXVGJWqoAYaM' alt="Card"></img>
                        <div className="card-body">
                            <h4 className ="card-title"> Jack Cooper </h4>
                            <p className ="card-content card-text"> 2022 </p>
                                <Row>
                                       <Col align = "center" className ="tag-explore col-sm-6">
                                        <h4 className = 'text tags'> Hiking </h4> 
                                        </Col>                             
                                </Row> 
                                <Button className="plus-button"> plus </Button>
                            </div>
                    </div>
                    </div>
                </Col>
                <Col className ="col-sm-3">
                    <div className ="card-holder">
                    <div className="card user-cards">
                    <img id="user-image" className="card-img-top" src='https://media.licdn.com/dms/image/C5603AQGQfEOhHLJXOQ/profile-displayphoto-shrink_400_400/0/1637612292069?e=1687996800&v=beta&t=OIiaLlQSus97w51-xN5riMJuLbRVM2BeQ0jzimbjabc' alt="Card"></img>
                        <div className="card-body">
                            <h4 className ="card-title"> Emily Davis </h4>
                            <p className ="card-content card-text"> 2023 </p>
                                <Row>
                                       <Col align = "center" className ="tag-explore col-sm-6">
                                        <h4 className = 'text tags'> Reading </h4> 
                                        </Col>                             
                                </Row> 
                                <Button className="plus-button"> plus </Button>
                            </div>
                    </div>
                    </div>
                </Col>
                <Col className ="col-sm-3">
                    <div className ="card-holder">
                    <div className="card user-cards">
                    <img id="user-image" className="card-img-top" src='https://media.licdn.com/dms/image/C4E03AQFg0DF5LmVsJw/profile-displayphoto-shrink_400_400/0/1639074280350?e=1687996800&v=beta&t=gB-hgE2qnqqDixTdSurh0wu77QqToJAVWcClDwzFhxI' alt="Card"></img>
                        <div className="card-body">
                            <h4 className ="card-title"> Ethan Wen </h4>
                            <p className ="card-content card-text"> 2023 </p>
                                <Row>
                                       <Col align = "center" className ="tag-explore col-sm-6">
                                        <h4 className = 'text tags'> Hiking </h4> 
                                        </Col> 
                                        <Col align = "center" className ="tag-explore col-sm-6">
                                        <h4 className = 'text tags'> Reading </h4> 
                                        </Col> 
                                        <Col align = "center" className ="tag-explore col-sm-6">
                                        <h4 className = 'text tags'> Video Games </h4> 
                                        </Col>                             
                                </Row> 
                                <Button className="plus-button"> plus </Button>
                            </div>
                    </div>
                    </div>
                </Col>
                <Col className ="col-sm-3">
                    <div className ="card-holder">
                    <div className="card user-cards">
                    <img id="user-image" className="card-img-top" src='https://media.licdn.com/dms/image/C5603AQFCnmTmOqFJ3g/profile-displayphoto-shrink_400_400/0/1653376733743?e=1687996800&v=beta&t=LJNHJ6VeePO4aEEKBzUfhsGnvIAT7HNUvh_2Z7Uxb-4' alt="Card"></img>
                        <div className="card-body">
                            <h4 className ="card-title"> Emily Chen </h4>
                            <p className ="card-content card-text"> 2021 </p>
                                <Row>
                                       <Col align = "center" className ="tag-explore col-sm-6">
                                        <h4 className = 'text tags'> Seeking Advice </h4> 
                                        </Col>                             
                                </Row> 
                                <Button className="plus-button"> plus </Button>
                            </div>
                    </div>
                    </div>
                </Col>
        </Row>
        </div>
        <div id="padding"></div>
        <Col align='center'>
        <Button className="request-button"> View Requests You Have Sent </Button>
        </Col>
        <div id="padding"></div>
    </div>
    )
}