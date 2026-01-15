import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import UnternehmenPage from './pages/UnternehmenPage';
import FuehrungskraeftequalifizierungPage from './pages/FuehrungskraeftequalifizierungPage';
import ImpressumPage from './pages/ImpressumPage';
import DatenschutzPage from './pages/DatenschutzPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <BrowserRouter basename="/web2026">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/unternehmen" element={<UnternehmenPage />} />

        {/* Details-Seite */}
        <Route
          path="/fuehrungskraeftequalifizierung"
          element={<FuehrungskraeftequalifizierungPage />}
        />

        {/* Rechtliches */}
        <Route path="/impressum" element={<ImpressumPage />} />
        <Route path="/datenschutz" element={<DatenschutzPage />} />

        {/* Verhindert „leere Seite" bei Tippfehlern */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
