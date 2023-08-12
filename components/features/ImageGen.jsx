import React, { useState, useEffect } from "react";
import FeatureCategory from "../special-text/FeatureCategory";

const TypingGradientGraphic = () => {
  const [typedText, setTypedText] = useState("");
  const [showImages, setShowImages] = useState(false);
  const [showGradient, setShowGradient] = useState(false);
  const [showPlaceholders, setShowPlaceholders] = useState(true);
  const [animating, setAnimating] = useState(true);

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

  useEffect(() => {
    type();
  }, []);

  return (
    <div className="block lg:grid grid-cols-3 h-full items-center">
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
          className={`absolute bottom-0 right-1 md:bottom-2 md:right-4 rounded-md p-2 font-mono mb-2 text-xs bg-purple-200 dark:bg-zinc-800 ${
            animating === false
              ? "cursor-pointer hover:bg-purple-300 dark:hover:bg-zinc-700"
              : "cursor-not-allowed bg-purple-200 text-black/50 dark:bg-zinc-800 dark:text-white/25"
          } transition text-center`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default TypingGradientGraphic;
