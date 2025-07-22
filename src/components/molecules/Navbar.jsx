"use client";
import React, { useState, useEffect } from "react";
import { Button } from "@/components/atoms/button";
import Logo from "@/components/atoms/Logo";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 5);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`w-full z-50 fixed transition-all duration-300 ${
        isScrolled
          ? "bg-neutral-50/50  backdrop-blur-lg shadow-sm md:py-4 py-3.5"
          : "bg-neutral-50/10 md:py-3.5 py-3 backdrop-blur-lg "
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