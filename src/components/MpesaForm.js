import React, {useState, useContext} from 'react'
import  mpesa  from "../assets/img/mpesa.jpg";
import { UserContext } from '../context/UserContext';

function MpesaForm({price ,onClose, bookingId, userId, onBookingSubmit}) {
    const [number, setNumber] = useState("")
  const [amount, setAmount] = useState(`${price}`)
 const {currentUser} = useContext(UserContext )

  const formData = {
    user_id: userId,
    booking_id: bookingId,
    phoneNumber: number,
    amount: amount,
  };
  //Submit payment data and make booking
  function handlePayNow(event) {
         event.preventDefault();
         onBookingSubmit(number, amount)
         onClose();
        
     }
  
  return (
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

      {currentUser.role !== 'guest' ? (
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
      ) : null}

      <button
        type="button"
        onClick={handlePayNow}
        className='btn btn-primary text-white rounded-md py-2 px-4 cursor-pointer uppercase font-tertiary'
      >
        confirm
      </button>
    </form>
  </div>
</div>

  )
}

export default MpesaForm
