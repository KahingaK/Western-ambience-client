import React , {useContext, useEffect, useState} from 'react'
import menu from "../assets/menu.jpg"
import { UserContext } from '../context/UserContext';

function Menu({onClose}) {
  const [image, setImage] = useState()
  const {url} = useContext(UserContext)

  useEffect(() => {
    //Fetch menu
    fetch(`${url}/restaurants`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setImage(data.image_url);
      })
      .catch((error) => {
        console.log("Error fetching Rooms: ", error);
      });
  }, []);
  return (
    <div className="popup">
    <div className="popup-menu lg:max-h-screen  lg:w-auto w-[95%] max-h-screen overflow-auto">
      <div className="h-full relative flex justify-center items-center">
        <span className="close text-3xl pr-4" onClick={onClose}>
          &times;
        </span>
        <div className="h-full">
          <img
            src={image}
            alt="ambience hotel menu"
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  </div>
  )
}

export default Menu