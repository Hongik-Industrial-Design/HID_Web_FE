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

export const SearchForm = styled.form`
  width: 100%;
  height: fit-content;

  display: flex;
  align-items: center;
  gap: 1.6rem;
`;

export const SearchButton = styled.button`
  width: 4rem;
  height: 4rem;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SearchInput = styled.input`
  flex-grow: 1;

  width: 100%;
  height: fit-content;
  padding: 0;

  border: none;
  outline: none;

  ${({ theme }) => theme.fontStyles.Header2_Search};
  color: ${({ theme }) => theme.colors.HID_Grayscale[900]};
`;

export const KeywordSuggestionContainer = styled.div`
  width: 100%;
  height: fit-content;
  margin-top: 4.4rem;

  display: flex;
  align-items: center;
  gap: 1.2rem;
`;

export const LinkArrowBox = styled.div`
  width: 2.4rem;
  height: 2.4rem;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const KeywordList = styled.ul`
  flex-grow: 1;

  width: 100%;
  height: fit-content;

  display: flex;
  align-items: center;
  gap: 1.2rem;
`;

export const KeywordItem = styled.li`
  width: fit-content;
  height: fit-content;
`;

export const KeywordLink = styled.a`
  width: fit-content;
  height: fit-content;
`;
