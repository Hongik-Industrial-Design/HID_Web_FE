import { JSX } from 'react/jsx-runtime';

import { useScrollDisable } from '@hooks/useScrollDisable';

import Loading from '../Loading';

import * as S from './FullScreenOverlayLoading.styled';

const FullScreenOverlayLoading = (): JSX.Element => {
  useScrollDisable();

  return (
    <S.FullScreenOverlayLoadingContainer>
      <Loading />
      Loading...
    </S.FullScreenOverlayLoadingContainer>
  );
};

export default FullScreenOverlayLoading;
