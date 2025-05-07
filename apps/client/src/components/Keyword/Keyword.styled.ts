import styled from 'styled-components';

export const KeywordBox = styled.div`
  width: fit-content;
  height: fit-content;
  padding: 0.4rem 1.2rem;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 2px;

  ${({ theme }) => theme.fontStyles.Body3};
  color: ${({ theme }) => theme.colors.HID_Navy[900]};
  background-color: ${({ theme }) => theme.colors.HID_Navy[50]};

  white-space: nowrap;

  @media (max-width: 1200px) {
    font-size: clamp(1rem, 1vw, 1.2rem);
  }

  @media (max-width: 768px) {
    font-size: clamp(1rem, 2.8vw, 1.2rem);
  }
`;
