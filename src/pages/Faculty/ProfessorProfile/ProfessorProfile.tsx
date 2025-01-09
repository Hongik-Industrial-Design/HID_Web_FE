import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router';

import ProfessorDetails from './ProfessorDetails';
import { BreadscrumbArrow } from '@icons/BreadscrumbArrow';

import * as S from './ProfessorProfile.styled';
import { BreadscrumbContainer } from '@components/Breadscrumb/Breadscrumb.styled';

const ProfessorProfile = () => {
  const [professorInfo, setProfessorInfo] = useState({});

  const [emailHover, setEmailHover] = useState(false);

  const { id } = useParams();

  const location = useLocation();
  const currentPath = location.pathname;

  const openNewTab = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  // Fetching Professor Infos & extracting individual professor info
  useEffect(() => {
    const fetchProfessorInfo = async () => {
      try {
        const response = await axios.get('/data/professor.json');
        const fetchedProfessorInfos = response.data;
        console.log(fetchedProfessorInfos);

        // URL id와 일치하는 professor를 찾아서 저장
        const selectedProfessor = fetchedProfessorInfos.find(
          (professor) => professor.id === parseInt(id)
        );

        console.log(selectedProfessor);

        // 찾은 professor 정보를 상태에 저장
        setProfessorInfo(selectedProfessor);
      } catch (error) {
        console.error('Error occured: ', error);
      }
    };

    fetchProfessorInfo();
  }, [id]); // id가 변경될 때마다 데이터를 다시 가져옴

  return (
    <S.ProfessorProfileWrapper>
      <S.ProfessorProfileHeader>
        <S.ProfessorProfilePageTitle>
          Professor<span>.</span>
        </S.ProfessorProfilePageTitle>
        <BreadscrumbContainer $facultyPage={currentPath.startsWith('/faculty')}>
          <Link to="/faculty">
            <span>Faculty</span>
          </Link>
          <BreadscrumbArrow />
          <span className="current-page">Professor</span>
        </BreadscrumbContainer>
      </S.ProfessorProfileHeader>
      <S.ProfessorProfileMainSection>
        <S.ProfileStickyContainer>
          <S.ProfileContainer>
            <S.ProfileImage
              src={`/ProfessorProfile/${professorInfo.image}`}
              alt={professorInfo.name}
            />
            <S.ProfileName>
              <h3 className="name">{professorInfo.name}</h3>
              <div className="role">
                <p className="title">{professorInfo.title},</p>
                <p className="specialty">{professorInfo.specialization}</p>
              </div>
            </S.ProfileName>
            <S.ProfileEmail
              onClick={() =>
                openNewTab(`mailto: ${professorInfo.contact.email}`)
              }
              onMouseEnter={() => setEmailHover(true)}
              onMouseLeave={() => setEmailHover(false)}
              $emailHovered={emailHover}
            >
              {professorInfo.contact?.email}
            </S.ProfileEmail>
            {professorInfo.description && (
              <S.ProfileDescription>
                {professorInfo.description}
              </S.ProfileDescription>
            )}
          </S.ProfileContainer>
        </S.ProfileStickyContainer>

        <ProfessorDetails professorDetails={professorInfo.details} />
      </S.ProfessorProfileMainSection>
    </S.ProfessorProfileWrapper>
  );
};

export default ProfessorProfile;
