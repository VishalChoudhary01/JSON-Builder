"use client";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { FormContext } from "@/contexts/FormContext";
import SchemaBuilder from "@/components/organisms/SchemaBuilder";
import SchemaPreview from "@/components/templates/SchemaPreview";
import Banner from "@/components/templates/Banner";
export default function Home() {
  const methods = useForm({
    defaultValues: {
      fields: [],
    },
  });

  return (
    <FormContext.Provider value={methods}>
      <div className="relative min-h-screen">
        <div className="absolute inset-0 -z-50">
          <div className="relative bg-fixed h-full w-full [&>div]:absolute [&>div]:bottom-0 [&>div]:right-0 [&>div]:z-[-2] [&>div]:h-full [&>div]:w-full [&>div]:bg-gradient-to-b [&>div]:from-blue-200 [&>div]:to-white">
            <div></div>
          </div>
        </div>
        <Banner/>
        <div className="py-10 md:px-6 px-2 flex-wrap flex justify-center gap-7 ">
          <section className="md:w-[48%] w-full">
            <SchemaBuilder />
          </section>
          <section className="md:w-[48%] w-full">
            <SchemaPreview />
          </section>
        </div>
      </div>
    </FormContext.Provider>
  );
}