import React, { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import CheckIn from "../components/CheckIn";
import CheckOut from "../components/CheckOut";
import GuestsDropdown from "../components/GuestsDropdown";
import { UserContext } from "../context/UserContext";
import { toast } from "react-toastify";
import Payment from "../components/Payment";

//icons
import { FaCheck } from "react-icons/fa";
import { RoomContext } from "../context/RoomContext";
import Loading from "../components/Loading";

function RoomDetails() {
  const { id } = useParams();
  const { rooms, guests, start, end, handleSubmitEvent, refresh } =
    useContext(RoomContext);
  const { url, token } = useContext(UserContext);
  const [payPopup, setPayPopup] = useState(false)
  const [checkoutId, setCheckoutId] = useState("")
  const [isLoading, setIsLoading] = useState(false);


  //get room
  const room = rooms.find((room) => {
    return room.id === Number(id);
  });
  console.log(room);
  
  function showPayPopup() {
    if (token) {
      setPayPopup(true);
    } else {
      // Handle the case when the token is not available, e.g., show an error message
      console.error('Token is not available. Please log in or obtain a valid token.');
      refresh()
      toast.error("You must be logged in to create a booking", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };
  
  function closePayPopup() {    
    setPayPopup(false)
  }

  // Handle stripe POST requests
  async function handleSubmitBookingStripe() {
    setIsLoading(true);
    try {
      const response = await fetch(`${url}/bookings`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          start_date: start,
          end_date: end,
          notes: guests,
          room_type: room.type,
        }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        // Set state and wait for it to complete
        await handleSubmitPayment({
          booking_id: data.id,
          user_id: data.user_id,
         
          // Add other payment details as needed
        });
        refresh();
        setIsLoading(false);
  
        toast.success(`Booking received`, {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      } else {
        console.log(data);   
        setIsLoading(false);     
        toast.error(`Error ${data[0]} ${data[1]}}`, {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      toast.error(error.message, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  }
  
  // Handle mpesa POST requests
  async function handleSubmitBooking(number, amount) {
    setIsLoading(true);
  try {
    const response = await fetch(`${url}/bookings`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        start_date: start,
        end_date: end,
        notes: guests,
        room_type: room.type,
      }),
    });

    const data = await response.json();

    if (response.ok) {
      // Set state and wait for it to complete
      await handleSubmitPayment({
        booking_id: data.id,
        user_id: data.user_id,
        amount: amount,
        phone_number: number,
        // Add other payment details as needed
      });
      refresh();
      setIsLoading(false);
      toast.success(`Booking received`, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else {
      console.log(data);
      setIsLoading(false);
      toast.error(`Error ${data[0]} ${data[1]}}`, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  } catch (error) {
    console.log(error);
    setIsLoading(false);
    toast.error(error.message, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  }
}

  //POST stkPush for mpesa payment
  const handleSubmitPayment = async (paymentData) => {
    setIsLoading(true);

    try {

      const response = await fetch(`${url}/stkpush`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(
          paymentData
        ),
      });
      setIsLoading(false);
      const data = await response.json();

      if (response.ok) {
        // Set state and wait for it to complete
        
        toast.success(data[1].ResponseDescription, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      } else {
        console.log(data);
        toast.error(`Error ${data.error}`, {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };


  return (
    <section className="">
      { isLoading && <Loading/>}
      <div className="bg-room bg-cover bg-center h-[560px] relative flex justify-center items-center">
        <div className=" w-full h-full bg-black/70"></div>
        <h1 className="text-6xl text-white z-20 font-primary text-center">
          {room.name} Details
        </h1>
      </div>
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row h-full py-24">
          <div className="w-full h-full lg:w-[60%] px-6">
            <h2 className="h2">{room.name}</h2>
            <p className="mb-8">{room.description}</p>
            <img className="mb-8" src="" alt="" />
            <div className="mt-12 ">
              <h3 className="h3 mb-3">Room Facilities</h3>
              <p className="mb-12"></p>
              <div className="grid grid-cols-3 gap-6 mb-12">
                {room.facilities.map((item, index) => {
                  const { name, icon } = item;
                  return (
                    <div
                      className="flex items-center gap-x-3 flex-1"
                      key={index}
                    >
                      <div className="text-3xl text-accent">{icon}</div>
                      <div className="text-base"> {name}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="w-full h-full lg:w-[40%]">
            <div className="py-8 px-6 bg-accent/20 mb-12">
              <div className="flex flex-col space-y-4 mb-4">
                <div className="py-8 px-6 mb-12">
                  <div className="flex flex-col space-y-4 mb-4">
                    <h3>your reservation</h3>
                    <div className="h-[60px]">
                      <CheckIn />
                    </div>
                    <div className="h-[60px]">
                      <CheckOut />
                    </div>
                    <div className="h-[60px]">
                      <GuestsDropdown />
                    </div>
                    <div className="h-[60px]">
                      <button
                        className="btn   btn-lg btn-primary w-full"
                        onClick={showPayPopup}
                      >
                        book now for {room.price}
                      </button>
                      {payPopup && (
        <Payment
          onClose={closePayPopup}
          onBookingSubmit={handleSubmitBooking}
          price = {room.price}
          
          
        />
      )}
                    </div>
                  </div>
                </div>
                <div className="mb-6">
                  <h3 className="h3">Hotel Rules</h3>
                  <p></p>
                  <ul className="flex flex-col gap-y-4">
                    <li className="flex items-center gap-x-04">
                      <FaCheck className="text-accent" />
                      Checkin:3;00pm - 9:00pm
                    </li>
                    <li className="flex items-center gap-x-04">
                      <FaCheck className="text-accent" />
                      Check-out:3;00pm - 9:00pm
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RoomDetails;
