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
import { Card, CardContent,  } from "../atoms/card";
import { Separator } from "../atoms/separator";

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
    <div className={`${depth > 0 ? "ml-6 pl-4 border-l border-gray-200" : ""} space-y-3`}>
      {fields.map((field, index) => {
        const base = `${nestPath}.${index}`;
        const type = watch(`${base}.type`);

        return (
          <Card key={field.id} className="overflow-hidden shadow-sm">
            <CardContent className="p-4 space-y-3">
              <div className="flex gap-3 items-start">
                <Input
                  {...register(`${base}.key`)}
                  placeholder="Field name"
                  className="flex-1 outline-none focus:ring focus ring-neutral-200"
                />
                
                <Select
                  onValueChange={(val) => setValue(`${base}.type`, val)}
                  defaultValue={field.type}
                  className="outline-none"
                >
                  <SelectTrigger className="w-[140px]">
                    <SelectValue placeholder="Type" />
                  </SelectTrigger>
                  <SelectContent>
                    {TYPE_OPTIONS.map((opt) => (
                      <SelectItem key={opt} value={opt}>
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

              <Separator className="my-2" />

              {type === "object" || type === "array" ? (
                <div className="pt-2">
                  <h4 className="text-sm font-medium mb-2 text-gray-700">
                    {type === "object" ? "Object Properties" : "Array Items"}
                  </h4>
                  <JsonField nestPath={`${base}.children`} depth={depth + 1} />
                </div>
              ) : type === "boolean" ? (
                <Select
                  onValueChange={(val) => setValue(`${base}.value`, val)}
                  defaultValue={field.value || "true"}
                >
                  <SelectTrigger className="w-[140px]">
                    <SelectValue placeholder="Value" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="true">true</SelectItem>
                    <SelectItem value="false">false</SelectItem>
                  </SelectContent>
                </Select>
              ) : (
                <Input
                  {...register(`${base}.value`)}
                  placeholder={`Enter ${type} value`}
                  type={type === "number" ? "number" : "text"}
                />
              )}
            </CardContent>
          </Card>
        );
      })}

      <Button 
        type="button" 
        onClick={handleAddField}
        variant="outline"
        className="mt-2 md:w-[100px] border-dashed hover:bg-gray-50"
      >
        <HiPlus className="" />
        Add Field
      </Button>
    </div>
  );
};

export default JsonField;