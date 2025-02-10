import { JSX } from 'react/jsx-runtime';

import { NewsEventType, NoticeAuthor } from '@pages/Community/Community.types';

import * as S from './PostTypeBox.styled';
import { useEffect } from 'react';

type PostTypeBoxProps = {
  type: NoticeAuthor | NewsEventType;
};

const PostTypeBox = ({ type }: PostTypeBoxProps): JSX.Element => {
  const isNoticeAuthor = (
    type: NoticeAuthor | NewsEventType
  ): type is NoticeAuthor => {
    return type === 'TA' || type === 'Council';
  };

  useEffect(() => {
    isNoticeAuthor(type);
  }, [type]);

  return (
    <S.PostTypeBoxContainer $isNotice={isNoticeAuthor(type)}>
      {type}
    </S.PostTypeBoxContainer>
  );
};

export default PostTypeBox;
