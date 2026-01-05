import React from 'react';
import { motion } from "motion/react";

const ScrollIndicator = () => {
  return (
    <motion.div 
      className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.6 }}
    >
      <motion.div 
        className="flex flex-col items-center gap-2 cursor-pointer group"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="text-xs text-gray-400 dark:text-gray-600 font-medium font-poppins">Scroll to explore</span>
        <div className="w-5 h-8 border-2 border-gray-300 dark:border-gray-700 rounded-full flex justify-center p-1 group-hover:border-gray-400 dark:group-hover:border-gray-600 transition-colors">
          <motion.div 
            className="w-1 h-2 bg-gray-400 dark:bg-gray-600 rounded-full"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ScrollIndicator;