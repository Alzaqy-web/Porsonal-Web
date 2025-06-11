export default function Testicard() {
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
  // HANYA ADA SATU export default di satu file
  const Testimoni = () => {
    // Gunakan 'const Testimoni = () => {' BUKAN 'const Testimoni = ('
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

    return;
  };
}
