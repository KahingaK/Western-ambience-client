import React, { useState, useEffect, useContext } from "react";
import { MdAddBox, MdBrowserUpdated, MdDeleteOutline } from "react-icons/md";
import { toast } from "react-toastify";
import { UserContext } from "../context/UserContext";
import Loading from "./Loading";
import RoomDetailsPopup from "./RoomDetailsPopup";

//Rooms Table
const TableThree = () => {
  const [rooms, setRooms] = useState([]);
  const [room, setRoom] = useState([])
  const [actionType, setActionType] = useState("add");
  const [roomId, setRoomId] = useState()
  const [isPopupOpen, setPopupOpen] = useState(false);
  const {url, token} = useContext(UserContext)
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    //Fetch Rooms
    fetch(`${url}/rooms`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setRooms(data);
        console.log(rooms);
      })
      .catch((error) => {
        console.log("Error fetching Rooms: ", error);
      });
  }, []);

    //change state to show Popup component onclick check btn

   // Show the popup for adding a room
   const handleAddPopup = () => {
    setActionType("add"); // Set action type to "add"
    setPopupOpen(true);
  };

  // Show the popup for updating a room
  const handleUpdatePopup = (id) => {
    setActionType("update"); // Set action type to "update"
    setRoomId(id);
    setPopupOpen(true);
    
  };
  
    //Hide Popup contact component
    const handleClosePopup = () => {
      setPopupOpen(false);
    };
  
    //function to handle submitted data
    const handleFormSubmit = () => {
      // Handle the submitted email, e.g., send it to a server
      console.log("Submitted email:");
    
  
      // Close the popup
      setPopupOpen(false);
    };

  //create a new room if user is admin
  function handleAddRoom(newRoom) {
    setRooms([...rooms, newRoom]);
  }

  function handleAddClick(data) {
    setIsLoading(true)
  
    fetch(`${url}/rooms`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        
        Authorization: `Bearer ${token}`,
        
       
      },
      body: JSON.stringify(data),
    })
      .then((response) => { response.json()
      .then((data) => {
        setIsLoading(false)
        if (response.ok) {
          // handleAddRoom(response)
       setPopupOpen(false);
       toast.success(data.message, {
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
         toast.error(data[0], {
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
      
       

      })})
      .catch((error) => {
        toast.error(error , {
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
  function handleUpdateClick(id, data) {
    setIsLoading(true)
 
    fetch(`${url}/rooms/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        
        Authorization: `Bearer ${token}`,
        
       
      },
      body: JSON.stringify(data),
    })
    .then((response) => { response.json()
      .then((data) => {
        setIsLoading(false)
        if (response.ok) {
          // handleAddRoom(response)
       setPopupOpen(false);
       toast.success(data.message, {
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
      
       

      })})
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


// Delete a room if user is admin
  function handleDeleteRoom(id) {
    const updatedRooms = rooms.filter((room) => room.id !== id);
    setRooms(updatedRooms);
  }

 function handleDeleteClick(id) {
  setIsLoading(true)
  fetch(`${url}/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    }
    
  })
  .then((response) => {
    setIsLoading(false)
    if (response.ok) {
      handleDeleteRoom(id);
      toast.success("Deleted", {
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
      response.text().then(errorMessage => {
        // Handle error message here
        toast.error(errorMessage, {
          position: "top-center",
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

  function handleRoomStatus(id) {

     // Find the index of the booking with the given id
  const index = rooms.findIndex((room) => room.id === id);

  // Toggle the approved value
  const updatedRooms = [...rooms];
  updatedRooms[index].available = !updatedRooms[index].available;

  // Update the state with the modified bookings array
  setRooms(updatedRooms);

    fetch(`${url}/rooms/${id}/available`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        
        Authorization: `Bearer ${token}`,
        
       
      },
      body: JSON.stringify(),
    })
    .then((response) => {
      response.json().then((data) => {
        if (data.message === "Room now available") {
          // handleAddRoom(response)

          toast.success(data.message, {
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
          toast.error(data.message, {
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
      });
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
    <div className=" col-span-12  rounded-sm  h-[500px] overflow-y-auto  bg-white px-5 pt-6 pb-2.5 shadow-default  sm:px-7.5 xl:col-span-8">
    { isLoading && <Loading/>}
    <div className="flex flex-col gap-y-4">
    <div className="">
      <button className="btn btn-primary py-4 text-white" onClick={handleAddPopup}>
                  New <MdAddBox/>
                  </button>  
      </div>
      <div className="max-w-full overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className=" bg-accent text-left dark:bg-meta-4">
              <th className="min-w-[220px] py-4 px-4 font-medium text-white xl:pl-11">
                Room Number
              </th>
              <th className="min-w-[150px] py-4 px-4 font-medium text-white">
                Room capacity
              </th>
              <th className="min-w-[120px] py-4 px-4 font-medium text-white">
                Available
              </th>
              <th className="py-4 px-4 font-medium  text-white">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
          {rooms.map ((room)=> {

            return (
              <tr key={room.id}>
              <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                <h5 className="font-medium text-black ">
                  {room.room_type}
                </h5>
                <p className="text-sm">{room.room_number}</p>
              </td>
              <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                <p className="text-black dark:text-white">{room.price}</p>
              </td>
              <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                <button className={`inline-flex rounded-full ${
                          room.available ? "bg-green-500" : "bg-red-500"
                        }  py-1 px-3 text-sm font-medium text-white`} onClick={() => handleRoomStatus(room.id)}>
                  {room.available.toString()}
                </button>
              </td>
              <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                <div className="flex items-center space-x-3.5">
                  <button className="hover:text-primary" onClick={() => {handleUpdatePopup(room.id)
                  setRoom(room)}}>
                   <MdBrowserUpdated/>
                  </button>             
                 
                  <button className="hover:text-primary" 
                      onClick={()=> handleDeleteClick(room.id)}
                  >
                    <MdDeleteOutline/>
                  </button>
                </div>
              </td>
            </tr>
            )

           

          })}
          {isPopupOpen && (
        <RoomDetailsPopup
          onClose={handleClosePopup}
          onRoomAdd={handleAddClick}
          onRoomUpdate = {handleUpdateClick}
          actionType = {actionType}
          roomId = {roomId}
          room = {room}
          
        />
      )}
            
          </tbody>
        </table>
      </div>
    </div>
     
    </div>
  );
};

export default TableThree;
