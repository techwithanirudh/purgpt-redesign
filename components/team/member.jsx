const TeamMember = ({ name, description, socials, avatar }) => {
  return (
    <div className="items-center bg-gray-50 rounded-lg shadow dark:border sm:flex dark:bg-white/5 dark:border-white/10">
        <img
          className="rounded-t-lg h-full w-full sm:max-w-[25%] md:max-w-[30%] md:rounded-kg sm:rounded-l-lg"
          src={avatar}
          alt={`${name}'s Avatar`}
        />
      <div className="px-4 py-2">
        <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
          {name}
        </h3>
        <span className="text-md text-gray-500 dark:text-gray-400">{description}</span>
          <ul className="flex space-x-2 w-full mt-2">
            {socials != null &&
              socials.map((social, index) => (
                <li
                  key={index}
                  title={social.identifier + ' on ' + social.name}
                  className="rounded-md "
                >
                  <a href={social.link} className={`opacity-75 flex ${social.link != null ? 'cursor-pointer hover:opacity-100 transition' : 'cursor-default'} items-center space-x-1 px-1`}>
                    <img
                      className="w-6 h-6 dark:bg-transparent"
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
