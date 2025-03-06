import styled from 'styled-components';
import { Link } from 'react-router';

export const AddArtworkButtonLink = styled(Link)`
  width: fit-content;
  height: fit-content;
  padding: 0.8rem 1.6rem;

  display: flex;
  align-items: center;
  gap: 0.4rem;

  border-radius: 32px;

  ${({ theme }) => theme.fontStyles.Body3}
  color: ${({ theme }) => theme.colors.HID_Grayscale[0]};
  background-color: ${({ theme }) => theme.colors.HID_Navy[900]};

  white-space: nowrap;
`;
