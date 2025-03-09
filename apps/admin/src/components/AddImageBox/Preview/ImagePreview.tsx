import { JSX } from 'react/jsx-runtime';
import { useState } from 'react';

import DeleteImageButton from '@components/Button/DeleteImage/DeleteImageButton';
import ThumbnailSelect from '@components/ThumbnailSelect/ThumbnailSelect';

import * as S from './ImagePreview.styled';

interface ImagePreviewProps {
  image: string;
  handleImageDelete: () => void;
  isThumbnailChecked: boolean;
  handleThumbnailCheck: (image: string) => void;
}

const ImagePreview = ({
  image,
  handleImageDelete,
  isThumbnailChecked,
  handleThumbnailCheck,
}: ImagePreviewProps): JSX.Element => {
  const [isImageHovered, setIsImageHovered] = useState<boolean>(false);

  const handleImageEnter = () => setIsImageHovered(true);
  const handleImageLeave = () => setIsImageHovered(false);

  return (
    <S.ImagePreviewContainer
      onMouseEnter={handleImageEnter}
      onMouseLeave={handleImageLeave}
      $isThumbnailChecked={isThumbnailChecked}
    >
      <S.PreviewImage src={image} $isImageHovered={isImageHovered} />
      <DeleteImageButton
        handleImageDelete={handleImageDelete}
        isImageHovered={isImageHovered}
      />
      <ThumbnailSelect
        isImageHovered={isImageHovered}
        isThumbnailChecked={isThumbnailChecked}
        handleThumbnailCheck={() => handleThumbnailCheck(image)}
      />
    </S.ImagePreviewContainer>
  );
};

export default ImagePreview;
