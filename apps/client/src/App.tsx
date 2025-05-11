import { Route, Routes } from 'react-router';

import Layout from '@layout/Layout';

import HomePage from '@pages/Home/HomePage';
import FacultyList from '@pages/Faculty/FacultyList/FacultyList';
import ProfessorProfile from '@pages/Faculty/ProfessorProfile/ProfessorProfile';

import GraduationExhibition from '@pages/Exhibition/Graduation/GraduationExhibition';
import StudentExhibition from '@pages/Exhibition/Student/StudentExhibition';
import StudentExhibitionDetail from '@pages/Exhibition/Student/StudentExhibitionDetail';

import CommunityPage from '@pages/Community/CommunityPage';
import NoticeList from '@pages/Community/Notice/List/NoticeList';
import NewsEventList from '@pages/Community/NewsEvent/List/NewsEventList';
import BoardDetailPage from '@pages/Community/BoardDetail/BoardDetailPage';

import ContactPage from '@pages/Contact/ContactPage';
import GraduationExhibitionDetail from '@pages/Exhibition/Graduation/GraduationExhibitionDetail';

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
          <Route path=":year" element={<GraduationExhibition />} />
          <Route path=":year/:id" element={<GraduationExhibitionDetail />} />
        </Route>

        <Route path="student">
          <Route path=":year" element={<StudentExhibition />} />
          <Route path=":year/:id" element={<StudentExhibitionDetail />} />
        </Route>

        <Route path="community">
          <Route index element={<CommunityPage />} />

          <Route path="notice">
            <Route index element={<NoticeList />} />
            <Route path=":id" element={<BoardDetailPage />} />
          </Route>

          <Route path="news-event">
            <Route index element={<NewsEventList />} />
            <Route path=":id" element={<BoardDetailPage />} />
          </Route>
        </Route>

        <Route path="contact" element={<ContactPage />} />
      </Route>
    </Routes>
  );
}

export default App;
