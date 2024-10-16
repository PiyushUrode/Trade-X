import React from "react";

import { Outlet } from 'react-router-dom';
import Sidebar from "./Sidebar"; 


const MainDashboard = () => {
  return (
    <div style={{ display: 'flex' }}>
    <Sidebar /> {/* Sidebar stays persistent */}
    <div style={{ flex: 1, padding: '20px' }}>
      <Outlet /> {/* Renders the child routes (e.g., CoinManagement, UserManagement) */}
    
    </div>
  </div>
  );
};

export default MainDashboard;
