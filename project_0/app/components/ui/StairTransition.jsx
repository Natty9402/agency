"use client";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { usePathname } from "next/navigation";
import Stairs from "../Stairs";

const StairTransition = () => {
  const pathName = usePathname();
  return (
    <>
      <AnimatePresence mode="wait" className="text-white">
        <div key={pathName}>
          <div className="h-full w-screen fixed top-0 left-0 right-0 pointer-events-none z-50 flex">
            <Stairs />
          </div>

          <motion.div
            className="h-screen w-screen fixed bg-secondary top-0 pointer-events-none"
            initial={{ opacity: 1 }}
            animate={{
              opacity: 0,
              transition: { delay: 1, duration: 0.4, ease: "easeInOut" },
            }}
          />
        </div>
      </AnimatePresence>
    </>
  );
};

export default StairTransition;
