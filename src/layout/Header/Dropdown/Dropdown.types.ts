export type DropdownProps = {
  isNavbarHovered: boolean;
  isDropdownOpen: boolean;
  enterDropdown: () => void;
  leaveDropdown: () => void;
};

export type ExhibitionTabProps = {
  exhibitonType: string;
  timeline: number[];
  isNavbarHovered: boolean;
  isDropdownOpen: boolean;
};

export type DropdownTransientProps = {
  $isNavbarHovered: boolean;
  $isDropdownOpen: boolean;
};
