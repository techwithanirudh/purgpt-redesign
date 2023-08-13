const TeamMember = ({ name, description, socials, avatar, pronouns }) => {
  return (
    <div className={`md:flex items-center text-center sm:text-left bg-purple-100 rounded-lg shadow dark:border sm:flex dark:bg-white/5 dark:border-white/10`}>
        <img
          className="w-full sm:w-auto sm:h-32 md:h-24 md:m-2 rounded-t-lg sm:rounded-tr-none sm:rounded-l-lg md:rounded-lg"
          src={avatar}
          alt={`${name}'s Avatar`}
        />
      <div className="px-4 pl-3 py-2">
        <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
          {name}
        </h3>
        <code className="text-xs !bg-transparent text-gray-600 dark:text-gray-300">{pronouns}</code>
        <br />
        <span className="text-sm flex justify-center sm:justify-normal text-gray-500 dark:text-gray-400">{description}</span>
          <ul className="flex space-x-2 justify-center sm:justify-normal sm:inherit w-full mt-2">
            {socials != null &&
              socials.map((social, index) => (
                <li
                  key={index}
                  title={social.identifier + ' on ' + social.name}
                  className="rounded-md"
                >
                  <a href={social.link} target="_blank" className="opacity-75 flex cursor-pointer hover:opacity-100 transition items-center space-x-1 px-1">
                    <img
                      className={`w-6 h-6 md:w-4 md:h-4 dark:bg-transparent ${social.link.startsWith("https://github.com") ? ' rounded-full' : null}`}
                      src={social.icon}
                    />
                  </a>
                </li>
              ))}
          </ul>
      </div>
    </div>
  );
};

export default TeamMember;
