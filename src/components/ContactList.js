import React from "react";

import ContactCard from "./ContactCrad";
import AddContact from "./AddContact";
import {Button, Row} from "react-bootstrap"
import { useEffect, useState } from "react";
import axios from 'axios';
import { Outlet } from "react-router-dom";
import EmptyView from "./EmptyView";
const baseURL = "https://localhost:7154/api/UserManager";

const ContactList = () => {
  const [users,setUsers] = useState( [ ] );
  const [user,setUser] = useState( {} );
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
   
  
  const handleShow = () => setShow(true);
  const headers = {
    'Content-Type': 'application/x-www-form-urlencoded'
  };
  const getUsers = async () => {
    const { data } = await axios.get(baseURL,headers);
    setUsers(data);
  };
 
  useEffect(() => {
    getUsers();
    
  }, []);


  
  const renderContactList = users.map((contact) => {
    return (
      <ContactCard
        contact={contact}
        key={contact.id}        
      />
    );
  });


  
  return (
    
 
    <div>
      
      <Row className="p-2 pt-4">        
        <div  className="col-md-12 text-end">
          <Button variant="secondary" size="lg" active onClick={handleShow}>
          <i class="bi-person-plus-fill ml-2 fa-7x" aria-hidden="true"></i> Add Contact
          </Button>
        </div>        
      </Row>
      
      <div class="d-flex flex-row py-4 px-5">
        <div class="p-2 pt-1"><i class="bi bi-person-rolodex  text-secondary" style={{fontSize :"35px"}}></i></div>
        <div class="p-2 pb-0 text-secondary"><h1>Contacts</h1></div>        
      </div>
      
      {renderContactList}
      <AddContact parentShow={show} handleClose={handleClose} user={user} isEdit={false}
       />
    </div>
    
  );
};

export default ContactList;
