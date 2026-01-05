import React from 'react';
import { IoSparkles } from "react-icons/io5";
import { motion } from "motion/react";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const Badge = () => {
  return (
    <motion.div 
      variants={fadeInUp}
      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-100 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700/50"
    >
      <IoSparkles className="text-blue-600 dark:text-blue-400 w-3.5 h-3.5" />
      <span className="text-xs font-medium text-gray-700 dark:text-gray-300 tracking-wide">
        Version 2.0 Now Available
      </span>
    </motion.div>
  );
};

export default Badge;