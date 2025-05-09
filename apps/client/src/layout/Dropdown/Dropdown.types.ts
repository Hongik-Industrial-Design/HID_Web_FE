export type HoveredDropdown = 'graduation' | 'community' | '';

export type DropdownProps = {
  hoveredDropdown: string;
  enterDropdown: (type: HoveredDropdown) => void;
  leaveDropdown: () => void;
  isHamburgerClicked: boolean;
  setIsHamburgerClicked: React.Dispatch<React.SetStateAction<boolean>>;
};

export type GraduationTabProps = {
  isRendered: boolean;
  isActive: boolean;
  enterDropdown: (type: HoveredDropdown) => void;
  leaveDropdown: () => void;
};

export type CommunityTabProps = {
  isRendered: boolean;
  isActive: boolean;
  enterDropdown: (type: HoveredDropdown) => void;
  leaveDropdown: () => void;
};
