"use client";
import { FiCheck } from "react-icons/fi";
import React from 'react';
import ModernButton from '../atoms/button/ModernButton';
import { IoRocketSharp, IoSparkles, IoCodeSlash } from "react-icons/io5";
import { FiArrowRight } from "react-icons/fi";
import { motion } from "motion/react";

const Banner = () => {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section className="relative w-full pt-24 pb-16 md:pt-32 md:pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Refined Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50/30 to-white dark:from-black from-20%         dark:via-gray-950 dark:to-black/50" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.03),transparent_50%)] dark:bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.01),transparent_50%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] dark:opacity-[0.015]" />
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content Column */}
          <motion.div 
            className="space-y-8"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {/* Badge */}
            <motion.div 
              variants={fadeInUp}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-100 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700/50"
            >
              <IoSparkles className="text-blue-600 dark:text-blue-400 w-3.5 h-3.5" />
              <span className="text-xs font-medium text-gray-700 dark:text-gray-300 tracking-wide">
                Version 2.0 Now Available
              </span>
            </motion.div>

            {/* Headline */}
            <motion.div variants={fadeInUp} className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1]">
                <span className="block text-gray-900 dark:text-white">
                  Build JSON schemas
                </span>
                <span className="block text-gray-600 dark:text-gray-400 animate-pulse">
                  in real time
                </span>
              </h1>
              
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-xl">
                A professional visual editor for creating and customizing JSON schemas with instant validation and preview.
              </p>
            </motion.div>

            {/* Feature Grid */}
            <motion.div variants={fadeInUp} className="grid grid-cols-2 gap-4 pt-2">
              {[
                "Instant preview",
                "Live validation",
                "Export options",
                "Type safety"
              ].map((feature, i) => (
                <div key={i} className="flex items-start gap-2">
                  <FiCheck className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">{feature}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-3 pt-2">
              <ModernButton variant="primary" icon={<IoRocketSharp className="w-4 h-4" />}>
                Start building
                <FiArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </ModernButton>
              
              <ModernButton variant="outline" icon={<IoCodeSlash className="w-4 h-4" />}>
                View examples
              </ModernButton>
            </motion.div>

            {/* Trust Bar */}
            <motion.div variants={fadeInUp} className="pt-8 space-y-3">
              <p className="text-xs text-gray-500 dark:text-gray-500 font-medium uppercase tracking-wider">
                Trusted by developers at
              </p>
              <div className="flex flex-wrap items-center gap-6">
                {['GitHub', 'Vercel', 'Stripe', 'Google'].map((company) => (
                  <span
                    key={company}
                    className="text-sm font-medium text-gray-400 dark:text-gray-600 hover:text-gray-600 dark:hover:text-gray-400 transition-colors"
                  >
                    {company}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Preview Column */}
          <motion.div 
            className="relative lg:ml-8"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Editor Card */}
            <motion.div 
              className="relative bg-white dark:bg-gray-950 rounded-xl border border-gray-200 dark:border-gray-900 overflow-hidden"
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
            >
              {/* Header */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100 dark:border-gray-900">
                <div className="flex items-center gap-2.5">
                  <div className="flex gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-red-400/80"></div>
                    <div className="w-2 h-2 rounded-full bg-yellow-400/80"></div>
                    <div className="w-2 h-2 rounded-full bg-green-400/80"></div>
                  </div>
                  <span className="text-xs font-medium text-gray-600 dark:text-gray-400">
                    schema.json
                  </span>
                </div>
                <span className="text-xs px-2 py-0.5 rounded bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 font-medium">
                  Valid
                </span>
              </div>

              {/* Code Preview */}
              <div className="p-4">
                <div className="font-mono text-xs bg-gray-50 dark:bg-black rounded-lg p-4 border border-gray-100 dark:border-gray-900">
                  <div className="space-y-1.5 text-gray-800 dark:text-gray-300">
                    <div><span className="text-blue-600 dark:text-blue-400">{"{"}</span></div>
                    <div className="ml-3">
                      <span className="text-purple-600 dark:text-purple-400">"user"</span>
                      <span className="text-gray-400">: {"{"}</span>
                    </div>
                    <div className="ml-6">
                      <span className="text-purple-600 dark:text-purple-400">"name"</span>
                      <span className="text-gray-400">: </span>
                      <span className="text-emerald-600 dark:text-emerald-400">"string"</span>
                      <span className="text-gray-400">,</span>
                    </div>
                    <div className="ml-6">
                      <span className="text-purple-600 dark:text-purple-400">"email"</span>
                      <span className="text-gray-400">: </span>
                      <span className="text-emerald-600 dark:text-emerald-400">"string"</span>
                    </div>
                    <div className="ml-3"><span className="text-gray-400">{"}"}</span></div>
                    <div><span className="text-blue-600 dark:text-blue-400">{"}"}</span></div>
                  </div>
                </div>
              </div>

              {/* Stats Footer */}
              <div className="px-4 py-3 border-t border-gray-100 dark:border-gray-900 bg-gray-50/50 dark:bg-black/50">
                <div className="grid grid-cols-3 gap-4 text-center">
                  {[
                    { value: "5", label: "Fields" },
                    { value: "2", label: "Nested" },
                    { value: "✓", label: "Valid" }
                  ].map((stat, i) => (
                    <div key={i}>
                      <div className="text-base font-semibold text-gray-900 dark:text-white">{stat.value}</div>
                      <div className="text-xs text-gray-500 dark:text-gray-500">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Subtle accent */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-gray-500/5 dark:bg-gray-700/10 rounded-full blur-2xl -z-10" />
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <motion.div 
          className="flex flex-col items-center gap-2 cursor-pointer group"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="text-xs text-gray-400 dark:text-gray-600 font-medium">Scroll to explore</span>
          <div className="w-5 h-8 border-2 border-gray-300 dark:border-gray-700 rounded-full flex justify-center p-1 group-hover:border-gray-400 dark:group-hover:border-gray-600 transition-colors">
            <motion.div 
              className="w-1 h-2 bg-gray-400 dark:bg-gray-600 rounded-full"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Banner;
