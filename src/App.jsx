import { Route, Routes } from "react-router-dom";

import HomePage from "@pages/Home/HomePage";
import FacultyList from "@pages/Faculty/FacultyList/FacultyList";
import ProfessorProfile from "@pages/Faculty/ProfessorProfile/ProfessorProfile";
import GraduationPage from "@pages/Exhibition/Graduation/GraduationPage";
import DetailPage from "@pages/Exhibition/Detail/DetailPage";
import ContactPage from "@pages/Contact/ContactPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/faculty" element={<FacultyList />} />
      <Route path="/faculty/:id" element={<ProfessorProfile />} />
      <Route path="/graduation" element={<GraduationPage />} />
      <Route path="/graduation/work/:id" element={<DetailPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  );
}

export default App;
