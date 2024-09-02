import { CategoryContainer, DetailedMajor } from "./Category.styled";

const Category = () => {
  return (
    <>
      <CategoryContainer>
        <DetailedMajor>All</DetailedMajor>
        <DetailedMajor>Smart Mobility</DetailedMajor>
        <DetailedMajor>Spatial</DetailedMajor>
        <DetailedMajor>Product</DetailedMajor>
        <DetailedMajor>Interaction</DetailedMajor>
      </CategoryContainer>
    </>
  );
};

export default Category;
