import React, { useState, useEffect, useContext } from "react";
import { Menu } from "@headlessui/react";
import { BsChevronDown } from "react-icons/bs";
import CheckIn from "./CheckIn";
import CheckOut from "./CheckOut";
import GuestsDropdown from "./GuestsDropdown";
import { toast } from "react-toastify";
import { RoomContext } from "../context/RoomContext";
import { UserContext } from "../context/UserContext";
import Loading from "./Loading";

function AdminBookForm() {
  
  const [rooms, setRooms] = useState([]);
  const [roomId, setRoomId] = useState("");
  const [room, setRoom] = useState("Room");
  const { start, end, guests, refresh } = useContext(RoomContext);
  const { url, token, currentUser } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    //Fetch Rooms
    fetch(`${url}/rooms`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {

        setRooms(data);

      })
      .catch((error) => {
        console.log("Error fetching Rooms: ", error);
      });
  }, []);

  function handleSubmitBooking(event) {
    setIsLoading(true)
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
        user_id: currentUser.id,
      }),
    })
    .then((response) => {
      response.json().then((data) => {
      
        console.log(response);
        setIsLoading(false)
        if (response.ok) {
         
          toast.success(data.message, {
            position: "top-right",
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
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        }
        refresh();
        setRoom("Room");

      })
      .catch((error) => {
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
      });
    })
  }

  return (
    <div>
    {isLoading && <Loading/>}
      <form
        className="h-[300px] w-full lg:h-[70px] "
        onSubmit={handleSubmitBooking}
      >
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
                {rooms.map((room, index) => {
                  return (
                    <Menu.Item
                      as="li"
                      key={index}
                      className="border-b last:border-b-0 h-12 hover:bg-accent hover:text-white w-full flex justify-center items-center cursor-pointer"
                      onClick={() => {
                        setRoomId(room.id);
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
