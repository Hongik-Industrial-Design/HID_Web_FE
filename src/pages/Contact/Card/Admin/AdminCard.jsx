/* eslint-disable react/prop-types */
import {
  CardTitle,
  CloudyDivider,
  ContactCardContainer,
  Divider,
} from "../ContactCard.styled";
import {
  PersonalCardContainer,
  PersonalCardSection,
  PersonalMail,
  PersonalName,
} from "./AdminCard.styled";

const AdminCard = ({ adminData }) => {
  return (
    <>
      <ContactCardContainer>
        <CardTitle>{adminData?.category}</CardTitle>
        <Divider />
        {adminData?.contributors?.map((contributor, index) => (
          <PersonalCardSection key={index}>
            <PersonalCardContainer>
              <PersonalName>{contributor.name}</PersonalName>
              <PersonalMail>{contributor.email}</PersonalMail>
            </PersonalCardContainer>
            <CloudyDivider />
          </PersonalCardSection>
        ))}
      </ContactCardContainer>
    </>
  );
};

export default AdminCard;
