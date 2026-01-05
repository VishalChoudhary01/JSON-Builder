"use client";

import React from 'react';
import './button-styles.css';

const ModernButton = ({ children, variant = "primary", icon, className = "" }) => {
  const variants = {
    primary: "bg-gray-900 dark:bg-neutral-50/85   text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100",
    outline: "border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-gray-900 dark:hover:border-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800/50"
  };
  
  return (
    <button className={`group inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg font-roboto font-medium transition-all duration-300 ${variants[variant]} ${className}`}>
      {icon}
      {children}
    </button>
  );
};

export default ModernButton;