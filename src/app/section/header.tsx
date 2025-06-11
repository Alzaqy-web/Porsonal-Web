import { useState } from "react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <main>
      {/* Header */}
      <header className="font-sans antialiasedtext-gray-900 ">
        <div className="fixed w-full rounded-full p-10 border z-50 s bg-blur-lg bg-opacity-80 backdrop-filter backdrop-blur-lg shadow-md py-4">
          <div className="container mx-auto flex justify-between items-center px-4  ">
            <a
              href="#"
              className="text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 hover:from-purple-600 hover:to-blue-400 transition-all duration-300 ease-in-out"
            >
              Al
            </a>
            <nav className="hidden md:block">
              <ul className="flex space-x-6">
                <li>
                  <a
                    href="#Home"
                    className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 hover:from-purple-600 hover:to-blue-400 transition-all duration-300 ease-in-out"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#About"
                    className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 hover:from-purple-600 hover:to-blue-400 transition-all duration-300 ease-in-out"
                  >
                    About Me
                  </a>
                </li>
                <li>
                  <a
                    href="#Skills"
                    className="font-extrabold  text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 hover:from-purple-600 hover:to-blue-400 transition-all duration-300 ease-in-out"
                  >
                    Skills
                  </a>
                </li>
                <li>
                  <a
                    href="#Portfolio"
                    className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 hover:from-purple-600 hover:to-blue-400 transition-all duration-300 ease-in-out"
                  >
                    Portfolio
                  </a>
                </li>
                <li>
                  <a
                    href="/Contact"
                    className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 hover:from-purple-600 hover:to-blue-400 transition-all duration-300 ease-in-out"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
            <div className="md:hidden">
              <button onClick={toggleMobileMenu} className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Menu Mobile (dirender secara kondisional) */}
        {/* Pastikan z-index menu mobile juga tinggi agar tidak tertimpa */}
        {isMobileMenuOpen && (
          <nav className="md:hidden fixed top-16 left-0 w-full  bg-opacity-80 backdrop-filter backdrop-blur-lg shadow-lg py-4 z-50">
            {/* ^ Ubah z-10 menjadi z-50 atau lebih tinggi */}
            <ul className="flex flex-col items-center space-y-4">
              <li>
                <a
                  href="#Home"
                  className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 hover:from-purple-600 hover:to-blue-400 transition-all duration-300 ease-in-out"
                  onClick={toggleMobileMenu}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#About"
                  className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 hover:from-purple-600 hover:to-blue-400 transition-all duration-300 ease-in-out"
                  onClick={toggleMobileMenu}
                >
                  About Me
                </a>
              </li>
              <li>
                <a
                  href="#Skills"
                  className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 hover:from-purple-600 hover:to-blue-400 transition-all duration-300 ease-in-out"
                  onClick={toggleMobileMenu}
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#Portfolio"
                  className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 hover:from-purple-600 hover:to-blue-400 transition-all duration-300 ease-in-out"
                  onClick={toggleMobileMenu}
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="#Conntact"
                  className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 hover:from-purple-600 hover:to-blue-400 transition-all duration-300 ease-in-out"
                  onClick={toggleMobileMenu}
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        )}
      </header>
      {/* Header berakhir */}
    </main>
  );
}
