import styled, { css } from 'styled-components';

export const BreadscrumbContainer = styled.div<{
  $facultyPage?: boolean;
  $isDetailPage?: boolean;
}>`
  display: inline-flex;
  align-items: center;
  gap: 0.8rem;

  ${({ $facultyPage, $isDetailPage }) =>
    $facultyPage || $isDetailPage
      ? css`
          position: static;
        `
      : css`
          position: absolute;
          right: 0;
          transform: translateY(-50%);
          top: -15%;
        `};

  font-size: 1.4rem;

  span {
    font-size: clamp(1.2rem, 1vw, 1.4rem);
    font-weight: 300;
    color: ${({ theme }) => theme.colors.HID_Grayscale[500]};

    white-space: nowrap;
    cursor: pointer;
  }

  .current-page {
    font-weight: 500;
    color: ${({ theme }) => theme.colors.HID_Navy[900]};

    white-space: nowrap;
  }

  @media (max-width: 1920px) {
    top: -16%;
  }

  @media (max-width: 1440px) {
    top: -15%;
  }

  @media (max-width: 1200px) {
    top: -15%;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const BreadScrumbUnit = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  .forward-arrow {
    width: 14px;
    height: 14px;
  }
`;
