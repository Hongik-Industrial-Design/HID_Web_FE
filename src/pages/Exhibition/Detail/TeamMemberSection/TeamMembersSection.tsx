import { JSX } from 'react/jsx-runtime';

import MemberCard from './MemberCard/MemberCard';

import * as S from './TeamMemberSection.styled';
import { AuthorInfos } from '../Artwork.types';

interface TeamMemberSectionProps {
  membersData?: AuthorInfos[];
}

const TeamMembersSection = ({
  membersData,
}: TeamMemberSectionProps): JSX.Element => {
  return (
    <S.TeamMembersSection>
      <S.Title>
        Participants<span>.</span>
      </S.Title>
      <S.TeamMembersContainer>
        {membersData?.map((teamMember) => (
          <MemberCard key={teamMember.id} teamMember={teamMember} />
        ))}
      </S.TeamMembersContainer>
    </S.TeamMembersSection>
  );
};

export default TeamMembersSection;
