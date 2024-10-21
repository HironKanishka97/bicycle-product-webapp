import React from "react";

const NextArrow = ({ onClick }) => {
  return (
    <div
      className="absolute right-5 top-1/2 transform -translate-y-1/2 
      bg-transparent hover:bg-blue-600 text-white rounded-full p-2 cursor-pointer 
      shadow-lg z-10 transition duration-300"
      onClick={onClick}
    >
      &gt;
    </div>
  );
};

const PrevArrow = ({ onClick }) => {
  return (
    <div
      className="absolute left-5 top-1/2 transform -translate-y-1/2 
      bg-transparent hover:bg-blue-600 text-white rounded-full p-2 cursor-pointer 
      shadow-lg z-10 transition duration-300"
      onClick={onClick}
    >
      &lt;
    </div>
  );
};

export { NextArrow, PrevArrow };
