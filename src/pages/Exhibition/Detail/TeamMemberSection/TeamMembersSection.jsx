/* eslint-disable react/prop-types */
import { TeamMembersContainer } from "./TeamMemberSection.styled";

import MemberCard from "./MemberCard/MemberCard";

const TeamMembersSection = ({ membersData }) => {
  return (
    <TeamMembersContainer>
      {membersData?.map((teamMember) => (
        <MemberCard key={teamMember.id} teamMember={teamMember} />
      ))}
    </TeamMembersContainer>
  );
};

export default TeamMembersSection;
