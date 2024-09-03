import React from "react";
import { motion } from "framer-motion";

const Icon = ({ icon: Icon, label }) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        backgroundColor: "#d4d4d4", // Neutral-300
        color: "black",
        transition: { duration: 0.3 },
      }}
      className="flex flex-col items-center rounded-lg p-4 text-center"
    >
      <div className="flex h-16 w-16 items-center justify-center">
        <div>
          <Icon size={30} />
        </div>
      </div>
      <span className="mt-2 text-sm font-light">{label}</span>
    </motion.div>
  );
};

export default Icon;
