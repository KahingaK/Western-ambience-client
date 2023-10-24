import React from 'react'
//link
import {Link} from "react-router-dom"

//icons
import {BsArrowsFullscreen , BsPeople} from "react-icons/bs"

function Room({room}) {
    const {id, name, image, size,type, maxPerson, description, price} = room
  return (
    <>
         <div className='bg-white shadow-2xl min-h-[500px] group'> 
        <div className='overflow-hidden'>
            <img className='group-hover:scale-110 transition-all duratiom-300 w-full' src={image} alt = ""/>
        </div>
        <div className='bg-white shadow-lg max-w-[300px] mx-auto h-[60px] -translate-y-1/2 flex justify-center items-center uppercase font-tertiary tracking-[1px] font-semibold text-base'>
           <div className='flex justify-between w-[80%]'>
                <div className='flex items-center gap-x-2'>
                    <div className='text-accent'>
                        <BsArrowsFullscreen className='text-[15px]'/>
                    </div>
                </div>
                <div>
                    <div className='flax-gap-x-1'>
                        <div>Type</div>
                        <div>{type}</div>
                    </div>
                </div>
                <div className='flex items-center gap-x-2'>
                    <div className='text-accent'>
                        <BsPeople className='text-[18px]'/>
                    </div>
                </div>
                <div>
                    <div className='flex-gap-x-1'>
                        <div>Guests</div>
                        <div>{maxPerson}</div>
                    </div>
                </div>
           </div> 
            
        </div>
        <div className='text-center'>
                <Link to = {`/room/${id}`}>
                    <h3 className='h3'>name</h3>
                </Link>
                <p className='max-w-[300px] mx-auto mb-3 lg:mb-6'>description</p>
            </div>
            <div>
                <Link className='btn btn-secondary btn-sm max-w-[240px] mx-auto'>
                    Book now
                </Link>
            </div>
    </div>
       </>
   
  )
}

export default Room