import { JSX } from 'react/jsx-runtime';

import { MediaInfos } from '../Artwork.types';

import ArtworkImages from '@pages/Exhibition/Detail/ArtworkSection/ArtworkImages/ArtworkImages';
import VideoPlayer from '@pages/Exhibition/Detail/ArtworkSection/VideoPlayer/VideoPlayer';

import * as S from './ArtworkSection.styled';

interface ArtworkSectionProps {
  fetchedData?: MediaInfos;
  currentPage: number;
}

const ArtworkSection = ({
  fetchedData,
  currentPage,
}: ArtworkSectionProps): JSX.Element => {
  return (
    <S.ArtworkSectionContainer>
      <VideoPlayer
        videoData={fetchedData?.videos || []}
        currentPage={currentPage}
      />
      <ArtworkImages
        detailImages={fetchedData?.images || []}
        currentPage={currentPage}
      />
    </S.ArtworkSectionContainer>
  );
};

export default ArtworkSection;
