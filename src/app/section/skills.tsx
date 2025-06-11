export default function Skills() {
  return (
    <main>
      <section id="Skills">
        <div className="min-h-screen pt-16 bg-gradient-to-br from-gray-800 to-indigo-900 text-white text-center p-8">
          <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 hover:from-purple-600 hover:to-blue-400 transition-all duration-300 ease-in-out pb-12">
            My Skills
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Front-End Skills */}
            <div className="bg-gradient-to-br from-gray-700 to-indigo-800 p-8 rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300 ease-in-out border-t-10 border-blue-500">
              <h2 className="text-3xl font-semibold mb-6 text-blue-300">
                Front-End
              </h2>
              <ul className="space-y-3 text-lg">
                <li>HTML5</li>
                <li>CSS3</li>
                <li>JavaScript (ES6+)</li>
                <li>TypeScript</li>
                <li>React.js</li>
                <li>Next.js</li>
                <li>Tailwind CSS</li>
              </ul>
              <div className="pt-8">
                <a
                  href="#front-end-details"
                  className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-full transition-colors duration-300"
                >
                  EXPLORE MORE
                </a>
              </div>
            </div>

            {/* Back-End Skills */}
            <div className="bg-gradient-to-br from-gray-700 to-indigo-800 p-8 rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300 ease-in-out border-t-10 border-green-500">
              <h2 className="text-3xl font-semibold mb-6 text-green-300">
                Back-End
              </h2>
              <ul className="space-y-3 text-lg">
                <li>Node.js</li>
                <li>Express.js</li>
                <li>Python</li>
              </ul>
              <div className="pt-8">
                <a
                  href="#back-end-details"
                  className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-full transition-colors duration-300"
                >
                  EXPLORE MORE
                </a>
              </div>
            </div>

            {/* DevOps & Tools */}
            <div className="bg-gradient-to-br from-gray-700 to-indigo-800 p-8 rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300 ease-in-out border-t-10 border-purple-500">
              <h2 className="text-3xl font-semibold mb-6 text-purple-300">
                DevOps & Tools
              </h2>
              <ul className="space-y-3 text-lg">
                <li>Git / GitHub</li>
              </ul>
              <div className="pt-8">
                <a
                  href="#devops-details"
                  className="inline-block bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-6 rounded-full transition-colors duration-300"
                >
                  EXPLORE MORE
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
