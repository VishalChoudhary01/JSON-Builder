import React from 'react';
import ModernButton from '@/components/atoms/button/ModernButton';
import { IoRocketSharp, IoCodeSlash } from "react-icons/io5";
import { FiArrowRight } from "react-icons/fi";
import { motion } from "motion/react";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const CTAButtons = () => {
  return (
    <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-3 pt-2">
      <ModernButton variant="primary" icon={<IoRocketSharp className="w-4 h-4" />}>
        Start building
        <FiArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
      </ModernButton>
      
      <ModernButton variant="outline" icon={<IoCodeSlash className="w-4 h-4" />}>
        View examples
      </ModernButton>
    </motion.div>
  );
};

export default CTAButtons;