
import './App.css';
import React from 'react';
import Home from "./components/Home";  
import LocationDetails from "./components/locationdetails";
import NewLocationForm from "./components/NewLocationForm"
import ApplyNowForm from './components/ApplyNowForm';
import AppNavbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <AppNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/location" element={<LocationDetails />} />
        <Route path="/newlocation" element={<NewLocationForm />} />
        <Route path="/applynow" element={<ApplyNowForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
