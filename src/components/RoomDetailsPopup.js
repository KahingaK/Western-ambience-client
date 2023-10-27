import React, {useState} from 'react'

function RoomDetailsPopup({onClose , onRoomSubmit}) {

    const [roomNumber, setRoomNumber] = useState("");
    const [roomType, setRoomType] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [capacity, setCapacity] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData();

        data.append("room[room_number]", roomNumber);
        data.append("room[room_type]", roomType);
        data.append("room[description]", description);
        data.append("room[price]", price);
        data.append("room[capacity]", capacity);
        console.log(data);
        console.log(roomNumber);
        console.log(roomType);
            onRoomSubmit(data);
        
        
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
        
        <form  className=" flex flex-col justify-center items-center w-[80%] space-y-4"
        onSubmit={handleSubmit}
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
  )
}

export default RoomDetailsPopup