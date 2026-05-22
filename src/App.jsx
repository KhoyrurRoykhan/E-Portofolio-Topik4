import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Beranda from './page/Beranda';
import ProfilMahasiswa from './page/ProfilMahasiswa';
import ArtefakPembelajaran from './page/ArtefakPembelajaran';
import ScrollToTop from './components/ScrollToTop';
// import PenilaianInstrumen from './page/PenilaianInstrumen';
// import ModelGuru from './page/ModelGuru';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Beranda />} />
        <Route path="/profil" element={<ProfilMahasiswa />} />
        <Route path="/artefak" element={<ArtefakPembelajaran />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;