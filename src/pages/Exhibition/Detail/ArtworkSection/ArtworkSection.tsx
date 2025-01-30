import { JSX } from 'react/jsx-runtime';

import ArtworkImages from '@pages/Exhibition/Detail/ArtworkSection/ArtworkImages/ArtworkImages';
import VideoPlayer from '@pages/Exhibition/Detail/ArtworkSection/VideoPlayer/VideoPlayer';

import { ArtworkSectionContainer } from './ArtworkSection.styled';

const ArtworkSection = ({ fetchedData, currentPage }): JSX.Element => {
  return (
    <ArtworkSectionContainer>
      <VideoPlayer
        videoData={fetchedData?.videos || []}
        currentPage={currentPage}
      />
      <ArtworkImages
        detailImages={fetchedData?.images || []}
        currentPage={currentPage}
      />
    </ArtworkSectionContainer>
  );
};

export default ArtworkSection;
