import styled, { css } from 'styled-components';
import { Link } from 'react-router';

import leftArrow from '@assets/svgs/arrows/left-arrow_full.svg?react';

export const GoToListLink = styled(Link)``;

export const GoToListButton = styled.button`
  position: relative;

  width: fit-content;
  height: fit-content;
  padding: 0.8rem 1.6rem;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.4rem;

  border-radius: 100px;
  background-color: rgba(210, 210, 215, 0.64);

  transition:
    background-color 0.4s,
    transform 0.15s;

  &:hover {
    background-color: transparent;
  }

  &:active {
    transform: translateY(3px);
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #7488c8;
    border-radius: 100px;
    transform: translateX(20px) scale(0.1);
    opacity: 0;
    z-index: -1;
    transition:
      transform 0.3s,
      opacity 0.3s,
      background-color 0.3s;
  }

  &:hover::after {
    opacity: 1;
    transform: scale(1);
  }

  &:active::after {
    background-color: ${({ theme }) => theme.colors.HID_Navy[900]};
  }

  @media (max-width: 768px) {
    padding: clamp(0.6rem, 1.6vw, 0.8rem) clamp(1.2rem, 3.2vw, 1.6rem);
  }

  @media (max-width: 480px) {
    padding: clamp(0.6rem, 1.6vw, 0.8rem) 1.4rem;
  }
`;

export const GoToListText = styled.span<{ $isHovered: boolean }>`
  color: ${({ $isHovered, theme }) =>
    $isHovered ? `${theme.colors.HID_Grayscale[0]}` : '#0000008F'};

  transition: color 0.4s;

  ${({ theme }) => theme.fontStyles.Headline2}
  font-weight: 600;

  white-space: nowrap;

  @media (max-width: 768px) {
    font-size: clamp(1rem, 1.6vw, 1.2rem);
  }
`;

export const LeftArrowIcon = styled(leftArrow)<{ $isHovered: boolean }>`
  width: clamp(1rem, 0.7vw, 1.4rem);
  height: fit-content;

  path {
    ${({ $isHovered }) =>
      $isHovered &&
      css`
        fill: ${({ theme }) => theme.colors.HID_Grayscale[0]};
        fill-opacity: 1;
      `};

    transition:
      fill 0.3s ease,
      fill-opacity 0.3s ease;
  }

  @media (max-width: 768px) {
    width: clamp(1rem, 1.6vw, 1.2rem);
  }
`;
