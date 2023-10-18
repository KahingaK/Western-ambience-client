import React , {useState} from 'react'
//data
import {roomData} from "../data"



import Room from './Room'

function RoomList() {
    
    const [rooms, setRooms] = useState(roomData)
    console.log(roomData);
    
    

  return (
    <section className='py-24'>
        <div className='container mx-auto lg:px-0'>
            <div className='grid grid-cols-1 max-w-sm mx-auto gap-[30px] lg:grid-cols-3 lg:max-w-none lg:mx-0 '>
                {rooms.map((room) => {
                
                    return <Room key = {room.id} room = {room}/>
                })}
            </div>
        </div>

    </section>
  )
}

export default RoomList