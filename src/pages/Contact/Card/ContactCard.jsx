/* eslint-disable react/prop-types */
import {
  AdmissionPageLink,
  CardContent,
  CardTitle,
  CloudyDivider,
  ContactCardContainer,
  Divider,
  SingleInfoContainer,
  SingleInfoContent,
  SingleInfoTitle,
  SocialLink,
} from "./ContactCard.styled";

const ContactCard = ({ cardData }) => {
  const openNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <ContactCardContainer>
        <CardTitle>{cardData?.category}</CardTitle>
        <Divider />
        <CardContent>
          {cardData?.contactDetails?.map((detail, index) => (
            <SingleInfoContainer key={index} $type={detail.type}>
              {detail?.type === "Admission" ? (
                <AdmissionPageLink onClick={() => openNewTab(detail?.url)}>
                  {detail.title}
                </AdmissionPageLink>
              ) : (
                <SingleInfoTitle>{detail.title}</SingleInfoTitle>
              )}
              {detail?.title === "Facebook" ||
              detail?.title === "Instagram" ||
              detail?.title === "Cafe" ? (
                detail?.content?.map((group, index) => (
                  <SocialLink key={index} onClick={() => openNewTab(group.url)}>
                    {group.name}
                  </SocialLink>
                ))
              ) : (
                <SingleInfoContent>{detail.content}</SingleInfoContent>
              )}

              <CloudyDivider />
            </SingleInfoContainer>
          ))}
        </CardContent>
      </ContactCardContainer>
    </>
  );
};

export default ContactCard;
