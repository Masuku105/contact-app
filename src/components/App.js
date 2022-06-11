import React from 'react';
import {Router,Routes,Route, BrowserRouter} from 'react-router-dom';


import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import ContactList from "./ContactList";
import HomePage from "./HomePage";




function App() {
  const GuestLayout = () => {
    return (
      <div>
        <HomePage/>
        
      </div>
    );
  };
  


  return (
    <div className="App">      
      
      <BrowserRouter>                  
       <Header/>
       <ContactList/>   
       <Routes>
        <Route index element={<HomePage />}/>
        <Route path="./ContactList.js" element={<ContactList />} /> 
       
      </Routes>
    
      </BrowserRouter>
      
    
    </div>
  );
}

export default App;
