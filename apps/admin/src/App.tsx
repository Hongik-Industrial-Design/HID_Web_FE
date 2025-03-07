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
        <Route index element={<GraduationExhibition />} />
        <Route path="graduation" element={<GraduationExhibition />} />
        <Route path="exhibition-register" element={<ExhibitionRegister />} />
      </Route>
    </Routes>
  );
}

export default App;
