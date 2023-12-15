import React, { useContext, useState } from "react";
import CheckIn from "./CheckIn";
import CheckOut from "./CheckOut";
import GuestsDropdown from "./GuestsDropdown";
import { FaCheck } from "react-icons/fa";
import { RoomContext } from "../context/RoomContext";
import { Menu } from "@headlessui/react";
import { BsChevronDown } from "react-icons/bs";

function BookingUpdatePopup({onClose, bookingId, onBookingUpdate, rooms}) {
  const { start, end, guests, refresh } = useContext(RoomContext);
  const [room, setRoom] = useState("Room")
  const [roomId, setRoomId] = useState("")
  const data = {
    start_date: start,
    end_date: end,
    notes: guests,
    
  };

  function handleSubmit(e) {
    onBookingUpdate(bookingId,data)
    refresh()
  }

  return (
    <div className="popup ">
      <div className="popup-update container mx-auto w-5/6  lg:w-[40%]">
        <div className=" flex flex-col items-center bg-white  rounded-md ">
          <span className="close text-3xl pr-10 pt-2" onClick={onClose}>
            &times;
          </span>

          <div className=" w-full h-full ">
            <div className="py-4 px-6 bg-white ">
              <div className="flex flex-col space-y-4 mb-4">
                <div className="py-4 px-4  mb-4">
                  <div className="flex flex-col space-y-4 mb-4">
                    <h3 className="font-secondary uppercase font-semibold text-accent w-4/6">
                      Update Booking
                    </h3>
                    <div className="h-[60px] shadow-md">
                      <CheckIn />
                    </div>
                    <div className="h-[60px] shadow-md">
                      <CheckOut />
                    </div>
                    <div className="h-[60px] shadow-md">
                      <GuestsDropdown />
                    </div>
                    <div className="h-[60px] shadow-md">
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
                    <div className="h-[60px]">
                      <button
                        className="btn   btn-lg btn-primary w-full"
                        onClick={handleSubmit}
                      >
                        UPDATE
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookingUpdatePopup;
