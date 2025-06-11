export default function About() {
  return (
    <main>
      <section
        id="About"
        className="bg-slate-900 min-h-screen text-gray-300 py-16"
      >
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 hover:from-purple-600 hover:to-blue-400 transition-all duration-300 ease-in-out pb-12 text-center">
            About Me
          </h2>
          <div className="text-lg leading-relaxed space-y-8 pt-4">
            <p className="text-slate-300 text-xl">
              Halo! Saya AL ZAQY, seorang Software Engineer yang bersemangat
              dalam menciptakan solusi digital inovatif. Dengan keahlian
              mendalam di React, JavaScript, TypeScript, HTML, dan CSS, saya
              berdedikasi untuk membangun aplikasi web yang tidak hanya
              fungsional dan efisien, tetapi juga estetis. Saya percaya pada
              kekuatan kerja tim maupun inisiatif pribadi untuk mencapai hasil
              terbaik, selalu mengutamakan solusi yang elegan dan kode yang
              efisien. Sebagai individu yang bertanggung jawab, saya siap
              berkontribusi pada proyek Anda, baik itu pekerjaan penuh waktu
              atau proyek lepas, dan selalu terbuka untuk membangun relasi serta
              jaringan profesional.
            </p>
            <p className="text-slate-300 text-xl">
              Pendekatan saya dalam pengembangan selalu berpijak pada solusi
              yang cerdas dan estetika yang menawan, didukung oleh komitmen
              terhadap efisiensi kode. Baik bekerja secara individu maupun dalam
              tim, saya selalu mengedepankan tanggung jawab dan dedikasi penuh
              untuk mencapai hasil terbaik.
            </p>
            <p className="text-slate-300 text-xl">
              Saya selalu terbuka untuk tantangan baru, apakah itu sebagai
              bagian dari tim yang solid, mengerjakan proyek lepas yang
              inovatif, atau sekadar membangun relasi dan jaringan yang
              bermanfaat. Jika Anda mencari seorang engineer yang tidak hanya
              menguasai teknologi tetapi juga peduli terhadap dampak akhir, mari
              kita berkolaborasi!
            </p>
          </div>
          {/* Opsional: Tambahkan ajakan bertindak atau tautan ke resume/portofolio Anda */}
          <div className="text-center mt-12">
            <a
              href="#Contact"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transform transition-transform duration-300 ease-in-out hover:scale-105"
            >
              Mari Terhubung!
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
