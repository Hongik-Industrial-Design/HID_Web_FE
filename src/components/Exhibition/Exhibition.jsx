import { ExhibitionContainer, StickyContainer } from "./Exhibition.styled";

import Category from "./Category/Category";
import Gallery from "./Gallery/Gallery";

const Exhibition = () => {
  return (
    <ExhibitionContainer>
      <StickyContainer>
        <Category />
      </StickyContainer>
      <Gallery />
    </ExhibitionContainer>
  );
};

export default Exhibition;
