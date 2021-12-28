import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './components/Home';
import Letter from './components/Letter';
import Navbar from './components/Nav'
import './App.css'

const App = () => {
  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/generateletter' element={<Letter/>}/>
      </Routes>
  
    </BrowserRouter>
    </>
  )
}

export default App
