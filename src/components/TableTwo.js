import React, { useState, useEffect, useContext } from "react";
import { MdAddBox, MdBrowserUpdated, MdDeleteOutline } from "react-icons/md";
import { toast } from "react-toastify";
import { UserContext } from "../context/UserContext";
import BookingUpdatePopup from "./BookingUpdatePopup";
import UserMail from "./UserMail";

//Bookings Table
const TableTwo = () => {
  const [bookings, setBookings] = useState([]);
  const [isPopupOpen, setPopupOpen] = useState(false);
  const { token } = useContext(UserContext);
  const [rooms, setRooms] = useState([]);
  const [bookingId, setBookingId] = useState("");
  const [actionType, setActionType] = useState("");
  

  useEffect(() => {
    //Fetch Bookings
    fetch("http://localhost:3000/bookings", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setBookings(data);
      })
      .catch((error) => {
        console.log("Error fetching Bookingss: ", error);
      });
  }, []);

  useEffect(() => {
    //Fetch Bookings
    fetch("http://localhost:3000/rooms", {
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

  //Show Popup Booking component
  const handleShowPopup = (id) => {
    setBookingId(id);
    setActionType("update");
    setPopupOpen(true);
  };

  const handleMessagePopup = (id) => {
    setBookingId(id);
    setActionType("mail");
    setPopupOpen(true);
  };

  //Hide Popup booking component
  const handleClosePopup = () => {
    setPopupOpen(false);
  };

  //create a new booking if user is admin
  function handleAddBooking(newBooking) {
    setBookings([...bookings, newBooking]);
  }

  function handleAddClick(data) {
    fetch("http://localhost:3000/bookings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",

        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.ok) {
          // handleAddRoom(response)
          setPopupOpen(false);
          handleAddBooking(data)
          toast.success("Room created!", {
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
          console.log(response.statusText);
          toast.error(response.statusText, {
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
      })
      .catch((error) => {
        toast.error(error, {
          position: "top-right",
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
  //Update Room Details
  function handleUpdateBooking(id, data) {
    fetch(`http://localhost:3000/bookings/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",

        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        // handleAddRoom(response)
        if (response.ok) {
          // handleAddRoom(response)
          setPopupOpen(false);
          toast.success("Booking updated!", {
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
          console.log(response.statusText);
          toast.error(response.statusText, {
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

        console.log(response);
      })
      .catch((error) => {
        toast.error(error, {
          position: "top-right",
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

  //Send Booking user Mail
  function handleSendMail(data){
    const booking = bookings.find((booking)=>
      booking.id === bookingId)
    data.email = booking.user.email
    fetch("http://localhost:3000/bookings/send_email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",

        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.ok) {
          // handleAddRoom(response)
          setPopupOpen(false);
          
          toast.success("Mail Sent!", {
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
          console.log(response.statusText);
          toast.error(response.statusText, {
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
      })
      .catch((error) => {
        toast.error(error, {
          position: "top-right",
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

  // Delete a room if user is admin
  function handleDeleteBooking(id) {
    const updatedBookings = bookings.filter((booking) => booking.id !== id);
    setBookings(updatedBookings);
  }

  function handleDeleteClick(id) {
    fetch(`http://localhost:3000/bookings/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((response) => {
      if (response.ok) {
        handleDeleteBooking(id);
        toast.success("Deleted", {
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
        response.text().then((errorMessage) => {
          // Handle error message here
          toast.error(errorMessage, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        });
      }
    });
  }

  function handleBookingStatus(id) {
    fetch(`http://localhost:3000/bookings/${id}/approve`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",

        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(),
    })
      .then((response) => {
        // handleAddRoom(response)
        if (response.ok) {
          // handleAddRoom(response)
          setPopupOpen(false);
          toast.success(response, {
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
          console.log(response.statusText);
          toast.error(response.statusText, {
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

        console.log(response);
      })
      .catch((error) => {
        toast.error(error, {
          position: "top-right",
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
    <div className=" col-span-12 h-[500px] overflow-y-auto  xl:col-span-8 rounded-sm bg-white px-5 pt-6 pb-2.5 shadow-default  sm:px-7.5 xl:pb-1">
      <div className="flex flex-col gap-y-4 ">
        <div>{/* search */}</div>
        <div className="max-w-full overflow-x-auto ">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-accent text-left dark:bg-meta-4">
                <th className="min-w-[220px] py-4 px-4 font-medium text-white xl:pl-11">
                  Guest
                </th>
                <th className="min-w-[150px] py-4 px-4 font-medium text-white">
                  Room
                </th>
                <th className="min-w-[120px] py-4 px-4 font-medium text-white">
                  Approved
                </th>
                <th className="py-4 px-4 font-medium text-white">Actions</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking) => {
                const matchingRoom = rooms.find(
                  (room) => room.id === booking.room_id
                );

                return (
                  <tr key={booking.id}>
                    <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                      <h5 className="font-medium text-black dark:text-white">
                        {booking.user.username}
                      </h5>
                      <p className="text-sm">
                        {matchingRoom ? matchingRoom.room_type : "Loading..."}
                      </p>
                    </td>
                    <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                      <p className="text-black dark:text-white">
                        {matchingRoom ? matchingRoom.room_type : "Loading..."}
                      </p>
                    </td>
                    <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                      <button
                        className="inline-flex rounded-full bg-success bg-opacity-10 py-1 px-3 text-sm font-medium text-success
                "
                        onClick={() => handleBookingStatus(booking.id)}
                      >
                        {booking.approved.toString()}
                      </button>
                    </td>
                    <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                      <div className="flex items-center space-x-3.5">
                        <button
                          className="hover:text-primary"
                          onClick={() => {
                            handleShowPopup(booking.id);
                            setActionType("update");
                          }}
                        >
                          <MdBrowserUpdated />
                        </button>
                        <button
                          className="hover:text-primary"
                          onClick={() => {
                            handleMessagePopup(booking.id);
                            setActionType("mail");
                            
                          }}
                        >
                          <MdBrowserUpdated />
                        </button>

                        <button
                          className="hover:text-primary"
                          onClick={() => handleDeleteClick(booking.id)}
                        >
                          <MdDeleteOutline />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
              {isPopupOpen && actionType === "update" && (
                <BookingUpdatePopup
                  onClose={handleClosePopup}
                  onBookingUpdate={handleUpdateBooking}
                  bookingId={bookingId}
                  rooms={rooms}
                />
              )}

              {isPopupOpen && actionType === "mail" && (
                <UserMail
                  onClose={handleClosePopup}
                  onSendMail = {handleSendMail}
                  bookingId = {bookingId}
                  // Other MailPopup props
                />
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TableTwo;
