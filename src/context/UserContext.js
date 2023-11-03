import React,  { createContext,  useState, useMemo}  from 'react'
import  Cookie  from 'universal-cookie';
// import { useNavigate } from 'react-router-dom';
//data

// Create a new instance of the Cookies class
const cookies = new Cookie();

//create context
export const UserContext = createContext()


function UserProvider({children}) {
    // const navigate = useNavigate();
    const [token, setToken] = useState(cookies.get('token') || null);
    const [currentUser, setCurrentUser] = useState(cookies.get('user') || null)

    console.log(currentUser);

    const logout = () => {

      cookies.remove('token');
      cookies.remove('user');
  
      // navigate("/login")
      setToken(null);
      setCurrentUser(null);
    
    };

    const value = useMemo(() => ({ token, setToken, logout, setCurrentUser, currentUser, cookies }));


  return (
   <UserContext.Provider value = {value}>
    {children}
   </UserContext.Provider>
  )
}

export default UserProvider