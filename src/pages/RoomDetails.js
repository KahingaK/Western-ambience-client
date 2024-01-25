import React, { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import CheckIn from "../components/CheckIn";
import CheckOut from "../components/CheckOut";
import GuestsDropdown from "../components/GuestsDropdown";
import { UserContext } from "../context/UserContext";
import { toast } from "react-toastify";
import Payment from "../components/Payment";
import { Menu } from "@headlessui/react";
import { RadioGroup } from "@headlessui/react";

//icons
import { FaCheck } from "react-icons/fa";
import { RoomContext } from "../context/RoomContext";
import Loading from "../components/Loading";
import { BsChevronDown } from "react-icons/bs";

function RoomDetails() {
  const { id } = useParams();
  const {
    rooms,
    guests,
    start,
    end,
    selectedAddOn,
    setSelectedAddOn,
    handleSubmitEvent,
    refresh,
  } = useContext(RoomContext);
  const { url, token } = useContext(UserContext);
  const [payPopup, setPayPopup] = useState(false);
  const [checkoutId, setCheckoutId] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  //get room
  const room = rooms.find((room) => {
    return room.id === Number(id);
  });

  function showPayPopup() {
    if (token) {
      setPayPopup(true);
    } else {
      // Handle the case when the token is not available, e.g., show an error message
      console.error(
        "Token is not available. Please log in or obtain a valid token."
      );
      refresh();
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
  }

  function closePayPopup() {
    setPayPopup(false);
  }
  //Functions to calculate payments
  const addOns = [
    { title: "Bed and Breakfast", price: 300 },
    { title: "Fullboard", price: 900 },
    // Add more add-ons as needed
  ];

  const getAddOnPrice = () => {
    const selectedAddOnObj = addOns.find(
      (addon) => addon.title === selectedAddOn
    );
    return selectedAddOnObj ? selectedAddOnObj.price : 0;
  };

  const addOnPrice = () => {
    const roomPrice = room.price;
    const selectedAddOnPrice = getAddOnPrice();

    const totalPrice = selectedAddOnPrice;

    // Use totalPrice as needed
    console.log("Add-on Price:", totalPrice);
  };

  function calcBookingPrice() {
    if (!start || !end) {
      console.log("Start date or end date not present");
      return room.price; // Return the default room price
    }
  
    // Calculate the booking period
    const bookingPeriodMs = end - start;
    const bookingPeriodDs = bookingPeriodMs / (24 * 60 * 60 * 1000);
  
    // Calculate the booking price based on the room price and booking period
    const bookingPrice = bookingPeriodDs * room.price
    const selectedAddOnPrice = getAddOnPrice();

  
    // Calculate the total price including the selected add-on
    const totalPrice = bookingPrice + selectedAddOnPrice;
  
    // Log the details for debugging
    console.log("Room price:", room.price);
    console.log("Booking price:", bookingPrice);
    console.log("Add on price:", selectedAddOnPrice);
    console.log("Total price:", totalPrice);
  
    return totalPrice;
    //enddate - startdate * roomprice + bnb or fullboard
  }
  const totalPrice = calcBookingPrice();

  //Set Bed and Breakfast
  //Set Fullboard

  // // Handle stripe POST requests
  // async function handleSubmitBookingStripe() {
  //   setIsLoading(true);
  //   try {
  //     const response = await fetch(`${url}/bookings`, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: `Bearer ${token}`,
  //       },
  //       body: JSON.stringify({
  //         start_date: start,
  //         end_date: end,
  //         notes: guests,
  //         room_type: room.type,
  //       }),
  //     });

  //     const data = await response.json();

  //     if (response.ok) {
  //       // Set state and wait for it to complete
  //       await handleSubmitPayment({
  //         booking_id: data.id,
  //         user_id: data.user_id,

  //         // Add other payment details as needed
  //       });
  //       refresh();
  //       setIsLoading(false);

  //       toast.success(`Booking received`, {
  //         position: "top-center",
  //         autoClose: 3000,
  //         hideProgressBar: true,
  //         closeOnClick: true,
  //         pauseOnHover: true,
  //         draggable: true,
  //         progress: undefined,
  //         theme: "colored",
  //       });
  //     } else {
  //       console.log(data);
  //       setIsLoading(false);
  //       toast.error(`Error ${data[0]} ${data[1]}}`, {
  //         position: "top-center",
  //         autoClose: 3000,
  //         hideProgressBar: true,
  //         closeOnClick: true,
  //         pauseOnHover: true,
  //         draggable: true,
  //         progress: undefined,
  //         theme: "colored",
  //       });
  //     }
  //   } catch (error) {
  //     console.log(error);
  //     setIsLoading(false);
  //     toast.error(error.message, {
  //       position: "top-center",
  //       autoClose: 3000,
  //       hideProgressBar: true,
  //       closeOnClick: true,
  //       pauseOnHover: true,
  //       draggable: true,
  //       progress: undefined,
  //       theme: "colored",
  //     });
  //   }
  // }

  // Handle mpesa POST requests
  async function handleSubmitBooking() {
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
        // await handleSubmitPayment({
        //   booking_id: data.id,
        //   user_id: data.user_id,
        //   amount: amount,
        //   phone_number: number,
        //   // Add other payment details as needed
        // });
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
        toast.error(`Error ${data[0]} ${data.error}}`, {
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

  function CheckIcon(props) {
    return (
      <svg viewBox="0 0 24 24" fill="none" {...props}>
        <circle cx={12} cy={12} r={12} fill="#fff" opacity="0.2" />
        <path
          d="M7 13l3 3 7-7"
          stroke="#fff"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  //POST stkPush for mpesa payment
  // const handleSubmitPayment = async (paymentData) => {
  //   setIsLoading(true);

  //   try {

  //     const response = await fetch(`${url}/stkpush`, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: `Bearer ${token}`,
  //       },
  //       body: JSON.stringify(
  //         paymentData
  //       ),
  //     });
  //     setIsLoading(false);
  //     const data = await response.json();

  //     if (response.ok) {
  //       // Set state and wait for it to complete

  //       toast.success(data[1].ResponseDescription, {
  //         position: "top-right",
  //         autoClose: 3000,
  //         hideProgressBar: true,
  //         closeOnClick: true,
  //         pauseOnHover: true,
  //         draggable: true,
  //         progress: undefined,
  //         theme: "colored",
  //       });
  //     } else {
  //       console.log(data);
  //       toast.error(`Error ${data.error}`, {
  //         position: "top-center",
  //         autoClose: 3000,
  //         hideProgressBar: true,
  //         closeOnClick: true,
  //         pauseOnHover: true,
  //         draggable: true,
  //         progress: undefined,
  //         theme: "colored",
  //       });
  //     }
  //   } catch (error) {
  //     console.log(error);
  //     toast.error(error.message, {
  //       position: "top-center",
  //       autoClose: 3000,
  //       hideProgressBar: true,
  //       closeOnClick: true,
  //       pauseOnHover: true,
  //       draggable: true,
  //       progress: undefined,
  //       theme: "colored",
  //     });
  //   }
  // };

  return (
    <section className="">
      {isLoading && <Loading />}
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
            <div className="flex flex-col justify-center lg:items-start text-center lg:w-[50%]  gap-2">
              <RadioGroup value={selectedAddOn} onChange={setSelectedAddOn}>
                <RadioGroup.Label className="sr-only ">addOns</RadioGroup.Label>
                <div className="space-y-4 w-full ">
                  {addOns.map((addon) => (
                    <RadioGroup.Option
                      key={addon.title}
                      value={addon.title}
                      className={({ active, checked }) =>
                        `${active ? "ring-2 ring-white/60 ring-offset-2" : ""}
                  ${checked ? "bg-accent text-white" : "bg-white"}
                    relative flex cursor-pointer border w-full px-8 py-2 shadow-md focus:outline-none`
                      }
                    >
                      {({ active, checked }) => (
                        <>
                          <div className="flex items-center gap-x-4 justify-between">
                            <div className="flex items-center">
                              <div className="text-sm">
                                <RadioGroup.Label
                                  as="p"
                                  className={`font-medium  ${
                                    checked ? "text-white" : "text-gray-900"
                                  }`}
                                >
                                  {addon.title}
                                </RadioGroup.Label>
                              </div>
                            </div>
                            {checked && (
                              <div className="shrink-0 text-white">
                                <CheckIcon className="h-6 w-6" />
                              </div>
                            )}
                          </div>
                        </>
                      )}
                    </RadioGroup.Option>
                  ))}
                </div>
              </RadioGroup>
            </div>
            <p></p>

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
                    <h3 className="h3 mb-3">Your reservation</h3>
                    
                    <div className="h-[60px]">

                      <CheckIn/>
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
                        onClick={handleSubmitBooking}
                      >
                        book now for {totalPrice}
                      </button>
                      {/* {payPopup && (
        <Payment
          onClose={closePayPopup}
          onBookingSubmit={handleSubmitBooking}
          price = {room.price}
          
          
        />
      )} */}
                    </div>
                  </div>
                </div>
                <div className="mb-6">
                  <h3 className="h3">Hotel Rules</h3>
                  <p></p>
                  <ul className="flex flex-col gap-y-4">
                    <li className="flex items-center gap-x-4">
                      <FaCheck className="text-accent" />
                       Checkin: 3:00pm - 9:00pm
                    </li>
                    <li className="flex items-center gap-x-4">
                      <FaCheck className="text-accent" />
                       Check-out: 3:00pm - 9:00pm
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
