import React from 'react';
import { motion } from "motion/react";
import EditorCard from './EditorCard';

const PreviewColumn = () => {
  return (
    <motion.div 
      className="relative lg:ml-8"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <EditorCard />
      
      {/* Subtle accent */}
      <div className="absolute -top-6 -right-6 w-32 h-32 bg-gray-500/5 dark:bg-gray-700/10 rounded-full blur-2xl -z-10" />
    </motion.div>
  );
};

export default PreviewColumn;