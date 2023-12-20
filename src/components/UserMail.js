import React, { useState } from "react";

function UserMail({ onClose, bookingId, onSendMail, email }) {
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const data = { title: title, message: message };
  function handleSubmitMail(e) {
    e.preventDefault();
    onSendMail(data);
  }

  return (
    <div className="popup">
      <div className="popup-content w-4/5 lg:w-[40%]">
        <div className="flex flex-col">
          <div>
            <span className="close text-3xl pr-4" onClick={onClose}>
              &times;
            </span>
          </div>
          <div className="rounded-sm  shadow-default ">
            <div className="border-b  py-4 px-6.5 ">
              <div className="flex flex-col  space-y-4 p-6.5">
                <div className="space-y-4">
                  <label className="mb-3 block text-black">
                    Message
                  </label>
                  <input
                    value={title} // Use value to bind to the state variable
                    onChange={(e) => {
                      setTitle(e.target.value);
                    }}
                    type="text"
                    placeholder="title"
                    className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-4 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  />
                  <input
                    value={message} // Use value to bind to the state variable
                    onChange={(e) => {
                      setMessage(e.target.value);
                    }}
                    type="text"
                    placeholder="Write a message"
                    className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-4 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  />
                </div>
                <button onClick={handleSubmitMail} className="btn btn-secondary p-4">send mail</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserMail;
