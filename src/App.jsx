import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { AboutPage } from './pages/AboutPage';
import { AcupuncturePage } from './pages/AcupuncturePage';
import { ChiropracticPage } from './pages/ChiropracticPage';
import { ContactPage } from './pages/ContactPage';
import { ConditionsPage } from './pages/ConditionsPage';
import { HomePage } from './pages/HomePage';
import { NaturopathyPage } from './pages/NaturopathyPage';
import { WellnessServicePage } from './pages/WellnessServicePage';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<HomePage />} path="/" />
        <Route element={<Navigate replace to="/" />} path="/home" />
        <Route element={<AboutPage />} path="/about" />
        <Route element={<ContactPage />} path="/contact" />
        <Route element={<ConditionsPage />} path="/conditions" />
        <Route element={<NaturopathyPage />} path="/naturopathy" />
        <Route element={<WellnessServicePage serviceKey="yoga" />} path="/yoga" />
        <Route element={<WellnessServicePage serviceKey="diet" />} path="/diet" />
        <Route element={<AcupuncturePage />} path="/acupuncture" />
        <Route element={<WellnessServicePage serviceKey="massage" />} path="/massage" />
        <Route element={<WellnessServicePage serviceKey="cupping" />} path="/cupping" />
        <Route element={<ChiropracticPage />} path="/chiropractic" />
        <Route element={<WellnessServicePage serviceKey="physiotherapy" />} path="/physiotherapy" />
        <Route element={<Navigate replace to="/" />} path="*" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
