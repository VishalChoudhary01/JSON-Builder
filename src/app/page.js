"use client";
import React from 'react';
import { useForm } from 'react-hook-form';
import { FormContext } from '@/contexts/FormContext';
import SchemaBuilder from '@/components/organisms/SchemaBuilder';
import SchemaPreview from '@/components/templates/SchemaPreview';
import HeroBanner from '@/components/templates/Banner';

export default function Home() {
  const methods = useForm({
    defaultValues: {
      fields: [],
    },
  });

  return (
    <FormContext.Provider value={methods}>
      <div className="relative min-h-screen overflow-hidden custom-scroll">
        {/* Modern Background */}
        <div className="fixed inset-0 -z-10">
          {/* Pure black background */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 dark:from-black dark:via-black dark:to-black" />
          
          {/* Animated gradient orbs - Light colors on black background */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:bg-gradient-to-r dark:from-gray-200/5 dark:via-blue-200/3 dark:to-purple-200/5 rounded-full animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-indigo-500/10 to-teal-500/10 dark:bg-gradient-to-r dark:from-gray-200/5 dark:via-cyan-200/3 dark:to-emerald-200/5 rounded-full animate-pulse delay-1000" />
          
          {/* Grid pattern - Subtle but visible on black */}
          <div className="absolute inset-0 opacity-5 dark:opacity-[0.03] bg-[linear-gradient(to_right,#8888880d_1px,transparent_1px),linear-gradient(to_bottom,#8888880d_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:24px_24px]" />
          
          {/* Subtle center glow effect */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] dark:bg-gradient-to-br dark:from-white/1 dark:via-transparent dark:to-transparent rounded-full blur-3xl" />
        </div>

        {/* Hero Section */}
        <HeroBanner />
        
        {/* Features/Content Section */}
        <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal mb-6 bg-gradient-to-r from-gray-900 to-gray-700 dark:from-gray-100 dark:to-gray-300 bg-clip-text text-transparent">
              Powerful JSON Schema Builder
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto font-roboto">
              Interface to build complex JSON schemas with validation, 
              real-time preview, and export in multiple formats.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-6">
            <section className="lg:w-1/2">
              {/* Card with glass effect - visible on black */}
              <div className="bg-white/80 dark:bg-gray-900/90 backdrop-blur-lg rounded-2xl border border-gray-200 dark:border-gray-800/50 p-6 shadow-xl shadow-gray-200/20 dark:shadow-black/50">
                <SchemaBuilder />
              </div>
            </section>
            
            <section className="lg:w-1/2">
              <div className="bg-white/80 dark:bg-gray-900/90 backdrop-blur-lg rounded-2xl border border-gray-200 dark:border-gray-800/50 p-6 shadow-xl shadow-gray-200/20 dark:shadow-black/50">
                <SchemaPreview />
              </div>
            </section>
          </div>
        </div>
      </div>
    </FormContext.Provider>
  );
}