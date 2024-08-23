import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Threads } from './Threads';
import { RoomList } from './Room/RoomList';


import { createRoot } from "react-dom/client";


import { Routes, Route, Link } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { HomeBar } from "./HomeBar";
import axios from "axios";
import { UserGet } from "./Api/UserGet";
import { RoomGet } from "./Api/RoomGet";
import { RoomDetail } from "./Room/RoomDetail";
export default function App() {
  return (
    <BrowserRouter basename="/">
      <div className="App">
      <HomeBar />
      

      <Routes>
        
        <Route path="/" element={<RoomGet privateRoom={false} />} />
        <Route path="/privateRooms" element={<RoomGet privateRoom={true} />} />
        <Route path="/publicRooms" element={<RoomGet privateRoom={false} />} />
        <Route path="/privateRooms/:id" element={<RoomDetail privateRoom={true} />} />
        <Route path="/publicRooms/:id" element={<RoomDetail privateRoom={false} />} />
      </Routes>
      
     </div>

    </BrowserRouter>
    
  );
}


