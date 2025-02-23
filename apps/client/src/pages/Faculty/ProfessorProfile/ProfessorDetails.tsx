import { JSX } from 'react/jsx-runtime';

import * as T from './Professor.types';

import * as S from './ProfessorDetails.styled';

type ProfessorDetailProps = {
  professorDetails: T.professorDetails;
};

const ProfessorDetails = ({
  professorDetails,
}: ProfessorDetailProps): JSX.Element => {
  return (
    <S.DetailsContainer>
      {/* Major Section */}
      <S.MajorSection>
        <S.DetailSectionTitle>Major</S.DetailSectionTitle>
        <S.BoldDivider />
        <S.DetailsDescriptionBox>
          <S.DetailsDescriptionText>
            {professorDetails?.major}
          </S.DetailsDescriptionText>
          <S.SubtleDivider />
        </S.DetailsDescriptionBox>
      </S.MajorSection>

      {/* Degree Section */}
      {professorDetails?.degrees && (
        <S.DegreeSection>
          <S.DetailSectionTitle>Degree</S.DetailSectionTitle>
          <S.BoldDivider />
          <S.CareerContainer>
            {professorDetails.degrees.map((degree: T.Degree) => (
              <S.CareerEntry key={degree.id}>
                <S.EventYearBox>
                  <p>{degree.year}</p>
                  <S.SubtleDivider />
                </S.EventYearBox>
                <S.DetailsDescriptionBox>
                  <S.DetailsDescriptionText>
                    {degree.degree}
                  </S.DetailsDescriptionText>
                  <S.SubtleDivider />
                </S.DetailsDescriptionBox>
              </S.CareerEntry>
            ))}
          </S.CareerContainer>
        </S.DegreeSection>
      )}

      {/* Biography Section */}
      {professorDetails?.biography && (
        <S.BiographySection>
          <S.DetailSectionTitle>Biography</S.DetailSectionTitle>
          <S.BoldDivider />
          <S.CareerContainer>
            {professorDetails.biography.map((biography: T.Biography) => (
              <S.CareerEntry key={biography.id}>
                <S.EventYearBox>
                  <p>{biography.yearRange}</p>
                  <S.SubtleDivider />
                </S.EventYearBox>
                <S.DetailsDescriptionBox>
                  <S.DetailsDescriptionText>
                    {biography.position}
                  </S.DetailsDescriptionText>
                  <S.SubtleDivider />
                </S.DetailsDescriptionBox>
              </S.CareerEntry>
            ))}
          </S.CareerContainer>
        </S.BiographySection>
      )}

      {/* Awards Section */}
      {professorDetails?.awards && (
        <S.AwardsSection>
          <S.DetailSectionTitle>Awards</S.DetailSectionTitle>
          <S.BoldDivider />
          <S.CareerContainer>
            {professorDetails.awards.map((award: T.Award) => (
              <S.CareerEntry key={award.id}>
                <S.EventYearBox>
                  <p>{award.year}</p>
                  <S.SubtleDivider />
                </S.EventYearBox>
                <S.DetailsDescriptionBox>
                  <S.DetailsDescriptionText>
                    {award.award}
                  </S.DetailsDescriptionText>
                  <S.SubtleDivider />
                </S.DetailsDescriptionBox>
              </S.CareerEntry>
            ))}
          </S.CareerContainer>
        </S.AwardsSection>
      )}

      {/* Publications Section */}
      {professorDetails?.publications && (
        <S.AwardsSection>
          <S.DetailSectionTitle>Publications</S.DetailSectionTitle>
          <S.BoldDivider />
          <S.CareerContainer>
            {professorDetails.publications.map((publication: T.Publication) => (
              <S.CareerEntry key={publication.id}>
                <S.EventYearBox>
                  <p>{publication.year}</p>
                  <S.SubtleDivider />
                </S.EventYearBox>
                <S.DetailsDescriptionBox>
                  <S.DetailsDescriptionText>
                    {publication.title}
                  </S.DetailsDescriptionText>
                  <S.SubtleDivider />
                </S.DetailsDescriptionBox>
              </S.CareerEntry>
            ))}
          </S.CareerContainer>
        </S.AwardsSection>
      )}

      {/* Works Section */}
      {professorDetails?.works && (
        <S.WorksSection>
          <S.DetailSectionTitle>Works</S.DetailSectionTitle>
          <S.BoldDivider />
          <S.CareerContainer>
            {professorDetails.works.map((career: T.Career) => (
              <S.CareerEntry key={career.id}>
                <S.EventYearBox>
                  <p>{career.yearRange}</p>
                  <S.SubtleDivider />
                </S.EventYearBox>
                <S.DetailsDescriptionBox>
                  <S.DetailsDescriptionText>
                    {career.project}
                  </S.DetailsDescriptionText>
                  <S.SubtleDivider />
                </S.DetailsDescriptionBox>
              </S.CareerEntry>
            ))}
          </S.CareerContainer>
        </S.WorksSection>
      )}
    </S.DetailsContainer>
  );
};

export default ProfessorDetails;
