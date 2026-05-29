// src/page/ProfilMahasiswa.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  GraduationCap, 
  BookOpen, 
  School, 
  Award, 
  Quote, 
  Coffee, 
  Music, 
  TreePine,
  Building2,
  ChevronRight,
} from 'lucide-react';

import profil from '../assets/profil.jpeg';

const ProfilMahasiswa = () => {
  const profile = {
    name: "Khoyrur Roykhan",
    program: "PPG 2026 Gelombang 1 - Informatika",
    asal: "Tamban, Barito Kuala, Kalimantan Selatan",
    keunikanDaerah: [
      {
        judul: "Kuliner Khas",
        deskripsi: "Soto Banjar, Apam, dan Ikan Haruan Bakar",
        ikon: <Coffee className="w-8 h-8 text-blue-500" />,
      },
      {
        judul: "Budaya",
        deskripsi: "Madihin, Bapandung, dan tradisi lisan lainnya",
        ikon: <Music className="w-8 h-8 text-purple-500" />,
      },
      {
        judul: "Tempat Ikonik",
        deskripsi: "Pasar Terapung, Pulau Kembang, dan Menara Pandang",
        ikon: <TreePine className="w-8 h-8 text-green-500" />,
      },
    ],
    riwayatPendidikan: [
      {
        jenjang: "SMK",
        nama: "SMKN 3 Marabahan",
        jurusan: "Teknik Komputer dan Jaringan",
        ikon: <School className="w-6 h-6" />,
        warna: "from-green-500 to-emerald-500",
      },
      {
        jenjang: "S-1",
        nama: "FKIP Universitas Lambung Mangkurat",
        jurusan: "Pendidikan Komputer",
        ikon: <GraduationCap className="w-6 h-6" />,
        warna: "from-blue-500 to-purple-500",
      },
    ],
    inspirasi: `Sejak kecil, saya terpesona oleh cara teknologi mengubah dunia. Guru pertama yang mengenalkan saya pada komputer di SMK menanamkan keyakinan bahwa setiap siswa, dari mana pun asalnya, berhak mendapatkan pendidikan berkualitas. Dari situlah saya bertekad menjadi guru profesional yang tak hanya mengajar, tetapi juga membimbing siswa menemukan potensinya di era digital. Melalui PPL Terbimbing dan pendalaman pedagogi modern, saya ingin membawa suasana kelas yang interaktif, kreatif, dan inklusif.`,
    kutipan: "“Guru adalah seorang pejuang tulus tanpa tanda jasa mencerdaskan bangsa.”",
    foto: profil, // sekarang menggunakan foto yang diimport
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const stagger = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  return (
    <div className="w-full min-h-screen bg-[#F2F2F7] relative overflow-hidden">
      {/* Hero Profile - Liquid Glass ala iOS 26 */}
      <section className="relative w-full bg-gradient-to-br from-[#007AFF] via-[#5856D6] to-[#AF52DE] text-white py-20 md:py-28 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300/40 rounded-full mix-blend-overlay filter blur-3xl floating-shape"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-300/30 rounded-full mix-blend-overlay filter blur-3xl floating-shape-delayed"></div>
        <div className="absolute inset-0 bg-white/10 backdrop-blur-[2px] z-0"></div>

        <div className="relative z-10 w-full px-6 md:px-12 lg:px-24 flex flex-col md:flex-row items-center justify-between gap-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center md:text-left"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="hero-glass inline-flex items-center gap-2 mb-8 px-5 py-2.5 rounded-full text-sm md:text-base font-medium text-white"
            >
              <GraduationCap size={18} />
              <span>Calon Guru Profesional</span>
            </motion.div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 leading-tight tracking-tight text-white">
              {profile.name}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 flex items-center gap-2 justify-center md:justify-start">
              <GraduationCap size={24} /> {profile.program}
            </p>
            <div className="flex flex-wrap gap-2 mt-6 justify-center md:justify-start">
              <span className="hero-glass px-4 py-2 rounded-full text-sm flex items-center gap-2 text-white">
                <MapPin size={14} /> {profile.asal}
              </span>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex-shrink-0"
          >
            <div className="relative w-52 h-52 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden ring-4 ring-white/40 shadow-2xl backdrop-blur-md">
              <img
                src={profile.foto}
                alt={profile.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/20 to-purple-300/30"></div>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 100" className="w-full h-auto">
            <path fill="#F2F2F7" d="M0,64L48,58.7C96,53,192,43,288,48C384,53,480,75,576,74.7C672,75,768,53,864,42.7C960,32,1056,32,1152,37.3C1248,43,1344,53,1392,58.7L1440,64L1440,100L0,100Z" />
          </svg>
        </div>
      </section>

      {/* Konten dengan Glassmorphism */}
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-12">
        {/* Riwayat Pendidikan */}
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 text-center mb-4 flex items-center justify-center gap-3">
            <BookOpen size={36} className="text-blue-600" />
            Riwayat Pendidikan
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto mb-12 rounded-full"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {profile.riwayatPendidikan.map((item, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                whileHover={{ y: -8 }}
                className="glass-card glass-card-hover rounded-[2.5rem] p-8 transition-all duration-300"
              >
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${item.warna} text-white mb-6 shadow-lg`}>
                  {item.ikon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{item.jenjang} – {item.nama}</h3>
                <p className="text-gray-600 mt-2 text-lg">{item.jurusan}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Keunikan Daerah */}
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 text-center mb-4 flex items-center justify-center gap-3">
            <Building2 size={36} className="text-blue-600" />
            Keunikan Daerah Asal
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto mb-12 rounded-full"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {profile.keunikanDaerah.map((item, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                whileHover={{ y: -12, scale: 1.03 }}
                className="glass-card glass-card-hover rounded-[2.5rem] p-8 text-center transition-all duration-300"
              >
                <div className="flex justify-center mb-4">{item.ikon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.judul}</h3>
                <p className="text-gray-600">{item.deskripsi}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Inspirasi Menjadi Guru */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="glass-card glass-card-hover rounded-[2.5rem] p-8 md:p-10 border-l-4 border-blue-500">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Award className="w-8 h-8 text-blue-600" />
              Inspirasi & Tujuan Menjadi Guru Profesional
            </h2>
            <p className="text-gray-700 leading-relaxed whitespace-pre-line text-lg">
              {profile.inspirasi}
            </p>
          </div>
        </motion.section>

        {/* Kutipan Pribadi */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center py-8"
        >
          <div className="glass-card rounded-[2.5rem] p-10 max-w-4xl mx-auto">
            <Quote size={40} className="text-blue-400 mb-4 mx-auto" />
            <p className="text-2xl md:text-3xl italic font-light text-gray-800 leading-relaxed">
              {profile.kutipan}
            </p>
            <p className="mt-6 text-blue-600 font-semibold flex items-center justify-center gap-1">
              <ChevronRight size={16} /> KHD
            </p>
          </div>
        </motion.section>
      </div>

      {/* Footer */}
      <footer className="w-full bg-gray-900/90 backdrop-blur-md text-gray-300 py-8 text-center text-sm md:text-base mt-12">
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
        .hero-glass {
          background: rgba(255, 255, 255, 0.25);
          backdrop-filter: blur(40px);
          -webkit-backdrop-filter: blur(40px);
          border: 1px solid rgba(255, 255, 255, 0.4);
        }
      `}</style>
    </div>
  );
};

export default ProfilMahasiswa;