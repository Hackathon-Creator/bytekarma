import React from 'react';
import './Navbar.css';
import { Navbar, Nav, Form, Button } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';

const Navigation = (props) => {
    console.log(props);
    return (
        <Navbar classNam="navbar">
            <Navbar className="navbarmanu" href="#home">Tracking Customer at Risk of Negative Spending</Navbar>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                   <Navbar><Nav.Link className="navbarmanu" href="/Home">Home</Nav.Link></Navbar> 
                   <Navbar>   <Nav.Link className="navbarmanu" href="/MasterSearch">Master Search</Nav.Link></Navbar> 
                   <Navbar>     <Nav.Link className="navbarmanu" href="/DataUpload">Data Upload</Nav.Link></Navbar> 
                   <Navbar>      <Nav.Link className="navbarmanu" href="/PrivacyPolicy">Privacy Policy</Nav.Link></Navbar> 
                   <Navbar>   <Nav.Link className="navbarmanu" href="/Help">Help</Nav.Link></Navbar> 
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default withRouter(Navigation);