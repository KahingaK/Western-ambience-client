import React , {useState, useContext, useMemo }from 'react'
import './App.css';
//components
import Home from './pages/Home';
import Header from "./components/Header"
import Footer from './components/Footer';
//pages
import Login from './pages/Login';
import Signup from './pages/Signup';
import RoomList from './components/RoomList';
import RoomDetails from './pages/RoomDetails';
//react router
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { FaSteamSquare } from 'react-icons/fa';
import { UserContext } from './context/UserContext';




function App() {
 


  
  




  return (
  <>
     <BrowserRouter>
     <Header/>
        <Routes>

            <Route path='/' element = {<Home/>}></Route>
            <Route path="/login" element={<Login />}>login</Route>
            <Route path="/signup" element={<Signup />}>signup</Route>
            <Route path = "/room/:id" element = {<RoomDetails/>}/>
        </Routes>
      <Footer/>
      </BrowserRouter>
  </>
     
    
  );
}

export default App;
