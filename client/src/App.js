import './App.css';
import Main from './components/Nav'
import Location from './components/Location'
import Forecast from './components/Forecast';
import { useState } from 'react';
// import { Routes, Route } from 'react-router-dom';
import Login from "./components/Login";
import Nav from './components/Nav';

function App() {

  const [address, setAddress] = useState(null)
   

  const handleAddressChange = (passData) => {
    console.log(passData)
  }

  return (
    <div className="main">
     <Main onAddressChange={handleAddressChange}/>
     <Location />
     <Forecast />
    </div>
  );
}

export default App;
