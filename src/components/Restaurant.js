import React from 'react';
import food from "../assets/img/food.png";

function Restaurant() {
  return (
    <section className="py-32">
      <div className="container mx-auto lg:px-0">
        <div className="text-center">
          <div className="font-tertiary uppercase text-[15px] tracking-[6px]">
            Eating & Drinking
          </div>
          <h2 className="font-primary text-[45px]">Restaurant</h2>
        </div>
        <div className='flex flex-col lg:flex-row items-center '>
          {/* Items here */}
        </div>
      </div>
    </section>
  );
}

export default Restaurant;
