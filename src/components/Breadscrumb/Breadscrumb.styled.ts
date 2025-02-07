import styled from 'styled-components';

export const BreadscrumbContainer = styled.div<{ $facultyPage?: boolean }>`
  display: inline-flex;
  align-items: center;
  gap: 8px;

  position: absolute;
  position: ${({ $facultyPage }) => $facultyPage && 'static'};
  top: -28%;
  right: 0; // HeroSection content 오른쪽 끝이랑 일치하게끔!
  transform: translateY(-50%);

  font-style: normal;
  font-size: 14px;
  line-height: 14px;

  span {
    font-weight: 300;
    color: ${({ theme }) => theme.colors.HID_Grayscale[500]};
  }

  .current-page {
    font-weight: 500;
    color: ${({ theme }) => theme.colors.HID_Navy[900]};
  }
`;

export const BreadScrumbUnit = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  span {
    font-style: normal;
    font-size: 14px;
    font-weight: 300;
    line-height: 14px;

    color: ${({ theme }) => theme.colors.HID_Grayscale[500]};

    white-space: nowrap;
    cursor: pointer;
  }

  .forward-arrow {
    width: 14px;
    height: 14px;
  }
`;
