import React from "react";
import { Outlet } from "react-router-dom";



const HomePage = () => {
 

  
  return (
    <div>
        <div className="text-center">
            <div className="row p-4">
               <h1>Welcome to Contact Manager</h1>
            </div>
            <div className="row p-4">
               <p>To get started click manage contacts</p>
            </div>
        </div>
        <Outlet />
    </div>
  );
};

export default HomePage;
