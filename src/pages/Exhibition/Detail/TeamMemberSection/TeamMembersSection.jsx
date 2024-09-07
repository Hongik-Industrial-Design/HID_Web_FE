import { useEffect, useState } from "react";
import axios from "axios";

import MemberCard from "./MemberCard/MemberCard";
import { TeamMembersContainer } from "./TeamMemberSection.styled";

const TeamMembersSection = () => {
  const [teamMembers, setTeamMembers] = useState(null);

  useEffect(() => {
    axios
      .get("/data/artwork.json")
      .then((response) => {
        setTeamMembers(response.data);
        console.log(response.data.author);
      })
      .catch((error) => console.log("Error fetching local JSON: ", error));
  }, []);

  return (
    <TeamMembersContainer>
      {teamMembers?.author?.map((teamMember) => (
        <MemberCard key={teamMember.id} teamMember={teamMember} />
      ))}
    </TeamMembersContainer>
  );
};

export default TeamMembersSection;
