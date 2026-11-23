import { ArrowRight, ArrowUpRight } from 'lucide-react';

function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pb-20 pt-32 lg:px-10"
    >
      {/* Background Effects */}
      <div className="pointer-events-none absolute -left-40 top-40 h-96 w-96 rounded-full bg-purple-600/20 blur-[130px]" />

      <div className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-cyan-500/10 blur-[130px]" />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-2">

        {/* Left Content */}
        <div>
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-purple-400/20 bg-purple-500/10 px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-purple-400" />

            <span className="text-xs font-medium text-purple-300">
              Computer and Information Science Graduate
            </span>
          </div>

          <p className="mb-4 text-lg text-gray-400">
            Hello, I'm
          </p>

          <h1 className="text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
            Abobarin
            <br />

            <span className="bg-gradient-to-r from-purple-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
              Toheeb.
            </span>
          </h1>

          <h2 className="mt-6 text-xl font-semibold text-gray-200 sm:text-2xl">
            Software Developer
          </h2>

          <p className="mt-5 max-w-xl text-base leading-8 text-gray-400">
            I build modern, responsive, and user-focused web applications.
            I enjoy turning ideas into functional digital experiences
            through clean code, thoughtful design, and continuous learning.
          </p>

          {/* Action Buttons */}
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-purple-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-purple-500/20 transition-all hover:-translate-y-1 hover:bg-purple-500"
            >
              Explore My Work

              <ArrowUpRight
                size={18}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-7 py-3.5 text-sm font-semibold text-gray-200 transition-all hover:border-purple-400/50 hover:bg-white/10"
            >
              Contact Me
              <ArrowRight size={17} />
            </a>
          </div>

          {/* Social Links */}
          <div className="mt-12 flex items-center gap-5">
            <span className="text-xs font-medium uppercase tracking-widest text-gray-500">
              Find me on
            </span>

            <a
              href="https://github.com/toheebayomide21"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-gray-400 transition-colors hover:text-purple-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
            </svg>
            </a>
          </div>
        </div>

        {/* Right Content */}
        <div className="relative mx-auto w-full max-w-lg">

          {/* Glow Effect */}
          <div className="absolute inset-0 scale-90 rounded-full bg-gradient-to-br from-purple-600/30 to-cyan-500/20 blur-[100px]" />

          {/* Developer Card */}
          <div className="relative rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-purple-950/30 backdrop-blur-xl sm:p-8">

            {/* Card Header */}
            <div className="mb-8 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-yellow-400" />
                <span className="h-3 w-3 rounded-full bg-green-400" />
              </div>

              <span className="text-xs text-gray-500">
                developer.js
              </span>
            </div>

            {/* Code Content */}
            <div className="space-y-5 font-mono text-sm leading-7 sm:text-base">
              <p className="text-purple-400">
                const <span className="text-cyan-300">developer</span> = {'{'}
              </p>

              <div className="space-y-2 pl-5">
                <p>
                  <span className="text-gray-400">name:</span>{' '}
                  <span className="text-green-300">'Toheeb'</span>,
                </p>

                <p>
                  <span className="text-gray-400">role:</span>{' '}
                  <span className="text-green-300">'Software Developer'</span>,
                </p>

                <p>
                  <span className="text-gray-400">skills:</span> [
                </p>

                <div className="pl-5 text-cyan-300">
                  <p>'React'</p>
                  <p>'JavaScript'</p>
                  <p>'Tailwind CSS'</p>
                  <p>'PHP & MySQL'</p>
                </div>

                <p>],</p>

                <p>
                  <span className="text-gray-400">mindset:</span>{' '}
                  <span className="text-green-300">'Always learning'</span>
                </p>
              </div>

              <p className="text-purple-400">{'}'};</p>
            </div>

            {/* Card Footer */}
            <div className="mt-10 flex items-center justify-between border-t border-white/10 pt-5">
              <span className="text-xs text-gray-400">
                Building with purpose
              </span>

              <span className="text-xs text-gray-500">
                {'</>'}
              </span>
            </div>
          </div>

          {/* Floating Label */}
          <div className="absolute -right-3 top-16 rounded-xl border border-white/10 bg-[#15182a] px-4 py-3 shadow-xl sm:-right-8">
            <p className="text-xs text-gray-400">
              Currently focused on
            </p>

            <p className="mt-1 text-sm font-semibold text-cyan-300">
              React Development
            </p>
          </div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-gray-500 transition-colors hover:text-purple-400 md:flex"
      >
        <span className="text-xs tracking-widest">
          SCROLL TO EXPLORE
        </span>

        <ArrowRight size={17} className="rotate-90" />
      </a>
    </section>
  );
}

export default Hero;
