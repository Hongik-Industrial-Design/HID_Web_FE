import { JSX } from 'react/jsx-runtime';

import { AlarmIcon } from '@icons/Alarm';

import * as S from './ImportantBox.styled';

const ImportantBox = (): JSX.Element => {
  return (
    <S.ImportantBoxContainer>
      <S.AlarmIconBox>
        <AlarmIcon />
      </S.AlarmIconBox>
      중요!
    </S.ImportantBoxContainer>
  );
};

export default ImportantBox;
