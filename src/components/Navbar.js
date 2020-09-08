import React from 'react';
import './Navbar.css';
import { Navbar, Nav, Form, Button,Dropdown ,SplitButton,DropdownButton} from 'react-bootstrap';
import { withRouter } from 'react-router-dom';

const Navigation = (props) => {
    console.log(props);
    return (
        <Navbar className="navbar">
            <Navbar className="navbarmanu nav1" href="#home"><i class="fas fa-user-minus">Tracking Customer at Risk of Negative Spending</i></Navbar>
            
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav >
                   <Navbar><Nav.Link className="navbarmanu" href="/Home"><i class="fas fa-home">Home</i></Nav.Link></Navbar> 
                   <Navbar>   <Nav.Link className="navbarmanu" href="/MasterSearch"><i class="fas fa-search">Master Search</i></Nav.Link></Navbar> 
                   <Navbar>     <Nav.Link className="navbarmanu" href="/DataUpload"><i class="fas fa-cloud-upload-alt">Data Upload</i></Nav.Link></Navbar> 
                   <Navbar>      <Nav.Link className="navbarmanu" href="/PrivacyPolicy"><i class="fas fa-user-secret">Privacy Policy</i></Nav.Link></Navbar> 
                  
                   <Navbar>   <Nav.Link className="navbarmanu" href="/Help"><i class="fas fa-hands-helping">Help</i></Nav.Link></Navbar> 
                   <Navbar>  
    <Nav.Link><i class="fas fa-user">{localStorage.getItem("name")}</i></Nav.Link>
    

        </Navbar>     
                   <Navbar>      <Nav.Link className="navbarmanu" href="/"><i class="fas fa-sign-out-alt">Logout</i>
                   </Nav.Link></Navbar> 
                       
 
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default withRouter(Navigation);