import './App.css';
import Navbar from './MyComponents/Navbar';
import TextForm from './MyComponents/TextForm';
import About from './MyComponents/About';
import React, { useState } from 'react'
import Task from './MyComponents/Task'
import Alert from './MyComponents/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
return (
  <Router>
  <div className="App" >
      <header className="App-header">
          <Navbar /> 
         <Alert alert = "Hello This is my first React App !"/>
         <div className="container my-5"  >
        <Routes>
          <Route path="/about" Component={About}/>
        </Routes>
        <Routes>
          <Route path="/textform" Component={TextForm}/>
        </Routes> 
       
         {/* <About/> */}
        </div> 
        {/* <Task/> */}
      
      </header>
  </div>
 </Router>
  );

}

export default App;
