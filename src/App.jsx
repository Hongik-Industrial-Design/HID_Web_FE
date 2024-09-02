import Header from "@components/Header/Header";
import MainBanner from "@components/MainBanner/MainBanner";
import { useState } from "react";

function App() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <Header setIsHovered={setIsHovered} isHovered={isHovered} />
      <MainBanner />
    </>
  );
}

export default App;
