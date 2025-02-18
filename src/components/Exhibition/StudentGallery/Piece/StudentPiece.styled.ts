import styled from 'styled-components';
import { Link } from 'react-router';
import { motion } from 'framer-motion';

export const PieceContainer = styled(motion.li)`
  width: fit-content;
  height: fit-content;
`;

export const PieceLink = styled(Link)`
  width: fit-content;
  height: fit-content;

  display: block;

  position: relative;

  border-radius: 2px;
  border: 1px solid ${({ theme }) => theme.colors.HID_Grayscale[200]};
`;

export const PieceImage = styled.img`
  width: 38.5rem;
  height: fit-content;

  border-radius: 2px;

  overflow: hidden;
`;
