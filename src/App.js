import React , {useState }from 'react'
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




function App() {
  const [token, setToken] = useState(localStorage.getItem('token') || null);


  const logout = () => {
    localStorage.removeItem('token');
    setToken(null);
  };
  



  return (
  <>
     <BrowserRouter>
     <Header/>
        <Routes>

            <Route path='/' element = {<Home/>}></Route>
            <Route path="/login" element={<Login setToken = {setToken}/>}>login</Route>
            <Route path="/signup" element={<Signup setToken = {setToken}/>}>signup</Route>
            <Route path = "/room/:id" element = {<RoomDetails/>}/>
        </Routes>
      <Footer/>
      </BrowserRouter>
  </>
     
    
  );
}

export default App;
