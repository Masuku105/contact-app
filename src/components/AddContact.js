import React, { useState } from "react";
import { useEffect } from "react";
import {Button, Form,Modal } from "react-bootstrap"
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default class AddContact extends React.Component{  
      constructor(props) {
        super(props);
        console.log(props);
        this.state = {
          
          user :props.user
         
        };  
       
      }

      handleNameChanged(event) {
        var user  = this.state.user;
        user.name  = event.target.value;    
        this.setState({ user: user });
      }
    
    

      handleEmailChanged(event) {
        var user  = this.state.user;
        user.email  = event.target.value;    
        this.setState({ user: user });
      }

      handlePhoneChanged(event) {
        var user  = this.state.user;
        user.phone  = event.target.value;    
        this.setState({ user: user });
      }
      
      handleCompanyChanged(event) {
        var user  = this.state.user;
        user.company  = event.target.value;    
        this.setState({ user: user });
      }

      handleNotesChanged(event) {
        var user  = this.state.user;
        user.notes  = event.target.value;    
        this.setState({ user: user });
      }
  
      handleSubmitClicked = async () => {  
       
        const user = this.state.user;
        console.log(user.id);
        if(this.props.isEdit){  
          console.log("Put method hit")          
            const headers = {
           
              "Access-Control-Allow-Headers":"*"
            }
      
              axios.put(`https://localhost:7154/api/UserManager/${user.id}`, user,{headesrs:headers})
              ;
         
          

        }else{

          console.log("Post method hit");
          console.log(user);
          const headers = {         
            "Access-Control-Allow-Headers":"*"
          }
      
          axios.post('https://localhost:7154/api/UserManager', user,{headesrs:headers})
          ;
          

        }
        this.props.handleClose();        
        window.location.reload(false);
      }

  render(){
    
    return (
        
       
        <Modal show={this.props.parentShow} onHide={this.props.handleClose} centered >
           <Modal.Header closeButton onClick={this.props.handleClose}>
           <Modal.Title>Modal heading</Modal.Title>
           </Modal.Header>

           <Modal.Body>
           <Form>
               <Form.Group className="mb-3" controlId="formBasicName">
                   <Form.Label>Name</Form.Label>
                   <Form.Control type="text" placeholder="Enter Name"
                   value={this.state.user.name}
                   onChange={this.handleNameChanged.bind(this)}
                   />
               </Form.Group> 

               <Form.Group className="mb-3" controlId="formBasicEmail">
                   <Form.Label>Email address</Form.Label>
                   <Form.Control type="email" placeholder="Enter email"
                   value={this.state.user.email}
                   onChange={this.handleEmailChanged.bind(this)}
                   />         
               </Form.Group>
           
               <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
                   <Form.Label>Phone</Form.Label>
                   <Form.Control type="text" placeholder="Enter Phone Number"
                    value={this.state.user.phone}
                    onChange={this.handlePhoneChanged.bind(this)}
                    />
               </Form.Group>

               <Form.Group className="mb-3" controlId="formBasicCompany">
                   <Form.Label>Company</Form.Label>
                   <Form.Control type="text" placeholder="Enter Company Name" 
                   value={this.state.user.company}
                   onChange={this.handleCompanyChanged.bind(this)}
                   />
               </Form.Group>

               <Form.Group className="mb-3" controlId="formBacisNotes">
                   <Form.Label>Notes</Form.Label>
                   <Form.Control as="textarea" rows={4} 
                    value={this.state.user.notes}
                    onChange={this.handleNotesChanged.bind(this)}
                  />
               </Form.Group>               
              
           </Form>
           </Modal.Body>

           <Modal.Footer>
           <Button variant="secondary" onClick={this.props.handleClose}>
               Close
           </Button>
           <Button variant="primary" onClick={this.handleSubmitClicked.bind(this)}>
               Save Changes
           </Button>
           </Modal.Footer>
       </Modal>
      

   
   
);  
  }

}


