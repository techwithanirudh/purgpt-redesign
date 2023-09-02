import React, { useState, useEffect } from "react";
import FeatureCategory from "../special-text/FeatureCategory";

const TypingGradientGraphic = () => {
  const [typedText, setTypedText] = useState("Watercolor river in a canyon");
  const [showImages, setShowImages] = useState(true);
  const [showGradient, setShowGradient] = useState(true);
  const [showPlaceholders, setShowPlaceholders] = useState(false);
  const [animating, setAnimating] = useState(false);

  function type() {
    let currentIndex = 0;
    const textToType = "Watercolor river in a canyon";

    setShowImages(false);
    setShowGradient(false);
    setShowPlaceholders(true);
    setAnimating(true);

    const typingInterval = setInterval(() => {
      if (currentIndex === textToType.length) {
        clearInterval(typingInterval);
        setShowGradient(true);

        setTimeout(function () {
          setShowImages(true);
          setShowPlaceholders(false);
          setAnimating(false);
        }, 2000);
        return;
      }

      setTypedText(textToType.slice(0, currentIndex + 1));
      currentIndex++;
    }, 100); // Adjust typing speed as needed

    return () => {
      clearInterval(typingInterval);
    };
  }

  return (
    <div className="block lg:grid grid-cols-3 items-center">
      <div className="flex col-span-1 flex-col items-center justify-center h-full">
        <FeatureCategory category="imageGen" />
        <h3 className="text-4xl font-bold my-8 mb-10 mx-4 lg:m-0">
          Images as simple as your words
        </h3>
      </div>
      <div className="flex col-span-2 flex-col items-center">
        <div className="flex items-center space-x-2 justify-center">
          <input
            type="text"
            value={typedText}
            className={`rounded-md p-2 font-mono mb-2 text-sm w-64 text-center ${
              showGradient
                ? "bg-gradient-to-l from-indigo-500 to-pink-400 dark:to-pink-500 text-white animate-personalities"
                : "bg-purple-200 dark:bg-white/10"
            }`}
            readOnly
          />
        </div>
        <div
          className={`w-1 h-32 rounded-lg transition-all ${
            showGradient === true
              ? "transition-all bg-gradient-to-l from-indigo-500 to-pink-400 dark:to-pink-500 animate-personalities"
              : "bg-purple-200 dark:bg-white/10"
          } mb-4`}
        />
        <div
          className="grid-cols-2 gap-4 transition-all"
          style={{ display: showImages === false ? "none" : "grid" }}
        >
          <img
            src="/features/image-gen.png"
            className="rounded-lg shadow-xl w-32 h-32"
          />
          <img
            src="/features/image-gen-1.png"
            className="rounded-lg shadow-xl w-32 h-32"
          />
          <img
            src="/features/image-gen-2.png"
            className="rounded-lg shadow-xl w-32 h-32"
          />
          <img
            src="/features/image-gen-3.png"
            className="rounded-lg shadow-xl w-32 h-32"
          />
        </div>
        <div
          className="grid-cols-2 gap-4 transition"
          style={{ display: showPlaceholders === false ? "none" : "grid" }}
        >
          <div className="rounded-lg shadow-xl w-32 h-32 bg-purple-300 dark:bg-white/10 animate-pulse opacity-50" />
          <div className="rounded-lg shadow-xl w-32 h-32 bg-purple-300 dark:bg-white/10 animate-pulse opacity-100" />
          <div className="rounded-lg shadow-xl w-32 h-32 bg-purple-300 dark:bg-white/10 animate-pulse opacity-25" />
          <div className="rounded-lg shadow-xl w-32 h-32 bg-purple-300 dark:bg-white/10 animate-pulse opacity-75" />
        </div>

        <div
          onClick={() => {
            animating === false && type();
          }}
          title="Replay animation"
          className={`absolute bottom-0 right-1 md:bottom-2 md:right-4 rounded-full font-mono mb-2 text-xs ${
            animating === false
              ? "cursor-pointer text-purple-400 hover:text-purple-600 focus:text-purple-700 dark:text-purple-50 dark:hover:text-purple-400 dark:focus:text-purple-400"
              : "cursor-not-allowed text-purple-400/50 dark:text-white/25"
          } transition-all text-center`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-10 h-10"
          >
            <path
              fillRule="evenodd"
              d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm14.024-.983a1.125 1.125 0 010 1.966l-5.603 3.113A1.125 1.125 0 019 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default TypingGradientGraphic;
