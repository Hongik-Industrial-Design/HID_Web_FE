import { JSX } from 'react/jsx-runtime';

import * as S from './ArtworkImages.styled';

const ArtworkImages = ({ detailImages, currentPage }): JSX.Element => {
  return (
    <S.ArtworkImageContainer>
      {detailImages.map((image) => (
        <S.DetailImage
          key={image.id}
          src={`/Graduation-Exhibition/${currentPage}/${image?.url}`}
          alt={image.caption}
        />
      ))}
    </S.ArtworkImageContainer>
  );
};

export default ArtworkImages;
