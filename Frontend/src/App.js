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
import Profile from './components/UI/Profile/Profile';

function App() {

  const [user, setUser] = useState(null);
  const [resume, setResume] = useState(null);
  const [offerLetter, setOfferLetter] = useState(null);

  const getUser = async () => {
    try {
      const url = `${process.env.REACT_APP_API_URL}/auth/login/success`;
      const { data } = await axios.get(url, { withCredentials: true });
      console.log(data);
      // setUser(data.user._json);
      // await axios.post('http://localhost:5000/resume', {})
      await axios.get('http://localhost:5000/resume/history/')
        .then((response) => {
          setResume(response.data);
          console.log('data received!');
        })
        .catch((err) => {
          alert('error!');
        });

      await axios.get('http://localhost:5000/offer_letter/history/')
        .then((response) => {
          setOfferLetter(response.data);
          console.log('data received!');
        })
        .catch((err) => {
          alert('error!');
        });

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
      {window.location.href !== 'http://localhost:3000/login' && <Navbar user={user} />}
      <Routes>
        <Route exact path='/login' element={!user ? <Login /> : <Navigate to='/' />} />
        <Route exact path='/' element={<div><Home /><OurFeatures /></div>} />
        <Route exact path='/profile' element={user ? <Profile resume={resume} offerLetter={offerLetter} email={user.email} /> : <Navigate to='/login' />} />
        <Route exact path='/edit/resume/:id' element={user ? <Resume /> : <Navigate to='/login' />} />
        <Route exact path='/resume/details' element={user ? <Resume /> : <Navigate to='/login' />} />
        <Route exact path='/resume/templates/1' element={user ? <Resume1 /> : <Navigate to='/login' />} />
        <Route exact path='/resume/templates/2' element={user ? <Resume2 /> : <Navigate to='/login' />} />
        {/* <Route exact path='/resume/templates' element={<Templates type='Resume' />} /> */}
        <Route exact path='/edit/offer_letter/:id' element={user ? <OfferLetter /> : <Navigate to='/login' />} />
        <Route exact path='/offer_letter/details' element={user ? <OfferLetter /> : <Navigate to='/login' />} />
        <Route exact path='/offer_letter/templates/1' element={user ? <OfferLetter1 /> : <Navigate to='/login' />} />
        {/* <Route exact path='/offer_letter/templates' element={<Templates type='Offer Letter' />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App;
