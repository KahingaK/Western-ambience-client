import React from 'react'
import CheckIn from './CheckIn'
import CheckOut from './CheckOut'
import GuestsDropdown from './GuestsDropdown'

function BookForm() {
  return (
    <form className='h-[300px]  w-full lg:h-[70px] '>
        <div className='flex flex-col w-full h-full lg:flex-row'>
            <div className='flex-1 border-r'>
                <CheckIn/>
            </div>
        
            <div className='flex-1 border-r'>
                <CheckOut/>
            </div>
      
            <div className='flex-1 border-r'>
                <GuestsDropdown/>
            </div>
        </div>
    </form>
  )
}

export default BookForm