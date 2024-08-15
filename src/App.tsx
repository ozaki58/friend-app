import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Threads } from './Threads';

function App() {
  return (
    <div className="App">
      
      <Threads userName="test" content="test" time="1時間前" replyCount={2}  />

      
    </div>
  );
}

export default App;
