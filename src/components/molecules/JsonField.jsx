"use client";
import React from "react";
import { useFieldArray, useFormContext } from "react-hook-form";
import { Input } from "../atoms/input";
import { 
  Select, 
  SelectItem, 
  SelectContent, 
  SelectTrigger, 
  SelectValue 
} from "../atoms/select";
import { Button } from "../atoms/button";
import { HiMiniTrash, HiPlus } from "react-icons/hi2";
import { Card, CardContent,  } from "../molecules/card";
import { Separator } from "../atoms/separator";
import {motion,AnimatePresence} from 'motion/react'

const TYPE_OPTIONS = ["string", "number", "boolean", "object", "array"];

const JsonField = ({ nestPath = "fields", depth = 0 }) => {
  const { control, register, watch, setValue } = useFormContext();
  const { fields, append, remove } = useFieldArray({ control, name: nestPath });

  const handleAddField = () => {
    append({
      key: "",
      type: "string",
      value: "",
      children: []
    });
  };

  return (
    <div className={`${depth > 0 ? "ml-6 pl-4 border-l border-gray-200 dark:border-gray-700/50" : ""} space-y-3 w-full`}>
      <AnimatePresence>
      {fields.map((field, index) => {
      
      const base = `${nestPath}.${index}`;
        const type = watch(`${base}.type`);

        return (
          <motion.div
          key={field.id}
              layout
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 1 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
          >
          <Card  className="bg-white/80 dark:bg-black/30 backdrop-blur-lg border border-gray-200 dark:border-gray-800/50 shadow-sm">
            <CardContent className="md:p-4 px-2 py-1.5 custom-scroll overflow-x-auto space-y-3">
              <div className="flex gap-3 items-start">
                <Input
                  {...register(`${base}.key`)}
                  placeholder="Field name"
                  className="flex-1 outline-none focus:ring focus ring-neutral-200 dark:bg-black/30 dark:border-gray-700/50"
                />
                
                <Select
                  onValueChange={(val) => setValue(`${base}.type`, val)}
                  defaultValue={field.type}
                  className="outline-none"
                >
                  <SelectTrigger className="w-[140px] dark:bg-black/30 dark:border-gray-700/50">
                    <SelectValue placeholder="Type" />
                  </SelectTrigger>
                  <SelectContent className="dark:bg-black/50 dark:backdrop-blur-xl dark:border-gray-700/50">
                    {TYPE_OPTIONS.map((opt) => (
                      <SelectItem key={opt} value={opt} className="dark:hover:bg-gray-800/50">
                        {opt}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                
                <Button 
                  type="button" 
                  variant="ghost"
                  size="icon"
                  onClick={() => remove(index)}
                  className="text-gray-500 hover:text-red-500 bg-transparent hover:bg-transparent cursor-pointer"
                >
                  <HiMiniTrash className="w-4 h-4" />
                </Button>
              </div>

              <Separator className="my-2 dark:bg-gray-700/50" />

              {type === "object" || type === "array" ? (
                <div className="pt-2">
                  <h4 className="text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                    {type === "object" ? "Object Properties" : "Array Items"}
                  </h4>
                  <JsonField nestPath={`${base}.children`} depth={depth + 1} />
                </div>
              ) : type === "boolean" ? (
                <Select
                  onValueChange={(val) => setValue(`${base}.value`, val)}
                  defaultValue={field.value || "true"}
                >
                  <SelectTrigger className="w-[140px] dark:bg-black/30 dark:border-gray-700/50">
                    <SelectValue placeholder="Value" />
                  </SelectTrigger>
                  <SelectContent className="dark:bg-black/50 dark:backdrop-blur-xl dark:border-gray-700/50">
                    <SelectItem value="true" className="dark:hover:bg-gray-800/50">true</SelectItem>
                    <SelectItem value="false" className="dark:hover:bg-gray-800/50">false</SelectItem>
                  </SelectContent>
                </Select>
              ) : (
                <Input
                  {...register(`${base}.value`)}
                  placeholder={`Enter ${type} value`}
                  type={type === "number" ? "number" : "text"}
                  className="dark:bg-black/30 dark:border-gray-700/50"
                />
              )}
            </CardContent>
          </Card>
          </motion.div>
        );
      })}
</AnimatePresence>
      <Button 
        type="button" 
        onClick={handleAddField}
        variant="outline"
        className="mt-2 md:w-[100px] border-dashed dark:border-gray-700/50 dark:bg-black/30 dark:hover:bg-black/50"
      >
        <HiPlus className="" />
        Add Field
      </Button>
    </div>
  );
};

export default JsonField;