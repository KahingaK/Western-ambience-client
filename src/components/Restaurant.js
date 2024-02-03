import React, {useState, useContext} from 'react';
import food from "../assets/img/food.png";
import Menu from './Menu';
import Socials from './Socials';
import { UserContext } from "../context/UserContext";
import DropZone from './DropZone';
import { toast } from "react-toastify";
import Loading from "./Loading";
import { MdAddBox } from 'react-icons/md';


function Restaurant() {

const [isShowPopup, setShowPopup] = useState(false)
const [image, setImage] = useState(null);
  const { url, currentUser,token } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(false);


function handleShowMenu() {
  setShowPopup(true)
  
}

function handleCloseMenu() {
  setShowPopup(false)
}

const handleSendMenu = async () => {
  setIsLoading(true);

const formData = new FormData();

if (image) {
  formData.append("restaurant[image]", image);
}

try {
  const response = await fetch(`${url}/restaurants`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: formData,
  });

  setIsLoading(false);

  if (response.ok) {
    setImage("");
   
      toast.success("Menu Sent!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else {
      console.log(response.statusText);
      toast.error(response.statusText, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  }
  catch(error) {
    setIsLoading(false);
    toast.error(error, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
    console.log(error);
  };
}

function handleSubmitMenu(e) {
e.preventDefault();
handleSendMenu();
}
  
  
  return (
    <section className="py-36">
    {isLoading && <Loading/>}
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
           <div className='flex flex-col justify-center items-center gap-y-4 p-4'>
           {currentUser.role === "admin"? <DropZone setImage={setImage}/> : null}
            {currentUser.role === "admin"?  <button className="btn btn-primary py-4 h-14 w-48 text-white" onClick={handleSubmitMenu}>
                  New Menu <MdAddBox/>
                  </button>  : null}
           </div>
            

            <button 
            onClick={handleShowMenu}
            className='btn btn-primary uppercase mx-auto h-14 w-48 py-4 px-12'>See Menu</button>
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
