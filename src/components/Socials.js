import React, {useState , useEffect} from 'react'


function Socials() {
    // State to track visibility
    const [isScroll, setIsScroll] = useState(true)

    const links = [
        {
          id: 1,
          name: (
            <>
               call us
            </>
          ),
          href:  "tel:+254712000200",
          style: "rounded-tl-md",
        },
        {
          id: 2,
          name: (
            <>
             email
            </>
          ),
          href: "mailto:westernambiencebliss@gmail.com",
        },
         
        {
          id: 3,
          name: "Facebook",
          href: "https://www.facebook.com/WesternAmbienceHotel"
        },
          
       
      ];

      useEffect(() => {
        let prevScrollY = window.scrollY;
    
        const handleScroll = () => {
          const currentScrollY = window.scrollY;
    
          if (currentScrollY > prevScrollY) {
            // Scrolling down, hide the button
          
            setIsScroll(false)
          } else {
            // Scrolling up, show the button
          
            setIsScroll(true)
          }
    
          prevScrollY = currentScrollY;
        };
    
        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          // Clean up the scroll event listener when the component unmounts
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
      
  return (
    <div>
    {isScroll && (
      <div className="fixed bottom-0 w-full lg:hidden z-50">
        <ul className="flex w-full">
          {links.map(({ id, name, href, style, download }) => (
            <li
              key={id}
              className={
                'btn btn-primary flex justify-center items-center w-full h-10 px-6 border bg-accent hov duration-300 ' + style
              }
            >
              <a
                href={href}
                className=" items-center text-white"
                download={download}
                target="_blank"
                rel="noreferrer"
              >
                {name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    )}
  </div>
  
   
  
  )
}

export default Socials