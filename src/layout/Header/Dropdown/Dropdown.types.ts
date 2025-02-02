export type DropdownProps = {
  hoveredOption: string;
  isDropdownOpen: boolean;
  enterDropdown: () => void;
  leaveDropdown: () => void;
};

export type GraduationTabProps = {
  timeline: number[];
  isNavbarHovered: boolean;
  isDropdownOpen: boolean;
};

export type DropdownTransientProps = {
  $isNavbarHovered: boolean;
  $isDropdownOpen: boolean;
};
