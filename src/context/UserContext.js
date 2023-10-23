import React,  { useContext, createContext, useEffect, useState, useMemo}  from 'react'
import { useNavigate } from 'react-router-dom';
//data


//create context
export const UserContext = createContext()


function UserProvider({children}) {
    // const navigate = useNavigate();
    const [token, setToken] = useState(localStorage.getItem('token') || null);
    const [currentUser, setCurrentUser] = useState(localStorage.getItem('user') || null)

    console.log(token);

    const logout = () => {
      localStorage.removeItem('token');
      setToken(null);
      // navigate("/login")
    
    };

    const value = useMemo(() => ({ token, setToken, logout, setCurrentUser, currentUser }), [token]);


  return (
   <UserContext.Provider value = {value}>
    {children}
   </UserContext.Provider>
  )
}

export default UserProvider