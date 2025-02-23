import { JSX } from 'react/jsx-runtime';
import { useParams } from 'react-router';

import { useStudentExhibitionDetailQuery } from '@api/query/studentExhibitionQuery';

import { ArtworkInfos } from './StudentArtwork.types';

import StudentHeroSection from './HeroSection/StudentHeroSection';
import StudentArtworkSection from './ArtworkSection/StudentArtworkSection';
import StudentTeamMemberSection from './TeamMemberSection/StudentTeamMemberSection';

import * as S from './StudentExhibitionDetail.styled';

const StudentExhibitionDetail = (): JSX.Element => {
  //   const [artworkInfos, setArtworkInfos] = useState<ArtworkInfos>(
  //     {} as ArtworkInfos
  //   );

  // URL 내 params 추출 (API 요청시에 필요)
  const { id, year } = useParams();
  const exhibitId = parseInt(id ? id : '');
  const exhibtionYear = year ? year : '';

  // 학생 전시 상세 정보 데이터 Fetching (Tanstack Query 적용F)
  const {
    status,
    data: artworkInfos = {} as ArtworkInfos,
    error,
    isFetching,
  } = useStudentExhibitionDetailQuery(exhibtionYear, exhibitId);

  return (
    <S.ExhibitionDetailWrapper>
      {status === 'pending' ? (
        <span>Loading...</span>
      ) : status === 'error' ? (
        <span>Error: {error.message}</span>
      ) : (
        <>
          <S.ExhibitionDetailContainer>
            <StudentHeroSection artworkInfos={artworkInfos} />
            <StudentArtworkSection artworkInfos={artworkInfos} />
          </S.ExhibitionDetailContainer>
          <StudentTeamMemberSection membersData={artworkInfos.artists} />
          {isFetching && <span>Background Updating...</span>}
        </>
      )}
    </S.ExhibitionDetailWrapper>
  );
};

export default StudentExhibitionDetail;
