import { JSX } from 'react/jsx-runtime';
import { useState } from 'react';

import DeleteImageButton from '@components/Button/DeleteImage/DeleteImageButton';
import ThumbnailSelect from '@components/ThumbnailSelect/ThumbnailSelect';

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

  // 대표 이미지 선택에 대한 상태 관리
  const [isThumbnailChecked, setIsThumbnailChecked] = useState<boolean>(false);

  const handleThumbnailCheck = () => setIsThumbnailChecked(!isThumbnailChecked);

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
        handleThumbnailCheck={handleThumbnailCheck}
      />
    </S.ImagePreviewContainer>
  );
};

export default ImagePreview;
