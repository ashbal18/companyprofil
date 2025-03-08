"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Product() {
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState([
    { id: 1, name: "Produk 1", price: "Rp 50.000", image: "/minyak.jpeg" },
    { id: 2, name: "Produk 2", price: "Rp 75.000", image: "/minyak.jpeg" },
    { id: 3, name: "Produk 3", price: "Rp 100.000", image: "/minyak.jpeg" },
  ]);

  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
  });

  const handleAddProduct = () => {
    if (newProduct.name && newProduct.price && newProduct.image) {
      setProducts([...products, { id: products.length + 1, ...newProduct }]);
      setNewProduct({ name: "", price: "", image: "" });
    }
  };

  const handleDeleteProduct = (id: number) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-yellow-100 p-4 sm:p-6">
      <header className="text-center text-2xl sm:text-3xl font-bold text-gray-800 mb-6">
        Belanja di Toko Al-Kautsar
      </header>

      <div className="mb-6 flex justify-center">
        <input
          type="text"
          placeholder="Cari produk..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />
      </div>

      <div className="mb-6 flex flex-col items-center gap-4">
        <input
          type="text"
          placeholder="Nama Produk"
          value={newProduct.name}
          onChange={(e) =>
            setNewProduct({ ...newProduct, name: e.target.value })
          }
          className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />
        <input
          type="text"
          placeholder="Harga Produk"
          value={newProduct.price}
          onChange={(e) =>
            setNewProduct({ ...newProduct, price: e.target.value })
          }
          className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />
        <input
          type="text"
          placeholder="URL Gambar Produk"
          value={newProduct.image}
          onChange={(e) =>
            setNewProduct({ ...newProduct, image: e.target.value })
          }
          className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />
        <button
          onClick={handleAddProduct}
          className="px-4 py-2 bg-green-500 text-white font-bold rounded-md hover:bg-green-400 transition"
        >
          Tambah Produk
        </button>
      </div>

      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
        {filteredProducts.map((product) => (
          <motion.div
            key={product.id}
            className="w-full h-full bg-white p-4 rounded-lg shadow-lg text-center"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-full h-auto max-h-[50px] sm:max-h-[150px] md:max-h-[300px] rounded-md">
              <img
                src={product.image}
                alt={product.name}
                className="w-100 h-100 object-cover rounded-md"
              />
            </div>
            <h2 className="text-lg sm:text-xl font-bold text-gray-800 mt-4">
              {product.name}
            </h2>
            <p className="text-md sm:text-lg text-yellow-500 font-semibold">
              {product.price}
            </p>
            <button
              onClick={() => alert(`${product.name} ditambahkan ke keranjang!`)}
              className="mt-3 w-full sm:w-auto px-4 py-2 bg-yellow-500 text-white font-bold rounded-md hover:bg-yellow-400 transition"
            >
              Tambah ke Keranjang
            </button>
            <button
              onClick={() => handleDeleteProduct(product.id)}
              className="mt-2 w-full sm:w-auto px-4 py-2 bg-red-500 text-white font-bold rounded-md hover:bg-red-400 transition"
            >
              Hapus Produk
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
