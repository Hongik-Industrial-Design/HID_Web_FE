import styled from 'styled-components';

export const ArtworkImageContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 0.4rem;

  flex-shrink: 0;

  @media (max-width: 768px) {
    gap: 0.2rem;
  }
`;

export const DetailImage = styled.img`
  width: 100%;

  border-radius: 2px;
  border: 1px solid ${({ theme }) => theme.colors.HID_Grayscale[200]};

  @media (max-width: 768px) {
    border-radius: 0;
    border: none;
  }
`;
