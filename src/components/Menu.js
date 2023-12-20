import React from 'react'
import menu from "../assets/menu.jpg"

function Menu({onClose}) {
  return (
    <div className="popup">
    <div className="popup-content lg:max-h-screen  lg:w-auto w-[95%] max-h-screen overflow-auto">
      <div className="h-full relative flex justify-center items-center">
        <span className="close text-3xl pr-4" onClick={onClose}>
          &times;
        </span>
        <div className="h-full">
          <img
            src={menu}
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