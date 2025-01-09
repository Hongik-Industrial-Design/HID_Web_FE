import * as S from './ArtworkImages.styled';

const ArtworkImages = ({ detailImages, currentPage }) => {
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
