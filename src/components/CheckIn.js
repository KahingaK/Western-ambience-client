import React ,{useContext, useState} from "react";
//datepicker
import DatePicker from "react-datepicker";

//datepicker css
import "react-datepicker/dist/react-datepicker.css";
import { BsCalendar } from "react-icons/bs";
import { RoomContext } from "../context/RoomContext";
import "../datepicker.css";

function CheckIn() {

  const { start, setStart, handleSubmitEvent} = useContext(RoomContext)

  const [startDate, setStartDate] = useState(false)
  
   
  return (
    <div className=" relative flex items-center justify-end h-full">
      <div className="absolute z-10  pr-8">
        <div>
          <BsCalendar className="text-base"/>
        </div>
      </div>
      
      <DatePicker
        className="w-full h-full"
        dateFormat= "dd/MM/yyyy"
        minDate={new Date()}
        selected={start}
        placeholderText="Check in"
        onChange={(date) => {
            setStartDate(date);
            setStart(date); // Call your additional function here
  }}
      />
      
      
    </div>
  );
}

export default CheckIn;
