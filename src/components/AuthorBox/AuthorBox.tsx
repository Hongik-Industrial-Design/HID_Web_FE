import { JSX } from 'react/jsx-runtime';

import * as S from './AuthorBox.styled';

type Author = 'TA' | 'Council';

type AuthorBoxProps = {
  author: Author;
};

const AuthorBox = ({ author }: AuthorBoxProps): JSX.Element => {
  return <S.AuthorBoxContainer>{author}</S.AuthorBoxContainer>;
};

export default AuthorBox;
