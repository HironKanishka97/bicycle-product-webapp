import React from 'react'
import FeedbackCard from './FeedbackCard'
import styles from '../style'
import { feedback } from "../constants";
import { motion } from "framer-motion";

const Testimonials = () => {
  return (
    <section id="feedback" className={`${styles.paddingY} ${styles.flexCenter} flex-col 
    relative `}>
    <div className="absolute  w-[60%] h-[60%] -right-[50%] rounded-full 
    blue__gradient bottom-40" />

    <div className="w-full flex justify-between items-center md:flex-row flex-col
     sm:mb-16 mb-6 relative">
      <motion.h2
       initial={{ opacity: 0, x: -50 }}
       whileInView={{ opacity: 1, x: 0 }}
       transition={{ duration: 1 }}
      className={styles.heading2}>
        What People are <br className="sm:block hidden" /> saying about us
      </motion.h2>
      <div className="w-full md:mt-0 mt-6">
        <p className={`${styles.paragraph} text-left max-w-[450px]`}>
        Experience the freedom to ride anywhere, anytime, and take your cycling adventures to new heights.
        </p>
      </div>
    </div>

    <motion.div 
     initial={{ opacity: 0, x: -50 }}
     whileInView={{ opacity: 1, x: 0 }}
     transition={{ duration: 1 }}
    className="flex flex-wrap sm:justify-start justify-center w-full
      ">
      {feedback.map((card) => <FeedbackCard key={card.id} {...card} />)}
    </motion.div>
  </section>
  )
}

export default Testimonials