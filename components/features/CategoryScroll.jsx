import { featureCategories } from "../../page-data";
import { useRef, useState } from "react";
import FeatureCategory from "../special-text/FeatureCategory";

const CategoryScroll = () => {
  const [shiftAmount, setShiftAmount] = useState(0);
  const container = useRef(null);
  const [startX, setStartX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const handleArrowClick = (direction) => {
    const maxShift = container.current.offsetWidth / 2 - 100;

    if (direction === "left") {
      if (shiftAmount + 100 <= maxShift) {
        setShiftAmount((prevAmount) => prevAmount + 100);
      }
    } else if (direction === "right") {
      if (shiftAmount - 100 >= -maxShift) {
        setShiftAmount((prevAmount) => prevAmount - 100);
      }
    }
  };

  return (
    <div className="relative w-[95vw] flex justify-center h-32 mt-10 -m-10 bg-white dark:bg-[rgba(17,17,17)] overflow-hidden">
      <div
        className="w-full h-full m-8 flex justify-center transition-all duration-300 pt-4 px-10"
        ref={container}
        style={{ transform: `translateX(${shiftAmount}px)` }}
      >
        <div className="whitespace-nowrap flex justify-center">
          {Object.keys(featureCategories).map((category, index) => (
            <span key={index}>
              {category != "general" && <FeatureCategory category={category} />}
            </span>
          ))}
        </div>
      </div>
      <div className="absolute left-1 top-0 w-1/6 h-full bg-gradient-to-r from-white dark:from-[rgba(17,17,17)] to-transparent"></div>
      <div className="absolute right-0 top-0 w-1/6 h-full bg-gradient-to-r from-transparent to-white dark:to-[rgba(17,17,17)]"></div>

      <button
        className={`absolute hidden md:block lg:hidden top-[50%] mt-4 left-8 [transform:translateY(-100%)] rounded-full p-2 transition ${
          "left" === true ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
        }`}
        onClick={() => handleArrowClick("left")}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </button>
      <button
        className={`absolute hidden md:block lg:hidden top-[50%] mt-4 [transform:translateY(-100%)] rounded-full p-2 transition right-8 ${
          "right" === true ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
        }`}
        onClick={() => handleArrowClick("right")}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>
    </div>
  );
};

export default CategoryScroll;
