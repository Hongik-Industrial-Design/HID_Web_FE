import { useEffect, useState } from "react";
import axios from "axios";

import { ArtworkImageContainer } from "./ArtworkImages.styled";
import Image from "./Image/Image";

const ArtworkImages = () => {
  const [artwork, setArtwork] = useState(null);

  useEffect(() => {
    const fetchArtworkData = async () => {
      try {
        const response = await axios.get("/data/artwork.json");
        console.log(response);

        const data = response.data;
        console.log(data);

        setArtwork(data);
      } catch (error) {
        console.error("Error fetching local JSON: ", error);
      }
    };

    fetchArtworkData();
  }, []);

  if (!artwork) return <div>Loading...</div>;

  return (
    <>
      <ArtworkImageContainer>
        {artwork.images.map((image) => (
          <Image key={image.id} image={image} />
        ))}
      </ArtworkImageContainer>
    </>
  );
};

export default ArtworkImages;
