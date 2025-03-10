import { JSX } from 'react/jsx-runtime';

import { ArtworkInfos } from '../GraduationArtwork.types';

import GraduationArtworkImages from './ArtworkImages/GraduationArtworkImages';
// import YoutubeEmbed from '@components/YoutubeEmbed/YoutubeEmbed';

import * as S from './GraduationArtworkSection.styled';

interface ArtworkSectionProps {
  artworkInfos: ArtworkInfos;
}

const GraduationArtworkSection = ({
  artworkInfos,
}: ArtworkSectionProps): JSX.Element => {
  // const youtubeUrl = artworkInfos.videoUrl ?? '';

  return (
    <S.ArtworkSectionContainer>
      {/* {youtubeUrl && <YoutubeEmbed youtubeUrl={youtubeUrl} />} */}
      <GraduationArtworkImages detailImages={artworkInfos.detailImgs} />
    </S.ArtworkSectionContainer>
  );
};

export default GraduationArtworkSection;
