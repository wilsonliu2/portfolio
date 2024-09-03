import React from "react";

const TechButton = ({ color, label }) => {
  return (
    <div className="flex items-center rounded-full px-3 py-1.5">
      <span
        className="mr-2 inline-block h-2.5 w-2.5 rounded-full"
        style={{ backgroundColor: color }}
      ></span>
      <span className="text-sm text-neutral-100">{label}</span>
    </div>
  );
};

export default TechButton;
