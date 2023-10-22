import React, {useContext}  from 'react'
import { useParams } from 'react-router-dom'
import CheckIn from "../components/CheckIn"
import CheckOut from "../components/CheckOut"
import GuestsDropdown from "../components/GuestsDropdown"

//icons 
import {FaCheck} from "react-icons/fa"
import { RoomContext } from '../context/RoomContext'

function RoomDetails() {

    const {rooms} = useContext(RoomContext)    
    const {id} = useParams()
    
    //get room
    const room = rooms.find((room) => {
       return room.id === Number(id)
    }) 
   console.log(room);

    
    
  return (
   <section className=''>
    <div className='bg-room bg-cover bg-center h-[560px] relative flex justify-center items-center'>
        <div className='absolite w-full h-full bg-black/70'></div>
        <h1 className='text-6xl text-white z-20 font-primary text-center'>{room.name} Details</h1>
    </div>
    <div className='containe mx-auto'>
        <div className='flex flex-col lg:flex-row h-full py-24'>
            <div className='w-full h-full lg:w-[60%] px-6'>
                <h2 className='h2'>{room.name}</h2>
                <p className='mb-8'>{room.description}</p>
                <img className = "mb-8" src = "" alt = ""/>
                <div className='mt-12 '>
                    <h3 className='h3 mb-3'>
                        Room Facilities
                    </h3>
                    <p className='mb-12'></p>
                    <div>
                        {/* {facilities.map} */}
                    </div>
                </div>
            </div>
            <div className='w-full h-full lg:w-[40%]'>
                <div className='py-8 px-6 bg-accent/20 mb-12'>
                    <div className='flex flex-col space-y-4 mb-4'>
                    <div className='py-8 px-6 bg-accent/20 mb-12'>
                    <div className='flex flex-col space-y-4 mb-4'>
                    <h3>your reservation</h3>
                        <div className='h-[60px]'>
                            <CheckIn/>
                        </div>
                        <div className='h-[60px]'>
                            <CheckOut/>
                        </div>
                        <div className='h-[60px]'>
                            <GuestsDropdown/>
                        </div>
                        <button className='btn btn-lg btn-primary w-full'>book now for {room.price}</button>
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