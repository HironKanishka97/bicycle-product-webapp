import React, { useState } from 'react';
import styles  from '../style';
import { motion } from "framer-motion";

const Submit = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Name:', name);
    console.log('Email:', email);
    setName('');
    setEmail('');
  };

  return (
    <div id="contactus" className="w-full mx-auto p-4  rounded-md shadow-lg">
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      className="text-lg font-semibold mb-4 text-white text-center">Contact Us</motion.h2>
      <form onSubmit={handleSubmit} className="flex flex-col justify-center">
        <div className="flex sm:flex-row flex-col justify-center mb-4">
          <motion.div 
           initial={{ opacity: 0, x: -50 }}
           whileInView={{ opacity: 1, x: 0 }}
           transition={{ duration: 1 }}
           className="w-full mr-2 ">
            <label className="mb-2 text-white" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border border-gray-300 rounded-md p-2 w-full"
              required
            />
          </motion.div>

          <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="w-full">
            <label className="mb-2 text-white" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border border-gray-300 rounded-md p-2 w-full"
              required
            />
          </motion.div>
        </div>

        <motion.button 
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        type="submit" className={`py-2 px-2 font-poppins font-medium text-[16px] max-w-[200px] text-primary bg-blue-gradient rounded-[10px]  outline-none ${styles}`}>
          Submit
        </motion.button>
      </form>
    </div>
  );
};

export default Submit;