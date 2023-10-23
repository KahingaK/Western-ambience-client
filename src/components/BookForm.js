import React , {useState, useContext} from 'react'
import CheckIn from './CheckIn'
import CheckOut from './CheckOut'
import GuestsDropdown from './GuestsDropdown'
import { RoomContext } from '../context/RoomContext'
import { UserContext} from '../context/UserContext'

function BookForm() {
  
    
    const {guests, setGuests, startDate, setStartDate, endDate, setEndDate} = useContext(RoomContext)
    const {token, currentUser} = useContext(UserContext)
 
   

  return (
    <form className='h-[300px] w-full lg:h-[70px] '>
        <div className='flex flex-col w-full h-full lg:flex-row'>
            <div className='flex-1 border-r'>
                <CheckIn/>
            </div>
        
            <div className='flex-1 border-r'>
                <CheckOut />
            </div>
      
            <div className='flex-1 border-r'>
                <GuestsDropdown/>
            </div>        
            <button className = " btn-primary btn:hover-accent flex-1 border-r">
                Check Now
            </button>
        </div>
    </form>
  )
}

export default BookForm