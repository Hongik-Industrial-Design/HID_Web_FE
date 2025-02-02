export type HoveredDropdown = 'graduation' | 'community' | '';

export type DropdownProps = {
  hoveredOption: string;
  hoveredDropdown: string;
  enterDropdown: (type: HoveredDropdown) => void;
  leaveDropdown: () => void;
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
