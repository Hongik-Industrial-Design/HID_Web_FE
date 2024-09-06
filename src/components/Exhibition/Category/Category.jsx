import { useState } from "react";

import { CategoryContainer, DetailedMajor } from "./Category.styled";

const Category = () => {
  const [isSelected, setIsSelected] = useState("All");

  return (
    <>
      <CategoryContainer>
        <DetailedMajor
          $isSelected={isSelected === "All"}
          onClick={() => setIsSelected("All")}
        >
          All
        </DetailedMajor>
        <DetailedMajor
          $isSelected={isSelected === "SmartMobility"}
          onClick={() => setIsSelected("SmartMobility")}
        >
          Smart Mobility
        </DetailedMajor>
        <DetailedMajor
          $isSelected={isSelected === "Spatial"}
          onClick={() => setIsSelected("Spatial")}
        >
          Spatial
        </DetailedMajor>
        <DetailedMajor
          $isSelected={isSelected === "Product"}
          onClick={() => setIsSelected("Product")}
        >
          Product
        </DetailedMajor>
        <DetailedMajor
          $isSelected={isSelected === "Interaction"}
          onClick={() => setIsSelected("Interaction")}
        >
          Interaction
        </DetailedMajor>
      </CategoryContainer>
    </>
  );
};

export default Category;
