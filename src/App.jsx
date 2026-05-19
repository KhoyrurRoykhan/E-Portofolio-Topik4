import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Beranda from './page/Beranda';
import ProfilMahasiswa from './Page/ProfilMahasiswa';
import ArtefakPembelajaran from './page/ArtefakPembelajaran';
// import PenilaianInstrumen from './page/PenilaianInstrumen';
// import ModelGuru from './page/ModelGuru';

function App() {
  return (
    <BrowserRouter>
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