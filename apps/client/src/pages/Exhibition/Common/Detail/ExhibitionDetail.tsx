import { JSX } from 'react/jsx-runtime';
import { useParams } from 'react-router';

import { useExhibitionDetailQuery } from '@api/query/exhibitionQuery';

import { EXHIBIT_TYPE } from '@client-types/exhibition.types';

import HeroSection from './HeroSection/HeroSection';
import ArtworkSection from './ArtworkSection/ArtworkSection';
import TeamMemberSection from './TeamMemberSection/TeamMemberSection';
import Loading from '@components/Loading/Loading';

import * as S from './ExhibitionDetail.styled';

type ExhibitionDetailProps = {
  exhibitType: EXHIBIT_TYPE;
};

const ExhibitionDetail = ({
  exhibitType,
}: ExhibitionDetailProps): JSX.Element => {
  // URL 내 params 추출 (API 요청시에 필요)
  const { id, year } = useParams();
  const exhibitId = parseInt(id ? id : '');
  const exhibtionYear = year ? year : '';

  // 학생 전시 상세 정보 데이터 Fetching (Tanstack Query 적용F)
  const {
    status,
    data: artworkInfos,
    error,
  } = useExhibitionDetailQuery(exhibitType, exhibtionYear, exhibitId);

  return (
    <S.ExhibitionDetailWrapper
      $isPendingOrError={status === 'pending' || status === 'error'}
    >
      {status === 'pending' ? (
        <Loading />
      ) : status === 'error' ? (
        <span>Error: {error.message}</span>
      ) : (
        <S.ExhibitionDetailContainer>
          <HeroSection artworkInfos={artworkInfos} />
          <ArtworkSection artworkInfos={artworkInfos} />
          <TeamMemberSection membersData={artworkInfos.artists} />
        </S.ExhibitionDetailContainer>
      )}
    </S.ExhibitionDetailWrapper>
  );
};

export default ExhibitionDetail;
