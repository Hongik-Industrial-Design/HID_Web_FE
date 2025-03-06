import styled from 'styled-components';

export const AddElementBoxContainer = styled.label`
  width: 40rem;
  height: 40rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border-radius: 2px;
  border: 1px dashed ${({ theme }) => theme.colors.HID_Navy[300]};

  background-color: ${({ theme }) => theme.colors.HID_Navy[50]};

  cursor: pointer;
`;

export const HiddenFileInput = styled.input`
  display: none;
`;

export const AddElementBox = styled.div`
  width: fit-content;
  height: fit-content;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.6rem;
`;

export const AddElementIconBox = styled.div`
  width: fit-content;
  height: fit-content;
  padding: 1rem;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 50%;
  border: 1.5px solid ${({ theme }) => theme.colors.HID_Navy[900]};
`;

export const AddElementText = styled.span`
  ${({ theme }) => theme.fontStyles.Caption1};
  color: ${({ theme }) => theme.colors.HID_Navy[900]};
`;
