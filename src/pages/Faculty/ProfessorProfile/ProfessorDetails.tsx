import * as S from './ProfessorDetails.styled';

const ProfessorDetails = ({ professorDetails }) => {
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
            {professorDetails?.degrees.map((degree) => (
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
            {professorDetails?.biography.map((career) => (
              <S.CareerEntry key={career.id}>
                <S.EventYearBox>
                  <p>{career.yearRange}</p>
                  <S.SubtleDivider />
                </S.EventYearBox>
                <S.DetailsDescriptionBox>
                  <S.DetailsDescriptionText>
                    {career.position}
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
            {professorDetails?.awards.map((career) => (
              <S.CareerEntry key={career.id}>
                <S.EventYearBox>
                  <p>{career.year}</p>
                  <S.SubtleDivider />
                </S.EventYearBox>
                <S.DetailsDescriptionBox>
                  <S.DetailsDescriptionText>
                    {career.award}
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
            {professorDetails?.publications.map((publication) => (
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
            {professorDetails?.works.map((career) => (
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
