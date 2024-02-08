import React, {useState } from 'react'




function EmailBooking({onClose, onBookingSubmit}) {

    const [email, setEmail] = useState()
    function handleSubmit(e) {
        e.preventDefault();
        onBookingSubmit(email)
        onClose()
    }
  return (
    <div className="popup ">
    <div className="popup-content w-4/6">
      <div className="flex flex-col items-center space-y-6">
        <span className="close text-3xl pr-4" onClick={onClose}>
          &times;
        </span>

        <h1 className="font-primary font-semibold text-2xl text-gray-700 w-4/6 text-center">
          Sign Up
        </h1>
        <p className=" text-gray-500 font-tertiary text-center w-5/6">
          Input your email address to receive updates just for you, do not miss out on important notifications.
        </p>
        <form className=" flex flex-col justify-center items-center w-[80%] space-y-4">
          <input
            name="from_email"
            type="text"
            placeholder="Email"
            value={email} // Use value to bind to the state variable
            onChange={(e) => {
              setEmail(e.target.value);
              
            }} // Update state when the input changes
            className="border-2 rounded-lg w-full h-12 px-4"
            style={{ "--placeholder-color": "gray" }}
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
  )
}

export default EmailBooking