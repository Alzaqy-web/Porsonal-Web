export default function Contact() {
  return (
    <main id="Contact">
      <section className="relative min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8">
        {/* Background Overlay with Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800   to-indigo-900 opacity-90"></div>

        {/* Content Container */}
        <div className="relative z-10 w-full max-w-2xl mx-auto p-8 bg-white/10 rounded-xl shadow-2xl backdrop-blur-md border border-white/20">
          <h1 className="text-center text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 hover:from-purple-600 hover:to-blue-400 transition-all duration-300 ease-in-out mb-8">
            Contact Me!
          </h1>
          <p className="text-center text-lg text-gray-200 mb-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
            necessitatibus aspernatur maiores, assumenda tempora accusamus?
          </p>

          {/* Contact Form Structure (Styling Only) */}
          <form action="https://formspree.io/f/xrbkqboz"
            method="POST" className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-gray-200 text-sm font-bold mb-2"
              >
                Fullname:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-800 leading-tight focus:outline-none focus:shadow-outline bg-white/80 focus:bg-white transition duration-200"
                placeholder="your name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-gray-200 text-sm font-bold mb-2"
              >
                Your Email:
              </label>
              <input
                type="email"
                id="email"
                name="_replyto"
                required
                className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-800 leading-tight focus:outline-none focus:shadow-outline bg-white/80 focus:bg-white transition duration-200"
                placeholder="email@example.com"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-gray-200 text-sm font-bold mb-2"
              >
                Your message:
              </label>
              <textarea
                id="message"
                name="message"
                required
                className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-800 leading-tight focus:outline-none focus:shadow-outline bg-white/80 focus:bg-white transition duration-200 resize-y"
                placeholder="Write your message here..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300 ease-in-out transform hover:scale-105"
            >
              Send message
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
