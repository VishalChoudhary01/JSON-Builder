"use client"
import React from 'react';
import { Button } from '../atoms/button';
import { IoRocketSharp } from "react-icons/io5";

const Banner = () => {
  return (
    <section className="w-full pt-24 pb-16 px-2 text-center relative z-10">
      <div className=" mx-auto bg-white/10 backdrop-blur-md rounded-3xl p-6 sm:p-10 border border-white/40 shadow">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
          <span className="bg-gradient-to-r from-blue-700 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
            Build Your JSON
          </span>
          <br />
          <span className="bg-gradient-to-r from-indigo-600 via-blue-500 to-teal-500 bg-clip-text text-transparent">
            Fast & Simpler
          </span>
        </h1>
        
        <p className="text-gray-800 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-8 font-medium">
          Create, customize, and preview JSON schemas effortlessly with our
          intuitive drag-and-drop interface.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 transition-all shadow-md px-6 py-3 text-base sm:text-lg">
            <IoRocketSharp className="mr-2 h-5 w-5" />
            Get Started
          </Button>
          
          <Button
            variant="outline"
            className="bg-white/80 text-gray-900 hover:bg-white border border-gray-300 px-6 py-3 text-base sm:text-lg"
          >
            View Documentation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
