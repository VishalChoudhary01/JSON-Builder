"use client";
import React from 'react';
import { motion } from "motion/react";
import {Background,Badge,Headline,FeatureGrid,CTAButtons,TrustBar,PreviewColumn,ScrollIndicator} from '@/components/templates/banner'

const Banner = () => {
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
      <Background />
      
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content Column */}
          <motion.div 
            className="space-y-8"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <Badge />
            <Headline />
            <FeatureGrid />
            <CTAButtons />
            <TrustBar />
          </motion.div>

          <PreviewColumn />
        </div>
      </div>

      <ScrollIndicator />
    </section>
  );
};

export default Banner;