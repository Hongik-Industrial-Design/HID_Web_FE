import styled from 'styled-components';

export const PostTypeBoxContainer = styled.div<{ $isNotice: boolean }>`
  width: fit-content;
  height: fit-content;
  padding: 0.4rem 1.4rem;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 2px;

  ${({ $isNotice, theme }) =>
    $isNotice ? theme.fontStyles.Body3 : theme.fontStyles.Headline2}

  color: ${({ theme }) => theme.colors.HID_Navy[900]};
  background-color: #e7eaf5;
`;
