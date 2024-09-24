/* eslint-disable react/prop-types */
import { useState } from "react";
import { useLocation } from "react-router-dom";

import { CategoryContainer, DetailedMajor } from "./Category.styled";

const Category = ({ handleFilter }) => {
  const [isSelected, setIsSelected] = useState("All");

  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <>
      <CategoryContainer $currentPath={currentPath}>
        <DetailedMajor
          $isSelected={isSelected === "All"}
          onClick={() => {
            setIsSelected("All");
            handleFilter("All");
          }}
        >
          All
        </DetailedMajor>
        <DetailedMajor
          $isSelected={isSelected === "Smart Mobility"}
          onClick={() => {
            setIsSelected("Smart Mobility");
            handleFilter("Smart Mobility");
          }}
        >
          Smart Mobility
        </DetailedMajor>
        <DetailedMajor
          $isSelected={isSelected === "Spatial"}
          onClick={() => {
            setIsSelected("Spatial");
            handleFilter("Spatial");
          }}
        >
          Spatial
        </DetailedMajor>
        <DetailedMajor
          $isSelected={isSelected === "Product"}
          onClick={() => {
            setIsSelected("Product");
            handleFilter("Product");
          }}
        >
          Product
        </DetailedMajor>
        <DetailedMajor
          $isSelected={isSelected === "Interaction"}
          onClick={() => {
            setIsSelected("Interaction");
            handleFilter("Interaction");
          }}
        >
          Interaction
        </DetailedMajor>
      </CategoryContainer>
    </>
  );
};

export default Category;
