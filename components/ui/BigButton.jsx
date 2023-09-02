import Link from "next/link";
import { useState } from "react";
import React from "react";

const BigButton = ({ children, className, link }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link href={link} className="relative">
      <div
        className={`fixed inset-0 z-[9] bg-black transition-opacity duration-300 ${
          isHovered
            ? "opacity-50 pointer-events-none"
            : "opacity-0 pointer-events-none"
        }`}
      />
      <button
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={
          `${className ? className : ''} text-white relative z-10 transition-all duration-300 m-4 px-5 py-2 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-lg hover:shadow-lg hover:shadow-purple-500/50`
        }
      >
        {children}
      </button>
    </Link>
  );
};

export default BigButton;
