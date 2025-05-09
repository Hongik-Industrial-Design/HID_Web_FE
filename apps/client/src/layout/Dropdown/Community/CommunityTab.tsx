import { JSX } from 'react/jsx-runtime';

import { CommunityTabProps } from '../Dropdown.types';

import * as S from './CommunityTab.styled';
import { useDropdownStore } from '@stores/useDropdownStore';

const CommunityTab = ({
  isRendered,
  isActive,
}: CommunityTabProps): JSX.Element => {
  const { setHoveredNavbarOption } = useDropdownStore();

  return (
    <S.CommunityTabContainer
      $isRendered={isRendered}
      $isActive={isActive}
      onMouseEnter={() => setHoveredNavbarOption('community')}
      onMouseLeave={() => setHoveredNavbarOption('')}
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
