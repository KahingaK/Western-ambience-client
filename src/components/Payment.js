import React, { useState, useEffect } from "react";
import MpesaForm from "./MpesaForm";
import CardForm from "./CardForm"
import { BsCardImage, BsCash, BsCreditCard, BsPhone, BsPhoneVibrate } from "react-icons/bs";
import { FaMobile, FaMobileAlt, FaMoneyBill } from "react-icons/fa";
import visa from "../assets/img/M-PESA_LOGO-01.svg"
import Room from "./Room";

function Payment({price, onClose, bookingId, userId, onBookingSubmit}) {

  
  
  
  const [paymentOption, setPaymentOption] = useState("mpesa");

  const handlePayNow = (event) => {
    event.preventDefault();
    // Perform logic based on the selected payment option
    if (paymentOption === "card") {
      // Handle card payment logic
    } else if (paymentOption === "mpesa") {
      // Handle M-Pesa payment logic
    } else {
      // Handle other payment logic
    }

    console.log(`${userId} and ${bookingId}`);
    onClose();
  };
  
  



  function handlePayLater (event) {
    event.preventDefault()
    onBookingSubmit()
    onClose()

  }

 
 

  return (
    <div className="popup">
    <div className="popup-content w-5/6 lg:w-3/6 max-h-[85%] rounded-xl overflow-auto">
      <div className="flex flex-col w-full border p-4 justify-center items-center gap-y-6  ">
      <div className="w-[40%]  py-4">
      <img
        src={visa}
      /></div>
        <div>
          <span className="close text-3xl pr-4" onClick={onClose}>
            &times;
          </span>

          <h1 className="font-primary font-semibold text-2xl text-gray-700 text-center">
            Billing address
            
          </h1>
          
           

          <form className=" flex flex-col items-center  py-4 px-8">
            {/* Your payment options */}
            <div> 
            <div className="flex flex-row items-center w-full gap-x-3 py-2">
              <label>
                <input
                  type="radio"
                  value="mpesa"
                  checked={paymentOption === "mpesa"}
                  onChange={() => setPaymentOption("mpesa")}
                />
                Lipa na M-Pesa
              </label>
              <BsPhone/>
            </div>
            {/* Add more payment options as needed */}           
              {paymentOption === "mpesa" && (
                <div className="w-full">
                  {/* Render M-Pesa payment form or additional fields */}
                  {<MpesaForm onClose = {onClose} bookingId = {bookingId} userId = {userId} price = {price} onBookingSubmit = {onBookingSubmit}/>}
                </div>
              )}</div>
            <div className="">

            <div className="flex flex-row items-center w-full gap-x-3 py-2">
              <label>
              
                <input
                className="form-radio bg-accent"
                  type="radio"
                  value="card"
                  checked={paymentOption === "card"}
                  onChange={() => setPaymentOption("card")}
                />
                Pay by Card 
              </label>
              <BsCreditCard/>

            </div>
            {paymentOption === "card" && (
                <div  className="w-full">
                  {/* Render card payment form */}
                  <CardForm />
                </div>
              )}
            </div>
           
            

           
            <button className="py-4 hover:text-accent cursor-pointer" onClick={handlePayLater}>Pay Later</button>
          </form>
        </div>
      </div>
    </div>
  </div>

  );
}

export default Payment;
