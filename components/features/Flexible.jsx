import React, { useState, useEffect } from "react";

export default function Flexible() {
  return (
    <div className="flex justify-center items-center h-full -mt-10">
      <p className="text-3xl">
        "Be {" "}
        <span className="scrolling-words-container bg-white/10 px-4 -mb-2 rounded-md inline-block relative overflow-hidden">
          <span className="inline-block text-left animate-scrolling-words">
            a fun coder <br />
            a mathematician <br />
            a nerdy flautist <br />
            an adventurer <br />
            commanding <br />
          </span>
        </span>
        "
      </p>
    </div>
  );
}
