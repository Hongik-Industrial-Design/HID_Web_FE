import * as S from './MobileDropdown.styled';

const MobileDropdown = ({
  setIsHamburgerClicked,
}: {
  setIsHamburgerClicked: (isHamburgerClicked: boolean) => void;
}) => {
  const GNB_OPTIONS = [
    {
      label: 'Graduation Exhibition',
      link: '/graduation/2024',
    },
    {
      label: 'Student Exhibition',
      link: '/student/2024',
    },
    {
      label: 'Faculty',
      link: '/faculty',
    },
    {
      label: 'Contact',
      link: '/contact',
    },
  ];

  return (
    <S.MobileDropdownContainer>
      {GNB_OPTIONS.map((option, index) => (
        <S.MobileDropdownItem key={index}>
          <S.MobileDropdownItemLink
            to={option.link}
            onClick={() => setIsHamburgerClicked(false)}
          >
            {option.label}
            <span>.</span>
          </S.MobileDropdownItemLink>
          <S.Divider />
        </S.MobileDropdownItem>
      ))}
    </S.MobileDropdownContainer>
  );
};

export default MobileDropdown;
