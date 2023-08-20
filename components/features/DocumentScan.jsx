import FeatureCategory from "../special-text/FeatureCategory";

function DocumentScan() {
  return (
    <div className="mt-4">
      <FeatureCategory category="documentAnalysis" />
      <h3 className="text-4xl font-bold lg:mx-4 my-4 lg:my-8 md:leading-3">Scan files</h3>
      <p className="my-4">to extract and understand text</p>
      <div className="group w-full font-mono bg-black/10 dark:bg-white/10 rounded-lg">
        <div className="flex p-4 text-sm m-auto">
          <div className="flex-shrink-0 flex flex-col relative items-end">
            <div className="relative flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-10 h-10"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-5.5-2.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zM10 12a5.99 5.99 0 00-4.793 2.39A6.483 6.483 0 0010 16.5a6.483 6.483 0 004.793-2.11A5.99 5.99 0 0010 12z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
          <div className="relative flex flex-col">
            <div className="flex flex-grow flex-col">
              <p className="text-left text-gray-500 dark:text-white/50 ml-2">
                USER
              </p>
              <div className="ml-2 flex flex-col items-start gap-3 overflow-x-auto text-left whitespace-pre-wrap break-words">
                What is the first step?
                <img
                  className="w-[150px] m-0 md:m-2 ml-0 rounded-lg"
                  src="https://online.visual-paradigm.com/repository/images/4367fbb4-b023-4e4f-b910-8db451358a3b/recipe-cards-design/simple-pancake-recipe-card.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
      <div className="mt-2 group w-full text-white bg-fuchsia-500 rounded-lg">
        <div className="flex p-4 text-sm m-auto">
          <div className="flex-shrink-0 flex flex-col relative items-end">
            <div className="relative flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-8 h-8 rounded-full bg-white p-1"
              >
                <path
                  className="fill-fuchsia-500"
                  d="M15.98 1.804a1 1 0 00-1.96 0l-.24 1.192a1 1 0 01-.784.785l-1.192.238a1 1 0 000 1.962l1.192.238a1 1 0 01.785.785l.238 1.192a1 1 0 001.962 0l.238-1.192a1 1 0 01.785-.785l1.192-.238a1 1 0 000-1.962l-1.192-.238a1 1 0 01-.785-.785l-.238-1.192zM6.949 5.684a1 1 0 00-1.898 0l-.683 2.051a1 1 0 01-.633.633l-2.051.683a1 1 0 000 1.898l2.051.684a1 1 0 01.633.632l.683 2.051a1 1 0 001.898 0l.683-2.051a1 1 0 01.633-.633l2.051-.683a1 1 0 000-1.898l-2.051-.683a1 1 0 01-.633-.633L6.95 5.684zM13.949 13.684a1 1 0 00-1.898 0l-.184.551a1 1 0 01-.632.633l-.551.183a1 1 0 000 1.898l.551.183a1 1 0 01.633.633l.183.551a1 1 0 001.898 0l.184-.551a1 1 0 01.632-.633l.551-.183a1 1 0 000-1.898l-.551-.184a1 1 0 01-.633-.632l-.183-.551z"
                />
              </svg>
            </div>
          </div>
          <div className="relative flex flex-col gap-1 md:gap-3">
            <div className="flex flex-grow flex-col">
              <span className="text-left font-bold ml-2 min-w-full">
                PURGPT AI
              </span>
              <div className="ml-2 flex flex-col items-start gap-3 overflow-x-auto text-left whitespace-pre-wrap break-words">
                Sift the dry ingredients in a bowl.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DocumentScan;
