import React, { useState, useEffect, useContext } from "react";
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
  const { start, end, guests } = useContext(RoomContext);
  const {token } = useContext(UserContext)


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
      <form  className="h-[300px] w-full lg:h-[70px] ">
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
          <select onChange = {(e)=> setRoomId(e.target.value)}>
          {
            rooms.map((room)=><option key = {room.id} value = {room.id}> {room.room_number} </option>)
   
          }

   </select>
          </div>
          <button
            className=" btn-primary btn:hover-accent flex-1 border-r"
            type="button"
            >
            Check Now
          </button>
        </div>
      </form>
     </div>
  );
}

export default AdminBookForm;
