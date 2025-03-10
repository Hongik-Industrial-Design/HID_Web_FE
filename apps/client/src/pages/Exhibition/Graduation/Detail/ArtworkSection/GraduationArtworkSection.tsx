import { JSX } from 'react/jsx-runtime';

import { ExhibitionDetail } from '@schemas/exhibition';

import GraduationArtworkImages from './ArtworkImages/GraduationArtworkImages';
// import YoutubeEmbed from '@components/YoutubeEmbed/YoutubeEmbed';

import * as S from './GraduationArtworkSection.styled';

interface ArtworkSectionProps {
  artworkInfos: ExhibitionDetail;
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
