import { JSX } from 'react/jsx-runtime';

import * as S from './GoToList.styled';

type GoToListProps = {
  route: string;
  isHovered: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
};

const GoToList = ({
  route = '/graduation',
  isHovered,
  onMouseEnter,
  onMouseLeave,
}: GoToListProps): JSX.Element => {
  return (
    <S.GoToListLink to={route}>
      <S.GoToListButton onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        <S.LeftArrowIcon $isHovered={isHovered} />
        <S.GoToListText $isHovered={isHovered}>Go To List</S.GoToListText>
      </S.GoToListButton>
    </S.GoToListLink>
  );
};

export default GoToList;
