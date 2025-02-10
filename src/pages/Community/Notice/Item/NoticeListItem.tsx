import { NoticeAuthor } from '@pages/Community/Community.types';

import ImportantBox from '@components/ImportantBox/ImportantBox';
import PostTypeBox from '@components/PostTypeBox/PostTypeBox';
import { ClipIcon } from '@icons/Clip';

import * as S from './NoticeListItem.styled';

type NoticeListItemProps = {
  id: number;
  important: boolean;
  title: string;
  date: string;
  author: NoticeAuthor;
  attatchment: {
    url: string;
    name: string;
  };
};

const NoticeListItem = ({
  id,
  important,
  title,
  date,
  author,
  attatchment,
}: NoticeListItemProps) => {
  // 첨부 파일 다운로드 logic
  const handleDownload = () => {
    if (id) {
      // 서버에 저장된 첨부 파일의 URL과 파일명
      const fileURL = attatchment.url;
      console.log(fileURL);

      const fileName = attatchment.name;
      console.log(fileName);

      // FE Test를 위한 Blob 객체 사용 구현
      const blob = new Blob([fileURL], { type: 'application/pdf' }); // Blob 객체 생성

      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob); // Blob을 가리키는 URL 생성
      link.download = fileName; // 파일명 설정
      document.body.appendChild(link);
      link.click(); // 다운로드 트리거
      document.body.removeChild(link);
      URL.revokeObjectURL(link.href); // 메모리 해제

      /* // <a> 태그를 동적으로 생성하여 파일 다운로드를 Trigger (Content-Disposition: attatchment 서버에서 설정 필요)
      const link = document.createElement("a");
      link.href = fileURL;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      */
    }
  };

  return (
    <S.NoticeBoardPostRow>
      <S.PostTitleContainer>
        <S.PostLink to={`notice/${id}`}>
          {important && (
            <>
              <ImportantBox />
              <S.TinyDivider />
            </>
          )}
          <S.PostTitle>{title}</S.PostTitle>
        </S.PostLink>
      </S.PostTitleContainer>

      <S.NoticeBoardCredit>
        <S.UploadDate>{date}</S.UploadDate>
        <S.AuthorBoxArea>
          <PostTypeBox type={author} />
        </S.AuthorBoxArea>
        <S.ClipIconContainer>
          {attatchment ? (
            <S.ClipIconButton onClick={handleDownload}>
              <ClipIcon />
            </S.ClipIconButton>
          ) : (
            '-'
          )}
        </S.ClipIconContainer>
      </S.NoticeBoardCredit>
    </S.NoticeBoardPostRow>
  );
};

export default NoticeListItem;
