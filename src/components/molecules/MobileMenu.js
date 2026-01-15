"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "@/components/atoms/logo/Logo";
import ModernButton from "@/components/atoms/button/ModernButton";
import { IoRocketSharp, IoMoonSharp, IoSunnySharp } from "react-icons/io5";
import { FiX } from "react-icons/fi";

const MobileMenu = ({ isOpen, onClose, navLinks, toggleTheme, isDark }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden"
            onClick={onClose}
          />
          
          {/* Mobile Menu Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed top-0 right-0 h-full w-72 bg-white dark:bg-gray-900 shadow-xl z-50 md:hidden"
          >
            <div className="flex flex-col h-full">
              {/* Header with Logo */}
              <div className="p-6 border-b border-gray-200 dark:border-gray-800">
                <div className="flex items-center justify-between">
                  <Logo />
                  <button
                    onClick={onClose}
                    className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  >
                    <FiX className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                  </button>
                </div>
              </div>

              {/* Navigation Items */}
              <div className="flex-1 overflow-y-auto py-4 px-4">
                <div className="space-y-1">
                  {navLinks.map((link, index) => (
                    <motion.a
                      key={index}
                      href={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="block px-4 py-3 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-all duration-200"
                      onClick={onClose}
                    >
                      {link.name}
                    </motion.a>
                  ))}
                </div>

                {/* Theme Toggle */}
                <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800">
                  <button
                    onClick={toggleTheme}
                    className="flex items-center justify-between w-full px-4 py-3 text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-all"
                  >
                    <div className="flex items-center gap-3">
                      {isDark ? (
                        <IoMoonSharp className="w-5 h-5" />
                      ) : (
                        <IoSunnySharp className="w-5 h-5" />
                      )}
                      <span>Switch Theme</span>
                    </div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {isDark ? "Dark" : "Light"}
                    </span>
                  </button>
                </div>
              </div>

              {/* Get Started Button */}
              <div className="p-6 border-t border-gray-200 dark:border-gray-800">
                <ModernButton 
                  variant="primary" 
                  icon={<IoRocketSharp className="w-5 h-5" />}
                  className="w-full py-3"
                  onClick={onClose}
                >
                  Get Started
                </ModernButton>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;