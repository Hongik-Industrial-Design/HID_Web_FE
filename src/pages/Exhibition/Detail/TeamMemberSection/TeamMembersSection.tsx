import { JSX } from 'react/jsx-runtime';

import MemberCard from './MemberCard/MemberCard';

import { TeamMembersContainer } from './TeamMemberSection.styled';
import { AuthorInfos } from '../Artwork.types';

interface TeamMemberSectionProps {
  membersData?: AuthorInfos[];
}

const TeamMembersSection = ({
  membersData,
}: TeamMemberSectionProps): JSX.Element => {
  return (
    <TeamMembersContainer>
      {membersData?.map((teamMember) => (
        <MemberCard key={teamMember.id} teamMember={teamMember} />
      ))}
    </TeamMembersContainer>
  );
};

export default TeamMembersSection;
