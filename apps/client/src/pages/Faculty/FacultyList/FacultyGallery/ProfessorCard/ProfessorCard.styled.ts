import styled from 'styled-components';
import { Link } from 'react-router';

export const ProfessorCardLink = styled(Link)`
  width: fit-content;
  height: fit-content;
`;

export const ProfessorContainer = styled.div`
  position: relative;

  width: fit-content;
  height: fit-content;
`;

export const ProfessorThumbnail = styled.img`
  width: clamp(32rem, 21vw, 40.4rem);
  height: fit-content;

  border-radius: 2px;
  border: 1px solid ${({ theme }) => theme.colors.HID_Grayscale[200]};

  @media (max-width: 1080px) {
    width: clamp(24rem, 30vw, 32rem);
  }
`;
