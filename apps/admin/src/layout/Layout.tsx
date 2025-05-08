import { JSX } from 'react/jsx-runtime';
import { Navigate, Outlet, useLocation } from 'react-router';

import GlobalNavbar from './GlobalNavbar/GlobalNavbar';

import * as S from './Layout.styled';

const Layout = (): JSX.Element => {
  const loaction = useLocation();

  const isSuccessPage = loaction.pathname.includes('success');

  const token = localStorage.getItem('accessToken');

  return (
    <>
      {!isSuccessPage ? (
        <S.LayoutWrapper>
          <GlobalNavbar />
          <S.ContentWrapper>
            {token ? <Outlet /> : <Navigate to="/login" />}
          </S.ContentWrapper>
        </S.LayoutWrapper>
      ) : (
        <Outlet />
      )}
    </>
  );
};

export default Layout;
