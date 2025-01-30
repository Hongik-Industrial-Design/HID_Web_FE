import { JSX } from 'react/jsx-runtime';

import * as S from './MemberCard.styled';

const MemberCard = ({ teamMember }): JSX.Element => {
  return (
    <S.MemberCardContainer>
      <S.ProfileImage
        src={`/members/${teamMember.name}.jpg`}
        alt={teamMember.name}
      />
      <S.MemberInfo>
        <div className="name">{teamMember.name}</div>
        <div className="specialty">{teamMember.specialty}</div>
      </S.MemberInfo>
    </S.MemberCardContainer>
  );
};

export default MemberCard;
