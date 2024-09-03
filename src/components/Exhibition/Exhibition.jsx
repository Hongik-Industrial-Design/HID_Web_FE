import Category from "./Category/Category";
import { ExhibitionContainer } from "./Exhibition.styled";
import Portfolio from "./Portfolio/Portfolio";

const Exhibition = () => {
  return (
    <ExhibitionContainer>
      <Category />
      <Portfolio />
    </ExhibitionContainer>
  );
};

export default Exhibition;
