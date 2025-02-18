import { JSX } from 'react/jsx-runtime';

import { ArtworkInfos } from '../Artwork.types';

// import StudentVideoPlayer from './VideoPlayer/StudentVideoPlayer';
import StudentArtworkImages from './ArtworkImages/StudentArtworkImages';

import * as S from './StudentArtworkSection.styled';

interface ArtworkSectionProps {
  artworkInfos: ArtworkInfos;
}

const StudentArtworkSection = ({
  artworkInfos,
}: ArtworkSectionProps): JSX.Element => {
  return (
    <S.ArtworkSectionContainer>
      {/* <StudentVideoPlayer
        videoData={artworkInfos?.videos || []}
        currentPage={currentPage}
      /> */}
      <StudentArtworkImages detailImages={artworkInfos.detailImgs} />
    </S.ArtworkSectionContainer>
  );
};

export default StudentArtworkSection;
