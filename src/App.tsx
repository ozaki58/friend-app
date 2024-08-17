import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Threads } from './Threads';
import { RoomList } from './Room/RoomList';


import { createRoot } from "react-dom/client";


import { Routes, Route, Link } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { HomeBar } from "./HomeBar";



export default function App() {
  return (
    <BrowserRouter basename="/">
      <div className="App">
       <HomeBar />

      <Routes>
        <Route path="/" element={<Threads userName="test" content="test" time="1時間前" replyCount={2} />} />
        <Route path="/rooms" element={<RoomList />} />
        
      </Routes>
     </div>

    </BrowserRouter>
    
  );
}


