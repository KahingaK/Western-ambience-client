import React from 'react'

function CardForm({formData}) {

    // const {name, month, year, cvc} = formData

  return (
    <div className='border p-2 rounded-md'>
        <div className="text-center mb-6">
    <h1 className="text-2xl font-bold">How to make payments by card</h1>
    <ol className="text-left list-decimal ml-6">
      <li>Enter cardholder name, card number, and CVC</li>
      <li>Click the Confirm button</li>
    </ol>
  </div>
        <div className='m-2 text-center rounded-md'>
        <form  className="">
            <label htmlFor="name" className="flex flex-col"
            >Cardholder Name</label>
            <input 
                className="border border-gray-400 px-2  placeholder-gray-500 placeholder-opacity-50 w-full lg:w-[381px] min-h-[45px]"
                name='name'
                // value={name}
                id='name'
                aria-label="name"
                onChange=""
                placeholder='e.g. Jane Appleseed'
            />
            <div className="form--error text-error-color mt-2 text-xs leading-3"></div>
            <label htmlFor="cardNumber" className="flex flex-col"
            >Card Number</label>
            <input 
                className="border border-gray-400  px-2  placeholder-gray-500 placeholder-opacity-50 w-full lg:w-[381px] min-h-[45px]"
                name='cardNumber'
                // value={formattedCardNumber}
                id='cardNumber'
                aria-label="cardNumber"
                // onChange={handleInput}
                placeholder='e.g. 1234 5678 9123 0000'
                maxLength={19}
            />
            <div className="form--error text-error-color mt-2 text-xs leading-3">variable</div>
            <div className="form--exp_container flex w-full mt-[14px] mb-[28px] lg:mb-[40px] lg:mt-[26px]">
                <div className="form--month_container mr-2">
                    <label htmlFor="month" className="form--month_label block mb-[9px]"
                    >EXP.DATE</label>
                    <input 
                        className=" placeholder-gray-500  px-2  placeholder-opacity-50 w-[72px] lg:w-[80px]"
                        name='month'
                        // value={month}
                        id='month'
                        aria-label="month"
                        // onChange={handleInput}
                        placeholder='MM'
                        maxLength={2}
                    />
                  <div className="form--error text-error-color mt-2 text-xs leading-3 w-[84px]">variable</div>
                </div>
            
                <div className="form--month_container mr-[11px] lg:mr-[20px]">
                <label htmlFor="year" className=" block mb-[9px]"
                >MM/YY</label>
                    <input 
                        className=" placeholder-gray-500  px-2  placeholder-opacity-50 w-[72px] lg:w-[80px]"
                        name='year'
                        // value={year}
                        id='year'
                        aria-label="year"
                        // onChange={handleInput}
                        placeholder='YY'
                        maxLength={2}
                    />
                <div className="form--error text-error-color mt-2 text-xs leading-3">variable</div>
                </div>
                <div className="form--cvc_container">
                    <label htmlFor="cvc" className="block mb-[9px]"
                        >CVC</label>
                    <input 
                        className=" placeholder-gray-500  px-2  placeholder-opacity-50 w-[155px] lg:w-[191px]"
                        name='cvc'
                        // value={cvc}
                        id='cvc'
                        aria-label="cvc"
                        // onChange={handleInput}
                        placeholder='e.g. 123'
                        maxLength={3}
                    />
                    <div className="form--error text-error-color mt-2 text-xs leading-3">variable</div>
                </div>
            </div>
            <button onClick="" className='btn btn-primary font-tertiary uppercase w-[327px] min-h-[53px] rounded-lg lg:w-[381px]'>Confirm</button>
        </form>
    
        </div>
    </div>
  )
}

export default CardForm