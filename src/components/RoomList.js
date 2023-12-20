import React, { useContext } from "react";
import { RoomContext } from "../context/RoomContext";

//data
import Room from "./Room";

function RoomList() {
  //import context
  const { rooms } = useContext(RoomContext);

  return (
    <>
      <section className="py-36">
        <div className="container mx-auto lg:px-0">
          <div className="text-center">
            <div className="font-tertiary uppercase text-[15px] tracking-[6px]">
              Ambience & Bliss
            </div>
            <h2 className="font-primary text-[45px] mb-4">Room and Suites</h2>
          </div>

          <div className="grid grid-cols-1 max-w-sm mx-auto gap-[30px] lg:grid-cols-3 lg:max-w-none lg:mx-0 ">
            {rooms.map((room) => {
              return <Room key={room.id} room={room} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default RoomList;
