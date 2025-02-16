import styled, { css } from 'styled-components';

import leftArrow from '@assets/svgs/arrows/left-arrow.svg?react';
import rightArrow from '@assets/svgs/arrows/right-arrow.svg?react';

export const ButtonContainer = styled.div<{ $isCommunity?: boolean }>`
  width: fit-content;
  height: fit-content;

  display: flex;
  align-items: center;
  gap: 2.4rem;

  ${({ $isCommunity }) =>
    $isCommunity &&
    css`
      width: 100%;
      justify-content: space-between;
    `};
`;

const BaseArrowButton = styled.button`
  width: 4rem;
  height: 4rem;
  padding: 2rem;

  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 36px;

  background: rgba(210, 210, 215, 0.64);

  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    z-index: 5;
    width: 100%;
    height: 100%;
    transition:
      margin-left 0.2s ease,
      box-shadow 0.25s ease;
  }

  &:disabled {
    opacity: 0.42;
    cursor: not-allowed;
    pointer-events: none;
    transform: none;
  }
`;

export const LeftArrowButton = styled(BaseArrowButton)`
  &::before {
    margin-left: 100%;
    box-shadow: inset 0 40px 0 0 #7488c8;
  }

  &:hover::before {
    margin-left: 0;
  }

  &:active::before {
    box-shadow: inset 0 40px 0 0 ${({ theme }) => theme.colors.HID_Navy[900]};
  }
`;

export const RightArrowButton = styled(BaseArrowButton)`
  &::before {
    margin-left: -100%;
    box-shadow: inset 0 0 0 40px #7488c8;
  }

  &:hover::before {
    margin-left: 0;
  }

  &:active::before {
    box-shadow: inset 0 40px 0 0 ${({ theme }) => theme.colors.HID_Navy[900]};
  }
`;

export const StyledLeftArrow = styled(leftArrow)<{ $isHovered: boolean }>`
  path {
    fill: ${({ $isHovered, theme }) =>
      $isHovered ? theme.colors.HID_Grayscale[0] : '#0000008f'};

    transition: fill 0.3s ease;
  }
  z-index: 10;
`;

export const StyledRightArrow = styled(rightArrow)<{ $isHovered: boolean }>`
  path {
    fill: ${({ $isHovered, theme }) =>
      $isHovered ? theme.colors.HID_Grayscale[0] : '#0000008f'};

    transition: fill 0.3s ease;
  }
  z-index: 10;
`;
