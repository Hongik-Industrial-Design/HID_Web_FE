import { JSX } from 'react/jsx-runtime';
import { Outlet, useLocation } from 'react-router';

import Header from './Header/Header';
import Footer from './Footer/Footer';

import * as S from './Layout.styled';

const Layout = (): JSX.Element => {
  const location = useLocation();

  const noPaddingTopRoutes = ['/'];
  const currentPath = location.pathname;

  const pathSegments = currentPath.split('/');
  // 전시 프리뷰(/gradution/2025)와 전시 상세(/gradution/2025/1) 페이지에 대한 path 분기 처리
  const isGraduationPreviewPage =
    pathSegments[1] === 'graduation' && pathSegments.length === 3;

  const isNoPaddingTop =
    noPaddingTopRoutes.includes(currentPath) || isGraduationPreviewPage;

  return (
    <S.TopLevelContainer>
      <Header />

      <S.Contents $isNoPaddingTop={isNoPaddingTop}>
        <Outlet />
      </S.Contents>

      <Footer />
    </S.TopLevelContainer>
  );
};

export default Layout;
