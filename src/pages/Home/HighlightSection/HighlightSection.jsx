import { useEffect, useState } from "react";
import axios from "axios";

import FeatureCard from "../FeatureCard/FeatureCard";
import { HighlightSectionContainer } from "./HighlightSection.styled";

const HighlightSection = () => {
  const [highlights, setHighlights] = useState([]);

  // Fetching highlight section data
  useEffect(() => {
    const fetchHighlightData = async () => {
      try {
        const response = await axios.get("/data/highlights.json");
        const highlightData = response.data;
        console.log(highlightData);

        setHighlights(highlightData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchHighlightData();
  }, []);

  return (
    <HighlightSectionContainer>
      {highlights.map((highlight) => (
        <FeatureCard key={highlight.id} cardData={highlight} />
      ))}
    </HighlightSectionContainer>
  );
};

export default HighlightSection;
