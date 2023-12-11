import React, {useContext} from 'react'
import './App.css';
//context
import { UserContext } from './context/UserContext';
//components
import Home from './pages/Home';
import Header from "./components/Header"
import Footer from './components/Footer';
import RoomList from './components/RoomList';
import Restaurant from './components/Restaurant';
//pages
import Login from './pages/Login';
import Signup from './pages/Signup';
import RoomDetails from './pages/RoomDetails';
//react router
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Services from './components/Services';
import AdminDashboard from './pages/AdminDashboard';
import AdminBookings from './components/AdminBookings';

// import { FaSteamSquare } from 'react-icons/fa';
// import { UserContext } from './context/UserContext';




function App() {
 


  const {token, currentUser} = useContext(UserContext)
  

const isAdmin = currentUser && currentUser.role === 'admin';


  return (
  <>
     <BrowserRouter>
     <Header/>
        <Routes>

        <Route path="/" element={token ? (
  isAdmin ? <AdminDashboard /> : <Home/>
) : (
  <Home />
)} />
            <Route path="/login" element={<Login />}>login</Route>
            <Route path="/signup" element={<Signup />}>signup</Route>
            <Route path="/rooms" element={<RoomList />}>rooms</Route>
            <Route path="/restaurant" element={<Restaurant />}>restaurant</Route>
            <Route path="/services" element={<Services />}>restaurant</Route>
            <Route 
            path="/admin-bookings"
            element={(
  isAdmin ? <AdminBookings/> : <AdminDashboard/>
)} />

            <Route path = "/room/:id" element = {<RoomDetails/>}/>
        </Routes>
      <Footer/>
      </BrowserRouter>
  </>
     
    
  );
}

export default App;
