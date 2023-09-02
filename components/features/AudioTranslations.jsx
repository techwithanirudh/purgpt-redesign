import FeatureCategory from "../special-text/FeatureCategory.jsx";
import { FileTree } from "../things-from-nextra-that-arent-importing-nicely/FileTree.tsx";

export default function AudioTranslations() {
  return (
    <div>
      <div className="mb-6 mt-2">
        <FeatureCategory category="audioTranslations" />
        <h3 className="text-4xl font-bold lg:mx-4 my-6">
          French lecture? Make it english.
        </h3>
        <p className="mt-2">
          Translate audio files into english text, just like that.
        </p>
      </div>
      <div className="">
        <FileTree>
          <FileTree.File name="classe-française.mp3" />
          <FileTree.File name="ਫ੍ਰੈਂਚ-ਕਲਾਸ.mp3" />
          <FileTree.File name="fransk-klasse.mp3" />
        </FileTree>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-10 h-10 inline-flex justify-center mt-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 17.25L12 21m0 0l-3.75-3.75M12 21V3"
          />
        </svg>

        <FileTree className="bg-gradient-to-l from-indigo-400 dark:from-indigo-500 to-pink-400 text-white dark:to-pink-500 animate-personalities">
          <FileTree.File name="french-class.txt" />
        </FileTree>
      </div>
    </div>
  );
}
