import React from 'react'
//link
import {Link} from "react-router-dom"

//icons
import {BsArrowsFullscreen , BsPeople} from "react-icons/bs"


function Room({room}) {
    const {id, name, image, size, maxperson, description, price} = room
  return (
    <div className='bg-white shadow-2xl min-h-[500px] group'> 
        <div className='overflow-hidden'>
            <img className='group-hover:scale-110 transition-all duratiom-300 w-full' src={image} alt = ""/>
        </div>
        <div className='bg-white shadow-lg max-w-[300px] mx-auto h-[60px] translate-y-1/2 flex justify-cnter items-center uppercase font-tertiary tracking-[1px] font-semibold text-base'>
           <div className='flex justify-between w-[80%]'>
                <div>size</div>
                <div>capacity</div>
           </div> 
           <div className='text-center'>
            <Link>
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
    </div>
  )
}

export default Room