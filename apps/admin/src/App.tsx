import { Route, Routes } from 'react-router';

import Layout from '@layout/Layout';

import AdminLogin from '@pages/Login/AdminLogin';

import GraduationExhibition from '@pages/Exhibition/Graduation/GraduationExhibition';
import StudentExhibition from '@pages/Exhibition/Student/StudentExhibition';

import GraduationExhibitionRegister from '@pages/Exhibition/Graduation/Register/GraduationExhibitionRegister';
import StudentExhibitionRegister from '@pages/Exhibition/Student/Register/StudentExhibitionRegister';
import SuccessPage from '@pages/Success/SuccessPage';

function App() {
  return (
    <Routes>
      <Route path="login" element={<AdminLogin />} />
      <Route path="success" element={<SuccessPage />} />

      <Route element={<Layout />}>
        <Route index element={<div>Admin Home</div>} />

        <Route path="graduation">
          <Route index element={<GraduationExhibition />} />
          <Route path="register" element={<GraduationExhibitionRegister />} />
        </Route>

        <Route path="student">
          <Route index element={<StudentExhibition />} />
          <Route path="register" element={<StudentExhibitionRegister />} />
        </Route>

        <Route path="*" element={<div>404</div>} />
      </Route>
    </Routes>
  );
}

export default App;
