import React from "react";
import "./booking.css";

const Booking = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="book-food md:w-1/2 text-center -z-10 flex items-center justify-center bg-fixed">
        <div className="z-50 p-4">
          <h4 className="text-2xl font-bold text-white">The Spice Route</h4>
          <h2 className="text-6xl text-white font-mono mt-3 uppercase">
          Dine in Style Specials
          </h2>
          <button className="uppercase text-white btn glass px-6 text-xl mt-3">
            View menu
          </button>
        </div>
      </div>
      <div className="book-table md:w-1/2 text-center -z-10 flex items-center justify-center bg-fixed">
      <div className="z-50 p-4">
          <h4 className="text-2xl font-bold text-white">RESERVATION</h4>
          <h2 className="text-6xl text-white font-mono mt-3 uppercase">
          The Reserved Table Menu
          </h2>
          <button className="uppercase text-white btn glass px-6 text-xl mt-3">
            Contact us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Booking;
