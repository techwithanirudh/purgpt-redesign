import Link from "next/link";
import { featureCategories } from "../../page-data";

const FeatureCategory = ({ category }) => {
  return (
    <Link
      href={featureCategories[category].link}
      title={"Go to docs for " + featureCategories[category].text.toLowerCase()}
      className={`p-2 px-3 mx-2 my-2 rounded-full text-[0.75rem] border-2 element bg-purple-200/50 dark:bg-zinc-800/50 border-opacity-0 hover:border-opacity-100 focus:border-opacity-100 transition font-mono uppercase ${featureCategories[category].color} ${featureCategories[category].border}`}
    >
      {featureCategories[category].text}
    </Link>
  );
};

export default FeatureCategory;
