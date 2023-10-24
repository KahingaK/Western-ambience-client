import React, { useState, useContext } from "react";
import { RoomContext } from "../context/RoomContext";

function ContactPopUp({ onClose, onContactSubmit, sendEmail, form }) {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  //import context
  const { guests, start, end} = useContext(RoomContext);

  //Create Email Message
  const inquiry = `Inquiry for ${guests} from ${start} to ${end}`;
  //submit data to bookform component
  const handleSubmit = (e) => {
    e.preventDefault();
    onContactSubmit(email, message);
    
  };

  return (
    <div className="popup">
      <div className="popup-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2>Enter Your Email Address</h2>
        <form ref={form} className="flex flex-col gap-y-4 py-4">
          <input
            name="from_email"
            type="text"
            placeholder="Your email"
            value={email} // Use value to bind to the state variable
            onChange={(e) => {
              setEmail(e.target.value);
              setMessage(inquiry);
            }} // Update state when the input changes
            className="outline-none border-b-2 border-b-[#386480] h-[60%] bg-transparent font-normal w-full pl-3"
          />

          <input
            name="message"
            type="hidden"
            placeholder="Your email"
            value={message} // Use value to bind to the state variable
            onChange={(e) => {
              setEmail(e.target.value);
              setMessage(inquiry);
              console.log(start)
              
            }} // Update state when the input changes
            className="outline-none border-b-2 border-b-[#386480] h-[60%] bg-transparent font-normal w-full pl-3"
          />

          
          <button type="button" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactPopUp;
