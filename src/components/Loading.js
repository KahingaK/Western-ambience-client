import React from "react";
import ClipLoader from "react-spinners/ClipLoader";

function Loading() {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black/70 z-50 flex items-center justify-center">
      <div className="flex items-center justify-center h-full">
        <div className="Block mx-auto font-tertiary text-white">
          <ClipLoader color="#D2770F" size={50} aria-label="Loading Spinner" data-testid="loader" />
        </div>
      </div>
    </div>
  );
}

export default Loading;
