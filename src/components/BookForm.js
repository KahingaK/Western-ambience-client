import React, { useState, useRef, useContext } from "react";
import CheckIn from "./CheckIn";
import CheckOut from "./CheckOut";
import GuestsDropdown from "./GuestsDropdown";
import ContactPopUp from "./ContactPopUp";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";
import { RoomContext } from "../context/RoomContext";
import Loading from "./Loading";

function BookForm() {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const { setStart, setEnd, setGuests } = useContext(RoomContext);
  const [isLoading, setIsLoading ] = useState(false)
  

  //change state to show Popup component onclick check btn

  const handleCheckNow = () => {
    setPopupOpen(true);
  };

  //Hide Popup contact component
  const handleClosePopup = () => {
    setPopupOpen(false);
  };

  //function to handle submitted data
  const handleContactSubmit = (email, message) => {
    // Handle the submitted email, e.g., send it to a server
    console.log("Submitted email:", email + message);
    setStart(false)
    setEnd(false)
    setGuests("Guests")

    // Close the popup
    setPopupOpen(false);
  };

  const form = useRef();

  const sendEmail = (email, message) => {
    setIsLoading(true)

    // Check if any field is empty
    if (!message || !email) {
      // Handle the error, e.g., show an error message to the user
      console.error("Please fill in all fields.");
      toast.error("Please fill in all fields.", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      return; // Exit the function without sending the email
    }

    // If all fields are filled, send the email
    emailjs
      .sendForm(
        "service_i6tcq5n",
        "template_wddz79n",
        form.current,
        "Do1vIelv9gzgnw0qw"
      )
      .then(
        (result) => {
          setIsLoading(false)
          console.log(result.text);
            toast.success("Message sent!", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div>
    {isLoading && <Loading/>}
        <form  className="h-[300px] w-full lg:h-[70px] ">
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
          <button
            className=" btn-primary btn:hover-accent flex-1 border-r"
            type="button"
            onClick={handleCheckNow}
          >
            Check Now
          </button>
        </div>
      </form>
      {isPopupOpen && (
        <ContactPopUp
          onClose={handleClosePopup}
          onContactSubmit={handleContactSubmit}
          sendEmail={sendEmail}
          form = {form}
        />
      )}
    </div>
  );
}

export default BookForm;
