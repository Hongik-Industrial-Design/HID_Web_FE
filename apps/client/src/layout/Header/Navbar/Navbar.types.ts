export type GNBOptions = 'community' | 'graduation' | '';

export type NavbarProps = {
  handleSearchTab: () => void;
  isHomePage: boolean;
  scrolled: boolean;
  handleGNBClick: () => void;
};

export type SearchButtonProps = {
  isHomePage: boolean;
  scrolled: boolean;
};

export type SearchButtonTransientProps = {
  $isHomePage: boolean;
  $scrolled: boolean;
};
