import React from 'react';
import './Navbar.css';
import { Navbar, Nav, Form, Button } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';

const Navigation = (props) => {
    console.log(props);
    return (
        <Navbar>
            <Navbar.Brand href="#home">Tracking Customer at Risk of Negative Spending</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/MasterSearch">Master Search</Nav.Link>
                    <Nav.Link href="/DataUpload">Data Upload</Nav.Link>
                    <Nav.Link href="/PrivacyPolicy">Privacy Policy</Nav.Link>
                    <Nav.Link href="/Help">Help</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default withRouter(Navigation);