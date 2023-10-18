import React, { useState } from "react";
//datepicker
import DatePicker from "react-datepicker";

//datepicker css
import "react-datepicker/dist/react-datepicker.css";
import { BsCalendar } from "react-icons/bs";
import "../datepicker.css";

function CheckIn() {

  const [startDate, setStartDate] = useState(false);

  return (
    <div className=" relative flex items-center justify-end h-full">
      <div className="absolute z-10  pr-8">
        <div>
          <BsCalendar className="text-base"/>
        </div>
      </div>
      
      <DatePicker
        className="w-full h-full"
        selected={startDate}
        placeholderText="Check in"
        onChange={(date) => setStartDate(date)}
      />
      
      
    </div>
  );
}

export default CheckIn;
