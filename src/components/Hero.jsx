import React from "react";
import styles from "../style";
import { homeimg } from "../assets";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col  
      ${styles.paddingY} `}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col 
        xl:px-0 sm:px-16 px-6`}
      >
        <div
          className="flex flex-col gap-5 md:flex-row md:justify-between w-full items-center 
     overflow-hidden"
        >
          <div className="md:w-[40%]">
          <motion.h1
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-white font-poppins font-semibold text-center 
      text-[52px] leading-[50px] ss:text-[72px] ss:leading-[90px]"
            >
              The <span className="text-gradient">Ride</span> of a lifetime
            </motion.h1>

            <p
              className="hidden md:block text-white mt-4 text-[18px] text-center
    border border-white border-opacity-20 rounded-xl p-2"
            >
              Experience the thrill of a lifetime as you embark on a journey
              that will leave you breathless. Our rides offer unmatched
              excitement and adventure.
            </p>
          </div>
          <motion.img
           initial={{ opacity: 0, x: -100 }}
           whileInView={{ opacity: 1, x: 0 }}
           transition={{ duration: 1.2 }}
          src={homeimg} className="w-full h-auto md:w-[60%] md:h-auto" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
