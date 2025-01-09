import * as S from './AdminCard.styled';

import {
  CardTitle,
  CloudyDivider,
  ContactCardContainer,
  Divider,
} from '../ContactCard.styled';

const AdminCard = ({ adminData }) => {
  return (
    <>
      <ContactCardContainer>
        <CardTitle>{adminData?.category}</CardTitle>
        <Divider />
        {adminData?.contributors?.map((contributor, index) => (
          <S.PersonalCardSection key={index}>
            <S.PersonalCardContainer>
              <S.PersonalName>{contributor.name}</S.PersonalName>
              <S.PersonalMail>{contributor.email}</S.PersonalMail>
            </S.PersonalCardContainer>
            <CloudyDivider />
          </S.PersonalCardSection>
        ))}
      </ContactCardContainer>
    </>
  );
};

export default AdminCard;
