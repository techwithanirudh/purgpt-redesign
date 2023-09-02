import { useEffect, useState } from "react";
import FeatureCategory from "../special-text/FeatureCategory";

export default function Flexible() {
  const wordList = [
    "a fun coder",
    "a mathematician",
    "a nerdy flautist",
    "an adventurer",
  ];

  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const wordLoopInterval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % wordList.length);
    }, 1000);

    return () => clearInterval(wordLoopInterval);
  }, []);

  const currentWord = wordList[currentWordIndex];

  return (
  
      <div className="lg:flex md:justify-between items-center px-4 h-full">
        <div className="mt-8 lg:mt-0">
          <p className="mb-4 block sm:inline-block">
            <FeatureCategory category="chatCompletions" />
            </p>
            <p className="mb-4 block sm:inline-block">
            <FeatureCategory category="completions" /></p>
            <FeatureCategory category="imageGen" />
          <h3 className="text-4xl mt-4 font-bold mb-8">Incredibly flexible usage</h3>
        </div>
        <p className="text-xl opacity-50 my-8 lg:my-0 md:text-3xl">
          "Be{" "}
          <span className="scrolling-words-container bg-purple-700/50 dark:bg-white/10 px-4 -mb-2 rounded-md inline-block relative overflow-hidden">
            <span className="inline-block text-left text-white ease-in-out animate-scrolling-words w-[160px] md:w-[250px]">
              {currentWord}
            </span>
          </span>
          "
        </p>
      </div>
  );
}
