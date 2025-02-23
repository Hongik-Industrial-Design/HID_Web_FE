import { CommunityLeftArrow, CommunityRightArrow } from '@icons/Arrow';

import * as S from './NextPreviousCommunity.styled';
import { AlarmIcon } from '@icons/Alarm';

interface NextPreviousPostInfo {
  title: string;
  important: boolean;
}

interface NextPreviousCommunityProps {
  previousPostTitle?: NextPreviousPostInfo;
  nextPostTitle?: NextPreviousPostInfo;
}

const NextPreviousCommunity = ({
  previousPostTitle,
  nextPostTitle,
}: NextPreviousCommunityProps) => {
  return (
    <S.NextPreviousCommunityContainer>
      <S.PreviousButtonContainer>
        <S.PreviousButton>
          <S.PreviousButtonIcon>
            <CommunityLeftArrow />
          </S.PreviousButtonIcon>
          Previous
        </S.PreviousButton>
        |
        <S.PreviousPostTitle>
          {previousPostTitle?.important && (
            <S.ImportantIconBox>
              <AlarmIcon />
            </S.ImportantIconBox>
          )}
          <span className="post-title">{previousPostTitle?.title}</span>
        </S.PreviousPostTitle>
      </S.PreviousButtonContainer>

      <S.PreviousButtonContainer>
        <S.NextPostTitle>
          {nextPostTitle?.important && (
            <S.ImportantIconBox>
              <AlarmIcon />
            </S.ImportantIconBox>
          )}
          <span className="post-title">{nextPostTitle?.title}</span>
        </S.NextPostTitle>
        |
        <S.PreviousButton>
          Next
          <S.PreviousButtonIcon>
            <CommunityRightArrow />
          </S.PreviousButtonIcon>
        </S.PreviousButton>
      </S.PreviousButtonContainer>
    </S.NextPreviousCommunityContainer>
  );
};

export default NextPreviousCommunity;
