import React from 'react';
import './App.css';
import Navbar from "./components/BlogNav";
import Posts from "./components/Posts";

function App() {
  return (
    <div className="main-container" style={{backgroundColor:"aliceblue"}}>
        <Navbar />
        <Posts />
    </div>
  );
}

export default App;
