import { useEffect, useState } from "react";

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
    <div className="flex justify-center items-center h-full my-4 md:-mt-10">
      <p className="text-xl md:text-3xl">
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
