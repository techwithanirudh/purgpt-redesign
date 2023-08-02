export default function Advanced() {
  return (
    <div className="relative h-full min-h-[365px] flex items-center justify-center">
      <h3 className="text-4xl font-bold m-8">AIs from companies you trust</h3>
      <img
        src="/bing.png"
        className="-z-10 w-32 opacity-50 animate-ungrayscale-1 transition-all duration-300 absolute top-0 -left-6"
      />
      <img
        src="/you.png"
        className="-z-10 w-28 opacity-50 rounded-md animate-ungrayscale-2 transition-all duration-300 absolute top-14 right-10"
      />
      <img
        src="/openai.png"
        className="-z-10 w-48 opacity-50 rounded-md animate-ungrayscale-3 transition-all duration-300 absolute top-56 left-14"
      />
      <img
        src="/bard.png"
        className="-z-10 w-48 opacity-50 rounded-md animate-ungrayscale-4 transition-all duration-300 absolute top-80 right-7"
      />
    </div>
  );
}
