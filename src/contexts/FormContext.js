"use client"
import { createContext, useContext } from "react";

export const FormContext = createContext(null);

export const useFormContextProvider = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error("useFormContextProvider must be used within FormContext.Provider");
  }
  return context;
};
