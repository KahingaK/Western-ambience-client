import React , { useState, useEffect}  from 'react'


function Header() {
 const [header, setHeader ] = useState(false)

 useEffect(() => {
    window.addEventListener("scroll", () => {
        window.scrollY > 50 ? setHeader(true) : setHeader(false)
    })
 },)
 


  return ( 
    <header className={`${header ? "bg-white py-6 shadow-lg" : "bg:transparent py-8" } fixed z-50 w-full transition-all duration-300`}>
     <div className=' container mx-auto flex flex-col items-center gap-y-6 lg:flex-row lg:justify-between lg:gap-y-0'>
        <a href='/'>
        <h4 className='h3 text-orange-400'>
            Western Bliss
        </h4>
         </a>
         <nav className='flex font-tertiary tracking-[3px] text-[15px] items-center gap-x-4 lg:gap-8 '>
            <a href = "" className='transition hover:text-accent ' >
                Home
            </a>
            <a href = "" className='transition hover:text-accent ' >
                Rooms
            </a>
            <a href = "" className='transition hover:text-accent ' >
                Restaurant
            </a>
            <a href = "" className='transition hover:text-accent ' >
                Contact
            </a>
         </nav>
     </div>
    </header>
  )
}

export default Header