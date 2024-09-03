import Category from "./Category/Category";
import { ExhibitionContainer } from "./Exhibition.styled";
import Gallery from "./Gallery/Gallery";

const Exhibition = () => {
  return (
    <ExhibitionContainer>
      <Category />
      <Gallery />
    </ExhibitionContainer>
  );
};

export default Exhibition;
