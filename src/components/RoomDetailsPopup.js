import React, { useState } from "react";

function RoomDetailsPopup({ onClose, onRoomAdd, onRoomUpdate, actionType, roomId ,room}) {
  const [roomNumber, setRoomNumber] = useState(actionType === "update" ? room.room_number : "");
  const [roomType, setRoomType] = useState(actionType === "update" ? room.room_type : "");
  const [description, setDescription] = useState(actionType === "update" ? room.description : "");
  const [price, setPrice] = useState(actionType === "update" ? room.price : "");
  const [capacity, setCapacity] = useState(actionType === "update" ? room.capacity : "");
  const data = {
    room_number: roomNumber,
    room_type: roomType,
    description: description,
    price: price,
    capacity: capacity,
  };



 

  const handleDetailsSubmit = (e) => {
    e.preventDefault();
    if (actionType == "add") {
      onRoomAdd(data);
    } else {
      onRoomUpdate(roomId,data);
    }
   
    
    setRoomNumber("")
    setRoomType("")
    setDescription("")
    setPrice("")
    setCapacity("")
  };

  return (
    <div className="popup ">
      <div className="popup-content w-4/6">
        <div className="flex flex-col items-center space-y-6">
          <span className="close text-3xl pr-4" onClick={onClose}>
            &times;
          </span>

          <h1 className="font-primary font-semibold text-2xl text-gray-700 w-4/6 text-center">
            Input Room Details
          </h1>

          <form
            className=" flex flex-col justify-center items-center w-[80%] space-y-4"
            onSubmit={handleDetailsSubmit}
          >
            <input
              type="text"
              placeholder="room number"
              value={roomNumber} // Use value to bind to the state variable
              onChange={(e) => {
                console.log("New roomNumber value:", e.target.value);
                setRoomNumber(e.target.value);
              }} // Update state when the input changes
              className="border-2 rounded-lg w-full h-12 px-4"
              style={{ "--placeholder-color": "gray" }}
            />

            <input
              type="text"
              placeholder="room type"
              value={roomType} // Use value to bind to the state variable
              onChange={(e) => {
                console.log("New roomType value:", e.target.value);
                setRoomType(e.target.value);
              }} // Update state when the input changes
              className="border-2 rounded-lg w-full h-12 px-4"
              style={{ "--placeholder-color": "gray" }}
            />
            <input
              type="text"
              placeholder="description"
              value={description} // Use value to bind to the state variable
              onChange={(e) => {
                setDescription(e.target.value);
              }} // Update state when the input changes
              className="border-2 rounded-lg w-full h-12 px-4"
              style={{ "--placeholder-color": "gray" }}
            />
            <input
              type="text"
              placeholder="price"
              value={price} // Use value to bind to the state variable
              onChange={(e) => {
                setPrice(e.target.value);
              }} // Update state when the input changes
              className="border-2 rounded-lg w-full h-12 px-4"
              style={{ "--placeholder-color": "gray" }}
            />
            <input
              type="text"
              placeholder="capacity"
              value={capacity} // Use value to bind to the state variable
              onChange={(e) => {
                setCapacity(e.target.value);
              }} // Update state when the input changes
              className="border-2 rounded-lg w-full h-12 px-4"
              style={{ "--placeholder-color": "gray" }}
            />

            <button
              className="btn btn-primary font-tertiary text-white rounded-md font-semibold px-4 py-4 w-[80%]"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RoomDetailsPopup;
