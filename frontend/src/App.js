
import './App.css';
import React from 'react';
import Home from "./components/Home";  
import LocationDetails from "./components/locationdetails";
import AddLocation from "./components/NewLocationForm"
import ApplyNowForm from './components/ApplyNowForm';
import AppNavbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';

function App() {
  return (
    <BrowserRouter>
      <AppNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/location/:locationId" element={<LocationDetails />} />
        <Route path="/add-location" element={<AddLocation />} />
        <Route path="/apply-now" element={<ApplyNowForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;