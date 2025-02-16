import { JSX } from 'react/jsx-runtime';
import { useEffect } from 'react';
import { Location, useLocation, useParams } from 'react-router';

import { NewsEventType, NoticeAuthor } from '@pages/Community/Community.types';

import * as S from './PostTypeBox.styled';

type PostTypeBoxProps = {
  type: NoticeAuthor | NewsEventType;
};

const PostTypeBox = ({ type }: PostTypeBoxProps): JSX.Element => {
  const location: Location = useLocation();
  const { id } = useParams();

  const boardDetailPaths = ['/community/notice', '/community/news'];
  const isBoardDetailPage = boardDetailPaths.some(
    (path) => location.pathname.includes(path) && !!id
  );

  const isNoticeAuthor = (
    type: NoticeAuthor | NewsEventType
  ): type is NoticeAuthor => {
    return type === 'TA' || type === 'Council';
  };

  useEffect(() => {
    isNoticeAuthor(type);
  }, [type]);

  return (
    <S.PostTypeBoxContainer
      $isNotice={isNoticeAuthor(type)}
      $isBoardDetailPage={isBoardDetailPage}
    >
      {type}
    </S.PostTypeBoxContainer>
  );
};

export default PostTypeBox;
