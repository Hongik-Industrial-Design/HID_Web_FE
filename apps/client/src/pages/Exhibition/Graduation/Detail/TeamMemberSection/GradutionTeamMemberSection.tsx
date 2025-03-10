import { JSX } from 'react/jsx-runtime';
import { useEffect, useRef, useState } from 'react';
import { PanInfo, useSpring, useTransform } from 'framer-motion';
import { useRafLoop, useWindowSize } from 'react-use';

import { AuthorInfos } from '../GraduationArtwork.types';

import MemberCard from './MemberCard/GraduationMemberCard';
import { PlayPauseIcon } from '@icons/PlayPause';

import * as S from './GraduationTeamMemberSection.styled';

interface TeamMemberSectionProps {
  membersData: AuthorInfos[];
}

const animationFactor = {
  speed: 1,
  threshold: 0.014,
  dragFactor: 1.2,
};

const StudentTeamMemberSection = ({
  membersData,
}: TeamMemberSectionProps): JSX.Element => {
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [isDragging, setIsDragging] = useState<boolean>(false);

  const marquee = useRef<HTMLDivElement>(null);
  const slowDown = useRef<boolean>(false);

  const x = useRef<number>(0); // TeamMembersSection 애니메이션 계산 로직에서 사용
  const x2 = useRef<number>(0); // MemberCard 개별 컴포넌트 애니메이션 계산 로직에서 사용
  const viewportWidth = useRef<number>(window.innerWidth).current;

  const cards = useRef<HTMLDivElement>(null);
  const rect = useRef<DOMRect>(new DOMRect());

  const { width, height } = useWindowSize();
  // console.log(width, height);

  useEffect(() => {
    if (!cards.current) return;

    rect.current = cards.current.getBoundingClientRect();
  }, [width, height]);

  const handlePlayPause = () => setIsRunning((prevState) => !prevState);
  // const handlePause = () => setIsRunning(false);
  // const handlePlay = () => setIsRunning(true);

  const speed = useSpring(animationFactor.speed, {
    damping: 40,
    stiffness: 80,
    mass: 2,
  });

  const skewX = useTransform(
    speed,
    [-viewportWidth * 0.25, 0, viewportWidth * 0.25],
    [-10, 0, 10]
  );

  const onDragStart = () => {
    if (!isRunning) return;

    setIsDragging(true);
    speed.set(0);
  };

  // 사용하지 않는 이벤트 parameter 이름을 _(underscore)로 표기
  const onDrag = (_: PointerEvent, info: PanInfo) => {
    if (!isRunning) return;

    speed.set(animationFactor.dragFactor * -info.delta.x);
  };

  const onDragEnd = () => {
    if (!isRunning) return;

    setIsDragging(false);
    x.current = animationFactor.speed;
  };

  const interactiveLoop = () => {
    if (
      slowDown.current ||
      !isRunning ||
      Math.abs(x.current) < animationFactor.threshold
    )
      return;

    x.current *= 0.8;

    if (x.current < 0) {
      x.current = Math.min(x.current, 0);
    } else {
      x.current = Math.max(x.current, 0);
    }

    speed.set(animationFactor.speed + x.current);
  };

  useRafLoop(interactiveLoop, true);

  // MemberCard 개별 컴포넌트 애니메이션 계산 로직
  const setX = () => {
    if (!cards.current || !rect.current) return;

    const xPercentage = (x2.current / rect.current.width) * 100;

    if (xPercentage < -100) x2.current = 0;
    if (xPercentage > 0) x2.current = -rect.current.width;

    cards.current.style.transform = `translate3d(${xPercentage}%, 0, 0)`;
  };

  const basicLoop = () => {
    if (!isRunning) return;

    x2.current -= speed.get();
    setX();
  };

  useRafLoop(basicLoop, true);

  return (
    <S.TeamMembersSection>
      <S.TeamMemberSectionHeader>
        <S.TeamMemberSectionTitle>
          Participants<span>.</span>
        </S.TeamMemberSectionTitle>
        <S.PlayPauseButton onClick={handlePlayPause}>
          <PlayPauseIcon />
        </S.PlayPauseButton>
      </S.TeamMemberSectionHeader>

      {/* 작가 프로필 Section */}
      <S.InteractiveTeamMemberSection
        ref={marquee}
        style={{ skewX }}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        onDragStart={onDragStart}
        onDrag={onDrag}
        onDragEnd={onDragEnd}
        dragElastic={0.000001}
        $isRunning={isRunning}
        $isDragging={isDragging}
        // onMouseEnter={handlePause}
        // onMouseLeave={handlePlay}
      >
        <S.TeamMembersContainer ref={cards}>
          {membersData?.map((teamMember) => (
            <MemberCard
              key={teamMember.artistUUID}
              teamMember={teamMember}
              speed={speed}
              isRunning={isRunning}
            />
          ))}
        </S.TeamMembersContainer>
      </S.InteractiveTeamMemberSection>
    </S.TeamMembersSection>
  );
};

export default StudentTeamMemberSection;
