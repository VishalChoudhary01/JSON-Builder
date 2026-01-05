import React from 'react';
import { motion } from "motion/react";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const companies = ['GitHub', 'Vercel', 'Stripe', 'Google'];

const TrustBar = () => {
  return (
    <motion.div variants={fadeInUp} className="pt-8 space-y-3">
      <p className="text-xs text-gray-500 dark:text-gray-500 font-medium uppercase tracking-wider font-roboto">
        Trusted by developers at
      </p>
      <div className="flex flex-wrap items-center gap-6">
        {companies.map((company) => (
          <span
            key={company}
            className="text-sm font-medium text-gray-400 dark:text-gray-600 hover:text-gray-600 dark:hover:text-gray-400 transition-colors"
          >
            {company}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export default TrustBar;