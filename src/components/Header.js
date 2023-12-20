import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import logo from "../assets/img/ambience1.png"

function Header() {
  const { token, logout } = useContext(UserContext);
  const [header, setHeader] = useState(false);

  // Show header background on scroll
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false);
    });
  });
  // set state for login/logout button
  const isLoggedIn = token !== null;

  return (
    <header
      className={`${
        header ? "bg-white py-6 shadow-lg " : "bg:transparent py-8"
      } fixed z-40 w-full transition-all duration-300`}
    >
      <div className="container mx-auto flex flex-col items-center gap-y-6 lg:flex-row lg:justify-between lg:gap-y-0">
        <a href="/">
        <div className="flex items-center">
        <img className=" w-20" alt="logo" src={logo}/>
        <h3 className=" font-primary text-xl font-semibold text-accent w-full ">Western Ambience Hotel</h3>
        </div>
        
        </a>
        <nav className="flex font-tertiary tracking-[3px] text-[15px] items-center gap-x-4 lg:gap-8 ">
          
          <Link
              to = "/"
              
              className="transition hover:text-accent cursor-pointer"
            >
              Home
            </Link>

         
          <Link
              to = "/rooms"
              
              className="transition hover:text-accent cursor-pointer"
            >
              Rooms
            </Link>
         
            <Link
              to = "/restaurant"
              
              className="transition hover:text-accent cursor-pointer"
            >
              Restaurant
            </Link>
            <Link
              to = "/rooms"
              
              className="transition hover:text-accent cursor-pointer"
            >
              Services
            </Link>
          {isLoggedIn ? (
            <Link
              to = "/login"
              onClick={logout}
              className="transition hover:text-accent cursor-pointer"
            >
              Logout
            </Link>
          ) : (
            <Link
              to="/login"
              className="transition hover:text-accent cursor-pointer"
            >
              Login
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Header;
