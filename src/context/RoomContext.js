import React,  { useMemo, createContext, useEffect, useState}  from 'react'
//data
import {roomData} from "../data"

//create context
export const RoomContext = createContext()

function RoomProvider({children}) {
    const [rooms, setRooms] = useState(roomData)
    const [guests, setGuests] = useState("Guests")
    const [start, setStart] = useState(false);
    console.log(start);
  
    const [end, setEnd] = useState(false);
    console.log(end);
     
    function handleSubmitEvent(event) {
      event.preventDefault();

      
      setStart(false)
      setEnd(false)
      setGuests("Guests")
     }

  

  const value = useMemo(() => ({ rooms, guests, setGuests, start, setStart , end, setEnd, handleSubmitEvent }));
    

  return (
   <RoomContext.Provider value = {value}>
    {children} 
   </RoomContext.Provider>
  )
}

export default RoomProvider