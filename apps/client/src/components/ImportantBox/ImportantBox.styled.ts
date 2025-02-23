import styled from 'styled-components';

export const ImportantBoxContainer = styled.div`
  width: fit-content;
  height: fit-content;
  padding: 0.4rem;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 2px;

  ${({ theme }) => theme.fontStyles.Body3_KO}
  font-weight: 500;

  color: ${({ theme }) => theme.colors.HID_Grayscale[800]};
  background-color: #ffe7e6;
`;

export const AlarmIconBox = styled.div`
  width: 2.4rem;
  height: 2.4rem;

  display: flex;
  justify-content: center;
  align-items: center;
`;
