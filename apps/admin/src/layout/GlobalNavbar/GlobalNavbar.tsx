import { JSX } from 'react/jsx-runtime';
import { useState } from 'react';

import { GNBList } from '@constants/GNBList';
import { HIDLogoAdmin } from '@icons/HIDLogo';

import * as S from './GlobalNavbar.styled';

const GlobalNavbar = (): JSX.Element => {
  const [selectedOption, setSelectedOption] = useState<string>('');

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
  };

  return (
    <S.GlobalNavbarContainer>
      <S.HIDAdminLogoLink href="/">
        <HIDLogoAdmin />
      </S.HIDAdminLogoLink>
      <S.GlobalNavbarOptionList>
        {GNBList.map((option) => (
          <S.GlobalNavbarOption
            key={option.name}
            $isSelected={selectedOption === option.name}
            onClick={() => handleOptionClick(option.name)}
          >
            <S.GlobalNavbarOptionLink to={`/${option.link}`}>
              {option.name}
            </S.GlobalNavbarOptionLink>
          </S.GlobalNavbarOption>
        ))}
      </S.GlobalNavbarOptionList>
    </S.GlobalNavbarContainer>
  );
};

export default GlobalNavbar;
