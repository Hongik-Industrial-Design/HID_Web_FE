// map 함수 사용해 UI 구현 시 보완해서 사용

import { JSX } from 'react/jsx-runtime';

import * as S from '../../icons/SocialIcon';

const SNSIcon = {
  Behance: S.BehanceLogo,
  Instagram: S.InstagramLogo,
};

interface SocialIconProps {
  service: keyof typeof SNSIcon;
  isHovered: boolean;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

const SocialIcon = ({ service, isHovered }: SocialIconProps): JSX.Element => {
  const SocialIconComponent = SNSIcon[`${service}`];

  if (!SocialIconComponent) return <></>;

  return <SocialIconComponent $isHovered={isHovered} />;
};

export default SocialIcon;
