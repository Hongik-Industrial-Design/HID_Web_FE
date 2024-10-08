import { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import axios from "axios";

import Layout from "@layout/Layout";
import ProfessorDetails from "./ProfessorDetails";

import {
  ProfessorProfileHeader,
  ProfessorProfileMainSection,
  ProfessorProfilePageTitle,
  ProfessorProfileWrapper,
  ProfileContainer,
  ProfileDescription,
  ProfileEmail,
  ProfileImage,
  ProfileName,
  ProfileStickyContainer,
} from "./ProfessorProfile.styled";

import { BreadscrumbContainer } from "@components/Breadscrumb/Breadscrumb.styled";

import forwardArrow from "@assets/arrows/forward-arrow_triangle.svg";

const ProfessorProfile = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [professorInfo, setProfessorInfo] = useState({});

  const [emailHover, setEmailHover] = useState(false);

  const { id } = useParams();

  const location = useLocation();
  const currentPath = location.pathname;

  const openNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  // Fetching Professor Infos & extracting individual professor info
  useEffect(() => {
    const fetchProfessorInfo = async () => {
      try {
        const response = await axios.get("/data/professor.json");
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
        console.error("Error occured: ", error);
      }
    };

    fetchProfessorInfo();
  }, [id]); // id가 변경될 때마다 데이터를 다시 가져옴

  return (
    <Layout isHovered={isHovered} setIsHovered={setIsHovered}>
      <ProfessorProfileWrapper>
        <ProfessorProfileHeader>
          <ProfessorProfilePageTitle>
            Professor<span>.</span>
          </ProfessorProfilePageTitle>
          <BreadscrumbContainer
            $facultyPage={currentPath.startsWith("/faculty")}
          >
            <Link to="/faculty">
              <span>Faculty</span>
            </Link>
            <img
              src={forwardArrow}
              alt="forward-arrow"
              className="forward-arrow"
            />
            <span className="current-page">Professor</span>
          </BreadscrumbContainer>
        </ProfessorProfileHeader>
        <ProfessorProfileMainSection>
          <ProfileStickyContainer>
            <ProfileContainer>
              <ProfileImage
                src={`/ProfessorProfile/${professorInfo.image}`}
                alt={professorInfo.name}
              />
              <ProfileName>
                <h3 className="name">{professorInfo.name}</h3>
                <div className="role">
                  <p className="title">{professorInfo.title},</p>
                  <p className="specialty">{professorInfo.specialization}</p>
                </div>
              </ProfileName>
              <ProfileEmail
                onClick={() =>
                  openNewTab(`mailto: ${professorInfo.contact.email}`)
                }
                onMouseEnter={() => setEmailHover(true)}
                onMouseLeave={() => setEmailHover(false)}
                $emailHovered={emailHover}
              >
                {professorInfo.contact?.email}
              </ProfileEmail>
              {professorInfo.description && (
                <ProfileDescription>
                  {professorInfo.description}
                </ProfileDescription>
              )}
            </ProfileContainer>
          </ProfileStickyContainer>

          <ProfessorDetails professorDetails={professorInfo.details} />
        </ProfessorProfileMainSection>
      </ProfessorProfileWrapper>
    </Layout>
  );
};

export default ProfessorProfile;
