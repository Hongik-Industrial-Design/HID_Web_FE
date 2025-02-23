import { JSX } from 'react/jsx-runtime';
import { useState } from 'react';

import { ClipIconDetail } from '@icons/Clip';
import { DownArrowIcon } from '@icons/Arrow';
import { WordIcon } from '@icons/Attachment';

import * as S from './Attachment.styled';

type AttachmentProps = {
  fileCount: number;
  attachment: {
    url: string;
    name: string;
  }[];
};

const Attachment = ({
  fileCount,
  attachment,
}: AttachmentProps): JSX.Element => {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleDownload = (index: number) => {
    if (index) {
      // 서버에 저장된 첨부 파일의 URL과 파일명
      const fileURL = attachment[index].url;
      console.log(fileURL);

      const fileName = attachment[index].name;
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
    }
  };

  return (
    <S.AttachmentContainer>
      <S.AttachmentButton onClick={handleDropdownToggle}>
        <S.ClipIconBox>
          <ClipIconDetail />
        </S.ClipIconBox>
        <S.AttachmentText>첨부파일</S.AttachmentText>
        <S.AttachmentFileCount>{fileCount}</S.AttachmentFileCount>
        <S.DownArrowIconBox>
          <DownArrowIcon $isDropdownOpen={isDropdownOpen} />
        </S.DownArrowIconBox>
      </S.AttachmentButton>

      {/* Dropdown */}
      <S.AttachmentDropdownContainer $isDropdownOpen={isDropdownOpen}>
        <S.AttachmentFileList>
          {attachment?.map((file, index) => (
            <S.AttachmentFileItem key={index}>
              {/* 추후 확장자에 따른 로직 추가 필요 */}
              <S.AttachmentFileIconBox>
                <WordIcon />
              </S.AttachmentFileIconBox>
              <S.AttachmentFileItemLink onClick={() => handleDownload(index)}>
                {file.name}
              </S.AttachmentFileItemLink>
            </S.AttachmentFileItem>
          ))}
        </S.AttachmentFileList>
      </S.AttachmentDropdownContainer>
    </S.AttachmentContainer>
  );
};

export default Attachment;
