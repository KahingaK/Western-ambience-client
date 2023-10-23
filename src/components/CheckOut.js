import React, { useState , useContext} from "react";
//datepicker
import DatePicker from "react-datepicker";

//datepicker css
import "react-datepicker/dist/react-datepicker.css";
import { BsCalendar } from "react-icons/bs";
import { RoomContext } from "../context/RoomContext";
import "../datepicker.css";

function CheckOut() {
 
  const { start , end, setEnd} = useContext(RoomContext)
  const [ endDate,  setEndDate] = useState(false);
  

  return (
    <div className=" relative flex items-center justify-end h-full">
      <div className="absolute z-10  pr-8">
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
        onChange={(date) => {setEndDate(date)
        setEnd(date)}}
      />
      
      
    </div>
    )
}

export default CheckOut