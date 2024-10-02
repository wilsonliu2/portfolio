import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Footer = () => {
  const [movementDistance, setMovementDistance] = useState(0);

  useEffect(() => {
    const updateMovement = () => {
      const width = window.innerWidth;
      const maxMovement = 300;
      const calcMovementWidth = width * 0.3;
      setMovementDistance(Math.min(maxMovement, calcMovementWidth));
    };

    updateMovement();
    window.addEventListener("resize", updateMovement);

    return () => {
      window.removeEventListener("resize", updateMovement);
    };
  }, []);

  return (
    <div className="relative px-5 py-1 text-sm font-thin text-neutral-200">
      {/* Footer */}
      <span>&copy; 2024 | Wilson Liu</span>
      {/* Moving Image */}
      <motion.img
        src="/src/assets/zkay_11-hollow-knight3.gif"
        alt="Moving Hollow Knight Image"
        className="-mt-5 inline-block h-16 w-16"
        animate={{
          x: [0, movementDistance, 0],
          scaleX: [1, 1, -1, -1], // Turn around
        }}
        transition={{
          repeat: Infinity,
          duration: 7,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

export default Footer;
