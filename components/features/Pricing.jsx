import { donatorPlans } from "../../page-data";

const Pricing = () => {
  return (
    <div className="space-y-8 mt-8 lg:grid lg:grid-cols-2 sm:gap-6 xl:gap-10 lg:space-y-0">
      {donatorPlans.map((plan) => (
        <div
          className={`${
            plan.tier_int > 0
              ? plan.tier_int > 1
                ? plan.tier_int > 2
                  ? plan.tier_int > 3
                    ? plan.tier > 4
                      ? null
                      : "bg-gradient-to-br from-pink-500 via-pink-400 to-transparent"
                    : "bg-gradient-to-br from-indigo-500 to-fuchsia-500"
                  : "bg-gradient-to-br from-green-500 to-teal-500"
                : "bg-gradient-to-br from-red-400 to-amber-500"
              : "bg-purple-500/50 dark:bg-white/10"
          } flex flex-col p-6 mx-auto max-w-lg text-center rounded-lg xl:p-8 text-white`}
        >
          <h3 className="mb-4 text-2xl font-semibold">{plan.name}</h3>
          <div className="flex justify-center items-baseline mb-2">
            <span className="mr-2 text-5xl font-extrabold">
              {plan.cost_eur}
            </span>
          </div>
          {/* List */}
          <ul role="list" className="mb-2 space-y-4 text-left">
            {plan.benefits.map((benefit, index) => (
              <li key={index} className="flex items-center space-x-3">
                {/* Icon */}
                <svg
                  className="flex-shrink-0 w-5 h-5 text-white stroke-black/10"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Pricing;
