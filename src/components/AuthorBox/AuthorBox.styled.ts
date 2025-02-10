import styled from 'styled-components';

export const AuthorBoxContainer = styled.div`
  width: fit-content;
  height: fit-content;
  padding: 0.4rem 1.6rem;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 2px;

  background-color: #e7eaf5;
  color: ${({ theme }) => theme.colors.HID_Navy[900]};
`;
