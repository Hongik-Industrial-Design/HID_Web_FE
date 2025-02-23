import { JSX } from 'react/jsx-runtime';

import * as S from './StudentArtworkImages.styled';

interface ArtworkImagesProps {
  detailImages: {
    detailImgUrl: string;
    position: number;
  }[];
}

const StudentArtworkImages = ({
  detailImages,
}: ArtworkImagesProps): JSX.Element => {
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

export default StudentArtworkImages;
