import styled from 'styled-components';

export const ExhibitionDetailWrapper = styled.div`
  width: 100%;
  height: fit-content;
  margin-top: 7rem;
`;

export const ExhibitionDetailContainer = styled.section`
  width: 100%;
  height: fit-content;
  padding: 0 15.8rem 12rem 15.8rem;
`;

export const WhiteSpace = styled.div`
  width: 100%;
  height: 3.6rem;

  background-color: ${({ theme }) => theme.colors.HID_Grayscale[0]};
`;
