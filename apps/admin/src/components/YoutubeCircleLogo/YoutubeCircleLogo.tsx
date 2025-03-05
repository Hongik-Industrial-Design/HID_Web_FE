import { JSX } from 'react/jsx-runtime';

import { YoutubeLogo } from '@icons/SocialLogo';

import * as S from './YoutubeCircleLogo.styled';

const YoutubeCircleLogo = (): JSX.Element => {
  return (
    <S.YoutubeCircleLogoContainer>
      <YoutubeLogo />
    </S.YoutubeCircleLogoContainer>
  );
};

export default YoutubeCircleLogo;
