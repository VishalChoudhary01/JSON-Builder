import React from 'react';
import { FiCheck } from "react-icons/fi";
import { motion } from "motion/react";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const features = [
  "Instant preview",
  "Live validation",
  "Export options",
  "Type safety"
];

const FeatureGrid = () => {
  return (
    <motion.div variants={fadeInUp} className="grid grid-cols-2 gap-4 pt-2">
      {features.map((feature, i) => (
        <div key={i} className="flex items-start gap-2">
          <FiCheck className="w-4 h-4 text-blue-600 dark:text-blue-400/80 mt-0.5 flex-shrink-0 animate-pulse" />
          <span className="text-sm text-gray-700 dark:text-gray-300 font-roboto">{feature}</span>
        </div>
      ))}
    </motion.div>
  );
};

export default FeatureGrid;