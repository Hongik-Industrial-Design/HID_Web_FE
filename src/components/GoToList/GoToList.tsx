import { JSX } from 'react/jsx-runtime';
import { Link } from 'react-router';

import * as S from './GoToList.styled';

type GoToListProps = {
  isHovered: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
};

const GoToList = ({
  isHovered,
  onMouseEnter,
  onMouseLeave,
}: GoToListProps): JSX.Element => {
  return (
    <Link to="/graduation">
      <S.ButtonContainer
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <S.StyledLeftArrow $isHovered={isHovered} />
        <S.GoToListText $isHovered={isHovered}>Go To List</S.GoToListText>
      </S.ButtonContainer>
    </Link>
  );
};

export default GoToList;
