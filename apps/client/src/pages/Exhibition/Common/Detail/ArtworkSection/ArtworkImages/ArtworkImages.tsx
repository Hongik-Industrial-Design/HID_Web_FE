import { JSX } from 'react/jsx-runtime';

import * as S from './ArtworkImages.styled';

interface ArtworkImagesProps {
  detailImages: {
    detailImgUrl: string;
    position: number;
  }[];
}

const ArtworkImages = ({ detailImages }: ArtworkImagesProps): JSX.Element => {
  return (
    <S.ArtworkImageContainer>
      {detailImages?.map((image) => (
        <S.DetailImage
          key={image.position}
          src={image.detailImgUrl}
          alt={image.position.toString()}
        />
      ))}
    </S.ArtworkImageContainer>
  );
};

export default ArtworkImages;
