import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const TITLES = ["Software Engineer", "Full-stack Developer", "Farmer"];
const TYPING_SPEED = 40;
const DELETING_SPEED = 20;
const PAUSE_DURATION = 1500;

const Introduction = () => {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTitle = TITLES[currentTitleIndex];
    const currentTitleArray = [...currentTitle];

    const handleTyping = () => {
      if (!isDeleting) {
        if (displayedText.length < currentTitleArray.length) {
          setDisplayedText((prev) => prev + currentTitleArray[prev.length]);
        } else {
          setTimeout(() => setIsDeleting(true), PAUSE_DURATION);
        }
      } else {
        if (displayedText.length > 0) {
          setDisplayedText((prev) => prev.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentTitleIndex((prev) => (prev + 1) % TITLES.length);
        }
      }
    };

    const timeout = setTimeout(
      handleTyping,
      isDeleting ? DELETING_SPEED : TYPING_SPEED,
    );

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentTitleIndex]);

  return (
    <div className="px-5 py-2 text-neutral-100">
      {/* Name */}
      <h1 className="text-3xl font-semibold">hi, im Wilson</h1>
      {/* Title */}
      <p className="mt-2 text-xl font-normal">
        aspiring {/* Typewriter animation */}
        <motion.span
          className="font-semibold text-emerald-500"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
        >
          {displayedText}
        </motion.span>
        {/* Cursor blinking animation*/}
        <motion.span
          animate={{ opacity: [0, 1] }}
          transition={{
            duration: 0.7,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          |
        </motion.span>
      </p>
    </div>
  );
};

export default Introduction;
