import React from 'react'
//import swiper
import {Swiper, SwiperSlide} from "swiper/react"
//Import swiper styles
import "swiper/css"
import "swiper/css/effect-fade"
//import modules
import { EffectFade, Autoplay} from "swiper/modules"
//Images
import Img1 from "../assets/img/heroSlider/1.jpg"
import Img2 from "../assets/img/heroSlider/2.jpg"
import Img3 from "../assets/img/heroSlider/3.jpg"



function HeroSlider() {

    const Slides = [
        { 
            title: "Foremost in quality",
            bg: Img1,
            btnText:"Room & Suites"

        },
        { 
            title: "Foremost in quality",
            bg: Img2,
            btnText:"Room & Suites"

        },
        { 
            title: "Foremost in quality",
            bg: Img3,
            btnText:"Room & Suites"

        },
]


  return (
    <Swiper
     modules = {[EffectFade, Autoplay]} 
     effect = {"fade"}
     loop= {true}
     autoplay =  {{
        delay:3000,
        disableOnInteraction: false,
     }}
     className = "heroSlider h-[600px] lg:h-[660px]">
        {Slides.map((slide, index) => {
           return (
            <SwiperSlide key={index}>
            <div  className = "h-full relative flex justify-center items-center" >
            <div className=' z-20 text-white text-center'>
                    <div className='uppercase font-tertiary tracking-[6px] mb-5'>Relax and Enjoy</div>
                    <h1 className="text-[32px] font-primary uppercase tracking-[2px] max-w-[920px] lg:text-[68px] leading-tight mb-6 ">{slide.title}</h1>
                    <button  className='btn btn-lg btn-primary mx-auto'>{slide.btnText}</button>
                </div>
                <div className='absolute top-0 w-full h-full'>
                    <img className=' object-cover h-full w-full' alt='' src = {slide.bg}/>
                </div>
                <div className='absolute w-full h-full bg-black/70'></div>
            </div>
              
                
                
           </SwiperSlide> 
           )
        }
        )}
    </Swiper>
  )
}

export default HeroSlider