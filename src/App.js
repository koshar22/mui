import React from 'react';
// import { Button } from "@mui/material";
import { Switch } from '@mui/material';
// import Button from '@mui/material/Button'
import { Route, Routes } from 'react-router-dom'
// import { Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import About from './Pages/About';
import Error from './Pages/Error';
import Navbar from './Components/Navbar';


function App() {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
    </>    
  );
}

export default App;
