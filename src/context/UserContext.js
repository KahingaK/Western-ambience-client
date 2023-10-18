// import React,  { useContext, createContext, useEffect, useState}  from 'react'
// //data
// import {roomData} from "../data"

// //create context
// export const RoomContext = createContext()

// function RoomProvider({children}) {
//     const [rooms, setRooms] = useState(roomData)
//     console.log(rooms);
//   return (
//    <RoomContext.Provider value = {{rooms}}>
//     {children}
//    </RoomContext.Provider>
//   )
// }

// export default RoomProvider

import React,  { useContext, createContext, useEffect, useState}  from 'react'
import { useNavigate } from 'react-router-dom';
//data


//create context
export const UserContext = createContext()

function UserProvider({children}) {
    const navigate = useNavigate();
    

    const logout = () => {
      localStorage.removeItem('token');
      setToken(null);
    };

  return (
   <UserContext.Provider value = {{token}}>
    {children}
   </UserContext.Provider>
  )
}

export default UserProvider