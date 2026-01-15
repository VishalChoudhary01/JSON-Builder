"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "@/components/atoms/logo/Logo";
import ModernButton from "@/components/atoms/button/ModernButton";
import { IoRocketSharp, IoMoonSharp, IoSunnySharp } from "react-icons/io5";
import { FiMenu, FiX } from "react-icons/fi";
import { useTheme } from "@/hook/useTheme";
import MobileMenu from "./MobileMenu";



// Main Navbar Component
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme, isDark } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden"; // Prevent scrolling when menu is open
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: "Features", href: "#features" },
    { name: "Examples", href: "#examples" },
    { name: "Documentation", href: "#docs" },
    { name: "Pricing", href: "#pricing" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3 }}
        className={`w-full z-40 fixed top-0 transition-all duration-300 ${
          isScrolled
            ? "bg-white/80 dark:bg-gray-950/80 backdrop-blur-md border-b border-gray-200/50 dark:border-gray-800/50 py-3"
            : "bg-transparent py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
            >
              <Logo />
            </motion.div>

            {/* Desktop Navigation */}
            <motion.div
              className="hidden md:flex items-center gap-1"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="px-4 py-2 text-sm font-medium font-roboto text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800/50 transition-all duration-200"
                >
                  {link.name}
                </a>
              ))}
            </motion.div>

            {/* Desktop CTA Buttons */}
            <motion.div
              className="hidden md:flex items-center gap-3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              {/* Theme Toggle Button */}
              <button
                onClick={toggleTheme}
                className="p-2.5 rounded-lg bg-gray-100 dark:bg-gray-800/40 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 group"
                aria-label="Toggle theme"
              >
                <motion.div
                  initial={{ rotate: 0, scale: 1 }}
                  animate={{ 
                    rotate: isDark ? 10 : 0,
                    scale: [1, 1.2, 1]
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {isDark ? (
                    <IoMoonSharp className="text-xl" />
                  ) : (
                    <IoSunnySharp className="text-xl" />
                  )}
                </motion.div>
              </button>

              <button className="px-4 py-2 text-sm font-medium font-roboto text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
                Sign In
              </button>
              <ModernButton 
                variant="primary" 
                icon={<IoRocketSharp className="w-4 h-4" />}
              >
                Get Started
              </ModernButton>
            </motion.div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors z-50 relative"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? (
                <FiX className="w-5 h-5" />
              ) : (
                <FiMenu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Component */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        navLinks={navLinks}
        toggleTheme={toggleTheme}
        isDark={isDark}
      />
    </>
  );
};

export default Navbar;