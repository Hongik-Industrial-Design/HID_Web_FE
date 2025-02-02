export type HoveredOption = 'community' | 'graduation' | '';

export type NavbarProps = {
  isNavbarHovered: boolean;
  enterNavbar: (option: HoveredOption) => void;
  leaveNavbar: () => void;
  isDropdownHover: boolean;
  isHomePage: boolean;
  scrolled: boolean;
};

export type SearchButtonProps = {
  isHomePage: boolean;
  scrolled: boolean;
};

export type SearchButtonTransientProps = {
  $isHomePage: boolean;
  $scrolled: boolean;
};
