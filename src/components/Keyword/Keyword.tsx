import { JSX } from 'react/jsx-runtime';

import * as S from './Keyword.styled';

type KeywordProps = {
  keyword: string;
};

const Keyword = ({ keyword }: KeywordProps): JSX.Element => {
  return <S.KeywordBox># {keyword}</S.KeywordBox>;
};

export default Keyword;
