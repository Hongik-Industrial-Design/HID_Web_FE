import { Route, Routes } from 'react-router';

import Layout from '@layout/Layout';

import GraduationExhibition from '@pages/Exhibition/Graduation/GraduationExhibition';
import ExhibitionRegister from '@pages/Exhibition/Register/ExhibitionRegister';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        {/* 개발 편의성을 위한 임시 Route */}
        <Route index element={<h1>Admin Home</h1>} />
        <Route path="graduation" element={<GraduationExhibition />} />
        <Route path="exhibition-register" element={<ExhibitionRegister />} />
      </Route>
    </Routes>
  );
}

export default App;
