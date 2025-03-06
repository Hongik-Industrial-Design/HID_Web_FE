import { JSX } from 'react/jsx-runtime';
import { useState } from 'react';

import DeleteImageButton from '@components/Button/DeleteImage/DeleteImageButton';

import * as S from './ImagePreview.styled';

interface ImagePreviewProps {
  image: string;
  handleImageDelete: () => void;
}

const ImagePreview = ({
  image,
  handleImageDelete,
}: ImagePreviewProps): JSX.Element => {
  const [isImageHovered, setIsImageHovered] = useState<boolean>(false);

  const handleImageEnter = () => setIsImageHovered(true);
  const handleImageLeave = () => setIsImageHovered(false);

  return (
    <S.ImagePreviewContainer
      onMouseEnter={handleImageEnter}
      onMouseLeave={handleImageLeave}
    >
      <S.PreviewImage src={image} $isImageHovered={isImageHovered} />
      <DeleteImageButton
        handleImageDelete={handleImageDelete}
        isImageHovered={isImageHovered}
      />
    </S.ImagePreviewContainer>
  );
};

export default ImagePreview;
