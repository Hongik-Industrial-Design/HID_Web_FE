import { JSX } from 'react/jsx-runtime';

import { ArtworkInfos } from '../StudentArtwork.types';

import StudentArtworkImages from './ArtworkImages/StudentArtworkImages';
// import YoutubeEmbed from '@components/YoutubeEmbed/YoutubeEmbed';

import * as S from './StudentArtworkSection.styled';

interface ArtworkSectionProps {
  artworkInfos: ArtworkInfos;
}

const StudentArtworkSection = ({
  artworkInfos,
}: ArtworkSectionProps): JSX.Element => {
  // const youtubeUrl = artworkInfos.videoUrl ?? '';

  return (
    <S.ArtworkSectionContainer>
      {/* {youtubeUrl && <YoutubeEmbed youtubeUrl={youtubeUrl} />} */}
      <StudentArtworkImages detailImages={artworkInfos.detailImgs} />
    </S.ArtworkSectionContainer>
  );
};

export default StudentArtworkSection;
