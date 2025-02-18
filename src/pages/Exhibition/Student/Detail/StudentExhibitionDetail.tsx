import { JSX } from 'react/jsx-runtime';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import { fetchStudentExhibitionDetail } from '@api/exhibition';

import { ArtworkInfos } from './StudentArtwork.types';

import StudentHeroSection from './HeroSection/StudentHeroSection';
import StudentArtworkSection from './ArtworkSection/StudentArtworkSection';
import StudentTeamMemberSection from './TeamMemberSection/StudentTeamMemberSection';

import * as S from './StudentExhibitionDetail.styled';

const StudentExhibitionDetail = (): JSX.Element => {
  const [artworkInfos, setArtworkInfos] = useState<ArtworkInfos>(
    {} as ArtworkInfos
  );

  // URL 내 params 추출 (API 요청시에 필요)
  const { id } = useParams();
  const exhibitId = parseInt(id ? id : '');

  // Fetching Entire Artwork Infos
  useEffect(() => {
    const getStudentExhibitionDetail = async () => {
      try {
        const artworkInfos = await fetchStudentExhibitionDetail(exhibitId);
        console.log(
          `타입 검증 후 작품 ID: ${exhibitId}의 상세 정보: `,
          artworkInfos
        );

        setArtworkInfos(artworkInfos);
      } catch (error) {
        console.error('Error occured: ', error);
      }
    };

    getStudentExhibitionDetail();
  }, [exhibitId]);

  return (
    <S.ExhibitionDetailWrapper>
      <S.ExhibitionDetailContainer>
        <StudentHeroSection artworkInfos={artworkInfos} />
        <StudentArtworkSection artworkInfos={artworkInfos} />
      </S.ExhibitionDetailContainer>
      <StudentTeamMemberSection membersData={artworkInfos.artists} />
    </S.ExhibitionDetailWrapper>
  );
};

export default StudentExhibitionDetail;
