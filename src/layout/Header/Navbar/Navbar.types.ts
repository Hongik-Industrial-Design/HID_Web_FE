export type NavbarProps = {
  isNavbarHovered: boolean;
  enterNavbar: (option: string) => void;
  leaveNavbar: () => void;
  isDropdownOpen: boolean;
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
