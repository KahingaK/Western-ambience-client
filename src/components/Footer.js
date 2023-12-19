import React from "react";
import { FaWhatsapp, FaLinkedinIn, FaMapMarkerAlt } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io";

function Footer() {
  const footer = {
    social: [
      {
        icon: <FaWhatsapp />,
        href: "#",
      },
      {
        icon: <FaMapMarkerAlt />,
        href: "#",
      },
      {
        icon: <FaLinkedinIn />,
        href: "https://www.linkedin.com/company/cosmoplan-consultants/",
      },
      {
        icon: <IoLogoFacebook />,
        href: "https://www.facebook.com/profile.php?id=61551637924199&mibextid=ZbWKwL",
      },
    ],
    copyright: "cosmoplan 2023 - All Rights Reserved.",
  };

  return (
    <footer className="bg-primary py-12">
      <div className="container mx-auto">
      <div className='flex flex-col lg:flex-row justify-between border-b border-opacity-75 border-gray-700 pb-7 lg:pb-14 mb-14'>
          <div className="p-4">
          <a className='mb-6 lg:mb-0 lg:self-center' href='/'>
            {/* <img className = " h-9 lg:h-18" src={Logo} alt="" loading="lazy"/> */}
            <h3 className="h3 text-accent">Western Bliss</h3>            
          </a>
          <p className='font-primary text-xl p-2 text-white'>+254 797180181</p>
        <a href = "mailto:westernambiencehotel@gmail.com" className=' font-primary p-2 text-xl text-white'>westernambiencehotel@gmail.com</a>

          </div>
          <div className="text-white p-4">
          <h3 className="font-secondary uppercase">Other Links</h3>
          </div>
          
          
          <div className='flex gap-x-4 justify-center lg:justify-end'>
         
            {footer.social.map((item, index) => {
              return (
                <div
                  className='w-10 h-10 text-2xl bg-white hover:bg-accent rounded-full flex justify-center items-center transition'
                  key={index}
                >
                
                  <a href='/'>{item.icon}</a>
                </div>
              );
            })}
          </div>
        </div>
        
        <p className='font-primary text-center text-white'>
          &copy; Western Ambience Bliss Hotel - All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
