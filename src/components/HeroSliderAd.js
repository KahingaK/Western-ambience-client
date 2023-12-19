import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import { EffectFade, Autoplay } from "swiper/modules";
import Img1 from "../assets/img/heroSlider/1.jpg";
import Img2 from "../assets/img/heroSlider/2.jpg";
import Img3 from "../assets/img/heroSlider/3.jpg";
import { Link } from "react-router-dom";

function HeroSliderAd() {
  const Slides = [
    {
      title: "Foremost in quality",
      bg: Img1,
      btnText: "Restaurant",
    },
    {
      title: "Foremost in quality",
      bg: Img2,
      btnText: "Restaurant",
    },
    {
      title: "Foremost in quality",
      bg: Img3,
      btnText: "Restaurant",
    },
  ];

  return (
    <Swiper
      modules={[EffectFade, Autoplay]}
      effect="fade"
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      className="heroSlider h-full"
    >
      {Slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="h-full relative flex justify-center items-center">
            <div className="z-20 text-white text-center">
              <div className="uppercase font-tertiary text-2xl tracking-[6px] mb-5">
                Home away from home
              </div>
            
              
            </div>
            <div className="absolute top-0 w-full h-full">
              <img
                className="object-cover h-full w-full"
                alt=""
                src={slide.bg}
              />
            </div>
            <div className="absolute w-full h-full bg-black/70"></div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default HeroSliderAd;
