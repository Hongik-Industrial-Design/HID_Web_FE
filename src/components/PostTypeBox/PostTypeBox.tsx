import { JSX } from 'react/jsx-runtime';

import { NewsEventType, NoticeAuthor } from '@pages/Community/Community.types';

import * as S from './PostTypeBox.styled';

type PostTypeBoxProps = {
  type: NoticeAuthor | NewsEventType;
};

const PostTypeBox = ({ type }: PostTypeBoxProps): JSX.Element => {
  return <S.PostTypeBoxContainer>{type}</S.PostTypeBoxContainer>;
};

export default PostTypeBox;
