import React, {useState} from 'react';
import food from "../assets/img/food.png";
import Menu from './Menu';
import Socials from './Socials';

function Restaurant() {
const [isShowPopup, setShowPopup] = useState(false)

function handleShowMenu() {
  setShowPopup(true)
  
}

function handleCloseMenu() {
  setShowPopup(false)
}
  
  
  return (
    <section className="py-36">
      <div className="container mx-auto lg:px-0">
        <div className="text-center">
          <div className="font-tertiary uppercase text-[15px] tracking-[6px]">
            Eating & Drinking
          </div>
          <h2 className="font-primary text-[45px]">Restaurant</h2>
        </div>
        <div className='flex flex-col lg:flex-row items-center '>
          <div className='flex-1 text-center lg:text-left  justify-center items-center  mb-14 '>
            <h2 className="font-primary text-4xl mb-4">Visit our Kitchen</h2>
            <p className='font-secondary mb-8 max-w-[620px]'>Come indulge your senses at Western Ambience Hotel. We are proud to provide unique and exceptional food and drink options from our talented kitchen and bar staff, who work hard all year to come up with inspired seasonal menus. Join us for an unforgettable culinary experience. Browse our menu and contact us in advance for reservations or with any questions.</p>
            <button 
            onClick={handleShowMenu}
            className='btn btn-primary uppercase mx-auto lg:mx-0 py-4 px-12'>See Menu</button>
          </div>
          {isShowPopup && <Menu
          onClose={handleCloseMenu}
          />}
          
          <div className=" z-10">
            <img src={food} alt="" />
          </div>
        </div>
        
      </div>
      <Socials/>
  
    </section>
  );
}

export default Restaurant;
