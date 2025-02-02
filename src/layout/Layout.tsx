import { JSX } from 'react/jsx-runtime';
import { Outlet } from 'react-router';

import Header from './Header/Header';
import Footer from './Footer/Footer';

import * as S from './Layout.styled';

const Layout = (): JSX.Element => {
  return (
    <S.TopLevelContainer>
      <Header />
      <S.Contents>
        <Outlet />
      </S.Contents>
      <Footer />
    </S.TopLevelContainer>
  );
};

export default Layout;
