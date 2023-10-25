import React, { useState, useContext } from "react";
import { RoomContext } from "../context/RoomContext";

function ContactPopUp({ onClose, onContactSubmit, sendEmail, form }) {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  //import context
  const { guests, start, end } = useContext(RoomContext);

  //Create Email Message
  const inquiry = `Inquiry for ${guests} from ${start} to ${end}`;
  //submit data to bookform component
  const handleSubmit = (e) => {
    e.preventDefault();
    onContactSubmit(email, message);
    sendEmail(email, message)
    
  };

  return (
    <div className="popup">
      <div className="popup-content">
        <div className="flex flex-col items-center space-y-6">
          <span className="close text-3xl pr-4" onClick={onClose}>
            &times;
          </span>

          <h1 className="font-primary font-semibold text-2xl text-gray-700 w-4/6 text-center">
            Contact Us
          </h1>
          <p className=" text-gray-500 font-tertiary text-center w-5/6">
            Please provide us with your email address or phone number so that we
            constantly update you, do not miss out on important notifications.
          </p>
          <form ref={form} className=" flex flex-col justify-center items-center w-[80%] space-y-4">
            <input
              name="from_email"
              type="text"
              placeholder="Email/number"
              value={email} // Use value to bind to the state variable
              onChange={(e) => {
                setEmail(e.target.value);
                setMessage(inquiry);
              }} // Update state when the input changes
              className="border-2 rounded-lg w-full h-12 px-4"
              style={{ "--placeholder-color": "gray" }}
            />

            <input
              name="message"
              type="hidden"
              placeholder="contact"
              value={message} // Use value to bind to the state variable
              onChange={(e) => {
                setEmail(e.target.value);
                setMessage(inquiry);
                console.log(start);
              }} // Update state when the input changes
              className="outline-none border-b-2 border-b-[#386480] h-[60%] bg-transparent font-normal w-full pl-3"
            />

            <button
              className="btn btn-primary font-tertiary text-white rounded-md font-semibold px-4 py-4 w-[80%]"
              type="button"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactPopUp;
