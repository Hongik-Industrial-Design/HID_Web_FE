/* eslint-disable react/prop-types */
import { ArtworkSectionContainer } from "./ArtworkSection.styled";

import ArtworkImages from "@pages/Exhibition/Detail/ArtworkSection/ArtworkImages/ArtworkImages";
import VideoPlayer from "@pages/Exhibition/Detail/ArtworkSection/VideoPlayer/VideoPlayer";

const ArtworkSection = ({ fetchedData, currentPage }) => {
  return (
    <ArtworkSectionContainer>
      <VideoPlayer
        videoData={fetchedData?.videos || []}
        currentPage={currentPage}
      />
      <ArtworkImages
        detailImages={fetchedData?.images || []}
        currentPage={currentPage}
      />
    </ArtworkSectionContainer>
  );
};

export default ArtworkSection;
