import React from "react";
import { Modal,Button } from "react-bootstrap";


const ContactDetailsCard = (props) => {

  return (
    <div>
        <Modal show={props.show} onHide={props.handleClose} centered>
     
        <Modal.Body>
            <div class="d-flex flex-row pt-5 py-0 px-5">
                <div class="p-2 pt-1"><i class="bi bi-person-rolodex" style={{fontSize :"34px"}}></i></div>
                <div class="p-2 pb-0" style={{fontSize :"25px"}}>{props.contact.name}</div>        
            </div>
            <div class="d-flex flex-row py-0 px-5">
                <div class="p-2">Phone:</div>
                <div class="p-2">{props.contact.phone}</div>        
            </div>
            <div class="d-flex flex-row py-0 px-5">
                <div class="p-2">Email:</div>
                <div class="p-2">{props.contact.email}</div>        
            </div>
             <div class="d-flex flex-row py-0 px-5">
                <div class="p-2">Company:</div>
                <div class="p-2">{props.contact.company}</div>        
             </div>
           
            <div class="d-flex flex-row py-0 px-5">
                <div class="p-2">Notes</div>   
                <div class="p-2">{props.contact.notes}</div>        
            </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
            Close
          </Button>
          
        </Modal.Footer>
    </Modal>
    </div>
    
  );
};

export default ContactDetailsCard;
