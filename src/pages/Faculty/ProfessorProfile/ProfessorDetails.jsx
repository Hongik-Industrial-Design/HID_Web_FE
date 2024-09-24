/* eslint-disable react/prop-types */
import {
  AwardsSection,
  BiographySection,
  BoldDivider,
  CareerContainer,
  CareerEntry,
  DegreeSection,
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

      {/* Degree Section */}
      {professorDetails?.degrees && (
        <DegreeSection>
          <DetailSectionTitle>Degree</DetailSectionTitle>
          <BoldDivider />
          <CareerContainer>
            {professorDetails?.degrees.map((degree) => (
              <CareerEntry key={degree.id}>
                <EventYearBox>
                  <p>{degree.year}</p>
                  <SubtleDivider />
                </EventYearBox>
                <DetailsDescriptionBox>
                  <DetailsDescriptionText>
                    {degree.degree}
                  </DetailsDescriptionText>
                  <SubtleDivider />
                </DetailsDescriptionBox>
              </CareerEntry>
            ))}
          </CareerContainer>
        </DegreeSection>
      )}

      {/* Biography Section */}
      {professorDetails?.biography && (
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
                    {career.position}
                  </DetailsDescriptionText>
                  <SubtleDivider />
                </DetailsDescriptionBox>
              </CareerEntry>
            ))}
          </CareerContainer>
        </BiographySection>
      )}

      {/* Awards Section */}
      {professorDetails?.awards && (
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
                  <DetailsDescriptionText>
                    {career.award}
                  </DetailsDescriptionText>
                  <SubtleDivider />
                </DetailsDescriptionBox>
              </CareerEntry>
            ))}
          </CareerContainer>
        </AwardsSection>
      )}

      {/* Publications Section */}
      {professorDetails?.publications && (
        <AwardsSection>
          <DetailSectionTitle>Publications</DetailSectionTitle>
          <BoldDivider />
          <CareerContainer>
            {professorDetails?.publications.map((publication) => (
              <CareerEntry key={publication.id}>
                <EventYearBox>
                  <p>{publication.year}</p>
                  <SubtleDivider />
                </EventYearBox>
                <DetailsDescriptionBox>
                  <DetailsDescriptionText>
                    {publication.title}
                  </DetailsDescriptionText>
                  <SubtleDivider />
                </DetailsDescriptionBox>
              </CareerEntry>
            ))}
          </CareerContainer>
        </AwardsSection>
      )}

      {/* Works Section */}
      {professorDetails?.works && (
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
      )}
    </DetailsContainer>
  );
};

export default ProfessorDetails;
