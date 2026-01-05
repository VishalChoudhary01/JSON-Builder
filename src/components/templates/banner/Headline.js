import React from 'react';
import { motion } from "motion/react";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const Headline = () => {
  return (
    <motion.div variants={fadeInUp} className="space-y-4">
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold font-poppins tracking-tight leading-[1.1]">
        <span className="block text-gray-900 dark:text-white [Letter-spacing:-0.02em] [Line-height:1.05em] whitespace-nowrap ">
          Build JSON schemas
        </span>
        <span className="block text-gray-600 dark:text-gray-400 animate-pulse font-normal">
          in real time
        </span>
      </h1>
      
      <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-xl font-roboto font-normal">
        A professional visual editor for creating and customizing JSON schemas with instant validation and preview.
      </p>
    </motion.div>
  );
};

export default Headline;