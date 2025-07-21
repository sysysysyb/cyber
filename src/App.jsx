import MainLayout from '@layouts/MainLayout';
import Home from '@pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="products/:id" element={<div>product 페이지</div>} />
          <Route path="category/:id" element={<div>category 페이지</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
