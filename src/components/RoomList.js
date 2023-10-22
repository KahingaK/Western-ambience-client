import React, { useContext } from "react";
import { RoomContext } from "../context/RoomContext";

//data

import RoomDetails from "../pages/RoomDetails";
import Room from "./Room";

function RoomList() {

    const {rooms} = useContext(RoomContext)
  
  

  return (
    <>
      <section className="py-24">
        <div className="container mx-auto lg:px-0">
          <div className="grid grid-cols-1 max-w-sm mx-auto gap-[30px] lg:grid-cols-3 lg:max-w-none lg:mx-0 ">
            {rooms.map((room) => {
              return <Room key={room.id} room={room}/>;
            })}
          </div>
        </div>
      </section>
     
    </>
  );
}

export default RoomList;
