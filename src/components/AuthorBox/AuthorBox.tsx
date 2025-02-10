import * as S from './AuthorBox.styled';

type Author = 'TA' | 'Council';

type AuthorBoxProps = {
  author: Author;
};

const AuthorBox = ({ author }: AuthorBoxProps) => {
  return <S.AuthorBoxContainer>{author}</S.AuthorBoxContainer>;
};

export default AuthorBox;
