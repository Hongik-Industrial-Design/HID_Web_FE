import { JSX } from 'react/jsx-runtime';

import { ExhibitionDetail } from '@schemas/exhibition';

import ArtworkImages from './ArtworkImages/ArtworkImages';
// import YoutubeEmbed from '@components/YoutubeEmbed/YoutubeEmbed';

import * as S from './ArtworkSection.styled';

interface ArtworkSectionProps {
  artworkInfos: ExhibitionDetail;
}

const ArtworkSection = ({ artworkInfos }: ArtworkSectionProps): JSX.Element => {
  // const youtubeUrl = artworkInfos.videoUrl ?? '';

  return (
    <S.ArtworkSectionContainer>
      {/* {youtubeUrl && <YoutubeEmbed youtubeUrl={youtubeUrl} />} */}
      <ArtworkImages detailImages={artworkInfos.detailImgs} />
    </S.ArtworkSectionContainer>
  );
};

export default ArtworkSection;
