import axios from 'axios';
import { JSX } from 'react/jsx-runtime';
import { useEffect, useState } from 'react';
import { Link, Location, useLocation, useParams } from 'react-router';

import { openNewTab } from '@utils/openNewTab';

import { ProfessorInfos } from './Professor.types';

import ProfessorDetails from './ProfessorDetails';
import { BreadscrumbArrow } from '@icons/BreadscrumbArrow';

import { BreadscrumbContainer } from '@components/Breadscrumb/Breadscrumb.styled';
import * as S from './ProfessorProfile.styled';
import Drawer from '@components/Drawer/Drawer';

type RouteParams = {
  id: string;
};

const ProfessorProfile = (): JSX.Element => {
  const [professorInfo, setProfessorInfo] = useState<ProfessorInfos>(
    {} as ProfessorInfos
  );

  const [isEmailHovered, setIsEmailHovered] = useState<boolean>(false);
  const [isDrawerButtonHovered, setIsDrawerButtonHovered] =
    useState<boolean>(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

  const handleDrawerOpen = () => setIsDrawerOpen(true);
  const handleDrawerClose = () => setIsDrawerOpen(false);

  const handleEmailHover = () => setIsEmailHovered(true);
  const handleEmailLeave = () => setIsEmailHovered(false);

  const handleDrawerButtonHover = () => setIsDrawerButtonHovered(true);
  const handleDrawerButtonLeave = () => setIsDrawerButtonHovered(false);

  const { id } = useParams<RouteParams>();
  const safeID = id ?? '1'; // 타입 안정성을 위해 null/undefined일 경우, 기본 값 지정

  const location: Location = useLocation();
  const currentPath = location.pathname;

  // Fetching Professor Infos & extracting individual professor info
  useEffect(() => {
    const fetchProfessorInfo = async () => {
      try {
        const response = await axios.get('/data/professor.json');
        const fetchedProfessorInfos = response.data;
        // console.log(fetchedProfessorInfos);

        // URL id와 일치하는 professor를 찾아서 저장
        const selectedProfessor = fetchedProfessorInfos.find(
          (professor: ProfessorInfos) => professor.id === parseInt(safeID)
        );

        // console.log(selectedProfessor);

        // 찾은 professor 정보를 상태에 저장
        setProfessorInfo(selectedProfessor);
      } catch (error) {
        console.error('Error occured: ', error);
      }
    };

    fetchProfessorInfo();
  }, [safeID]); // id가 변경될 때마다 데이터를 다시 가져옴

  return (
    <S.ProfessorProfileWrapper>
      {/* Header */}
      <S.ProfessorProfileHeader>
        <S.ProfessorProfilePageTitle>
          Professor<span>.</span>
        </S.ProfessorProfilePageTitle>

        {/* BreadScrumb */}
        <BreadscrumbContainer $facultyPage={currentPath.startsWith('/faculty')}>
          <Link to="/faculty">
            <span>Faculty</span>
          </Link>
          <BreadscrumbArrow />
          <span className="current-page">Professor</span>
        </BreadscrumbContainer>
      </S.ProfessorProfileHeader>

      {/* Main Section */}
      <S.ProfessorProfileMainSection>
        <S.ProfileStickyContainer>
          <S.ProfileContainer>
            <S.ProfileImage
              src={`/ProfessorProfile/${professorInfo.image}`}
              alt={professorInfo.name}
            />
            <S.ProfessorInfos>
              <S.ProfessorNameContainer>
                <S.ProfessorName>{professorInfo.name}</S.ProfessorName>
                <S.ProfessorDrawerButton
                  onClick={handleDrawerOpen}
                  onMouseEnter={handleDrawerButtonHover}
                  onMouseLeave={handleDrawerButtonLeave}
                  $isHovered={isDrawerButtonHovered}
                >
                  Detail info
                </S.ProfessorDrawerButton>
              </S.ProfessorNameContainer>
              <S.ProfessorType>
                <S.ProfessorRole>{professorInfo.title},</S.ProfessorRole>
                <S.ProfessorMajor>
                  {professorInfo.specialization}
                </S.ProfessorMajor>
              </S.ProfessorType>
              <S.ProfileEmail
                onClick={() =>
                  openNewTab(`mailto: ${professorInfo.contact.email}`)
                }
                onMouseEnter={handleEmailHover}
                onMouseLeave={handleEmailLeave}
                $emailHovered={isEmailHovered}
              >
                {professorInfo.contact?.email}
              </S.ProfileEmail>
            </S.ProfessorInfos>
            {/* {professorInfo.description && (
              <S.ProfileDescription>
                {professorInfo.description}
              </S.ProfileDescription>
            )} */}
          </S.ProfileContainer>
        </S.ProfileStickyContainer>

        {/* Professor Details */}
        <ProfessorDetails professorDetails={professorInfo.details} />
      </S.ProfessorProfileMainSection>

      {/* Drawer */}
      <Drawer
        isOpen={isDrawerOpen}
        handleDrawerClose={handleDrawerClose}
        professorName={professorInfo.name}
        professorBrief={professorInfo.description}
      />
    </S.ProfessorProfileWrapper>
  );
};

export default ProfessorProfile;
