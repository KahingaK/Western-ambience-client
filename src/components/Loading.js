import React from "react";
import ClipLoader from "react-spinners/ClipLoader";

function Loading() {
    
  return (
    <div className="absolute min-w-fit h-full bg-black/70 z-50">
      <div className="flex items-center justify-center h-full">
        <div className="Block mx-auto font-tertiary  text-white ">
         
          <ClipLoader
        color="#D2770F"
        size={50}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
        </div>
      </div>
    </div>
  );
}

export default Loading;
