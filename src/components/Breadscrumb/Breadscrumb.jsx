/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

import { BreadscrumbContainer, BreadScrumbUnit } from "./Breadscrumb.styled";

import forwardArrow from "@assets/arrows/forward-arrow_triangle.svg";

const Breadscrumb = ({ paths, currentPage }) => {
  return (
    <BreadscrumbContainer>
      {paths.map((path, index) => (
        <BreadScrumbUnit key={index}>
          <Link to={path.path}>
            <span>{path.content}</span>
          </Link>
          <img
            src={forwardArrow}
            alt="forward-arrow"
            className="forward-arrow"
          />
        </BreadScrumbUnit>
      ))}
      <span className="current-page">{currentPage}</span>
    </BreadscrumbContainer>
  );
};

export default Breadscrumb;
