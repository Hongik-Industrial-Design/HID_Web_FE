import styled from 'styled-components';

import plusIcon from '@assets/svgs/plus.svg?react';
import plusIconNavy from '@assets/svgs/plus-navy.svg?react';

export const PlusIcon = styled(plusIcon)`
  width: 2rem;
  height: fit-content;
`;

export const PlusIconNavy = styled(plusIconNavy)`
  width: 2rem;
  height: fit-content;

  path {
    fill: ${({ theme }) => theme.colors.HID_Navy[900]};
  }
`;

export const PlusIconGray = styled(plusIconNavy)`
  width: 1.6rem;
  height: fit-content;

  path {
    fill: ${({ theme }) => theme.colors.HID_Grayscale[500]};
  }
`;
