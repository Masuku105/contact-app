import React from "react";
import {Navbar,Container,Nav} from "react-bootstrap";
import { Outlet } from "react-router-dom";

const Header = () => {
  return (
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
 
  <Navbar.Brand href="/HomePage.js" className=" px-4">
    <div className="d-flex flex-row text-secondary">
        <div className="p-2 pt-0"><i class="bi bi-person-rolodex" style={{fontSize :"34px"}}></i></div>
        <div className="py-2 pb-0" style={{fontSize :"25px"}}>CONTACT MANAGER</div>        
    </div>
  </Navbar.Brand>
  <Container>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="/src/components/HomePage.js">Home</Nav.Link>
      <Nav.Link href="#"></Nav.Link>
      
    </Nav>
    <Nav>
      <Nav.Link href="#"></Nav.Link>
      <Nav.Link href="/src/components/ContactList.js">
        Manage Contacts
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
   <Outlet/>
  </Navbar>
  

  );
};

export default Header;
