import React, { useState, useEffect, useContext } from "react";
import visa from "../assets/img/M-PESA_LOGO-01.svg"
import { UserContext } from "../context/UserContext";
import { toast } from "react-toastify";


function AdminPayment({booking, onClose, bookingId, userId, onStkQuery, onStkPush}) {
  
  
  const [number, setNumber] = useState("")
  const [amount, setAmount] = useState("")
    const {url} = useContext(UserContext)

  
  const formData = {
    user_id: booking.user_id,
    booking_id: bookingId,
    phone_number: number,
    amount: amount,
  };

  function handlePayNow(event) {
    event.preventDefault();
    onStkPush(formData)
    console.log(`${userId} and ${bookingId}`);
    // onClose();
    
  }

  function handlePayLater (event) {
    event.preventDefault()
    setNumber()
    setAmount()
    onClose()

  }

  function checkPaymentStatus(event){
    event.preventDefault()
    if (!booking || !booking.payment) {
      // Display a toast message if no payments are available
      toast.error('No payments available for this booking', {
        position: 'top-right',
        autoClose: 3000, // 3 seconds
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }

    // Continue with your existing logic for handling the popup
    
    onStkQuery(booking.payment.checkout)
  }

  



  return (
    <div className="popup">
      <div className="popup-content  w-5/6 lg:w-3/6 max-h-[85%] rounded-xl overflow-auto ">
        <div className="flex flex-col w-full border p-4 justify-center items-center gap-y-6 ">
        <div className="w-[40%] rounded-md   py-4">
      <img
        src={visa}
      /></div>
        <div>
          <span className="close text-3xl pr-4" onClick={onClose}>
            &times;
          </span>

          <h1 className="font-primary font-semibold text-2xl text-center">
            Billing address
            
          </h1>
          <div className='border p-4 rounded-md'>
  <div className='p-4'>
    <h1 className='text-2xl font-bold mb-4'>How to Make Payments by M-Pesa</h1>
    <ol className='list-decimal pl-6'>
      <li>Enter M-Pesa number and press "confirm".</li>
      <li>Wait for prompt from Safaricom.</li>
    </ol>
  </div>
  <div className='border m-4 rounded-md p-4'>
    <form className='flex flex-col space-y-2'>


      <label className='flex flex-col mb-2 gap-y-2 '>
        Phone Number:
        <input
          className='border border-gray-400 placeholder-slate-400 rounded-md px-2 py-1'
          type="text"
          name="phoneNumber"
          placeholder='254XXXXXXXXX'
          value={formData.phoneNumber}
          onChange={(e) => {
            setNumber(e.target.value);
          }}
        />
      </label>

     
        <label className='flex flex-col mb-2'>
          Amount:
          <input
            className='border border-gray-400 rounded-md px-2 py-1'
            type="text"
            name="amount"
            value={formData.amount}
            onChange={(e) => {
              setAmount(e.target.value);
            }}
          />
        </label>
      <button
        type="button"
        onClick={handlePayNow}
        className='btn btn-primary text-white rounded-md py-2 px-4 cursor-pointer uppercase font-tertiary'
      >
        confirm
      </button>
      <button
        type="button"
        onClick={checkPaymentStatus}
        className='btn btn-primary text-white rounded-md py-2 px-4 cursor-pointer uppercase font-tertiary'
      >
       Payment Status 
      </button>
    </form>
    
  </div>
  
</div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminPayment