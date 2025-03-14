import { JSX } from 'react/jsx-runtime';
import { Outlet, useLocation } from 'react-router';

import GlobalNavbar from './GlobalNavbar/GlobalNavbar';

import * as S from './Layout.styled';

const Layout = (): JSX.Element => {
  const loaction = useLocation();

  const isSuccessPage = loaction.pathname.includes('success');

  return (
    <>
      {!isSuccessPage ? (
        <S.LayoutWrapper>
          <GlobalNavbar />
          <S.ContentWrapper>
            <Outlet />
          </S.ContentWrapper>
        </S.LayoutWrapper>
      ) : (
        <Outlet />
      )}
    </>
  );
};

export default Layout;
