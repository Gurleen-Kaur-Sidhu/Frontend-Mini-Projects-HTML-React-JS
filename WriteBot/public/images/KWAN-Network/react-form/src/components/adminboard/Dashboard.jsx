import React from "react";
import { Outlet } from "react-router-dom";
import "./Admin.css"; 


const Dashboard = () => {
  return (
    <div className="dashboard">

      <div className="dashboard-content">
        <Outlet /> 
      </div>
    </div>
  );
};

export default Dashboard;
