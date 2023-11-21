import React from 'react'
import SimpleMap from './Map'
import ChatCard from './ReviewCard'


function FindUs() {
  return (
    <>
      <section className="pb-16">
        <div className="container mx-auto lg:px-0">
          <div className="text-center">
            <div className="font-tertiary uppercase text-[15px] tracking-[6px]">
              Ambience & Bliss
            </div>
            <h2 className="font-primary text-[45px] mb-4">Community</h2>
          </div>

          <div className="grid grid-cols-1 max-w-sm mx-auto gap-[30px] lg:grid-cols-2 lg:max-w-none lg:mx-0 ">
            
                <div><SimpleMap/></div>
                <div><ChatCard/></div>
            
          </div>
        </div>
      </section>
    </>
  )
}

export default FindUs