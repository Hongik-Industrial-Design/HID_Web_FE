import { ArtworkSectionContainer } from "./ArtworkSection.styled";

import ArtworkImages from "@pages/Exhibition/Detail/ArtworkSection/ArtworkImages/ArtworkImages";
import VideoPlayer from "@pages/Exhibition/Detail/ArtworkSection/VideoPlayer/VideoPlayer";

const ArtworkSection = () => {
  return (
    <ArtworkSectionContainer>
      <VideoPlayer />
      <ArtworkImages />
    </ArtworkSectionContainer>
  );
};

export default ArtworkSection;
