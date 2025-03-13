import styled from 'styled-components';

import behanceLogo from '@assets/svgs/logos/Behance.svg?react';
import linkedinLogo from '@assets/svgs/logos/Linkedin.svg?react';
import youtubeLogo from '@assets/svgs/logos/youtube.svg?react';
import instagramLogo from '@assets/svgs/logos/instagram.svg?react';

export const BehanceLogo = styled(behanceLogo)`
  width: 4rem;
  height: fit-content;
`;

export const LinkedinLogo = styled(linkedinLogo)`
  width: 4rem;
  height: fit-content;
`;

export const YoutubeLogo = styled(youtubeLogo)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 1.6rem;
  height: fit-content;
`;

export const InstagramLogo = styled(instagramLogo)`
  width: 4rem;
  height: fit-content;
`;
