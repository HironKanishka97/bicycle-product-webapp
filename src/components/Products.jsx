import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { bicycle, bicycle1, bicycle2, bicycle3, bicycle4 } from "../assets";
import { NextArrow, PrevArrow } from "./Arrow";
import { motion } from "framer-motion";

const Products = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div id="products" className="max-w-screen-lg mx-auto"> {/* Center the slider */}
      <motion.h1
      initial={{ opacity: 0, y: -150 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
        className="text-white font-poppins font-semibold text-center 
        text-[42px] leading-[50px] ss:text-[62px] ss:leading-[90px]"
      >
        <span className="text-gradient ">Product Show</span>
      </motion.h1>
      <Slider {...settings} className="flex justify-center">

        <div className="flex justify-center w-full h-[400px]">
          <video
            className="h-full  max-w-full object-cover mx-auto"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src={bicycle} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="flex justify-center w-full h-[400px]">
          <img
            src={bicycle1}
            alt="image 2"
            className="h-full max-w-full object-cover mx-auto"
          />
        </div>
        <div className="flex justify-center w-full h-[400px]">
          <img
            src={bicycle2}
            alt="image 3"
            className="h-full max-w-full object-cover mx-auto"
          />
        </div>
        <div className="flex justify-center w-full h-[400px]">
          <img
            src={bicycle3}
            alt="image 4"
            className="h-full max-w-full object-cover mx-auto"
          />
        </div>
        <div className="flex justify-center w-full h-[400px]">
          <img
            src={bicycle4}
            alt="image 5"
            className="h-full max-w-full object-cover mx-auto"
          />
        </div>
      </Slider>
    </div>
  );
};

export default Products;
