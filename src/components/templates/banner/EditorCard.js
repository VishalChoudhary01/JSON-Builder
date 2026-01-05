import React from 'react';
import { motion } from "motion/react";

const stats = [
  { value: "5", label: "Fields" },
  { value: "2", label: "Nested" },
  { value: "✓", label: "Valid" }
];

const EditorCard = () => {
  return (
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
          {stats.map((stat, i) => (
            <div key={i}>
              <div className="text-base font-semibold text-gray-900 dark:text-white">{stat.value}</div>
              <div className="text-xs text-gray-500 dark:text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default EditorCard;