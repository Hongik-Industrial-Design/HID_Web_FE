import { BreadscrumbContainer } from "./Breadscrumb.styled";

import forwardArrow from "@assets/arrows/forward-arrow_triangle.svg";

const Breadscrumb = () => {
  return (
    <>
      <BreadscrumbContainer>
        <span>Graduation Exhibition</span>
        <img src={forwardArrow} alt="forward-arrow" className="forward-arrow" />
        <span>2024</span>
        <img src={forwardArrow} alt="forward-arrow" className="forward-arrow" />
        <span className="current-page">View Detail</span>
      </BreadscrumbContainer>
    </>
  );
};

export default Breadscrumb;
