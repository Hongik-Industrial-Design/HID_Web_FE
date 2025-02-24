import styled from 'styled-components';
import { Link } from 'react-router';

export const ViewDetailLink = styled(Link)`
  width: fit-content;
  height: fit-content;
  padding: 0.8rem;
  margin-right: 1.6rem;

  ${({ theme }) => theme.fontStyles.Body3}
  color: ${({ theme }) => theme.colors.HID_Grayscale[500]};
`;
