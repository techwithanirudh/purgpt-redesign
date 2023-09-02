import FeatureCategory from "../special-text/FeatureCategory";

export default function Advanced() {
  return (
    <div className="relative rounded-lg -m-2 h-full min-h-[365px] flex overflow-hidden items-center justify-center">
      <div className="z-50">
        <FeatureCategory category="general" />
        <h3 className="text-4xl font-bold m-8">Advanced AIs from companies you trust</h3>
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-opacity-50 bg-purple-100 dark:bg-black/50 z-10"/>
      <img
        src="/features/🤗.png"
        className="-z-10 w-32 opacity-50 animate-ungrayscale-1 transition-all duration-300 absolute top-0 -left-6"
      />
      <img
        src="/features/bard.png"
        className="-z-10 w-28 opacity-50 rounded-md animate-ungrayscale-2 transition-all duration-300 absolute top-14 right-10"
      />
      <img
        src="/features/openai.png"
        className="-z-10 w-48 opacity-50 rounded-md animate-ungrayscale-3 transition-all duration-300 absolute top-56 left-14"
      />
    </div>
  );
}
