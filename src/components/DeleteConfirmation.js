import React from "react";
import { Modal,Button } from "react-bootstrap";

import axios from 'axios';

const DeleteConfirmation = (props) => {
  const user = props.contact;

  const handleDelete = async () => {

    const headers = {
      'Accept':'application/json',
      "Content-Type": "application/json",              
      "mode":"cors",
      "Access-Control-Allow-Headers":"*"
    }

      axios.delete(`https://localhost:7154/api/UserManager/${user.id}`, JSON.stringify(user),{headesrs:headers})
      ;
   props.handleClose(); 
   window.location.reload(false);
 }


  return (
    <div>
      <Modal show={props.show} onHide={props.handleClose} centered className="text-danger">   

        <Modal.Body>
        <div className="d-flex flex-row ">
                
                <div className="px-2" style={{fontSize :"35px"}}>Confirm</div>
                <div className=""><i className="bi bi-question-circle" style={{fontSize :"35px"}}></i></div>        
        </div>
        <div className="d-flex flex-row ">
        <p className="px-2" style={{fontSize :"20px"}}>Are sure you want to delete {props.contact.name}</p>

        </div>
        <div className="d-flex flex-row float-end">
          <Button variant="secondary" onClick={props.handleClose} >No</Button>
           <div className="px-1"></div>
          <Button variant="danger" onClick={handleDelete}>Yes</Button>    
        </div>
          
        </Modal.Body>        
      </Modal>
      
    </div>
  );
};

export default DeleteConfirmation;