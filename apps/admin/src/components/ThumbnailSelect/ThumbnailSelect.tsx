import { JSX } from 'react/jsx-runtime';

import { CheckIcon } from '@icons/Check';

import * as S from './ThumbnailSelect.styled';

type ThumbnailSelectProps = {
  isImageHovered: boolean;
  isThumbnailChecked: boolean;
  handleThumbnailCheck: () => void;
};

const ThumbnailSelect = ({
  isImageHovered,
  isThumbnailChecked,
  handleThumbnailCheck,
}: ThumbnailSelectProps): JSX.Element => {
  return (
    <S.ThumbnailSelectContainer $isImageHovered={isImageHovered}>
      <S.ThumbnailSelectText>Thumbnail Check</S.ThumbnailSelectText>
      <S.ThumbnailCheckBoxContainer $isThumbnailChecked={isThumbnailChecked}>
        <S.ThumbnailSelectCheckBox
          type="checkbox"
          onChange={handleThumbnailCheck}
        />
        {isThumbnailChecked && <CheckIcon />}
      </S.ThumbnailCheckBoxContainer>
    </S.ThumbnailSelectContainer>
  );
};

export default ThumbnailSelect;
