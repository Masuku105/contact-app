import React from "react";
import { useState } from "react";
import AddContact from "./AddContact";
import {Button} from "react-bootstrap"
const EmptyView = () => {  
    const [user,setUser] = useState( {} );
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);       

    const handleShow = () => setShow(true);
  

  return (    
    <div class="card text-center">
        <div class="card-header">
            No Contacts Found
        </div>
        <div class="card-body">
            <h5 class="card-title">You Don't Have Any Concats</h5>
            <p class="card-text">To get started click on the button below and add contacts</p>
            <Button variant="secondary" size="lg" active onClick={handleShow}>
               <i class="bi-person-plus-fill ml-2 fa-7x" aria-hidden="true"></i> Add Contact
            </Button>
        </div>
        <div class="card-footer text-muted">
            2 days ago
        </div>
        <AddContact parentShow={show} handleClose={handleClose}  user={user} isEdit={false}
        />
    </div>  
  );
};

export default EmptyView;