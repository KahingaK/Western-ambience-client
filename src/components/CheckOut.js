import React, {useContext} from "react";
//datepicker
import DatePicker from "react-datepicker";

//datepicker css
import "react-datepicker/dist/react-datepicker.css";
import { BsCalendar } from "react-icons/bs";
import { RoomContext } from "../context/RoomContext";
import "../datepicker.css";

function CheckOut() {

  //import context & state
  const { start , end, setEnd} = useContext(RoomContext)
  

  return (
    <div className=" relative flex items-center justify-end h-full">
      <div className="absolute pr-8">
        <div>
          <BsCalendar className="text-base"/>
        </div>
      </div>
      
      <DatePicker
        className="w-full h-full"
        selected={end}
        dateFormat= "dd/MM/yyyy"
        minDate={start}
        placeholderText="Check Out"
        onChange={(date) => 
        setEnd(date)}
      />
      
      
    </div>
    )
}

export default CheckOut