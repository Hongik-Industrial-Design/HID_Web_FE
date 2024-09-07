import { ArtworkSectionContainer } from "./ArtworkSection.styled";

import ArtworkImages from "@components/ArtworkImages/ArtworkImages";
import VideoPlayer from "@components/VideoPlayer/VideoPlayer";

const ArtworkSection = () => {
  return (
    <ArtworkSectionContainer>
      <VideoPlayer />
      <ArtworkImages />
    </ArtworkSectionContainer>
  );
};

export default ArtworkSection;
