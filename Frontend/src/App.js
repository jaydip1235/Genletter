import React, { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/UI/Navbar/Navbar';
import Home from './components/UI/Landing Page/Home';
import OurFeatures from './components/UI/Our Features/OurFeatures';
import Resume from './components/UI/Forms/Resume/Resume';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Resume1 from './components/Templates/Resume/Resume1';
import Resume2 from './components/Templates/Resume/Resume2';
import OfferLetter from './components/UI/Forms/Offer Letter/OfferLetter';
import OfferLetter1 from './components/Templates/Offer Letter/OfferLetter1';
import Login from './components/UI/Login/Login';
import axios from 'axios';

function App() {

  const [user, setUser] = useState(null);
  // console.log(user);

  const getUser = async () => {
    try {
      const url = `${process.env.REACT_APP_API_URL}/auth/login/success`;
      const { data } = await axios.get(url, { withCredentials: true });
      console.log(data);
      setUser(data.user._json);
      // console.log(user);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getUser();
  }, []);

  return (
    <BrowserRouter>
      {window.location.href !== 'http://localhost:3000/login' && <Navbar />}
      <Routes>
        <Route exact path='/login' element={!user ? <Login /> : <Navigate to='/' />} />
        <Route exact path='/' element={<div><Home /><OurFeatures /></div>} />
        <Route exact path='/resume/details' element={user ? <Resume /> : <Navigate to='/login' />} />
        <Route exact path='/resume/templates/1' element={user ? <Resume1 /> : <Navigate to='/login' />} />
        <Route exact path='/resume/templates/2' element={user ? <Resume2 /> : <Navigate to='/login' />} />
        <Route exact path='/offer_letter/details' element={user ? <OfferLetter /> : <Navigate to='/login' />} />
        <Route exact path='/offer_letter/templates/1' element={user ? <OfferLetter1 /> : <Navigate to='/login' />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
