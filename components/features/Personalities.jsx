import FeatureCategory from "../special-text/FeatureCategory";

export default function Personalities() {
  return (
    <div className="w-full h-full flex items-center justify-center absolute top-0 left-0 bg-gradient-to-br from-teal-300 dark:from-teal-600 to-violet-500 dark:to-violet-800 animate-personalities">
      <div className="m-4 space-y-2">
        <FeatureCategory category="chatCompletions" />
        <h3 className="font-bold text-4xl">Make it your own</h3>
        <p className="mt-2">
          Use our <strong>personalities</strong> feature — made with
          professional prompts and example chats — to fit our AI with your needs
        </p>
      </div>
    </div>
  );
}
