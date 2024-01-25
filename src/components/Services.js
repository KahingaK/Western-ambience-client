import React, { useState } from "react";
import { services } from "../data";
import ServiceCard from "./ServiceCard";

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
          </div>
            <div
            className="flex justify-center items-center w-full px-4"
            > <ServiceCard /></div>
         
        </div>
      </div>
    </section>
  );
}

export default Services;
