import { AlarmIcon } from '@icons/Alarm';

import * as S from './ImportantBox.styled';

const ImportantBox = () => {
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
