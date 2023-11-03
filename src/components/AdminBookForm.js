import React, { useState, useEffect, useContext } from "react";
import { Menu } from "@headlessui/react";
import { BsChevronDown } from "react-icons/bs";
import CheckIn from "./CheckIn";
import CheckOut from "./CheckOut";
import GuestsDropdown from "./GuestsDropdown";
import ContactPopUp from "./ContactPopUp";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";
import { RoomContext } from "../context/RoomContext";
import { UserContext } from "../context/UserContext";

function AdminBookForm() {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [rooms, setRooms] = useState([])
  const [roomId, setRoomId] = useState("")
  const [room, setRoom] = useState("room")
  const { start, end, guests } = useContext(RoomContext);
  const {token, currentUser } = useContext(UserContext)


  useEffect(() => {
    //Fetch Rooms
    fetch("http://localhost:3000/rooms", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setRooms(data);
        console.log(rooms);
      })
      .catch((error) => {
        console.log("Error fetching Rooms: ", error);
      });
  }, []);

  

   function handleSubmitBooking(event) {
    event.preventDefault();

    fetch("http://localhost:3000/bookings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        start_date: start,
        end_date: end,
        notes: guests,
        room_id: roomId,
        user_id: currentUser.id
      }),
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }


  


  return (
    <div>
    
      <form  className="h-[300px] w-full lg:h-[70px] "
      onSubmit={handleSubmitBooking}>
        <div className="flex flex-col w-full h-full lg:flex-row">
          <div className="flex-1 border-r">
            <CheckIn />
          </div>

          <div className="flex-1 border-r">
            <CheckOut />
          </div>

          <div className="flex-1 border-r">
            <GuestsDropdown />
          </div>
          <div className="flex-1 border-r">
          <Menu as="div" className="w-full h-full bg-white  relative">
      <Menu.Button className="w-full h-full flex items-center justify-between px-8">
        {room}
        <BsChevronDown className="text-base text-accent-hover" />
      </Menu.Button>
      <Menu.Items
        as="ul"
        className="bg-white absolute w-full flex flex-col z-40"
      >
        {rooms.map((room , index) => {
          return (
            <Menu.Item
              as="li"
              key={index}
              className="border-b last:border-b-0 h-12 hover:bg-accent hover:text-white w-full flex justify-center items-center cursor-pointer"
              onClick={() => {
                setRoomId(index);
                setRoom(room.room_number);
              }}
            >
              {room.room_number}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
          </div>
          <button
            className=" btn-primary font-secondary btn:hover-accent flex-1 border-r"
            type="submit"

            >
            BOOK NOW
          </button>
        </div>
      </form>
     </div>
  );
}

export default AdminBookForm;
