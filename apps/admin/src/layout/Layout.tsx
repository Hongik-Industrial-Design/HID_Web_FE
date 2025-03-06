import { JSX } from 'react/jsx-runtime';
import { Outlet } from 'react-router';

import GlobalNavbar from './GlobalNavbar/GlobalNavbar';

import * as S from './Layout.styled';

const Layout = (): JSX.Element => {
  return (
    <S.LayoutWrapper>
      <GlobalNavbar />
      <S.ContentWrapper>
        <Outlet />
      </S.ContentWrapper>
    </S.LayoutWrapper>
  );
};

export default Layout;
