import { JSX } from 'react/jsx-runtime';
import { useParams } from 'react-router';

import GraduationHeroSection from './HeroSection/GraduationHeroSection';
import GraduationArtworkSection from './ArtworkSection/GraduationArtworkSection';
import GraduationTeamMemberSection from './TeamMemberSection/GradutionTeamMemberSection';
import Loading from '@components/Loading/Loading';

import * as S from './GraduationExhibitionDetail.styled';
import { useGraduationExhibitionDetailQuery } from '@api/query/graduationExhibitionQuery';

const GraduationExhibitionDetail = (): JSX.Element => {
  //   const [artworkInfos, setArtworkInfos] = useState<ArtworkInfos>(
  //     {} as ArtworkInfos
  //   );

  // URL 내 params 추출 (API 요청시에 필요)
  const { id } = useParams();
  const exhibitId = parseInt(id ? id : '');
  // const exhibtionYear = year ? year : '';

  // 학생 전시 상세 정보 데이터 Fetching (Tanstack Query 적용F)
  const {
    status,
    data: graduationArtworkInfos,
    error,
    isFetching,
  } = useGraduationExhibitionDetailQuery(exhibitId);

  return (
    <>
      {status === 'pending' ? (
        <S.SkeletonLoadingContainer>
          <Loading />
        </S.SkeletonLoadingContainer>
      ) : status === 'error' ? (
        <span>Error: {error.message}</span>
      ) : (
        <S.ExhibitionDetailWrapper>
          <S.ExhibitionDetailContainer>
            <GraduationHeroSection artworkInfos={graduationArtworkInfos} />
            <GraduationArtworkSection artworkInfos={graduationArtworkInfos} />
          </S.ExhibitionDetailContainer>
          <GraduationTeamMemberSection
            membersData={graduationArtworkInfos.artists}
          />
          {isFetching && <span>Background Updating...</span>}
        </S.ExhibitionDetailWrapper>
      )}
    </>
  );
};

export default GraduationExhibitionDetail;
