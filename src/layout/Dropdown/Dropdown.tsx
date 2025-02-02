import { JSX } from 'react/jsx-runtime';

import { DropdownProps } from './Dropdown.types';

import GraduationTab from './Graduation/GraduationTab';
import CommunityTab from './Community/CommunityTab';

import * as S from './Dropdown.styled';

const Dropdown = ({
  hoveredOption,
  hoveredDropdown,
  enterDropdown,
  leaveDropdown,
}: DropdownProps): JSX.Element => {
  return (
    <>
      <S.DropdownBackground
        $isRendered={hoveredOption !== ''}
        $isActive={hoveredDropdown !== ''}
      />
      <S.DropdownContainer
        $isRendered={hoveredOption !== ''}
        $isActive={hoveredDropdown !== ''}
      >
        {(hoveredOption === 'graduation' ||
          hoveredDropdown === 'graduation') && (
          <GraduationTab
            isRendered={hoveredOption === 'graduation'}
            isActive={hoveredDropdown === 'graduation'}
            enterDropdown={enterDropdown}
            leaveDropdown={leaveDropdown}
          />
        )}
        {(hoveredOption === 'community' || hoveredDropdown === 'community') && (
          <CommunityTab
            isRendered={hoveredOption === 'community'}
            isActive={hoveredDropdown === 'community'}
            enterDropdown={enterDropdown}
            leaveDropdown={leaveDropdown}
          />
        )}
      </S.DropdownContainer>
    </>
  );
};

export default Dropdown;
