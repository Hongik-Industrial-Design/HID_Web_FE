import { JSX } from 'react/jsx-runtime';
import { Link } from 'react-router';

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
  return (
    <S.BreadscrumbContainer>
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
