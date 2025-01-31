export type HeaderTransientProps = {
  $isNavbarHovered: boolean;
  $isDropdownOpen: boolean;
  $isHomePage: boolean;
  $scrolled: boolean;
};

export type HeaderProps = {
  isNavbarHovered: boolean;
  handleNavbarHover: () => void;
};
