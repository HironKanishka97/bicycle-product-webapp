import React from 'react'
import styles from "../style";
import Button from "./Button";
import { motion } from "framer-motion";
const CTA = () => {
  return (
    <motion.section 
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 1 }}
    className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} 
    sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
    <div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}>Let’s try our product now!</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Unlock your journey: ride with confidence and explore every road, trail, and adventure that awaits.
      </p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <Button />
    </div>
  </motion.section>
  )
}

export default CTA