import { awesomePeople } from "../../page-data";
import TeamMember from "./member";
import { motion } from "framer-motion";
import { framerAnimations } from "../../page-data";

const Team = () => {
  return (
    <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
      <motion.div
        className="max-w-screen grid gap-8 mb-6 lg:mb-16 md:grid-cols-2"
        variants={framerAnimations.theTeam.container}
        initial="hidden"
        animate="visible"
      >
        {awesomePeople.map((person, index) => (
          <motion.div variants={framerAnimations.theTeam.item} className="max-w-screen" key={index}>
            <TeamMember
              name={person.name}
              description={person.description}
              avatar={person.avatar}
              socials={person.socials}
              pronouns={person.pronouns}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Team;
