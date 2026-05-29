// src/page/ModelGuru.jsx
import React from 'react';
import { motion } from 'framer-motion';
import {
  Target,
  BookOpen,
  Heart,
  Brain,
  Shield,
  Star,
  Compass,
  Lightbulb,
  Sparkles,
} from 'lucide-react';

const ModelGuru = () => {
  const misi = [
    {
      ikon: <Target size={32} className="text-blue-500" />,
      judul: 'Misi Utama',
      deskripsi:
        'Menjadi guru profesional yang tidak hanya mentransfer ilmu, tetapi juga membangun karakter, kreativitas, dan daya pikir kritis siswa di era digital.',
    },
    {
      ikon: <Compass size={32} className="text-green-500" />,
      judul: 'Arah Pengembangan',
      deskripsi:
        'Mengintegrasikan teknologi pendidikan secara bijak, menciptakan pembelajaran yang inklusif, dan menanamkan nilai-nilai lokal dalam setiap praktik mengajar.',
    },
    {
      ikon: <Lightbulb size={32} className="text-yellow-500" />,
      judul: 'Inspirasi',
      deskripsi:
        'Terinspirasi oleh guru-guru teladan yang mampu mengubah tantangan menjadi peluang, saya ingin menjadi pendidik yang selalu belajar dan beradaptasi.',
    },
  ];

  const kompetensi = [
    {
      ikon: <BookOpen size={28} className="text-indigo-500" />,
      label: 'Kompetensi Pedagogik',
      detail:
        'Menguasai teori belajar dan prinsip pembelajaran yang mendidik, mampu menyusun RPP berdiferensiasi, dan melaksanakan penilaian autentik.',
    },
    {
      ikon: <Brain size={28} className="text-purple-500" />,
      label: 'Kompetensi Profesional',
      detail:
        'Menguasai materi Informatika secara mendalam, termasuk pemrograman dan computational thinking, serta mampu mengaitkannya dengan kehidupan nyata.',
    },
    {
      ikon: <Heart size={28} className="text-pink-500" />,
      label: 'Kompetensi Sosial',
      detail:
        'Berkomunikasi efektif dengan siswa, rekan sejawat, orang tua, dan masyarakat; mampu bekerja sama dalam tim serta menghargai keberagaman.',
    },
    {
      ikon: <Shield size={28} className="text-orange-500" />,
      label: 'Kompetensi Kepribadian',
      detail:
        'Menjadi teladan bagi siswa: jujur, disiplin, bertanggung jawab, sabar, dan memiliki etos kerja tinggi.',
    },
  ];

  const karakter = [
    { ikon: <Sparkles size={24} className="text-blue-400" />, sifat: 'Kreatif & Inovatif' },
    { ikon: <Star size={24} className="text-yellow-400" />, sifat: 'Empati & Peduli' },
    { ikon: <Shield size={24} className="text-green-400" />, sifat: 'Tangguh & Pantang Menyerah' },
    { ikon: <Heart size={24} className="text-red-400" />, sifat: 'Berintegritas' },
    { ikon: <Compass size={24} className="text-purple-400" />, sifat: 'Adaptif & Fleksibel' },
    { ikon: <Target size={24} className="text-indigo-400" />, sifat: 'Berorientasi pada Siswa' },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const stagger = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  return (
    <div className="w-full min-h-screen bg-[#F2F2F7] relative overflow-hidden">
      {/* Header */}
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
            Model Guru yang Dituju
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto"
          >
            Merancang misi, kompetensi, dan karakter untuk menjadi guru profesional yang menginspirasi.
          </motion.p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 100" className="w-full h-auto">
            <path fill="#F2F2F7" d="M0,64L48,58.7C96,53,192,43,288,48C384,53,480,75,576,74.7C672,75,768,53,864,42.7C960,32,1056,32,1152,37.3C1248,43,1344,53,1392,58.7L1440,64L1440,100L0,100Z" />
          </svg>
        </div>
      </section>

      {/* Konten */}
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-12">
        {/* Misi */}
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 text-center mb-4 flex items-center justify-center gap-3">
            <Target size={36} className="text-blue-600" />
            Misi & Arah Pengembangan
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto mb-12 rounded-full"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {misi.map((item, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                whileHover={{ y: -8, scale: 1.02 }}
                className="glass-card glass-card-hover rounded-[2.5rem] p-8 text-center transition-all duration-300"
              >
                <div className="flex justify-center mb-4">{item.ikon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.judul}</h3>
                <p className="text-gray-600">{item.deskripsi}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Kompetensi */}
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 text-center mb-4 flex items-center justify-center gap-3">
            <BookOpen size={36} className="text-blue-600" />
            Kompetensi yang Dibangun
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto mb-12 rounded-full"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {kompetensi.map((item, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                className="glass-card glass-card-hover rounded-[2.5rem] p-8 transition-all duration-300 flex gap-6 items-start"
              >
                <div className="p-3 rounded-xl bg-white/50 backdrop-blur-md shadow-sm">{item.ikon}</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.label}</h3>
                  <p className="text-gray-600">{item.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Karakter */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 text-center mb-4 flex items-center justify-center gap-3">
            <Heart size={36} className="text-blue-600" />
            Karakter yang Ingin Ditanamkan
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto mb-12 rounded-full"></div>
          <div className="flex flex-wrap justify-center gap-4">
            {karakter.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="glass-card glass-card-hover rounded-full px-6 py-3 flex items-center gap-3 shadow-md"
              >
                {item.ikon}
                <span className="font-medium text-gray-800">{item.sifat}</span>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Kutipan Penutup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-8 glass-card rounded-[2.5rem] p-8 md:p-10 text-center"
        >
          <Target size={36} className="text-blue-400 mx-auto mb-4" />
          <p className="text-xl md:text-2xl italic font-light text-gray-800 leading-relaxed max-w-3xl mx-auto">
          “Pendidikan harus membuat orang berpikir dan merasa.”
          </p>
          <p className="mt-6 text-blue-600 font-semibold">— KHD</p>
        </motion.div>
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

export default ModelGuru;