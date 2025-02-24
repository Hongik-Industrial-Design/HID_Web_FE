import styled, { css } from 'styled-components';

import leftArrow from '@assets/svgs/arrows/left-arrow.svg?react';
import rightArrow from '@assets/svgs/arrows/right-arrow.svg?react';
import linkRightArrow from '@assets/svgs/arrows/link-right-arrow.svg?react';
import downArrow from '@assets/svgs/arrows/down-arrow.svg?react';

// NextPrevious & SliderNavigation 컴포넌트 내 Arrow Icon
export const LeftArrow = styled(leftArrow)<{ $isHovered: boolean }>`
  path {
    ${({ $isHovered, theme }) =>
      $isHovered &&
      css`
        fill: ${theme.colors.HID_Grayscale[0]};
        fill-opacity: 1;
      `};

    transition:
      fill 0.3s ease,
      fill-opacity 0.2s ease;
  }

  z-index: 10; // 애니메이션을 위한 포지셔닝
`;

export const RightArrow = styled(rightArrow)<{ $isHovered: boolean }>`
  path {
    ${({ $isHovered, theme }) =>
      $isHovered &&
      css`
        fill: ${theme.colors.HID_Grayscale[0]};
        fill-opacity: 1;
      `};

    transition:
      fill 0.3s ease,
      fill-opacity 0.2s ease;
  }

  z-index: 10; // 애니메이션을 위한 포지셔닝
`;

// 게시글 상세 페이지 내 첨부파일 컴포넌트 화살표 아이콘
const CommunityLeftRightArrowStyles = css`
  width: 1rem;
  height: fit-content;

  path {
    fill: ${({ theme }) => theme.colors.HID_Grayscale[0]};
  }
`;

export const CommunityLeftArrow = styled(leftArrow)`
  ${CommunityLeftRightArrowStyles}
`;

export const CommunityRightArrow = styled(rightArrow)`
  ${CommunityLeftRightArrowStyles}
`;

// SearchTab 내 KeywordSuggestion 내 LinkArrow Icon
export const LinkRightArrowIcon = styled(linkRightArrow)`
  width: 1.6rem;
  height: fit-content;
`;

// 게시글 상세 페이지 내 첨부파일 컴포넌트 화살표 아이콘
export const DownArrowIcon = styled(downArrow)<{ $isDropdownOpen: boolean }>`
  width: 1.4rem;
  height: fit-content;

  ${({ $isDropdownOpen }) =>
    $isDropdownOpen
      ? css`
          transform: rotate(180deg);
          transition: transform 0.26s ease-in-out;
        `
      : css`
          transform: rotate(0deg);
          transition: transform 0.28s ease-out;
        `}
`;
