import React, {useContext}  from 'react'
import { useParams } from 'react-router-dom'
import CheckIn from "../components/CheckIn"
import CheckOut from "../components/CheckOut"
import GuestsDropdown from "../components/GuestsDropdown"
import { UserContext } from '../context/UserContext'

//icons 
import {FaCheck} from "react-icons/fa"
import { RoomContext } from '../context/RoomContext'

function RoomDetails() {
    
    const {id} = useParams()
    const {rooms, guests, start,  end, handleSubmitEvent} = useContext(RoomContext)
    const {token} = useContext(UserContext)
    
    //get room
    const room = rooms.find((room) => {
       return room.id === Number(id)
    }) 
   console.log(room);

   function handleSubmit(event) {
    event.preventDefault();

   
    fetch('http://localhost:3000/bookings', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
            start_date: start,
            end_date: end,
            notes: guests,
            room_type: room.type
          }),
    })
        .then((response) => {
           handleSubmitEvent(event)
            console.log(response);
        })
        .catch((error) => {
        console.log(error);
    });
    
    ;
  }

    
    
  return (
   <section className=''>
    <div className='bg-room bg-cover bg-center h-[560px] relative flex justify-center items-center'>
        <div className='absolite w-full h-full bg-black/70'></div>
        <h1 className='text-6xl text-white z-20 font-primary text-center'>{room.name} Details</h1>
    </div>
    <div className='containe mx-auto'>
        <div className='flex flex-col lg:flex-row h-full py-24 px-12'>
            <div className='w-full h-full lg:w-[60%] px-6'>
                <h2 className='h2'>{room.name}</h2>
                <p className='mb-8'>{room.description}</p>
                <img className = "mb-8" src = "" alt = ""/>
                <div className='mt-12 '>
                    <h3 className='h3 mb-3'>
                        Room Facilities
                    </h3>
                    <p className='mb-12'></p>
                    <div className='grid grid-cols-3 gap-6 mb-12'>
                        { room.facilities.map((item, index) => {
                            const {name, icon} = item
                            return <div className='flex items-center gap-x-3 flex-1' key = {index}>
                                <div className='text-3xl text-accent'>{icon}</div>
                                <div className='text-base'> {name}</div>
                            </div>
                        })}
                    </div>
                </div>
            </div>
            <div className='w-full h-full lg:w-[40%]'>
                <div className='py-8 px-6 bg-accent/20 mb-12'>
                    <div className='flex flex-col space-y-4 mb-4'>
                    <div className='py-8 px-6 mb-12'>
                    <div className='flex flex-col space-y-4 mb-4'>
                    <h3>your reservation</h3>
                        <div className='h-[60px]'>
                        <CheckIn />
                        </div>
                        <div className='h-[60px]'>
                        <CheckOut/>
                        </div>
                        <div className='h-[60px]'>
                        <GuestsDropdown />
                        </div>
                        <div className='h-[60px]'>
                        <button className='btn   btn-lg btn-primary w-full'
                        onClick={(e)=> handleSubmit(e)}>book now for {room.price}</button>
                        </div>
                        
                    </div>
                    </div>
                    <div className='mb-6'>
                        <h3 className='h3'>
                            Hotel Ruless
                        </h3>
                        <p>lorem ipsum</p>
                        <ul className='flex flex-col gap-y-4'>
                            <li className='flex items-center gap-x-04'>
                                <FaCheck className='text-accent'/>
                                Checkin:3;00pm - 9:00pm

                            </li>
                            <li className='flex items-center gap-x-04'>
                                <FaCheck className='text-accent'/>
                                Check-outz:3;00pm - 9:00pm

                            </li>
                        </ul>
                    </div>
                   
                    
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
   </section>
  )
}

export default RoomDetails