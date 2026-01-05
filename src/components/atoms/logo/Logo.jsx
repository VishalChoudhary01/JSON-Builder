import React from 'react';
import './logo.css';

const Logo = () => {
  return (
    <div className="relative group cursor-pointer">
      <div className="logo-container flex items-center gap-2 float-effect">
        {/* Icon - Animated Brackets with JSON symbol */}
        <div className="relative w-10 h-10 flex items-center justify-center">
          {/* Background glow */}
          <div className="absolute inset-0 bg-blue-500/10 dark:bg-blue-500/20 rounded-lg blur-xl glow-effect" />
          
          {/* Container */}
          <div className="relative w-full h-full bg-gray-900 dark:bg-white rounded-lg flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform duration-300">
            {/* Subtle grid pattern */}
            <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#ffffff22_1px,transparent_1px),linear-gradient(to_bottom,#ffffff22_1px,transparent_1px)] bg-[size:8px_8px]" />
            
            {/* Brackets */}
            <div className="relative flex items-center justify-center text-white dark:text-gray-900 font-bold">
              <span className="text-xl leading-none group-hover:translate-x-[-1px] transition-transform duration-300">{`{`}</span>
              <span className="text-xs leading-none mx-0.5 opacity-90">J</span>
              <span className="text-xl leading-none group-hover:translate-x-[1px] transition-transform duration-300">{`}`}</span>
            </div>
            
            {/* Shine effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
          </div>
        </div>
        
        {/* Text Logo */}
        <div className="flex flex-col leading-none">
          <div className="flex items-baseline gap-0.5">
            <span className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">
              Quick
            </span>
            <span className="text-2xl font-bold text-gray-600 dark:text-gray-400">
              JSON
            </span>
          </div>
          <span className="text-[9px] font-semibold text-gray-500 dark:text-gray-500 tracking-widest uppercase mt-0.5 ml-0.5">
            Schema Builder
          </span>
        </div>
      </div>
    </div>
  );
};

export default Logo;