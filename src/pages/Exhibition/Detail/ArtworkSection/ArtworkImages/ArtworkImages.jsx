/* eslint-disable react/prop-types */
import { ArtworkImageContainer, DetailImage } from "./ArtworkImages.styled";

const ArtworkImages = ({ detailImages, currentPage }) => {
  return (
    <ArtworkImageContainer>
      {detailImages.map((image) => (
        <DetailImage
          key={image.id}
          src={`/Graduation-Exhibition/${currentPage}/${image?.url}`}
          alt={image.caption}
        />
      ))}
    </ArtworkImageContainer>
  );
};

export default ArtworkImages;
