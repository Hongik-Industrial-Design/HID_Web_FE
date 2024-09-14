import { Route, Routes } from "react-router-dom";

import HomePage from "@pages/Home/HomePage";
import GraduationPage from "@pages/Exhibition/Graduation/GraduationPage";
import DetailPage from "@pages/Exhibition/Detail/DetailPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/graduation" element={<GraduationPage />} />
      <Route path="/graduation/work/:id" element={<DetailPage />} />
    </Routes>
  );
}

export default App;
