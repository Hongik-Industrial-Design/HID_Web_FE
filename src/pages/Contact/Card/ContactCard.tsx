import * as S from './ContactCard.styled';

const ContactCard = ({ cardData }) => {
  const openNewTab = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <S.ContactCardContainer>
      <S.CardTitle>{cardData?.category}</S.CardTitle>
      <S.Divider />
      <S.CardContent>
        {cardData?.contactDetails?.map((detail, index) => (
          <S.SingleInfoContainer key={index} $type={detail.type}>
            {detail?.type === 'Admission' ? (
              <S.AdmissionPageLink onClick={() => openNewTab(detail?.url)}>
                {detail.title}
              </S.AdmissionPageLink>
            ) : (
              <S.SingleInfoTitle>{detail.title}</S.SingleInfoTitle>
            )}
            {detail?.title === 'Facebook' ||
            detail?.title === 'Instagram' ||
            detail?.title === 'Cafe' ? (
              detail?.content?.map((group, index) => (
                <S.SocialLink key={index} onClick={() => openNewTab(group.url)}>
                  {group.name}
                </S.SocialLink>
              ))
            ) : (
              <S.SingleInfoContent>{detail.content}</S.SingleInfoContent>
            )}

            <S.CloudyDivider />
          </S.SingleInfoContainer>
        ))}
      </S.CardContent>
    </S.ContactCardContainer>
  );
};

export default ContactCard;
