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
} from 'lucide-react';

import foto1 from '../assets/foto1.JPG';
import foto2 from '../assets/foto2.JPG';
import foto3 from '../assets/foto3.JPG';
import foto4 from '../assets/foto4.jpg';
import foto5 from '../assets/foto5.JPG';
import foto6 from '../assets/foto6.jpg';

const ArtefakPembelajaran = () => {
  const [activeTab, setActiveTab] = useState('rpp');

  // Data RPP per siklus
  const rppData = {
    siklus1: [
      { judul: 'RPP Siklus 1 - Pertemuan 1 (7H)', mapel: 'Informatika', topik: 'Scratch', link: 'https://drive.google.com/file/d/1qIy-R6hTL_9y3_z3C6xGQHobVDMYiOcy/view?usp=drive_link' },
      { judul: 'RPP Siklus 1 - Pertemuan 2 (8F)', mapel: 'Informatika', topik: 'Scratch', link: 'https://drive.google.com/file/d/1i8ghpCepCDBP0X07PYY19VxmPsDZIjdu/view?usp=drive_link' },
      { judul: 'RPP Siklus 1 - Pertemuan 3 (8E)', mapel: 'Informatika', topik: 'Blockly', link: 'https://drive.google.com/file/d/1FEa6HS5oMhrZpUkXVa4fF4AU_4lKizW4/view?usp=drive_link' },
    ],
    siklus2: [
      { judul: 'RPP Siklus 2 - Pertemuan 1 (7H)', mapel: 'Informatika', topik: 'Scratch', link: 'https://drive.google.com/file/d/1Mi1Ix6t67QHWY7IzNUAT4yg-dy598BPW/view?usp=drive_link' },
      { judul: 'RPP Siklus 2 - Pertemuan 2 (8F)', mapel: 'Informatika', topik: 'Scratch', link: 'https://drive.google.com/file/d/1lxa0RDKMNmZ5C2a0KNtYTtKGPPdthfzA/view?usp=drive_link' },
      { judul: 'RPP Siklus 2 - Pertemuan 3 (8E)', mapel: 'Informatika', topik: 'Scratch', link: 'https://drive.google.com/file/d/1xIK86BqiR3DvQD8qMmUFJywAaNsM1NrB/view?usp=drive_link' },
    ],
    siklus3: [
      { judul: 'RPP Siklus 3 - Pertemuan 1 (8F)', mapel: 'Informatika', topik: 'Blockly', link: 'https://drive.google.com/file/d/1xNg3pJm8aLKGLB3kj_-IjPux2maPP9xY/view?usp=drive_link' },
      { judul: 'RPP Siklus 3 - Pertemuan 2 (8E)', mapel: 'Informatika', topik: 'Scratch', link: 'https://drive.google.com/file/d/1FFiWCv5H4MZN0m3tTuuen34vMS-aESXG/view?usp=drive_link' },
    ],
  };

  // Media Flipbook (link sudah diperbarui)
  const flipbooks = [
    {
      judul: 'Flipbook - Pengenalan Scratch Dasar',
      deskripsi: 'Media interaktif pengenalan Scratch untuk pemula',
      link: 'https://online.fliphtml5.com/trdjn/Pengenalan-Scartch-Dasar/',
    },
    {
      judul: 'Flipbook - Project Scratch Lanjutan',
      deskripsi: 'Flipbook visual tentang proyek Scratch lebih kompleks',
      link: 'https://online.fliphtml5.com/trdjn/znvw/',
    },
  ];

  // Game Scratch (hasil kerja siswa)
  const scratchGames = [
    {
      judul: 'Game Tangkap',
      deskripsi: 'Game sederhana menangkap objek - dibuat oleh siswa',
      embedUrl: 'https://scratch.mit.edu/projects/1326329704/embed',
      link: 'https://scratch.mit.edu/projects/1326329704',
    },
    {
      judul: 'Game Tembak Meteor',
      deskripsi: 'Game menembak meteor di luar angkasa - dibuat oleh siswa',
      embedUrl: 'https://scratch.mit.edu/projects/1326330920/embed',
      link: 'https://scratch.mit.edu/projects/1326330920',
    },
  ];

  // Data Penilaian GP & DPL
  const penilaianData = [
    {
      judul: 'Lampiran 7 - Penilaian Perangkat (GP)',
      tipe: 'PDF',
      items: [
        { label: 'Asistensi Mengajar', link: 'https://drive.google.com/file/d/1AiIRYo8RfLUveX7rHz4-1fGXxwM_n-hW/view?usp=drive_link' },
        { label: 'Siklus 1 Pertemuan 1', link: 'https://drive.google.com/file/d/16uIbCK_5Q9_olDZY7_Nd_zXE-hyH-qSg/view?usp=drive_link' },
        { label: 'Siklus 1 Pertemuan 2', link: 'https://drive.google.com/file/d/1YmcK6y9CSlrOchC6G708bxwDnVjUVzpI/view?usp=drive_link' },
        { label: 'Siklus 1 Pertemuan 3', link: 'https://drive.google.com/file/d/1YmcK6y9CSlrOchC6G708bxwDnVjUVzpI/view?usp=drive_link' },
        { label: 'Siklus 2 Pertemuan 1', link: 'https://drive.google.com/file/d/1KR0CtKJsCBQyxwNyJWEJxbgKa_xZwKqX/view?usp=drive_link' },
        { label: 'Siklus 2 Pertemuan 2', link: 'https://drive.google.com/file/d/1QOeJ_sp6jnoAXXbCHHyapqejLbk1yZyl/view?usp=drive_link' },
        { label: 'Siklus 2 Pertemuan 3', link: 'https://drive.google.com/file/d/1d7tB1mX09Ys95RnvskFN_kTjxXQUwlrE/view?usp=drive_link' },
        { label: 'Siklus 3 Pertemuan 1', link: 'https://drive.google.com/file/d/1C1HqwOO6gxAAQZrupYdDBahxrnYMQRnr/view?usp=drive_link' },
        { label: 'Siklus 3 Pertemuan 2', link: 'https://drive.google.com/file/d/10m9AU5MiYttqQPxdOcAM_-gNZYjMWIgg/view?usp=drive_link' },
      ],
    },
    {
      judul: 'Lampiran 8 - Penilaian Praktik Mengajar (GP)',
      tipe: 'PDF',
      items: [
        { label: 'Siklus 1 Pertemuan 1', link: 'https://drive.google.com/file/d/1yP1y6DFXYHSvpt9ryfbtXW9csuJk2pXz/view?usp=drive_link' },
        { label: 'Siklus 1 Pertemuan 2', link: 'https://drive.google.com/file/d/1C5PAusxTu-NBhoTNVaNPeUr2zZQlKdSm/view?usp=drive_link' },
        { label: 'Siklus 1 Pertemuan 3', link: 'https://drive.google.com/file/d/1C5PAusxTu-NBhoTNVaNPeUr2zZQlKdSm/view?usp=drive_link' },
        { label: 'Siklus 2 Pertemuan 1', link: 'https://drive.google.com/file/d/1qkucgPA96n3CEXffxJPZnV-DjAjweDIe/view?usp=drive_link' },
        { label: 'Siklus 2 Pertemuan 2', link: 'https://drive.google.com/file/d/1GGlO646ayhW0CwkTVfsHcxIPjN_54cDW/view?usp=drive_link' },
        { label: 'Siklus 2 Pertemuan 3', link: 'https://drive.google.com/file/d/1CKUF3UkfXwQDJgGKUxvSSJvK2zgYQYD3/view?usp=drive_link' },
        { label: 'Siklus 3 Pertemuan 1', link: 'https://drive.google.com/file/d/1NJ1JaAjMrpb66qEDVzyDgOnOUt1_jpWo/view?usp=drive_link' },
        { label: 'Siklus 3 Pertemuan 2', link: 'https://drive.google.com/file/d/1ndsjWFE0A4h2u21L9_GQERvJ7rM6PXjh/view?usp=drive_link' },
      ],
    },
    {
      judul: 'Refleksi',
      tipe: 'Dokumen',
      items: [
        { label: 'Asistensi Mengajar', link: 'https://drive.google.com/file/d/1Kmt2JduWVEVSiPcJxttHuFI09EyondJl/view?usp=drive_link' },
        { label: 'Siklus 1 Pertemuan 1', link: 'https://drive.google.com/file/d/1Eixy7Zc13KcjeU9CXSwNyTwjNVc7dYyq/view?usp=sharing' },
        { label: 'Siklus 1 Pertemuan 2', link: 'https://drive.google.com/file/d/1NbwAcMUSKMug779L4IyxCi843VAr7xbl/view?usp=drive_link' },
        { label: 'Siklus 1 Pertemuan 3', link: 'https://drive.google.com/file/d/13WwX_3O4KpBMEWHVKplHiIWiqGuMlpyy/view?usp=drive_link' },
        { label: 'Siklus 2 Pertemuan 1', link: 'https://drive.google.com/file/d/1hXXsXqV6q5XDmvVbqPYhPoADWVk1y7Ho/view?usp=sharing' },
        { label: 'Siklus 2 Pertemuan 2', link: 'https://drive.google.com/file/d/1HWnHQeabuNF7yrP5v2hg2xRjJw1fAF7Z/view?usp=sharing' },
        { label: 'Siklus 2 Pertemuan 3', link: 'https://drive.google.com/file/d/1GTlDeQ12Ua2A47Prh9a2SXAhLcCc51on/view?usp=sharing' },
        { label: 'Siklus 3 Pertemuan 1', link: 'https://drive.google.com/file/d/1P2gchmDBovZQMtXt9CnzYfgj-8uFqdp_/view?usp=sharing' },
        { label: 'Siklus 3 Pertemuan 2', link: 'https://drive.google.com/file/d/1bjwbbCVMleVNksk_0VovdoeAGCaDSxTu/view?usp=sharing' },
      ],
    },
    {
      judul: 'Lembar Kunjungan Dosen',
      tipe: 'PDF',
      items: [
        { label: 'Kunjungan 1', link: 'https://drive.google.com/file/d/1wz9jkKu-xpIKaH0g7h3FxmaZZmscxrrt/view?usp=drive_link' },
        { label: 'Kunjungan 2', link: 'https://drive.google.com/file/d/11lkrdctKHZijRV2uTavUFdspVj03dDqI/view?usp=drive_link' },
      ],
    },
  ];

  // Video & Foto kegiatan
  const mediaKegiatan = [
    {
      type: 'video',
      judul: 'Video 1',
      embedUrl: 'https://drive.google.com/file/d/17WZukjZMEJoeBjCnSBsRQRrDk-d_d8hV/preview',
    },
    {
      type: 'video',
      judul: 'Video 2',
      embedUrl: 'https://drive.google.com/file/d/1QJfqxHt6ebX2I3Kw2Un-CoKEbgKy9zc5/preview',
    },
    { type: 'photo', judul: 'Foto 1', imageUrl: foto1 },
    { type: 'photo', judul: 'Foto 2', imageUrl: foto2 },
    { type: 'photo', judul: 'Foto 3', imageUrl: foto3 },
    { type: 'photo', judul: 'Foto 4', imageUrl: foto4 },
    { type: 'photo', judul: 'Foto 5', imageUrl: foto5 },
    { type: 'photo', judul: 'Foto 6', imageUrl: foto6 },
  ];

  const tabs = [
    { id: 'rpp', label: 'Rencana Pembelajaran', icon: <BookOpen size={18} /> },
    { id: 'media', label: 'Media Flipbook', icon: <MonitorPlay size={18} /> },
    { id: 'hasil', label: 'Hasil Kerja Siswa', icon: <Gamepad2 size={18} /> },
    { id: 'penilaian', label: 'Penilaian GP & DPL', icon: <ClipboardCheck size={18} /> },
    { id: 'dokumentasi', label: 'Video & Foto', icon: <Camera size={18} /> },
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
        <motion.div key={siklus} variants={fadeInUp} className="glass-card rounded-[2rem] p-6 md:p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <FileText size={24} className="text-blue-600" />
            {siklus.replace('siklus', 'Siklus ')} ({rpps.length} RPP)
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {rpps.map((rpp, i) => (
              <div key={i} className="bg-white/50 backdrop-blur-sm rounded-xl p-4 border border-white/60 hover:shadow-md transition-all">
                <div className="font-semibold text-gray-900">{rpp.judul}</div>
                <div className="text-sm text-gray-600 mt-1">{rpp.mapel} - {rpp.topik}</div>
                <a
                  href={rpp.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-blue-600 text-sm mt-3 hover:text-blue-800 transition-colors font-medium"
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
        <motion.div key={i} variants={fadeInUp} className="glass-card rounded-[2rem] p-6">
          <h3 className="text-xl font-bold text-gray-900">{item.judul}</h3>
          <p className="text-gray-600 text-sm mt-2">{item.deskripsi}</p>
          <div className="mt-4 aspect-video bg-gray-100/50 backdrop-blur-sm rounded-xl overflow-hidden flex items-center justify-center border border-white/40">
            <div className="text-gray-400 text-center p-4">
              <MonitorPlay size={48} className="mx-auto mb-2" />
              <span className="text-sm">Pratinjau Flipbook</span>
            </div>
          </div>
          <a
            href={item.link}
            target="_blank"
            className="inline-flex items-center gap-1 text-blue-600 mt-4 font-medium hover:text-blue-800 transition-colors"
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
        <motion.div key={i} variants={fadeInUp} className="glass-card rounded-[2rem] p-6">
          <h3 className="text-xl font-bold text-gray-900">{game.judul}</h3>
          <p className="text-gray-600 text-sm mt-2">{game.deskripsi}</p>
          <div className="mt-4 aspect-video bg-gray-100/50 backdrop-blur-sm rounded-xl overflow-hidden border border-white/40">
            <iframe src={game.embedUrl} className="w-full h-full" title={game.judul} allowFullScreen></iframe>
          </div>
          <a
            href={game.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-blue-600 mt-4 font-medium hover:text-blue-800 transition-colors"
          >
            Lihat di Scratch <ExternalLink size={14} />
          </a>
        </motion.div>
      ))}
    </motion.div>
  );

  // Render Penilaian GP & DPL
  const renderPenilaian = () => (
    <motion.div variants={stagger} initial="hidden" animate="visible" className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {penilaianData.map((doc, i) => (
        <motion.div
          key={i}
          variants={fadeInUp}
          whileHover={{ y: -5 }}
          className="glass-card glass-card-hover rounded-[2rem] p-6"
        >
          <div className="flex items-start gap-4">
            <FileText size={36} className="text-blue-500 mt-1 flex-shrink-0" />
            <div className="flex-1">
              <h3 className="font-bold text-gray-900 text-lg mb-2">{doc.judul}</h3>
              <div className="text-sm text-gray-600 mb-3">{doc.tipe}</div>
              <ul className="space-y-2">
                {doc.items.map((item, idx) => (
                  <li key={idx}>
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800 hover:underline transition-colors"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0"></span>
                      {item.label}
                      <ExternalLink size={12} className="opacity-70" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );

  // Render Video & Foto
  const renderVideoFoto = () => (
    <motion.div variants={stagger} initial="hidden" animate="visible" className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {mediaKegiatan.map((item, i) => (
        <motion.div key={i} variants={fadeInUp} className="glass-card rounded-[2rem] overflow-hidden">
          <div className="p-4 bg-white/40 backdrop-blur-sm border-b border-white/60">
            <h3 className="font-bold text-gray-900 flex items-center gap-2">
              {item.type === 'video' ? <MonitorPlay size={18} className="text-blue-500" /> : <Camera size={18} className="text-green-500" />}
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
    <div className="w-full min-h-screen bg-[#F2F2F7] relative overflow-hidden">
      {/* Header Liquid Glass */}
      <section className="relative w-full bg-gradient-to-br from-[#007AFF] via-[#5856D6] to-[#AF52DE] text-white py-20 md:py-28 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300/40 rounded-full mix-blend-overlay filter blur-3xl floating-shape"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-300/30 rounded-full mix-blend-overlay filter blur-3xl floating-shape-delayed"></div>
        <div className="absolute inset-0 bg-white/10 backdrop-blur-[2px] z-0"></div>
        <div className="relative z-10 w-full px-6 md:px-12 lg:px-24 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 text-white leading-tight tracking-tight"
          >
            Artefak Pembelajaran
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto"
          >
            Rencana Pembelajaran, Media Ajar, Hasil Karya Siswa, Penilaian, dan Dokumentasi Praktik Mengajar
          </motion.p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 100" className="w-full h-auto">
            <path fill="#F2F2F7" d="M0,64L48,58.7C96,53,192,43,288,48C384,53,480,75,576,74.7C672,75,768,53,864,42.7C960,32,1056,32,1152,37.3C1248,43,1344,53,1392,58.7L1440,64L1440,100L0,100Z" />
          </svg>
        </div>
      </section>

      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-12">
        {/* Tab Navigation */}
        <div className="flex gap-1 overflow-x-auto pb-3 mb-10 border-b border-gray-200/60">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-5 py-3 rounded-t-2xl font-medium text-sm whitespace-nowrap transition-all ${
                activeTab === tab.id
                  ? 'bg-white text-blue-600 shadow-sm border border-white/60 border-b-white font-semibold'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-white/50'
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
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

        {/* Analisis Artefak */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 glass-card rounded-[2rem] p-6 md:p-8"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-3 flex items-center gap-2">
            <ClipboardCheck size={28} className="text-blue-600" />
            Analisis Artefak
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Setiap artefak yang ditampilkan telah dianalisis berdasarkan konteks, tujuan, kelebihan, kekurangan, dan kajian teori
            (seperti teori belajar Bruner, penilaian autentik, TPACK dalam pembelajaran Informatika, dll.). 
            RPP dikembangkan dengan model pembelajaran berdiferensiasi, media flipbook mendukung visualisasi konsep abstrak,
            game Scratch meningkatkan computational thinking siswa, serta penilaian Guru Pamong dan DPL menunjukkan peningkatan 
            kompetensi mengajar yang signifikan dari Siklus 1 ke Siklus 3.
          </p>
        </motion.div> */}
      </div>

      {/* Footer */}
      <footer className="w-full bg-gray-900/90 backdrop-blur-md text-gray-300 py-8 text-center text-sm md:text-base mt-12">
        <div className="max-w-4xl mx-auto px-6">
          <p className="opacity-80">
            © 2026 — E-Portfolio PPG Calon Guru - Khoyrur Roykhan | Universitas Lambung Mangkurat | PPL Terbimbing
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
          animation: float 8s ease-in-out infinite;
        }
        .floating-shape-delayed {
          animation: float 10s ease-in-out infinite;
          animation-delay: 3s;
        }
        .glass-card {
          background: rgba(255, 255, 255, 0.65);
          backdrop-filter: blur(25px);
          -webkit-backdrop-filter: blur(25px);
          border: 1px solid rgba(255, 255, 255, 0.6);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.04);
        }
        .glass-card-hover:hover {
          background: rgba(255, 255, 255, 0.8);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.08);
        }
      `}</style>
    </div>
  );
};

export default ArtefakPembelajaran;