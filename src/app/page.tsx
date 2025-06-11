"use client";

import React from "react";
import Image from "next/image";

import Header from "./section/header";
import About from "./section/about";
import Skills from "./section/skills";
import Portfolio from "./section/portfolio";
import Contact from "./section/contact";
import Fotter from "@/components/fotter";

export default function Home() {
  return (
    <main>
      {/* Header */}
      <Header />
      <section
        id="Home"
        className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-800 to-indigo-900 text-white text-center p-8 pt-20 h-full overflow-hidden"
      >
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-12 max-w-6xl w-full px-4">
          {/* Image Section */}
          <div className="md:w-1/3 flex justify-center">
            <Image
              src="/ALZAQY.jpg"
              width={100}
              height={100}
              alt="AL ZAQY"
              // fill
              className="rounded-full object-cover border-4 border-white shadow-xl transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl w-64 h-64 md:w-80 md:h-80"
            />
          </div>
          {/* Text Content Section */}
          <div className="text-center md:text-left md:w-2/3">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 leading-tight drop-shadow-lg animate-fade-in-down">
              Hello Everyone 👋, I am{" "}
              <span className="text-slate-900 text-shadow-lg">AL ZAQY</span>!
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl font-light mb-8 max-w-2xl mx-auto md:mx-0 drop-shadow-md animate-fade-in-up">
              A passionate
              <span className="text-slate-300 font-semibold">
                *Full-Stack Developer*
              </span>
              building modern and responsive web applications.
            </p>
            {/* Call to Action Button */}
            <a
              href="Portfolio"
              className="inline-flex items-center justify-center bg-white text-blue-700 px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-100 transition-all duration-300 shadow-lg transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-white focus:ring-opacity-50 animate-bounce-in"
            >
              View My Work
            </a>
          </div>
        </div>
      </section>

      {/* Abaout section */}
      <About />
      {/* Skills section */}
      <Skills />
      {/* portfolio section */}
      <Portfolio />
      {/* Contact section */}
      <Contact />
      {/* fotter */}
      <Fotter />
    </main>
  );
}
