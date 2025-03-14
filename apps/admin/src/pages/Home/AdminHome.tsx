import { JSX } from 'react/jsx-runtime';
import * as S from './AdminHome.styled';

const AdminHome = (): JSX.Element => {
  return (
    <S.AdminHomeContainer>
      <S.AdminHomeTitle>Welcome to HID Web Admin!</S.AdminHomeTitle>
    </S.AdminHomeContainer>
  );
};

export default AdminHome;
