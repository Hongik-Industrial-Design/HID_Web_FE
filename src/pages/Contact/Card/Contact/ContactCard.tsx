import { JSX } from 'react/jsx-runtime';

import { openNewTab } from '@utils/openNewTab';

import * as T from '../../Contact.types';

import * as S from './ContactCard.styled';

const ContactCard = ({ cardData }: T.ContactCardProps): JSX.Element => {
  return (
    <S.ContactCardContainer>
      <S.CardTitle>{cardData?.category}</S.CardTitle>
      <S.Divider />
      <S.CardContent>
        {cardData?.contactDetails.map((detail, index) => (
          <S.SingleInfoContainer key={index} $type={detail.title}>
            {detail.title === 'Admission Page ⇱' &&
            'url' in detail &&
            detail.url ? (
              <S.AdmissionPageLink onClick={() => openNewTab(detail.url)}>
                {detail.title}
              </S.AdmissionPageLink>
            ) : (
              <S.SingleInfoTitle>{detail.title}</S.SingleInfoTitle>
            )}

            {(detail.title === 'Facebook' ||
              detail.title === 'Instagram' ||
              detail.title === 'Cafe') &&
            typeof detail.content !== 'string' ? (
              detail.content?.map((group, index) => (
                <S.SocialLink key={index} onClick={() => openNewTab(group.url)}>
                  {group.name}
                </S.SocialLink>
              ))
            ) : (
              <S.SingleInfoContent>
                {typeof detail.content === 'string' && detail.content}
              </S.SingleInfoContent>
            )}

            <S.CloudyDivider />
          </S.SingleInfoContainer>
        ))}
      </S.CardContent>
    </S.ContactCardContainer>
  );
};

export default ContactCard;
