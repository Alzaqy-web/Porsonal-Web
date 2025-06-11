import Image from "next/image";

export default function Portfolio() {
  return (
    <main id="Portfolio" className="bg-slate-900 min-h-screen text-gray-200">
      <section className="container mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 hover:from-purple-600 hover:to-blue-400 transition-all duration-300 ease-in-out pb-12">
            Portofolio
          </h1>
          <p className="mt-4 text-xl text-gray-400">
            A collection of projects that I have worked on.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-slate-800 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out">
            <Image
              src="/aliexpress.jpg"
              alt="Aliexpress"
              width={100}
              height={100}
              // fill
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold text-blue-300 mb-2">
                E-commerce
              </h2>
              <p className="text-gray-400 text-sm mb-4">
                Analyze AliExpress design, create mockup (Figma), re-implement
                responsive header, search bar, navigation and main promo.
              </p>
              <p className="text-gray-400 text-sm mb-4">
                React, Next.js, Figma, CSS Modules
              </p>
              <a
                href="#"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-full transition duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                More
              </a>
            </div>
          </div>

          <div className="bg-slate-800 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out">
            <Image
              src="/worxspace.jpg"
              alt="Worxspace"
              height={100}
              width={100}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold text-green-300 mb-2">
                Aplikasi To-Do List
              </h2>
              <p className="text-gray-400 text-sm mb-4">
                I design and develop intuitive UI/UX for efficient mobile
                applications, focusing on task creation, schedule, and
                communication features, resulting in functional tools that
                support team collaboration and productivity.
              </p>
              <p className="text-gray-400 text-sm mb-4">
                React Native (asumsi), Figma (untuk UI/UX)
              </p>
              <a
                href="#"
                className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-full transition duration-300"
                target="#"
                rel="noopenoreferrerner "
              >
                More
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
