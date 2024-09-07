/* eslint-disable react/prop-types */
import {
  MemberCardContainer,
  MemberInfo,
  ProfileImage,
} from "./MemberCard.styled";

const MemberCard = ({ teamMember }) => {
  return (
    <>
      <MemberCardContainer>
        <ProfileImage
          src={`/members/${teamMember.name}.jpg`}
          alt={teamMember.name}
        />
        <MemberInfo>
          <div className="name">{teamMember.name}</div>
          <div className="specialty">{teamMember.specialty}</div>
        </MemberInfo>
      </MemberCardContainer>
    </>
  );
};

export default MemberCard;
