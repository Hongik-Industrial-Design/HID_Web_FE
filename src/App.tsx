import { Route, Routes } from 'react-router';

import Layout from '@layout/Layout';

import HomePage from '@pages/Home/HomePage';
import FacultyList from '@pages/Faculty/FacultyList/FacultyList';
import ProfessorProfile from '@pages/Faculty/ProfessorProfile/ProfessorProfile';
import GraduationExhibition from '@pages/Exhibition/Graduation/GraduationExhibition';
import StudentExhibiton from '@pages/Exhibition/Student/StudentExhibition';
import ExhibitionDetail from '@pages/Exhibition/Detail/ExhibitionDetail';
import CommunityPage from '@pages/Community/CommunityPage';
import NoticeList from '@pages/Community/Notice/List/NoticeList';
import NewsEventList from '@pages/Community/NewsEvent/List/NewsEventList';
import ContactPage from '@pages/Contact/ContactPage';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />

        <Route path="faculty">
          <Route index element={<FacultyList />} />
          <Route path=":id" element={<ProfessorProfile />} />
        </Route>

        <Route path="graduation">
          <Route index element={<GraduationExhibition />} />
          <Route path="2024" element={<GraduationExhibition />} />
          <Route path="work/:id" element={<ExhibitionDetail />} />
        </Route>

        <Route path="student">
          <Route index element={<StudentExhibiton />} />
          <Route path="work/:id" element={<ExhibitionDetail />} />
        </Route>

        <Route path="community">
          <Route index element={<CommunityPage />} />
          <Route path="notice" element={<NoticeList />} />
          <Route path="news-event" element={<NewsEventList />} />
        </Route>

        <Route path="contact" element={<ContactPage />} />
      </Route>
    </Routes>
  );
}

export default App;
