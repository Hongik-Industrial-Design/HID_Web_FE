import { Link } from 'react-router';

import * as S from './GoToList.styled';

const GoToList = ({ isHovered, setIsHovered }) => {
  return (
    <Link to="/graduation">
      <S.ButtonContainer
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        $isHovered={isHovered}
      >
        <S.StyledLeftArrow $isHovered={isHovered} />
        <S.GoToListText $isHovered={isHovered}>Go To List</S.GoToListText>
      </S.ButtonContainer>
    </Link>
  );
};

export default GoToList;
