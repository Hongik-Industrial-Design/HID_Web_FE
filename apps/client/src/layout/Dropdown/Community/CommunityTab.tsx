import { JSX } from 'react/jsx-runtime';

import { CommunityTabProps } from '../Dropdown.types';

import * as S from './CommunityTab.styled';

const CommunityTab = ({
  isRendered,
  isActive,
  enterDropdown,
  leaveDropdown,
}: CommunityTabProps): JSX.Element => {
  return (
    <S.CommunityTabContainer
      $isRendered={isRendered}
      $isActive={isActive}
      onMouseEnter={() => enterDropdown('community')}
      onMouseLeave={() => leaveDropdown()}
    >
      <S.CommunityMenuList>
        <S.CommunityMenu>
          <S.CommunityMenuLink to="/community">Notice</S.CommunityMenuLink>
        </S.CommunityMenu>
        <S.CommunityMenu>
          <S.CommunityMenuLink to="/community">
            News & Events
          </S.CommunityMenuLink>
        </S.CommunityMenu>
      </S.CommunityMenuList>
    </S.CommunityTabContainer>
  );
};

export default CommunityTab;
