import styled from 'styled-components';

export const SearchTabContainer = styled.div`
  position: fixed;
  top: 70px;
  left: 0;
  z-index: 1000;

  width: 100%;
  height: fit-content;
  padding: 3.2rem 15.8rem 4rem;

  background-color: ${({ theme }) => theme.colors.HID_Grayscale[0]};
`;

export const SearchInputContainer = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

export const SearchButton = styled.button`
  width: 4rem;
  height: 4rem;

  display: flex;
  justify-content: center;
  align-items: center;
`;
