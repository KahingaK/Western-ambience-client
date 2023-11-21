import React from "react";
import BookForm from "../components/BookForm";
import FindUs from "../components/FindUs";
import HeroSlider from "../components/HeroSlider";
import RoomList from "../components/RoomList";
import Socials from "../components/Socials";

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
      <FindUs/>
      <Socials/>
      
      
    </>
  );
}

export default Home;
