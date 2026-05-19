// src/page/Beranda.jsx
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import {
  GraduationCap,
  ArrowRight,
  Building2,
  School,
  MapPin,
  Award,
  ChevronRight,
  UserCircle,
  BookOpen,
  ClipboardCheck,
  Target,
  Quote,
  ChevronLeft,
  ChevronRightIcon,
} from 'lucide-react';

// Komponen animasi angka (tidak berubah)
const AnimatedNumber = ({ value }) => {
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 2000 });
  const rounded = useTransform(springValue, (latest) => Math.round(latest));
  const nodeRef = useRef(null);

  useEffect(() => {
    motionValue.set(value);
  }, [motionValue, value]);

  return <motion.span ref={nodeRef}>{rounded}</motion.span>;
};

// Carousel dengan sentuhan glass
const ImageCarousel = ({ images, alt }) => {
  const [current, setCurrent] = useState(0);
  const length = images.length;

  const nextSlide = () => setCurrent(current === length - 1 ? 0 : current + 1);
  const prevSlide = () => setCurrent(current === 0 ? length - 1 : current - 1);

  useEffect(() => {
    if (length <= 1) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(timer);
  }, [length, current]);

  if (!Array.isArray(images) || images.length === 0) {
    return <div className="mt-6 text-center text-gray-400 italic">Belum ada foto</div>;
  }

  return (
    <div className="relative mt-6 rounded-3xl overflow-hidden shadow-lg group backdrop-blur-sm bg-white/20 border border-white/30">
      {images.map((img, index) => (
        <div
          key={index}
          className={`transition-opacity duration-700 ${
            index === current ? 'block' : 'hidden'
          }`}
        >
          <img
            src={img}
            alt={`${alt} ${index + 1}`}
            className="w-full h-48 object-cover"
          />
        </div>
      ))}
      {length > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/40 backdrop-blur-md hover:bg-white/60 text-gray-800 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all shadow-sm"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/40 backdrop-blur-md hover:bg-white/60 text-gray-800 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all shadow-sm"
          >
            <ChevronRightIcon size={18} />
          </button>
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  idx === current
                    ? 'bg-white scale-125 shadow-md'
                    : 'bg-white/60'
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

const Beranda = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const stagger = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const features = [
    {
      icon: <UserCircle size={48} className="text-blue-500" />,
      title: 'Profil Calon Guru',
      desc: 'Cerita singkat, latar belakang, dan motivasi saya mengikuti PPG untuk menjadi pendidik profesional.',
      link: '/profil',
    },
    {
      icon: <BookOpen size={48} className="text-green-500" />,
      title: 'Artefak PPL',
      desc: 'Kumpulan RPP, media ajar, video praktik mengajar, hasil kerja siswa, dan refleksi berbasis teori.',
      link: '/artefak',
    },
    {
      icon: <ClipboardCheck size={48} className="text-orange-500" />,
      title: 'Penilaian & Instrumen',
      desc: 'Rekap nilai dari Guru Pamong dan DPL pada setiap siklus PPL, lengkap dengan lampiran pendukung.',
      link: '/penilaian',
    },
    {
      icon: <Target size={48} className="text-purple-500" />,
      title: 'Model Guru Inspiratif',
      desc: 'Gambaran sosok guru profesional yang saya jadikan panutan, lengkap dengan kompetensi dan karakter.',
      link: '/model-guru',
    },
  ];

  const ulmImages = [
    'https://placehold.co/600x300/1e40af/white?text=ULM+Tampak+Depan',
    'https://placehold.co/600x300/2563eb/white?text=ULM+Lingkungan+Kampus',
    'https://placehold.co/600x300/1d4ed8/white?text=ULM+Fakultas+Keguruan',
  ];

  const smp2Images = [
    'https://placehold.co/600x300/166534/white?text=SMPN+2+Banjarmasin',
    'https://placehold.co/600x300/15803d/white?text=Kegiatan+PPL+di+SMPN+2',
    'https://placehold.co/600x300/047857/white?text=Ruang+Kelas+SMPN+2',
  ];

  return (
    <div className="w-full min-h-screen bg-[#F2F2F7] relative overflow-hidden">
      {/* CSS untuk animasi dan efek liquid glass */}
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

      {/* Hero Section dengan Liquid Glass */}
      <section className="relative w-full bg-gradient-to-br from-[#007AFF] via-[#5856D6] to-[#AF52DE] text-white py-24 md:py-32 overflow-hidden">
        {/* Ornamen kaca mengambang */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300/40 rounded-full mix-blend-overlay filter blur-3xl floating-shape"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-300/30 rounded-full mix-blend-overlay filter blur-3xl floating-shape-delayed"></div>
        <div className="absolute inset-0 bg-white/10 backdrop-blur-[2px] z-0"></div>

        <div className="relative z-10 w-full px-6 md:px-12 lg:px-24 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center md:text-left">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="hero-glass inline-flex items-center gap-2 mb-8 px-5 py-2.5 rounded-full text-sm md:text-base font-medium text-white"
            >
              <GraduationCap size={18} />
              <span>Mahasiswa PPG Calon Guru</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight tracking-tight"
            >
              <span className="text-white">E-Portfolio</span>{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-pink-200 to-white">
                PPL Terbimbing
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="text-lg md:text-xl text-white/90 max-w-xl font-light"
            >
              Rekam jejak perjalanan saya sebagai calon guru profesional melalui refleksi, karya, dan praktik mengajar di sekolah.
            </motion.p>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="mt-10"
            >
              <Link
                to="/profil"
                className="group relative inline-flex items-center px-8 py-4 bg-white text-gray-900 font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:bg-gray-50 active:scale-95"
              >
                <span>Lihat Perjalanan Saya</span>
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex-shrink-0"
          >
            <div className="relative w-52 h-52 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden ring-4 ring-white/40 shadow-2xl backdrop-blur-md">
              <img
                src="https://placehold.co/400x400/1e293b/white?text=Foto+Anda"
                alt="Calon Guru PPG"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/20 to-purple-300/30"></div>
            </div>
          </motion.div>
        </div>

        {/* Gelombang bawah */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 100" className="w-full h-auto">
            <path fill="#F2F2F7" d="M0,64L48,58.7C96,53,192,43,288,48C384,53,480,75,576,74.7C672,75,768,53,864,42.7C960,32,1056,32,1152,37.3C1248,43,1344,53,1392,58.7L1440,64L1440,100L0,100Z" />
          </svg>
        </div>
      </section>

      {/* LPTK & Sekolah PPL dengan Glassmorphism */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="w-full mt-8 px-6 md:px-12 lg:px-24"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            whileHover={{ y: -5 }}
            className="glass-card glass-card-hover rounded-[2.5rem] p-8 md:p-10 transition-all duration-300"
          >
            <div className="text-blue-600 mb-4">
              <Building2 size={36} />
            </div>
            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
              LPTK – Universitas Lambung Mangkurat
            </h3>
            <p className="text-gray-700 mt-4 text-base leading-relaxed">
              Lembaga Pendidikan Tenaga Kependidikan (LPTK) penyelenggara program PPG Calon Guru.
              ULM berkomitmen mencetak pendidik profesional yang mengintegrasikan nilai lokal Kalimantan Selatan dengan pedagogi modern.
            </p>
            <div className="flex flex-wrap gap-4 mt-6 text-sm font-medium text-blue-600">
              <span className="flex items-center gap-1"><MapPin size={14} /> Banjarmasin</span>
              <span className="flex items-center gap-1"><Award size={14} /> Akreditasi Unggul</span>
            </div>
            <ImageCarousel images={ulmImages} alt="Kampus ULM" />
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="glass-card glass-card-hover rounded-[2.5rem] p-8 md:p-10 transition-all duration-300"
          >
            <div className="text-green-600 mb-4">
              <School size={36} />
            </div>
            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-teal-400">
              Sekolah PPL – SMP Negeri 2 Banjarmasin
            </h3>
            <p className="text-gray-700 mt-4 text-base leading-relaxed">
              Sekolah mitra tempat pelaksanaan PPL Terbimbing. SMPN 2 Banjarmasin menjadi wahana praktik mengajar nyata yang membentuk kompetensi pedagogik, profesional, dan sosial.
            </p>
            <div className="flex flex-wrap gap-4 mt-6 text-sm font-medium text-green-600">
              <span className="flex items-center gap-1"><MapPin size={14} /> Jl. Pangeran Hidayatullah</span>
              <span className="flex items-center gap-1"><School size={14} /> Sekolah Negeri</span>
            </div>
            <ImageCarousel images={smp2Images} alt="SMPN 2 Banjarmasin" />
          </motion.div>
        </div>
      </motion.section>

      {/* Fitur Kartu - iOS Style */}
      <motion.section
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="w-full py-20 px-6 md:px-12 lg:px-24"
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">Komponen E-Portfolio</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto mt-4 rounded-full"></div>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Telusuri setiap bagian untuk melihat proses pembelajaran dan praktik mengajar saya.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, idx) => (
            <motion.div
              key={idx}
              variants={fadeInUp}
              whileHover={{ y: -12, scale: 1.03 }}
              className="glass-card glass-card-hover rounded-[2.5rem] overflow-hidden transition-all duration-300 group"
            >
              <Link to={item.link} className="block p-8 text-center relative">
                <div className="flex justify-center mb-6 group-hover:scale-110 transition-transform duration-300 drop-shadow-md">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                <span className="inline-flex items-center mt-6 text-blue-600 font-semibold text-sm group-hover:gap-2 transition-all">
                  Selengkapnya
                  <ChevronRight size={14} className="ml-1" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Statistik dengan Glass */}
      <div className="w-full py-16 px-6 md:px-12 lg:px-24">
        <div className="glass-card rounded-[2.5rem] p-8 md:p-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="text-4xl md:text-5xl font-black bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              <AnimatedNumber value={2} />
            </div>
            <div className="text-gray-600 font-medium mt-2">Siklus PPL</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="text-4xl md:text-5xl font-black bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-teal-500">
              <AnimatedNumber value={8} />+
            </div>
            <div className="text-gray-600 font-medium mt-2">Artefak</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="text-4xl md:text-5xl font-black bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-pink-500">
              <AnimatedNumber value={2} />
            </div>
            <div className="text-gray-600 font-medium mt-2">Pembimbing</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="text-4xl md:text-5xl font-black bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600">
              100%
            </div>
            <div className="text-gray-600 font-medium mt-2">Refleksi</div>
          </motion.div>
        </div>
      </div>

      {/* Kutipan Inspiratif */}
      <div className="w-full py-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto glass-card rounded-[2.5rem] p-10 text-center">
          <Quote size={36} className="text-blue-400 mb-4 mx-auto" />
          <p className="text-2xl md:text-3xl italic font-light text-gray-800 leading-relaxed">
            Mendidik bukan hanya mengisi kepala, tetapi juga menyalakan hati.
          </p>
          <p className="mt-6 text-blue-600 font-medium">— Anonim</p>
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full bg-gray-900/90 backdrop-blur-md text-gray-300 py-8 text-center text-sm md:text-base mt-12">
        <div className="max-w-4xl mx-auto px-6">
          <p className="opacity-80">
            © 2025 — E-Portfolio PPG Calon Guru | Universitas Lambung Mangkurat | PPL di SMPN 2 Banjarmasin
          </p>
          <p className="mt-1 text-xs opacity-60">Menjadi guru profesional, berawal dari praktik yang bermakna.</p>
        </div>
      </footer>
    </div>
  );
};

export default Beranda;