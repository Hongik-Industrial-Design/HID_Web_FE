import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

export const TeamMembersSection = styled.div`
  width: 100%;
  height: fit-content;
  padding: 8.8rem 15.8rem 9.9rem 15.8rem;

  display: flex;
  flex-direction: column;
  gap: 8rem;
`;

export const TeamMemberSectionHeader = styled(motion.section)`
  width: 100%;
  height: fit-content;

  display: flex;
  align-items: center;
  gap: 3.6rem;
`;

export const Title = styled.h1`
  ${({ theme }) => theme.fontStyles.Header1};
  color: ${({ theme }) => theme.colors.HID_Grayscale[800]};

  span {
    color: ${({ theme }) => theme.colors.HID_YellowDot};
  }
`;

export const PlayPauseButton = styled.button`
  width: fit-content;
  height: fit-content;

  display: flex;

  &:active {
    transform: scale(0.95) translateY(1px);
  }

  transition: transform 0.1s ease-out;
`;

export const InteractiveTeamMemberSection = styled(motion.div)<{
  $isRunning: boolean;
  $isDragging: boolean;
}>`
  width: 100%;
  height: fit-content;

  display: flex;
  align-items: center;

  overflow-x: hidden;

  cursor: grab;
  cursor: -webkit-grab;

  cursor: ${({ $isRunning }) => !$isRunning && 'default'};
  ${({ $isDragging }) =>
    $isDragging &&
    css`
      cursor: -webkit-grabbing;
      cursor: grabbing;
    `}
`;

export const TeamMembersContainer = styled.section`
  width: 100%;

  display: flex;
  align-items: center;
  gap: 8.8rem;
`;
