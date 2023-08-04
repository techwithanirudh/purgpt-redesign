import { awesomePeople } from "../../page-data";
import TeamMember from "./member";

const Team = () => {
  return (
    <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
      <div className="max-w-screen grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
        {awesomePeople.map((person, index) => (
          <div className="max-w-screen" key={index}>
            <TeamMember
              name={person.name}
              description={person.description}
              avatar={person.avatar}
              socials={person.socials}
              pronouns={person.pronouns}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
