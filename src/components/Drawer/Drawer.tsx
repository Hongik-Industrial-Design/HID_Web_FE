import { CloseIcon } from '@icons/Close';

import * as S from './Drawer.styled';

type DrawerProps = {
  isOpen: boolean;
  handleDrawerClose: () => void;
  professorName: string;
  professorBrief: string;
};

const Drawer = ({
  isOpen,
  handleDrawerClose,
  professorName,
  professorBrief,
}: DrawerProps) => {
  return (
    <>
      <S.DrawerContainer $isOpen={isOpen}>
        {/* Header */}
        <S.DrawerHeader>
          <S.DrawerCloseButton onClick={handleDrawerClose}>
            <CloseIcon />
          </S.DrawerCloseButton>
        </S.DrawerHeader>
        {/* Contents */}
        <S.DrawerContents>
          <S.DrawerTitle>{professorName}</S.DrawerTitle>
          <S.DrawerDescription>{professorBrief}</S.DrawerDescription>
        </S.DrawerContents>
      </S.DrawerContainer>
      {/* Background */}
      <S.DrawerBackground $isOpen={isOpen} onClick={handleDrawerClose} />
    </>
  );
};

export default Drawer;
