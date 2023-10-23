import React from "react";
import BookForm from "../components/BookForm";
import HeroSlider from "../components/HeroSlider";
import RoomList from "../components/RoomList";

function Home() {
  return (
    <>
    <HeroSlider/>
        <div className="container mx-auto relative ">
            <div className=" mt-4 p-4 lg:shadow-xl lg:absolute lg:-top-12 lg:left-0 lg:right-0 lg:p-0 lg:z-30 lg:-top-12 ">
                <BookForm />
            </div>
        
        </div>
     
      <RoomList />
    </>
  );
}

export default Home;
