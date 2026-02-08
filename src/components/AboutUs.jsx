import React from 'react';
import styles from '../style'
import { motion } from 'framer-motion';

const AboutUs = () => {

  return (
    <div className="max-w-4xl mx-auto p-6 shadow-lg rounded-lg">
      <motion.h1
       initial={{ opacity: 0, y: -150 }}
       whileInView={{ opacity: 1, y: 0 }}
       transition={{ duration: 1 }}
        className="text-white font-poppins font-semibold text-center 
        text-[42px] leading-[50px] ss:text-[62px] ss:leading-[90px]"
      >
        <span className="text-gradient">About Us</span>
      </motion.h1>
      
      <div className="w-full flex  items-center justify-center
       md:flex-row flex-col sm:mb-16 mb-6 relative">
        <p className={`${styles.paragraph} text-center max-w-[1050px] mb-4`}>
          Welcome to <strong className="text-gradient">Cycling</strong>! Founded in 2020, we are dedicated to creating high-quality,
          sustainable bicycles that combine performance, style, and eco-friendliness. Our mission is to promote a healthier lifestyle 
          while minimizing our environmental impact.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        {/* Key Features Card */}
        <motion.div 
         initial={{ opacity: 0, x: -50 }}
         whileInView={{ opacity: 1, x: 0 }}
         transition={{ duration: 1 }}
        className="p-4 feedback-card shadow-md rounded-lg">
          <h2 className="text-xl font-semibold text-gray-200 mb-2">Key Features</h2>
          <ul className="list-disc list-inside text-white">
            <li className={`${styles.paragraph}`}>Lightweight Frame: Constructed from aerospace-grade aluminum.</li>
            <li className={`${styles.paragraph}`}>Eco-Friendly Materials: We use recycled materials in our bike components.</li>
            <li className={`${styles.paragraph}`}>Customizable Gearing: Choose between multiple gear options tailored for various terrains.</li>
          </ul>
        </motion.div>

        {/* Benefits Card */}
        <motion.div
         initial={{ opacity: 0, x: 50 }}
         whileInView={{ opacity: 1, x: 0 }}
         transition={{ duration: 1 }}
        className="p-4 feedback-card shadow-md rounded-lg">
          <h2 className="text-xl font-semibold text-gray-200 mb-2">Benefits</h2>
          <ul className="list-disc list-inside text-white">
            <li className={`${styles.paragraph}`}>Health Benefits: Improve cardiovascular health and boost your well-being.</li>
            <li className={`${styles.paragraph}`}>Cost-Effective Transportation: Say goodbye to fuel costs and parking fees!</li>
            <li className={`${styles.paragraph}`}>Community Impact: Support local manufacturing and sustainable practices.</li>
          </ul>
        </motion.div>

        {/* Specifications Card */}
        <motion.div
         initial={{ opacity: 0, x: -50 }}
         whileInView={{ opacity: 1, x: 0 }}
         transition={{ duration: 1 }}
        className="p-4 feedback-card shadow-md rounded-lg">
          <h2 className="text-xl font-semibold text-gray-200 mb-2">Specifications</h2>
          <ul className="list-disc list-inside text-white">
            <li className={`${styles.paragraph}`}>Frame Material: Aerospace-grade aluminum</li>
            <li className={`${styles.paragraph}`}>Weight: 25 lbs (11.3 kg)</li>
            <li className={`${styles.paragraph}`}>Wheel Size: 27.5 inches</li>
            <li className={`${styles.paragraph}`}>Colors: Available in multiple colors</li>
          </ul>
        </motion.div>
      </div>

      <p className={`${styles.paragraph} text-left max-w-[450px] mb-4`}>
        Join us in our journey towards a greener future with Cycling bikes!
      </p>
    </div>
  );
};

export default AboutUs;
