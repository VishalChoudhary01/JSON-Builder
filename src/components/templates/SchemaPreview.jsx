"use client";
import React, { useRef, useState } from "react";
import { useFormContextProvider } from "@/contexts/FormContext";
import { CardContent } from "../molecules/card";
import { MdOutlineContentCopy } from "react-icons/md";
import { Button } from "../atoms/button";
import {motion} from 'motion/react'

const buildJson = (fields = []) => {
  const result = {};
  for (const field of fields) {
    const { key, type, value, children } = field;

    if (!key) continue;

    if (type === "object") {
      result[key] = buildJson(children || []);
    } else if (type === "array") {
      result[key] = children?.map((child) => buildJson([child])) ?? [];
    } else if (type === "number") {
      result[key] = parseFloat(value);
    } else if (type === "boolean") {
      result[key] = value === "true";
    } else {
      result[key] = value;
    }
  }
  return result;
};

const SchemaPreview = () => {
  const { watch } = useFormContextProvider();
  const fields = watch("fields");

  const jsonOutput = buildJson(fields);
  const jsonRef = useRef();
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (jsonRef.current) {
      const textCopy = jsonRef.current.innerText;
      navigator.clipboard.writeText(textCopy).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
      });
    }
  };

  return (
    <CardContent className="px-4 py-6 relative rounded-2xl bg-neutral-950 text-green-400 md:h-[calc(100%-60px)] min-h-72 overflow-auto">
      <div className="absolute md:right-12 right-3.5 top-3 group " data-tooltip="Copy">
        <Button
          onClick={handleCopy}
          variant={"ghost"}
          size={"icon"}
          className="hover:bg-transparent cursor-pointer   transition-all relative py-1"
        >
          <MdOutlineContentCopy className={copied ? "text-green-500 text-lg" : "text-neutral-200 text-xl"} />
        </Button>

        <span className="absolute -top-0 left-1/6 translate-x-1/2 font-dm-mono scale-0 group-hover:scale-100 transition-all bg-green-400/30 text-white text-xs px-2 py-1 rounded-md pointer-events-none z-10">
          Copy
        </span>
      </div>

      <motion.pre
      key={JSON.stringify(jsonOutput)}
      initial={{opacity:0,y:5}}
      animate={{opacity:1,y:0}}
      
      transition={{duration:0.3}}
       ref={jsonRef} className="text-sm font-quicksand ">{JSON.stringify(jsonOutput, null, 2)}</motion.pre>
    </CardContent>
  );
};

export default SchemaPreview;
