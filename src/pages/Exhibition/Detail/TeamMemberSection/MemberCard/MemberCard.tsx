import { JSX } from 'react/jsx-runtime';
import { useRef, useState } from 'react';
import { MotionValue } from 'framer-motion';
import { useRafLoop } from 'react-use';

import { AuthorInfos } from '../../Artwork.types';

import * as S from './MemberCard.styled';

interface MemberCardProps {
  teamMember: AuthorInfos;
  speed: MotionValue<number>;
  isRunning: boolean;
}

const MemberCard = ({
  teamMember,
  speed,
  isRunning,
}: MemberCardProps): JSX.Element => {
  const [isEmailHovered, setIsEmailHovered] = useState<boolean>(false);

  const item = useRef<HTMLDivElement>(null);
  const rect = useRef<DOMRect>(new DOMRect());
  const x = useRef<number>(0);

  const handleEmailHover = () => setIsEmailHovered((prevState) => !prevState);

  const setX = () => {
    if (!item.current || !rect.current) return;

    const xPercentage = (x.current / rect.current.width) * 100;

    if (xPercentage < -100) x.current = 0;
    if (xPercentage > 0) x.current = -rect.current.width;

    item.current.style.transform = `translate(${xPercentage}%, 0)`;
  };

  const playLoop = () => {
    if (!isRunning) return;

    x.current -= speed.get();
    setX();
  };

  useRafLoop(playLoop, true);

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
