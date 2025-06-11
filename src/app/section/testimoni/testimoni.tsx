"use client"; // Ini adalah direktif Next.js, menandakan komponen ini akan berjalan di sisi klien (browser).

import React, { createContext, useContext, useEffect } from "react";
// Kita mengimpor React, serta tiga hal penting:
// - createContext: Untuk membuat konteks baru.
// - useContext: Untuk 'mengonsumsi' (menggunakan) data dari konteks.
// - useEffect: Untuk menjalankan efek samping.

// 1. Membuat Konteks untuk Data Kartu
const CardDataContext = createContext(null);
// Kita membuat objek konteks bernama CardDataContext.
// 'null' adalah nilai default-nya jika tidak ada Provider yang ditemukan.

// Komponen Card (Kartu)
const Card = ({ title, description, buttonText, buttonLink }) => {
  return (
    <div
      className="
      bg-cardBg rounded-xl p-8 shadow-md transition-all duration-300
      hover:shadow-xl hover:-translate-y-2 flex flex-col
    "
    >
      <h2 className="text-2xl font-semibold text-primary mb-4">{title}</h2>
      <p className="text-gray-700 text-base mb-6 flex-grow">{description}</p>
      <a
        href={buttonLink}
        className="
          inline-block bg-gradient-to-r from-primary to-secondary
          text-white font-semibold py-3 px-6 rounded-lg text-lg
          transition-transform duration-200 hover:scale-105 hover:shadow-lg
          focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary
        "
      >
        {buttonText}
      </a>
    </div>
  );
};

// Komponen Utama Aplikasi (Testimoni)
const Testimoni = () => {
  // Data kartu didefinisikan di dalam komponen Testimoni
  const cardData = [
    {
      title: "Fitur Unggulan 1",
      description:
        "Ini adalah deskripsi singkat tentang fitur pertama kami yang sangat menarik dan inovatif. Dirancang untuk efisiensi maksimal.",
      buttonText: "Lihat Detail",
      buttonLink: "#feature1",
    },
    {
      title: "Layanan Terbaik",
      description:
        "Kami menyediakan layanan yang komprehensif dan berkualitas tinggi untuk semua kebutuhan Anda. Kepercayaan Anda adalah prioritas kami.",
      buttonText: "Pelajari Lebih",
      buttonLink: "#service",
    },
    {
      title: "Desain Modern",
      description:
        "Nikmati antarmuka yang bersih, intuitif, dan responsif di semua perangkat. Estetika yang memukau dengan fungsionalitas penuh.",
      buttonText: "Lihat Portofolio",
      buttonLink: "#design",
    },
    {
      title: "Dukungan Pelanggan",
      description:
        "Tim kami siap membantu Anda 24/7 dengan dukungan yang ramah dan profesional. Kami selalu ada untuk Anda.",
      buttonText: "Hubungi Kami",
      buttonLink: "#support",
    },
  ];

  // 2. useEffect untuk Efek Samping
  // useEffect ini akan berjalan sekali setelah render awal (mirip componentDidMount di kelas komponen)
  useEffect(() => {
    console.log("Komponen Testimoni telah dimuat!");
    // Di sini Anda bisa mengambil data dari API, mengatur event listener, dll.
    return () => {
      // Fungsi return ini adalah fungsi 'cleanup' (mirip componentWillUnmount)
      console.log("Komponen Testimoni telah dibongkar!");
    };
  }, []); // Array dependensi kosong '[]' memastikan efek ini hanya berjalan sekali.

  return (
    // 3. Menyediakan data kartu ke konteks
    <CardDataContext.Provider value={cardData}>
      {/* <CardDataContext.Provider> membungkus bagian dari pohon komponen
          yang membutuhkan akses ke 'cardData'.
          Prop 'value' adalah data yang ingin Anda sediakan. */}
      <div className="min-h-screen bg-bgLight font-poppins">
        {/* Bagian Header */}
        <header
          className="
          bg-gradient-to-br from-blue-600 to-purple-800 text-white text-center p-2 pt-2 h-full overflow-hidden
        "
        >
          <h1 className="text-xl md:text-xl font-extrabold mb-4 leading-tight">
            Selamat Datang di Halaman Keren!
          </h1>
          {/* <p className="text-xl md:text-2xl opacity-90 max-w-2xl mx-auto">
              Temukan fitur-fitur inovatif dan layanan terbaik yang kami
              tawarkan. Desain responsif dan pengalaman pengguna yang luar
              biasa!
            </p> */}
        </header>

        {/* Konten Utama / Grid Kartu */}
        <main className="max-w-6xl mx-auto px-4 py-8">
          {/* 4. Mengonsumsi konteks untuk mendapatkan data kartu */}
          {/* Kita menggunakan komponen baru CardGrid di sini */}
          <CardGrid />
        </main>
      </div>
    </CardDataContext.Provider>
  );
};

// Komponen baru untuk mengonsumsi konteks
const CardGrid = () => {
  const cardData = useContext(CardDataContext);
  // Di sini, CardGrid menggunakan hook useContext(CardDataContext)
  // untuk mendapatkan data kartu yang telah disediakan oleh Testimoni melalui Provider.

  if (!cardData) {
    return <div>Memuat kartu...</div>; // Atau indikator loading lainnya
  }

  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  bg-gradient-to-br from-gray-700 to-indigo-800 p-8 rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300 ease-in-out border-t-4 border-blue-500">
      {cardData.map((data, index) => (
        <Card
          key={index}
          title={data.title}
          description={data.description}
          buttonText={data.buttonText}
          buttonLink={data.buttonLink}
        />
      ))}
    </div>
  );
};

export default Testimoni; // Ini adalah ekspor utama untuk file Testimoni.js
