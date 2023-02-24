import React from 'react';
import './App.css';
import Navbar from './components/UI/Navbar/Navbar';
import Home from './components/UI/Landing Page/Home';
import OurFeatures from './components/UI/Our Features/OurFeatures';
import Resume from './components/UI/Forms/Resume/Resume';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Resume1 from './components/Templates/Resume/Resume1';
import Resume2 from './components/Templates/Resume/Resume2';
import OfferLetter from './components/UI/Forms/Offer Letter/OfferLetter';
import OfferLetter1 from './components/Templates/Offer Letter/OfferLetter1';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<div><Home /><OurFeatures /></div>} />
        <Route exact path='/resume/details' element={<Resume />} />
        <Route exact path='/resume/templates/1' element={<Resume1 />} />
        <Route exact path='/resume/templates/2' element={<Resume2 />} />
        <Route exact path='/offer_letter/details' element={<OfferLetter />} />
        <Route exact path='/offer_letter/templates/1' element={<OfferLetter1 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
