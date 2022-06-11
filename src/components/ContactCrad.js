import React from "react";
import {OverlayTrigger,Tooltip} from "react-bootstrap"
import { useState } from "react";
import ContactDetailsCard from "./ContactDetailsCard";
import DeleteConfirmation from "./DeleteConfirmation";
import AddContact from "./AddContact";

const ContactCard = (props) => {
  const [showDetails, setShowDetails] = useState(false);  
  const handleClose = () => setShowDetails(false);
  const handleShowDetails = () => setShowDetails(true);

  const [showDelete, setShowDelete] = useState(false);
  const handleDeleteClose = () => setShowDelete(false);
  const handleShowDelete = () => setShowDelete(true);

  const [showUpdate, setShowUpdate] = useState(false);
  const handleUpdateClose = () => setShowUpdate(false);
  const handleShowUpdate = () => setShowUpdate(true);

  const [contact, setContact] = useState(props.contact);

  return (
    <div className="row py-2 px-4">
       
         <div className="col-md-9 align-middle" style={{fontSize :"20px"}}> 
         <i className="bi bi-person-circle  text-secondary p-4"  style={{fontSize :"30px",color:"gray" }}></i>              
            
             {props.contact.name}
         </div>

         <div className="col-md-3 text-end">          
            <div  className="row p-0 text-end">
               <div className="col text-end">
               <OverlayTrigger
                  delay={{ hide: 450, show: 300 }}
                  overlay={(props) => (
                  <Tooltip {...props}>
                        Click on the Icon to view contact details
                      </Tooltip>
                    )}
                    placement="bottom"
                  >
                  <i className="col-md-1 bi bi-eye-fill text-secondary" style={{fontSize :"30px", color:"", cursor:'pointer'}}
                  onClick={handleShowDetails}></i>              
                  </OverlayTrigger> 

               </div>
               <div className="col pl-0 text-end">
               <OverlayTrigger
                  delay={{ hide: 450, show: 300 }}
                  overlay={(props) => (
                  <Tooltip {...props}>
                        Click on the Icon if you whis to edit contact
                      </Tooltip>
                    )}
                    placement="bottom"
                  >
                    <i className="col-md-1 bi bi-pencil-square text-warning" style={{fontSize :"30px",color:"" ,cursor:'pointer'}}
                    onClick={handleShowUpdate}></i>
                  </OverlayTrigger>
               
                            
               
                
               </div> 
               <div className="col pl-0 text-end">
                  <OverlayTrigger
                  delay={{ hide: 450, show: 300 }}
                  overlay={(props) => (
                  <Tooltip {...props}>
                        Click on the Icon if you whis to delete contact
                      </Tooltip>
                    )}
                    placement="bottom"
                  >
                  <i className="col-md-1 bi bi-archive-fill text-danger" style={{fontSize :"30px", color:"",cursor:'pointer' }}
                   onClick={handleShowDelete}>
                    </i>             
                  </OverlayTrigger>
               </div>  
            </div> 
          
           
          
         </div>
         <ContactDetailsCard show={showDetails} handleClose={handleClose} contact={contact}/>
         <DeleteConfirmation show={showDelete} handleClose={handleDeleteClose} contact={contact}/>
         <AddContact parentShow={showUpdate} handleClose={handleUpdateClose} user={contact} isEdit={true}/>
    </div>
  );
};

export default ContactCard;
