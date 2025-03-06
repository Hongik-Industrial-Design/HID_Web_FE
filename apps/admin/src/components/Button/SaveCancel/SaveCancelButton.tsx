import { JSX } from 'react/jsx-runtime';

import * as S from './SaveCancelButton.styled';
import { useNavigate } from 'react-router';

type SaveCancelButtonProps = {
  buttonType: 'save' | 'cancel';
};

const SaveCancelButton = ({
  buttonType,
}: SaveCancelButtonProps): JSX.Element => {
  const navigate = useNavigate();

  const handleSaveClick = () => {
    // 작품 등록 API 함수 호출

    navigate('/graduation');
  };

  return (
    <S.SaveCancelButtonContainer
      $isSaveButton={buttonType === 'save'}
      onClick={buttonType === 'save' ? () => navigate(-1) : handleSaveClick}
    >
      {buttonType === 'save' ? 'Save' : 'Cancel'}
    </S.SaveCancelButtonContainer>
  );
};

export default SaveCancelButton;
