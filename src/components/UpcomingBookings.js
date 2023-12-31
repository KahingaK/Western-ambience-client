import React, { useEffect, useContext, useState } from "react";
import { BsCash } from "react-icons/bs";
import { MdMacroOff, MdMailOutline, MdPayment, MdSearch } from "react-icons/md";
import { UserContext } from "../context/UserContext";
import { toast } from "react-toastify";
import UserMail from "./UserMail";
import AdminPayment from "./AdminPayment";
import Loading from "./Loading";

function UpcomingBookings() {
  const [bookings, setBookings] = useState([]);
  const [bookingId, setBookingId] = useState("");
  const [isMailPopupOpen, setMailPopupOpen] = useState(false); // New state for mail popup
  const [isPaymentPopupOpen, setPaymentPopupOpen] = useState(false); //
  const [isLoading, setIsLoading] = useState(false);
  const [filteredBookings, setFilteredBookings] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [rooms, setRooms] = useState([]);
  const [booking, setBooking] = useState([]);

  const { url, token } = useContext(UserContext);

  useEffect(() => {
    //Fetch Bookings
    fetch(`${url}/active_bookings`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setBookings(data);
        setSearchTerm(data);
        console.log(bookings);
      })
      .catch((error) => {
        console.log("Error fetching Bookingss: ", error);
      });
  }, []);

  useEffect(() => {
    //Fetch Bookings
    fetch(`${url}/rooms`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setRooms(data);
      })
      .catch((error) => {
        console.log("Error fetching Rooms: ", error);
      });
  }, []);

  //POST stkPush for mpesa payment
  const handleSubmitPayment = async (paymentData) => {
    setIsLoading(true);

    try {
      const response = await fetch(`${url}/stkpush`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(paymentData),
      });

      const data = await response.json();
      setIsLoading(false);

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
          position: "top-right",
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
        position: "top-right",
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

  const handleStkQuery = async (checkoutRequestId) => {
    setIsLoading(true);
    try {
      const payload = {
        checkoutRequestID: checkoutRequestId,
      };

      const response = await fetch(`${url}/stkquery`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // You might need additional headers based on your requirements
        },
        body: JSON.stringify(payload),
      });
      setIsLoading(false);
      const data = await response.json();

      if (response.ok && data[0] !== "error") {
        // Success
        toast.success(data[1]["ResultDesc"], {
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
        // Error
        const errorMessage =
          data[1]["errorMessage"] || "An unknown error occurred.";
        toast.error(`Payment: ${errorMessage}`, {
          position: "top-right",
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
        position: "top-right",
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

  // Show Mail Popup
  const handleMessagePopup = (id) => {
    setBookingId(id);
    setMailPopupOpen(true);
  };

  // Show Payment Popup
  const handleShowPopup = (id) => {
    setBookingId(id);
    setPaymentPopupOpen(true);
    const booking = bookings.find((booking) => booking.id === bookingId);
    if (!booking || !booking.payment) {
      return;
    }
  };

  // Close Popups
  const handleClosePopup = () => {
    setMailPopupOpen(false);
    setPaymentPopupOpen(false);
  };
  //Send Booking user Mail
  function handleSendMail(data) {
    setIsLoading(true);
    const booking = bookings.find((booking) => booking.id === bookingId);
    data.email = booking.user.email;
    fetch(`${url}/bookings/send_email`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",

        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        setIsLoading(false);
        if (response.ok) {
          // handleAddRoom(response)
          setMailPopupOpen(false);

          toast.success("Mail Sent!", {
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
          console.log(response.statusText);
          toast.error(response.statusText, {
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
      })
      .catch((error) => {
        toast.error(error, {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        console.log(error);
      });
  }

  return (
    <div className="max-w-full overflow-x-auto  ">
      {isLoading && <Loading />}
      <div className="border p-2 rounded-md w-4/5 flex items-center">
        <input
          className=" outline-none flex-grow px-2"
          type="text"
          placeholder="search by username"

          // Use flex-grow to make the input take up the remaining space
        />
        <MdSearch className="ml-2 text-gray-500" />
      </div>
      <h2 className="uppercase  text-xl font-medium">Upcoming Bookings</h2>
      <table className="w-full table-auto ">
        <thead>
          <tr className=" text-left border-b border-stroke items-center">
            <th className="min-w-[220px] py-4 px-4 font-medium font-secondary text-accent xl:pl-11">
              guest
            </th>
            <th className="min-w-[150px] py-4 px-4 font-medium text-white">
              From-to
            </th>
            <th className="min-w-[120px] py-4 px-4 font-medium text-white">
              Approved
            </th>

            <th className="min-w-[120px] py-4 px-4 font-secondary text-accent">
              message
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredBookings &&
            filteredBookings.map((booking) => {
              const matchingRoom = rooms.find(
                (room) => room.id === booking.room_id
              );
              return (
                <tr key={booking.id}>
                  <td className="border-b border-[#eee] py-5 px-4 pl-9 xl:pl-11">
                    <h5 className="font-medium text-black dark:text-white">
                      {booking.user.username}
                    </h5>
                    <p className="text-sm">
                      {matchingRoom ? matchingRoom.room_number : "Loading..."}
                    </p>
                  </td>
                  <td className="border-b border-[#eee] py-5 px-4">
                    <p className="text-black dark:text-white">
                      {booking.start_date}
                    </p>
                  </td>
                  <td className="border-b border-[#eee] py-5 px-4">
                    <div className="flex items-center space-x-3.5">
                      <button
                        className=" "
                        onClick={() => {
                          handleMessagePopup(booking.id);
                          setBookingId(booking.id);
                        }}
                      >
                        <MdMailOutline />
                      </button>

                      <button
                        className="flex items-center space-x-3.5"
                        onClick={() => {
                          handleShowPopup(booking.id);
                          setBookingId(booking.id);
                          setBooking(booking);
                        }}
                      >
                        <BsCash />
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
      {isMailPopupOpen && (
        <UserMail
          onClose={handleClosePopup}
          onSendMail={handleSendMail}
          bookingId={bookingId}


          // Other MailPopup props
        />
      )}
      {isPaymentPopupOpen && (
        <AdminPayment
          onClose={handleClosePopup}
          onStkQuery={handleStkQuery}
          onStkPush={handleSubmitPayment}
          booking={booking}
          bookingId={booking.id}
        />
      )}
    </div>
  );
}

export default UpcomingBookings;
