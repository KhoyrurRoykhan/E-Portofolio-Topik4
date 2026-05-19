// src/page/ArtefakPembelajaran.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  BookOpen,
  MonitorPlay,
  Gamepad2,
  ClipboardCheck,
  Camera,
  FileText,
  ExternalLink,
  Download,
  ChevronRight,
  GraduationCap,
  School,
} from 'lucide-react';

const ArtefakPembelajaran = () => {
  const [activeTab, setActiveTab] = useState('rpp');

  // Data RPP per siklus
  const rppData = {
    siklus1: [
      { judul: 'RPP Siklus 1 - Pertemuan 1', mapel: 'Informatika', topik: 'Algoritma Dasar', link: '#', embed: null },
      { judul: 'RPP Siklus 1 - Pertemuan 2', mapel: 'Informatika', topik: 'Struktur Data', link: '#', embed: null },
      { judul: 'RPP Siklus 1 - Pertemuan 3', mapel: 'Informatika', topik: 'Flowchart', link: '#', embed: null },
    ],
    siklus2: [
      { judul: 'RPP Siklus 2 - Pertemuan 1', mapel: 'Informatika', topik: 'Pemrograman Dasar', link: '#', embed: null },
      { judul: 'RPP Siklus 2 - Pertemuan 2', mapel: 'Informatika', topik: 'Variabel & Tipe Data', link: '#', embed: null },
      { judul: 'RPP Siklus 2 - Pertemuan 3', mapel: 'Informatika', topik: 'Percabangan', link: '#', embed: null },
    ],
    siklus3: [
      { judul: 'RPP Siklus 3 - Pertemuan 1', mapel: 'Informatika', topik: 'Jaringan Komputer', link: '#', embed: null },
      { judul: 'RPP Siklus 3 - Pertemuan 2', mapel: 'Informatika', topik: 'Keamanan Data', link: '#', embed: null },
    ],
  };

  // Media Flipbook
  const flipbooks = [
    {
      judul: 'Flipbook - Algoritma & Pemrograman',
      deskripsi: 'Media interaktif pengenalan algoritma menggunakan flipbook digital',
      link: 'https://example.com/flipbook1',
      embed: null,
    },
    {
      judul: 'Flipbook - Jaringan Komputer',
      deskripsi: 'Flipbook visual tentang topologi dan protokol jaringan',
      link: 'https://example.com/flipbook2',
      embed: null,
    },
  ];

  // Game Scratch (hasil kerja siswa)
  const scratchGames = [
    {
      judul: 'Game Labirin Algoritma',
      deskripsi: 'Dibuat oleh siswa kelas 7 - simulasi logika pemrograman',
      embedUrl: 'https://scratch.mit.edu/projects/123456/embed',
      link: '#',
    },
    {
      judul: 'Game Simulasi Jaringan',
      deskripsi: 'Simulasi pengiriman paket data dalam jaringan',
      embedUrl: 'https://scratch.mit.edu/projects/789012/embed',
      link: '#',
    },
  ];

  // Lembar Penilaian GP dan DPL
  const penilaianDocs = [
    { judul: 'Lampiran 7 - Penilaian Perangkat (GP)', link: '#', tipe: 'PDF' },
    { judul: 'Lampiran 8 - Penilaian Praktik (DPL)', link: '#', tipe: 'PDF' },
    { judul: 'Rekap Nilai 3 Siklus', link: '#', tipe: 'Spreadsheet' },
  ];

  // Video & Foto kegiatan
  const mediaKegiatan = [
    { type: 'video', judul: 'Video Praktik Mengajar Siklus 1', embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
    { type: 'video', judul: 'Video Praktik Mengajar Siklus 2', embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
    { type: 'photo', judul: 'Foto Kegiatan PPL di SMPN 2 Banjarmasin', imageUrl: 'https://placehold.co/400x300/1e293b/white?text=Foto+PPL+1' },
    { type: 'photo', judul: 'Diskusi Refleksi dengan Guru Pamong', imageUrl: 'https://placehold.co/400x300/1e293b/white?text=Foto+PPL+2' },
    { type: 'video', judul: 'Video Refleksi Akhir Siklus 3', embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
  ];

  const tabs = [
    { id: 'rpp', label: 'Rencana Pembelajaran', icon: <BookOpen size={20} /> },
    { id: 'media', label: 'Media Flipbook', icon: <MonitorPlay size={20} /> },
    { id: 'hasil', label: 'Hasil Kerja Siswa', icon: <Gamepad2 size={20} /> },
    { id: 'penilaian', label: 'Penilaian GP & DPL', icon: <ClipboardCheck size={20} /> },
    { id: 'dokumentasi', label: 'Video & Foto', icon: <Camera size={20} /> },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  const stagger = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  // Render RPP
  const renderRPP = () => (
    <motion.div variants={stagger} initial="hidden" animate="visible" className="space-y-8">
      {Object.entries(rppData).map(([siklus, rpps]) => (
        <motion.div key={siklus} variants={fadeInUp} className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 border border-white/60">
          <h3 className="text-2xl font-bold text-indigo-700 mb-4 flex items-center gap-2">
            <FileText size={24} />
            {siklus.replace('siklus', 'Siklus ')} ({rpps.length} RPP)
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {rpps.map((rpp, i) => (
              <div key={i} className="border border-gray-200 rounded-xl p-4 hover:shadow-md hover:border-indigo-300 transition-all bg-white/50">
                <div className="font-semibold text-gray-800">{rpp.judul}</div>
                <div className="text-sm text-gray-500 mt-1">{rpp.mapel} - {rpp.topik}</div>
                <a
                  href={rpp.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-indigo-600 text-sm mt-3 hover:text-indigo-800 transition-colors font-medium"
                >
                  Lihat RPP <ExternalLink size={14} />
                </a>
              </div>
            ))}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );

  // Render Media Flipbook
  const renderMedia = () => (
    <motion.div variants={stagger} initial="hidden" animate="visible" className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {flipbooks.map((item, i) => (
        <motion.div key={i} variants={fadeInUp} className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 border border-white/60">
          <h3 className="text-xl font-bold text-gray-800">{item.judul}</h3>
          <p className="text-gray-600 text-sm mt-2">{item.deskripsi}</p>
          <div className="mt-4 aspect-video bg-gray-100 rounded-xl overflow-hidden flex items-center justify-center">
            <div className="text-gray-400 text-center p-4">
              <MonitorPlay size={48} className="mx-auto mb-2" />
              <span className="text-sm">Pratinjau Flipbook</span>
            </div>
          </div>
          <a
            href={item.link}
            target="_blank"
            className="inline-flex items-center gap-1 text-indigo-600 mt-4 font-medium hover:text-indigo-800 transition-colors"
          >
            Buka Flipbook <ExternalLink size={14} />
          </a>
        </motion.div>
      ))}
    </motion.div>
  );

  // Render Hasil Kerja Siswa
  const renderHasilSiswa = () => (
    <motion.div variants={stagger} initial="hidden" animate="visible" className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {scratchGames.map((game, i) => (
        <motion.div key={i} variants={fadeInUp} className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 border border-white/60">
          <h3 className="text-xl font-bold text-gray-800">{game.judul}</h3>
          <p className="text-gray-600 text-sm mt-2">{game.deskripsi}</p>
          <div className="aspect-video bg-gray-100 rounded-xl overflow-hidden mt-4">
            <iframe src={game.embedUrl} className="w-full h-full" title={game.judul} allowFullScreen></iframe>
          </div>
          <a
            href={game.link}
            target="_blank"
            className="inline-flex items-center gap-1 text-indigo-600 mt-4 font-medium hover:text-indigo-800 transition-colors"
          >
            Lihat di Scratch <ExternalLink size={14} />
          </a>
        </motion.div>
      ))}
    </motion.div>
  );

  // Render Penilaian
  const renderPenilaian = () => (
    <motion.div variants={stagger} initial="hidden" animate="visible" className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {penilaianDocs.map((doc, i) => (
        <motion.div
          key={i}
          variants={fadeInUp}
          whileHover={{ y: -5 }}
          className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 text-center border border-white/60"
        >
          <FileText size={40} className="mx-auto text-indigo-500 mb-3" />
          <h3 className="font-bold text-gray-800 mb-2">{doc.judul}</h3>
          <div className="text-sm text-gray-500 mb-4">{doc.tipe}</div>
          <a
            href={doc.link}
            target="_blank"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-blue-600 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:shadow-lg transition-all"
          >
            <Download size={16} /> Unduh / Lihat
          </a>
        </motion.div>
      ))}
    </motion.div>
  );

  // Render Video & Foto
  const renderVideoFoto = () => (
    <motion.div variants={stagger} initial="hidden" animate="visible" className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {mediaKegiatan.map((item, i) => (
        <motion.div key={i} variants={fadeInUp} className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden border border-white/60">
          <div className="p-4 bg-gray-50/80 border-b border-gray-200">
            <h3 className="font-bold text-gray-800 flex items-center gap-2">
              {item.type === 'video' ? <MonitorPlay size={18} className="text-indigo-500" /> : <Camera size={18} className="text-indigo-500" />}
              {item.judul}
            </h3>
          </div>
          <div className="aspect-video">
            {item.type === 'video' ? (
              <iframe src={item.embedUrl} className="w-full h-full" title={item.judul} allowFullScreen></iframe>
            ) : (
              <img src={item.imageUrl} alt={item.judul} className="w-full h-full object-cover" />
            )}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-gray-50 via-white to-indigo-50">
      {/* Header */}
      <section className="relative w-full bg-slate-800 text-white py-16 md:py-20 overflow-hidden">
        <div className="absolute top-10 left-10 w-64 h-64 bg-indigo-400/20 rounded-full mix-blend-multiply filter blur-3xl floating-shape"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-400/10 rounded-full mix-blend-multiply filter blur-3xl floating-shape-delayed"></div>
        <div className="absolute inset-0 bg-black/20 z-0"></div>
        <div className="relative z-10 w-full px-6 md:px-12 lg:px-24 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white"
        >
          Artefak Pembelajaran
        </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-lg md:text-xl text-indigo-200 max-w-3xl mx-auto"
          >
            Rencana Pembelajaran, Media Ajar, Hasil Karya Siswa, Penilaian, dan Dokumentasi Praktik Mengajar
          </motion.p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 100" className="w-full h-auto">
            <path fill="rgb(249 250 251)" d="M0,64L48,58.7C96,53,192,43,288,48C384,53,480,75,576,74.7C672,75,768,53,864,42.7C960,32,1056,32,1152,37.3C1248,43,1344,53,1392,58.7L1440,64L1440,100L0,100Z" />
          </svg>
        </div>
      </section>

      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-12">
        {/* Tab Navigation dengan Scroll di Mobile */}
        <div className="flex gap-1 overflow-x-auto pb-2 mb-8 border-b border-gray-200">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-5 py-3 rounded-t-xl font-medium text-sm whitespace-nowrap transition-all ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-indigo-600 to-blue-600 text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content with Animation */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {activeTab === 'rpp' && renderRPP()}
            {activeTab === 'media' && renderMedia()}
            {activeTab === 'hasil' && renderHasilSiswa()}
            {activeTab === 'penilaian' && renderPenilaian()}
            {activeTab === 'dokumentasi' && renderVideoFoto()}
          </motion.div>
        </AnimatePresence>

        {/* Catatan Analisis */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 bg-white/60 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/60 shadow-lg"
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-3 flex items-center gap-2">
            <ClipboardCheck size={28} className="text-indigo-600" />
            Analisis Artefak
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Setiap artefak yang ditampilkan telah dianalisis berdasarkan konteks, tujuan, kelebihan, kekurangan, dan kajian teori
            (seperti teori belajar Bruner, penilaian autentik, TPACK dalam pembelajaran Informatika, dll.). 
            RPP dikembangkan dengan model pembelajaran berdiferensiasi, media flipbook mendukung visualisasi konsep abstrak,
            game Scratch meningkatkan computational thinking siswa, serta penilaian Guru Pamong dan DPL menunjukkan peningkatan 
            kompetensi mengajar yang signifikan dari Siklus 1 ke Siklus 3.
          </p>
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="w-full bg-gradient-to-r from-gray-800 to-gray-900 text-gray-300 py-8 text-center text-sm md:text-base">
        <div className="max-w-4xl mx-auto px-6">
          <p className="opacity-80">
            © 2025 — E-Portfolio PPG Calon Guru | Universitas Lambung Mangkurat | PPL Terbimbing
          </p>
          <p className="mt-1 text-xs opacity-60">Menjadi guru profesional, berawal dari praktik yang bermakna.</p>
        </div>
      </footer>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .floating-shape {
          animation: float 6s ease-in-out infinite;
        }
        .floating-shape-delayed {
          animation: float 8s ease-in-out infinite;
          animation-delay: 2s;
        }
      `}</style>
    </div>
  );
};

export default ArtefakPembelajaran;