/* eslint-disable react/prop-types */
import {
  AwardsSection,
  BiographySection,
  BoldDivider,
  CareerContainer,
  CareerEntry,
  DetailsContainer,
  DetailsDescriptionBox,
  DetailsDescriptionText,
  DetailSectionTitle,
  EventYearBox,
  MajorSection,
  SubtleDivider,
  WorksSection,
} from "./ProfessorDetails.styled";

const ProfessorDetails = ({ professorDetails }) => {
  return (
    <DetailsContainer>
      {/* Major Section */}
      <MajorSection>
        <DetailSectionTitle>Major</DetailSectionTitle>
        <BoldDivider />
        <DetailsDescriptionBox>
          <DetailsDescriptionText>
            {professorDetails?.major}
          </DetailsDescriptionText>
          <SubtleDivider />
        </DetailsDescriptionBox>
      </MajorSection>

      {/* Biography Section */}
      <BiographySection>
        <DetailSectionTitle>Biography</DetailSectionTitle>
        <BoldDivider />
        <CareerContainer>
          {professorDetails?.biography.map((career) => (
            <CareerEntry key={career.id}>
              <EventYearBox>
                <p>{career.yearRange}</p>
                <SubtleDivider />
              </EventYearBox>
              <DetailsDescriptionBox>
                <DetailsDescriptionText>
                  {career.description}
                </DetailsDescriptionText>
                <SubtleDivider />
              </DetailsDescriptionBox>
            </CareerEntry>
          ))}
        </CareerContainer>
      </BiographySection>

      {/* Awards Section */}
      <AwardsSection>
        <DetailSectionTitle>Awards</DetailSectionTitle>
        <BoldDivider />
        <CareerContainer>
          {professorDetails?.awards.map((career) => (
            <CareerEntry key={career.id}>
              <EventYearBox>
                <p>{career.year}</p>
                <SubtleDivider />
              </EventYearBox>
              <DetailsDescriptionBox>
                <DetailsDescriptionText>{career.award}</DetailsDescriptionText>
                <SubtleDivider />
              </DetailsDescriptionBox>
            </CareerEntry>
          ))}
        </CareerContainer>
      </AwardsSection>

      {/* Works Section */}
      <WorksSection>
        <DetailSectionTitle>Works</DetailSectionTitle>
        <BoldDivider />
        <CareerContainer>
          {professorDetails?.works.map((career) => (
            <CareerEntry key={career.id}>
              <EventYearBox>
                <p>{career.yearRange}</p>
                <SubtleDivider />
              </EventYearBox>
              <DetailsDescriptionBox>
                <DetailsDescriptionText>
                  {career.project}
                </DetailsDescriptionText>
                <SubtleDivider />
              </DetailsDescriptionBox>
            </CareerEntry>
          ))}
        </CareerContainer>
      </WorksSection>
    </DetailsContainer>
  );
};

export default ProfessorDetails;
