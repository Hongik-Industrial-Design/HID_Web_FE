import { Navigate, Route, Routes } from 'react-router';

import Layout from '@layout/Layout';

import AdminLogin from '@pages/Login/AdminLogin';
import AdminHome from '@pages/Home/AdminHome';

import GraduationExhibition from '@pages/Exhibition/Graduation/GraduationExhibition';
import StudentExhibition from '@pages/Exhibition/Student/StudentExhibition';

import GraduationExhibitionRegister from '@pages/Exhibition/Graduation/Register/GraduationExhibitionRegister';
import StudentExhibitionRegister from '@pages/Exhibition/Student/Register/StudentExhibitionRegister';
import SuccessPage from '@pages/Success/SuccessPage';

function App() {
  return (
    <Routes>
      <Route path="login" element={<AdminLogin />} />

      <Route element={<Layout />}>
        <Route index element={<Navigate to="home" replace />} />
        <Route path="home" element={<AdminHome />} />

        <Route path="graduation">
          <Route index element={<GraduationExhibition />} />

          <Route path="register">
            <Route index element={<GraduationExhibitionRegister />} />
            <Route path="success" element={<SuccessPage />} />
          </Route>
        </Route>

        <Route path="student">
          <Route index element={<StudentExhibition />} />

          <Route path="register">
            <Route index element={<StudentExhibitionRegister />} />
            <Route path="success" element={<SuccessPage />} />
          </Route>
        </Route>

        <Route path="*" element={<h3>On Process...</h3>} />
      </Route>
    </Routes>
  );
}

export default App;
