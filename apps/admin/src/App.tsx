import { Route, Routes } from 'react-router';

import Layout from '@layout/Layout';

import ExhibitionRegister from '@pages/Exhibition/Register/ExhibitonRegister';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        {/* 개발 편의성을 위한 임시 Route */}
        <Route index element={<h1>Admin Home</h1>} />
        <Route path="graduation" element={<ExhibitionRegister />} />
      </Route>
    </Routes>
  );
}

export default App;
