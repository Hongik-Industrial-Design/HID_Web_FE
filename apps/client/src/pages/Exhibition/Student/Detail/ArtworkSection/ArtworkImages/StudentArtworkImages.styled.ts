import styled from 'styled-components';

export const ArtworkImageContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  flex-shrink: 0;
`;

export const DetailImage = styled.img`
  width: 100%;

  border-radius: 2px;
  border: 1px solid ${({ theme }) => theme.colors.HID_Grayscale[200]};
`;
