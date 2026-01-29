"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const tabs = [
  { key: "skills", label: "Skills" },
  { key: "education", label: "Education" },
  { key: "certificates", label: "Certificates" },
];

const panelVariants = {
  initial: { opacity: 0, x: 40 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.35 } },
  exit: { opacity: 0, x: -40, transition: { duration: 0.25 } },
};

export default function AboutPanels() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className="w-full">
      {/* Category Selectors */}
      <div className="flex gap-4 mb-6 justify-center">
        {tabs.map((tab) => {
          const isActive = selected === tab.key;
          return (
            <motion.button
              key={tab.key}
              onClick={() => setSelected(isActive ? null : tab.key)}
              className={`px-5 py-2 rounded font-medium border border-gray-300 transition focus:outline-none ${
                isActive
                  ? "bg-[#c5050c] text-white scale-110 shadow-lg z-10"
                  : "bg-gray-100 text-gray-800 hover:bg-gray-200"
              }`}
              style={{
                boxShadow: isActive ? "0 4px 24px 0 rgba(197,5,12,0.10)" : undefined,
              }}
              animate={isActive ? { scale: 1.1 } : { scale: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {tab.label}
            </motion.button>
          );
        })}
      </div>
      {/* Panels */}
      <AnimatePresence mode="wait">
        {selected && (
          <motion.div
            key={selected}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ opacity: { duration: 0.2 }, height: { duration: 0.3 } }}
            className="w-full bg-white border rounded-lg shadow p-6 mb-2 overflow-hidden"
          >
            {selected === "skills" && (
              <div>
                <h3 className="text-xl font-semibold mb-2">Skills</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Languages: [placeholder]</li>
                  <li>Frameworks: [placeholder]</li>
                  <li>Tools: [placeholder]</li>
                  <li>Concepts: [placeholder]</li>
                </ul>
              </div>
            )}
            {selected === "education" && (
              <div>
                <h3 className="text-xl font-semibold mb-2">Education</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Institution: [placeholder]</li>
                  <li>Degree: [placeholder]</li>
                  <li>Major: [placeholder]</li>
                  <li>GPA: [placeholder]</li>
                </ul>
              </div>
            )}
            {selected === "certificates" && (
              <div>
                <h3 className="text-xl font-semibold mb-2">Certificates</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>[Certificate 1 placeholder]</li>
                  <li>[Certificate 2 placeholder]</li>
                </ul>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}