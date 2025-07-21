"use client";
import React, { useState, useEffect } from "react";
import { Button } from "@/components/atoms/button";
import Logo from "@/components/atoms/Logo";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`w-full z-50 fixed transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-lg shadow-sm py-2"
          : "bg-transparent py-3"
      }`}
    >
      <div className=" flex items-center justify-between xl:px-4 lg:px-3.5 md:px-3 px-2">
        <Logo />
        <Button className="text-green-50 bg-neutral-950 hover:bg-neutral-800 transition-colors">
          Sign In
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;