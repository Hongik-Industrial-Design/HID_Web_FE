import { Route, Routes } from 'react-router';

import Layout from '@layout/Layout';

import AdminLogin from '@pages/Login/AdminLogin';

import GraduationExhibition from '@pages/Exhibition/Graduation/GraduationExhibition';
import ExhibitionRegister from '@pages/Exhibition/Register/ExhibitionRegister';

function App() {
  return (
    <Routes>
      <Route path="login" element={<AdminLogin />} />

      <Route element={<Layout />}>
        <Route index element={<div>Admin Home</div>} />

        <Route path="graduation">
          <Route index element={<GraduationExhibition />} />
          <Route path="register" element={<ExhibitionRegister />} />
        </Route>

        <Route path="*" element={<div>404</div>} />
      </Route>
    </Routes>
  );
}

export default App;
