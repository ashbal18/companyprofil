"use client";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function About() {
  return (
    <div
      className="flex flex-col md:flex-row bg-cover bg-center min-h-screen p-4 md:p-12"
      style={{
        backgroundImage: "url('/bg1.jpg')",
        backgroundSize: "cover",
      }}
    >
      {/* Carousel Section */}
      <div className="w-full md:w-1/2 flex justify-center items-center mb-6 md:mb-0">
        <Carousel
          showThumbs={false}
          autoPlay
          infiniteLoop
          interval={3000}
          className="w-[90%] md:w-[80%] shadow-lg rounded-lg overflow-hidden"
        >
          {["/fototoko1.jpg", "/fototoko2.jpg", "/fototoko3.jpg"].map(
            (src, index) => (
              <div key={index}>
                <Image
                  src={src}
                  alt={`foto${index + 1}`}
                  width={500}
                  height={500}
                  className="rounded-lg object-cover"
                />
              </div>
            )
          )}
        </Carousel>
      </div>

      {/* Information Section */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-start p-4 md:p-8 space-y-6">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">
          Toko Al-Kautsar
        </h1>
        <div className="space-y-4">
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-white bg-blue-600 px-3 py-1 rounded-lg">
              Profil Singkat Perusahaan
            </h2>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed mt-2">
              Toko Al-Kautsar menyediakan berbagai kebutuhan sehari-hari dengan
              harga terjangkau dan kualitas terbaik. Kami berkomitmen memberikan
              pelayanan ramah dan profesional dengan berbagai produk mulai dari
              bahan pokok, perlengkapan rumah tangga, hingga fashion dan
              elektronik.
            </p>
          </div>
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-white bg-blue-600 px-3 py-1 rounded-lg">
              Pendiri
            </h2>
            <p className="text-gray-700 text-sm md:text-base mt-2">
              Bapak & Ibu
            </p>
          </div>
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-white bg-blue-600 px-3 py-1 rounded-lg">
              Alamat Perusahaan
            </h2>
            <p className="text-gray-700 text-sm md:text-base mt-2">
              Jl. Lintas Tebo - Bungo km 06 kelurahan tebing tinggi kecamatan
              tebo tengah kabupaten tebo
            </p>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="flex space-x-4 mt-4">
          {[
            {
              href: "https://www.google.com",
              src: "/globe.svg",
              alt: "Website",
            },
            {
              href: "https://www.instagram.com/",
              src: "/ig.jpg",
              alt: "Instagram",
            },
            {
              href: "https://www.linkedin.com/feed/",
              src: "/linked.png",
              alt: "LinkedIn",
            },
          ].map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform transform hover:scale-110"
            >
              <Image
                src={link.src}
                width={30}
                height={30}
                alt={link.alt}
                className="rounded-full shadow-md"
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
