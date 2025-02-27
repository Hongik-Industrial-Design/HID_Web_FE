import Layout from '@layout/Layout';
import { Route, Routes } from 'react-router';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<div>Home</div>} />
      </Route>
    </Routes>
  );
}

export default App;
