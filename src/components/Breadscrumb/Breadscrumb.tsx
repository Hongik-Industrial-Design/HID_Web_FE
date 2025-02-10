import { JSX } from 'react/jsx-runtime';
import { Link, Location, useLocation } from 'react-router';

import { BreadscrumbArrow } from '@icons/BreadscrumbArrow';

import * as S from './Breadscrumb.styled';

type BreadscrumbProps = {
  paths: {
    content: string;
    path: string;
  }[];
  currentPage: string;
};

const Breadscrumb = ({ paths, currentPage }: BreadscrumbProps): JSX.Element => {
  const location: Location = useLocation();

  const detailPagePaths = ['/community/notice', '/community/news-event'];
  const isDetailPage = detailPagePaths.some((path) =>
    location.pathname.includes(path)
  );

  return (
    <S.BreadscrumbContainer $isDetailPage={isDetailPage}>
      {paths.map((path, index) => (
        <S.BreadScrumbUnit key={index}>
          <Link to={path.path}>
            <span>{path.content}</span>
          </Link>
          <BreadscrumbArrow />
        </S.BreadScrumbUnit>
      ))}
      <span className="current-page">{currentPage}</span>
    </S.BreadscrumbContainer>
  );
};

export default Breadscrumb;
