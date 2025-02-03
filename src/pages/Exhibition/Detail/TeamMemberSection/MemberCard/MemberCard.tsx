import { JSX } from 'react/jsx-runtime';
import { useState } from 'react';

import { AuthorInfos } from '../../Artwork.types';

import * as S from './MemberCard.styled';

interface MemberCardProps {
  teamMember: AuthorInfos;
}

const MemberCard = ({ teamMember }: MemberCardProps): JSX.Element => {
  const [isEmailHovered, setIsEmailHovered] = useState<boolean>(false);

  const handleEmailHover = () => setIsEmailHovered((prevState) => !prevState);

  return (
    <S.MemberCardContainer>
      <S.ProfileImageFrame>
        <S.ProfileImage
          src={`/members/${teamMember.name}.jpg`}
          alt={teamMember.name}
        />
      </S.ProfileImageFrame>
      <S.MemberInfo>
        <S.MemberName>{teamMember.name}</S.MemberName>
        <S.Divider />
        <S.MemberMajor>{teamMember.specialty}</S.MemberMajor>
        <S.MemberEmail
          $emailHovered={isEmailHovered}
          onMouseEnter={handleEmailHover}
          onMouseLeave={handleEmailHover}
          href={`mailto: ${teamMember.email}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {teamMember.email}
        </S.MemberEmail>
      </S.MemberInfo>
    </S.MemberCardContainer>
  );
};

export default MemberCard;
