import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import AdoptaPage from './pages/AdoptaPage';
import PetDetailPage from './pages/PetDetailPage';
import GiveAdoptionPage from './pages/GiveAdoptionPage';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/adopta" element={<AdoptaPage />} />
        <Route path="/mascota/:id" element={<PetDetailPage />} />
        <Route path="/dar-en-adopcion" element={<GiveAdoptionPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
