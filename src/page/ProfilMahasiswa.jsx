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

const ProfilMahasiswa = () => {
  const profile = {
    name: "Khoyrur Roykhan",
    program: "PPG 2026 Gelombang 1 - Informatika",
    asal: "Tamban, Barito Kuala, Kalimantan Selatan",
    keunikanDaerah: [
      {
        judul: "Kuliner Khas",
        deskripsi: "Soto Banjar, Apam, dan Ikan Haruan Bakar",
        ikon: <Coffee className="w-8 h-8 text-indigo-500" />,
      },
      {
        judul: "Budaya",
        deskripsi: "Madihin, Bapandung, dan tradisi lisan lainnya",
        ikon: <Music className="w-8 h-8 text-indigo-500" />,
      },
      {
        judul: "Tempat Ikonik",
        deskripsi: "Pasar Terapung, Pulau Kembang, dan Menara Pandang",
        ikon: <TreePine className="w-8 h-8 text-indigo-500" />,
      },
    ],
    riwayatPendidikan: [
      {
        jenjang: "SMK",
        nama: "SMKN 3 Marabahan",
        jurusan: "Teknik Komputer dan Jaringan",
        ikon: <School className="w-6 h-6" />,
        warna: "from-green-500 to-emerald-600",
      },
      {
        jenjang: "S-1",
        nama: "FKIP Universitas Lambung Mangkurat",
        jurusan: "Pendidikan Komputer",
        ikon: <GraduationCap className="w-6 h-6" />,
        warna: "from-blue-500 to-indigo-600",
      },
    ],
    inspirasi: `Sejak kecil, saya terpesona oleh cara teknologi mengubah dunia. Guru pertama yang mengenalkan saya pada komputer di SMK menanamkan keyakinan bahwa setiap siswa, dari mana pun asalnya, berhak mendapatkan pendidikan berkualitas. Dari situlah saya bertekad menjadi guru profesional yang tak hanya mengajar, tetapi juga membimbing siswa menemukan potensinya di era digital. Melalui PPL Terbimbing dan pendalaman pedagogi modern, saya ingin membawa suasana kelas yang interaktif, kreatif, dan inklusif.`,
    kutipan: "Guru yang hebat tidak hanya mengajar, tetapi juga menginspirasi siswa untuk bermimpi lebih tinggi.",
    foto: "https://placehold.co/400x400/1e293b/white?text=Khoyrur+Roykhan", // ganti dengan foto Anda
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
    <div className="w-full min-h-screen bg-gradient-to-br from-gray-50 via-white to-indigo-50">
      {/* Hero Profile - SOLID COLOR */}
      <section className="relative w-full bg-slate-800 text-white py-16 md:py-20 overflow-hidden">
        <div className="absolute top-10 left-10 w-64 h-64 bg-indigo-400/20 rounded-full mix-blend-multiply filter blur-3xl floating-shape"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-400/10 rounded-full mix-blend-multiply filter blur-3xl floating-shape-delayed"></div>
        <div className="absolute inset-0 bg-black/20 z-0"></div>
        <div className="relative z-10 w-full px-6 md:px-12 lg:px-24 flex flex-col md:flex-row items-center justify-between gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center md:text-left"
          >
            {/* Nama dipastikan putih */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3 text-white">
              {profile.name}
            </h1>
            <p className="text-xl md:text-2xl text-indigo-200 flex items-center gap-2 justify-center md:justify-start">
              <GraduationCap size={24} /> {profile.program}
            </p>
            <div className="flex flex-wrap gap-2 mt-4 justify-center md:justify-start">
              <span className="bg-indigo-700/50 px-3 py-1 rounded-full text-sm flex items-center gap-1">
                <MapPin size={14} /> {profile.asal}
              </span>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-indigo-400 shadow-2xl"
          >
            <img
              src={profile.foto}
              alt={profile.name}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-50 via-white/20 to-transparent"></div>
      </section>

      {/* Konten lainnya tetap sama */}
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-12">
        {/* Riwayat Pendidikan */}
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-4 flex items-center justify-center gap-3">
            <BookOpen size={32} className="text-indigo-600" />
            Riwayat Pendidikan
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-10 rounded-full"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {profile.riwayatPendidikan.map((item, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                className="backdrop-blur-sm bg-white/70 rounded-2xl shadow-lg p-6 border border-white/60 ring-1 ring-black/5"
              >
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${item.warna} text-white mb-4`}>
                  {item.ikon}
                </div>
                <h3 className="text-xl font-bold text-gray-800">{item.jenjang} – {item.nama}</h3>
                <p className="text-gray-600 mt-1">{item.jurusan}</p>
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-4 flex items-center justify-center gap-3">
            <Building2 size={32} className="text-indigo-600" />
            Keunikan Daerah Asal
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-10 rounded-full"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {profile.keunikanDaerah.map((item, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-all border border-white/60"
              >
                <div className="flex justify-center mb-3">{item.ikon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.judul}</h3>
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
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg p-6 md:p-8 border-l-8 border-indigo-600 border border-white/60">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 flex items-center gap-3">
              <Award className="w-8 h-8 text-indigo-600" />
              Inspirasi & Tujuan Menjadi Guru Profesional
            </h2>
            <p className="text-gray-700 leading-relaxed whitespace-pre-line">
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
          <div className="backdrop-blur-sm bg-white/40 rounded-2xl p-8 border border-white/60 shadow-lg">
            <Quote className="w-10 h-10 text-indigo-400 mb-3 mx-auto" />
            <p className="text-xl md:text-2xl italic font-light text-gray-700 max-w-3xl mx-auto">
              {profile.kutipan}
            </p>
            <p className="mt-4 text-indigo-700 font-semibold flex items-center justify-center gap-1">
              <ChevronRight size={16} /> {profile.name}
            </p>
          </div>
        </motion.section>
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

export default ProfilMahasiswa;