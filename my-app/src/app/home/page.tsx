"use client";

import { TypeAnimation } from "react-type-animation";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="relative w-full min-h-screen">
      {/* Main Section */}
      <div className="relative h-screen flex flex-col justify-center items-center text-center text-white">
        <video
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
          <source src="/bgvd1.mp4" type="video/mp4" />
        </video>
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10"></div>
        <div className="relative z-20 max-w-4xl p-4 sm:p-6">
          <motion.img
            src="/kasir.png"
            alt="Toko Al-Kautsar"
            className="flex justify-center items-center mx-auto w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 object-cover rounded-full shadow-lg border-4 border-white mb-4 sm:mb-6"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          />
          <TypeAnimation
            sequence={["Selamat Datang ", 500, "di Toko Al-Kautsar", 500]}
            wrapper="span"
            speed={50}
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold"
            repeat={Infinity}
          />
          <p className="mt-3 sm:mt-4 text-sm sm:text-lg max-w-2xl mx-auto">
            Kami dengan senang hati menyambut Anda di Toko Al-Kautsar, tempat
            terbaik untuk memenuhi berbagai kebutuhan Anda.
          </p>
          <Marquee className="mt-3 sm:mt-4 text-yellow-300 font-bold text-sm sm:text-lg">
            <div className="flex gap-10">
              Toko Al-Kautsar - Terlengkap, Termurah, Terbaik!
            </div>
          </Marquee>
          <button className="mt-4 sm:mt-6 px-4 sm:px-6 py-2 sm:py-3 bg-yellow-500 text-black font-bold rounded-full shadow-lg hover:bg-yellow-400 transition-all">
            Belanja Sekarang
          </button>
        </div>
      </div>

      {/* About Section */}
      <div className="bg-white py-16 text-center" id="about">
        <h2 className="text-3xl font-bold">Tentang Kami</h2>
        <p className="mt-4 text-lg max-w-3xl mx-auto">
          Toko Al-Kautsar telah melayani pelanggan dengan berbagai produk
          berkualitas dan harga bersahabat selama lebih dari 10 tahun.
        </p>
      </div>

      {/* Products Section */}
      <div className="bg-gray-100 py-16 text-center" id="products">
        <h2 className="text-3xl font-bold">Produk Kami</h2>
        <p className="mt-4 text-lg">
          Temukan berbagai produk berkualitas di Toko Al-Kautsar.
        </p>
      </div>

      {/* Testimonials Section */}
      <div className="bg-white py-16 text-center" id="testimonials">
        <h2 className="text-3xl font-bold">Testimoni Pelanggan</h2>
        <p className="mt-4 text-lg">
          Apa kata pelanggan kami tentang layanan dan produk kami?
        </p>
      </div>
    </div>
  );
}
