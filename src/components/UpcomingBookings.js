
import React, {useEffect, useContext, useState} from 'react'
import { UserContext } from '../context/UserContext';

function UpcomingBookings() {
    
    const [bookings, setBookings] = useState([])

    const {token} = useContext(UserContext)

    useEffect(() => {
        //Fetch Bookings
        fetch("http://localhost:3000/active_bookings", {
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
      }, );


  return (
    <div className="max-w-full overflow-x-auto  ">
    <h2 className='uppercase  font-medium'>Upcoming Bookings</h2>
    <table className="w-full table-auto ">
    <thead>
    
      <tr className=" text-left dark:bg-meta-4 border-b border-stroke items-center">
        <th className="min-w-[220px] py-4 px-4 font-medium font-secondary text-accent xl:pl-11">
          guest
        </th>
        <th className="min-w-[150px] py-4 px-4 font-secondary text-accent">
          from
        </th>
        <th className="min-w-[120px] py-4 px-4 font-secondary text-accent">
          to
        </th>
        <th className="min-w-[120px] py-4 px-4 font-secondary text-accent">
          message
        </th>
       
      </tr>
    </thead>
    <tbody>
    {bookings.map ((booking)=> {
      

      return (
        <tr key={booking.id}>
        <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
          <h5 className="font-medium text-black dark:text-white">
             {booking.user.username}
          </h5>
          <p className="text-sm"></p>
        </td>
        <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
          <p className="text-black dark:text-white">{booking.start_date}</p>
        </td>
        <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
          <p className="text-black dark:text-white">{booking.start_date}</p>
        </td>
       
        
        
      </tr>
      )

     

    })}           
    </tbody>
  </table></div>
  )
}

export default UpcomingBookings
