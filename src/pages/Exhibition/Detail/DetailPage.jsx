import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import { DetailPageContainer } from "./DetailPage.styled";

import Layout from "@layout/Layout";
import HeroSection from "@pages/Exhibition/Detail/HeroSection/HeroSection";
import ArtworkSection from "@pages/Exhibition/Detail/ArtworkSection/ArtworkSection";
import TeamMembersSection from "./TeamMemberSection/TeamMembersSection";

const DetailPage = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [artworkInfos, setArtworkInfos] = useState([]);
  const [totalPages, setTotalPages] = useState(0);

  // Extract URL id value & parse string into a number
  const { id } = useParams();
  const currentPage = parseInt(id, 10);

  // Find corresponding Artwork matched with URL id
  const individualArtworkInfos =
    artworkInfos.find((artwork) => artwork.id === currentPage) || {};

  console.log("Individual Artwork Infos: ", individualArtworkInfos);

  // Fetching Entire Artwork Infos
  useEffect(() => {
    const fetchArtworkInfos = async () => {
      try {
        const response = await axios.get("/data/artwork.json");
        const entireArtworkInfos = response.data;

        console.log("Artwork List: ", entireArtworkInfos);
        console.log("Exhibition Total Pages: ", entireArtworkInfos.length);

        setArtworkInfos(entireArtworkInfos);

        // Number of Artworks (artworkInfos is populated, calculate totalPages)
        setTotalPages(entireArtworkInfos.length);
      } catch (error) {
        console.error("Error occured: ", error);
      }
    };

    fetchArtworkInfos();
  }, []);

  return (
    <Layout isHovered={isHovered} setIsHovered={setIsHovered}>
      <DetailPageContainer>
        <HeroSection
          fetchedData={individualArtworkInfos?.heroSection}
          totalPages={totalPages}
          currentPage={currentPage}
        />
        <ArtworkSection
          fetchedData={individualArtworkInfos?.media}
          currentPage={currentPage}
        />
        <TeamMembersSection membersData={individualArtworkInfos?.authorInfos} />
      </DetailPageContainer>
    </Layout>
  );
};

export default DetailPage;
