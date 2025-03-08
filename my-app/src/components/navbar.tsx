"use client";
import { useState } from "react";
import Contact from "@/app/contact/page";
import { Menu, X } from "lucide-react";
import About from "@/app/about/page";
import Product from "@/app/product/page";
import Home from "@/app/home/page";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <div className="fixed top-0 left-0 right-0 bg-white shadow-md flex items-center justify-between h-[60px] px-5 md:px-10 lg:px-20 z-50">
        <h1 className="font-bold text-xl flex items-center">
          <span className="text-black">Toko Al-Kautsar</span>
          <img
            src="/logo.webp"
            alt="nama"
            className="h-[40px] w-[40px] rounded-full ml-2"
          />
        </h1>

        {/* Hamburger Menu */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>

        {/* Navigation Links */}
        <div
          className={`absolute top-[60px] left-0 right-0 bg-white shadow-md flex flex-col items-center space-y-4 p-5 md:flex md:flex-row md:static md:shadow-none md:space-y-0 md:space-x-6 md:p-0 transition-all duration-300 ease-in-out ${isOpen ? "block" : "hidden"}`}
        >
          <NavLink href="#hero">Home</NavLink>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#product">Product</NavLink>
          <NavLink href="#contact">Contact</NavLink>
      
        </div>
      </div>

      {/* Konten Halaman */}
      <div className="  space-y-20 bg-gray-100">
        <Section id="hero" title="">
          <Home />
        </Section>
        <Section id="about" title="">
          <About />
        </Section>
        <Section id="product" title="">
          <Product  />
        </Section>
        <Section id="contact" title="">
          <Contact />
        </Section>
      </div>
    </>
  );
}

// Komponen untuk Link dengan Smooth Scroll
function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <a href={href} onClick={handleClick} className="hover:text-teal-700 cursor-pointer text-lg font-medium">
      {children}
    </a>
  );
}

// Komponen untuk Section Halaman
function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="min-h-screen flex flex-col justify-center p-4">
      <h2 className="text-2xl font-bold text-center md:text-left">{title}</h2>
      <div className="mt-4 text-gray-700">{children}</div>
    </section>
  );
}