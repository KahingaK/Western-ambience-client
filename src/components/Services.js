import React, { useState } from "react";
import { services } from "../data"
import "../style.css"

function Services() {
  const [enabled, setEnabled] = useState(false);

  return (
    <section className="py-32">
      <div className="container mx-auto">
        <div className=" my-8">
          <div className="text-center">
            <div className="font-tertiary uppercase text-[15px] tracking-[6px]">
              Ambience and bliss
            </div>
            <h2 className="font-primary text-[45px]">Services</h2>
            <h2 className="font-primary text-4xl mb-4">Elevate your occasions</h2>
            <p className="font-secondary text-md py-4 px-4">Experience unforgettable moments with Westernambiencebliss! Exquisite Outdoor Catering. Stylish Birthday Celebrations .</p>
            <p className="font-secondary text-md pb-4 px-4"> Business Conferencing facilities, guaranteeing smooth and productive gatherings. Cultivate team unity and enhance morale with Team Building at Western Ambience Bliss</p>
          </div>
          <div className="flex justify-center items-center w-full pt-8 px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-4 gap-y-6">
              {services.map((service) => (
              <button>
                <div className="service-card ">
            <img
              className="w-full h-full object-cover"
              src={service.image}
              alt={service.name}
            />
            <div className="overlay">
              <h4 className="uppercase font-tertiary font-medium text-2xl">{service.name}</h4>
            </div>
          </div>
                  
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
