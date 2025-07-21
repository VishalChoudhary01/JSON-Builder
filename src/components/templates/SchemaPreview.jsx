"use client";
import React from "react";
import { useFormContextProvider } from "@/contexts/FormContext";
import {CardContent} from '../atoms/card'

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

  return (
      <CardContent className="p-4 rounded-2xl bg-neutral-950 text-green-400 h-[calc(100%-60px)] overflow-auto">
        <pre className="text-sm">{JSON.stringify(jsonOutput, null, 2)}</pre>
      </CardContent>
  );
};

export default SchemaPreview;
