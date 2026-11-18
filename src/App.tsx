import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { AcupuncturePage } from './pages/AcupuncturePage';
import { ChiropracticPage } from './pages/ChiropracticPage';
import { HomePage } from './pages/HomePage';
import { NaturopathyPage } from './pages/NaturopathyPage';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<HomePage />} path="/" />
        <Route element={<Navigate replace to="/" />} path="/home" />
        <Route element={<NaturopathyPage />} path="/naturopathy" />
        <Route element={<AcupuncturePage />} path="/acupuncture" />
        <Route element={<ChiropracticPage />} path="/chiropractic" />
        <Route element={<Navigate replace to="/" />} path="*" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
