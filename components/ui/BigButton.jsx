import { useState } from "react";
import React from "react";
import { Helmet } from "react-helmet";

const BigButton = ({ children, className }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
<div className="relative">
      <div
        className={`fixed inset-0 z-[1000000] bg-black transition-opacity duration-300 ${
          isHovered ? "opacity-50 pointer-events-none" : "opacity-0 pointer-events-none"
        }`}
      />
      <button
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={
          className +
          " relative z-[1000000] transition-all duration-300 m-4 px-5 py-2 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-lg hover:shadow-lg hover:shadow-purple-500/50"
        }
      >
        {children}
      </button>
    </div>
  );
};

export default BigButton;
