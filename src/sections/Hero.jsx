
import { useEffect, useState } from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  Download,
  MessageCircle,
} from 'lucide-react';
import profileImage from '../assets/images/toheeb-profile.jpg';
const roles = [
  'Frontend Developer',
  'React Developer',
  'Graphic Designer',
  'Shopify Developer',
];

function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let delay = isDeleting ? 45 : 100;

    if (!isDeleting && displayText === currentRole) {
      delay = 1600;
    }

    if (isDeleting && displayText === '') {
      delay = 350;
    }

    const timeout = setTimeout(() => {
      if (!isDeleting && displayText === currentRole) {
        setIsDeleting(true);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setRoleIndex((current) => (current + 1) % roles.length);
      } else if (isDeleting) {
        setDisplayText(currentRole.substring(0, displayText.length - 1));
      } else {
        setDisplayText(currentRole.substring(0, displayText.length + 1));
      }
    }, delay);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-[#111315] px-6 pb-20 pt-32 lg:px-10"
    >
      {/* Background Effects */}
      <div className="hero-glow-pulse pointer-events-none absolute -left-40 top-40 h-96 w-96 rounded-full bg-orange-600/15 blur-[130px]" />

      <div className="hero-glow-pulse pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-orange-400/10 blur-[130px]" />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-2">

        {/* Left Content */}
        <div className="hero-fade-up">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-orange-500/25 bg-orange-500/10 px-4 py-2">
            <span className="h-2 w-2 animate-pulse rounded-full bg-orange-500" />

            <span className="text-xs font-medium text-orange-300">
              Computer and Information Science Graduate
            </span>
          </div>

          <p className="mb-4 text-lg text-gray-400">
            Hello, I'm
          </p>

          <h1 className="text-5xl font-bold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
            Abobarin
            <br />

            <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-amber-300 bg-clip-text text-transparent">
              Toheeb.
            </span>
          </h1>

          {/* Typing Animation */}
          <div className="mt-8 min-h-[90px] sm:min-h-[110px]">
            <h2
              className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl"
              aria-label={roles[roleIndex]}
            >
              <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-amber-300 bg-clip-text text-transparent">
                {displayText}
              </span>

              <span className="typing-cursor text-orange-500">|</span>
            </h2>
          </div>

          <p className="mt-5 max-w-xl text-base leading-8 text-gray-400">
            I build modern, responsive, and user-focused web applications.
            I enjoy turning ideas into functional digital experiences
            through clean code, thoughtful design, and continuous learning.
          </p>

          {/* Main Action Buttons */}
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-orange-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-orange-600/20 transition-all duration-300 hover:-translate-y-1 hover:bg-orange-500 hover:shadow-orange-500/40"
            >
              Explore My Work

              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-7 py-3.5 text-sm font-semibold text-gray-200 transition-all duration-300 hover:-translate-y-1 hover:border-orange-500/50 hover:bg-white/10"
            >
              Contact Me
              <ArrowRight size={17} />
            </a>
          </div>

          {/* CV and WhatsApp Buttons */}
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <a
              href="/cv.pdf"
              download="Abobarin-Toheeb-Ayomide-CV.pdf"
              className="inline-flex items-center gap-2 rounded-full border border-orange-500/40 bg-orange-500/10 px-6 py-3 text-sm font-semibold text-orange-300 transition-all duration-300 hover:-translate-y-1 hover:bg-orange-500/20"
            >
              <Download size={17} />
              Download CV
            </a>

            <a
              href="https://wa.me/2349130776697?text=Hello%20Toheeb%2C%20I%20visited%20your%20portfolio."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-6 py-3 text-sm font-semibold text-green-400 transition-all duration-300 hover:-translate-y-1 hover:bg-green-500/20"
            >
              <MessageCircle size={17} />
              WhatsApp Me
            </a>
          </div>

          {/* Social Links */}
          <div className="mt-10 flex items-center gap-5">
            <span className="text-xs font-medium uppercase tracking-widest text-gray-500">
              Find me on
            </span>

            {/* GitHub */}
            <a
              href="https://github.com/toheebayomide21"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-gray-400 transition-all duration-300 hover:-translate-y-1 hover:text-orange-400"
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

            {/* X / Twitter */}
            <a
              href="https://x.com/maino_utd"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X"
              className="text-gray-400 transition-all duration-300 hover:-translate-y-1 hover:text-orange-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M18.9 2H22l-6.8 7.8L23.2 22h-6.3l-5-7.2L5.6 22H2.4l7.3-8.4L1.8 2h6.4l4.5 6.7L18.9 2Zm-1.1 18h1.7L7.3 3.9H5.5L17.8 20Z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Right Content - Profile Picture */}
        <div className="hero-card-enter relative mx-auto w-full max-w-md">
          <div className="hero-glow-pulse absolute inset-0 scale-90 rounded-full bg-gradient-to-br from-orange-600/30 to-amber-400/15 blur-[100px]" />

          <div className="relative mx-auto aspect-[4/5] w-full max-w-[380px] overflow-hidden rounded-[2rem] border-2 border-orange-500/40 bg-[#202327] p-2 shadow-2xl shadow-orange-600/10">
            <img
              src={profileImage}
              alt="Abobarin Toheeb"
              className="h-full w-full rounded-[1.5rem] object-cover object-center"
            />

            <div className="absolute inset-x-2 bottom-2 rounded-b-[1.5rem] bg-gradient-to-t from-black/80 via-black/30 to-transparent px-6 pb-6 pt-16">
              <p className="text-sm font-medium text-orange-400">
                Abobarin Toheeb
              </p>

              <p className="mt-1 text-xs text-white/80">
                Frontend Developer
              </p>
            </div>
          </div>

          {/* Floating Label */}
          <div className="hero-floating absolute -right-3 top-16 rounded-xl border border-white/10 bg-[#202327] px-4 py-3 shadow-xl sm:-right-8">
            <p className="text-xs text-gray-400">
              Currently focused on
            </p>

            <p className="mt-1 text-sm font-semibold text-orange-400">
              {roles[roleIndex]}
            </p>
          </div>

          {/* Decorative Label */}
          <div className="absolute -bottom-5 -left-4 rounded-xl border border-orange-500/20 bg-[#181A1D] px-4 py-3 shadow-xl sm:-left-8">
            <p className="text-xs text-gray-400">
              Always learning
            </p>

            <p className="mt-1 text-sm font-semibold text-white">
              Always building.
            </p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-gray-500 transition-colors hover:text-orange-400 md:flex"
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
