import styled from 'styled-components';

export const AddParticipantBoxContainer = styled.label`
  width: 34rem;
  height: 18rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;

  border-radius: 2px;
  border: 1px dashed ${({ theme }) => theme.colors.HID_Navy[300]};

  background-color: ${({ theme }) => theme.colors.HID_Navy[50]};

  cursor: pointer;
`;

export const PlusIconContainer = styled.div`
  width: fit-content;
  height: fit-content;
  padding: 1rem;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 50%;
  border: 1.5px solid ${({ theme }) => theme.colors.HID_Navy[900]};
`;

export const AddParticipantContent = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.6rem;
`;

export const AddParticipantBoxTitle = styled.span`
  ${({ theme }) => theme.fontStyles.Caption1}
  color: ${({ theme }) => theme.colors.HID_Navy[900]};
`;
