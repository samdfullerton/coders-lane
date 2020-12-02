
import React from "react";
import './App.css';
import Header from './components/Header'
import RegistrationForm from './components/RegistrationForm'
import SwipeCards from './components/SwipeCards'
import Login from './components/Login'

function App() {
  return (
    <div className="App">
   

    <Login/>
     <RegistrationForm/>
     <Header/>
     <SwipeCards/>
     

     
    </div>
  );
}

export default App;
