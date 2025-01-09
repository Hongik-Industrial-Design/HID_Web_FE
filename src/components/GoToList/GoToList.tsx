import { Link } from 'react-router';

import * as S from './GoToList.styled';

const GoToList = ({ isHovered, onMouseEnter, onMouseLeave }) => {
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
