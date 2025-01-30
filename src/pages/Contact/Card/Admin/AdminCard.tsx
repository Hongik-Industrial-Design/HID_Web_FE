import { JSX } from 'react/jsx-runtime';

import * as T from '../../Contact.types';

import {
  CardTitle,
  CloudyDivider,
  ContactCardContainer,
  Divider,
} from '../Contact/ContactCard.styled';

import * as S from './AdminCard.styled';

const AdminCard = ({ adminData }: T.AdminCardProps): JSX.Element => {
  return (
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
  );
};

export default AdminCard;
