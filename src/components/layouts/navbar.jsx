
import { useEffect, useState } from 'react';
import {
  Menu,
  X,
  ArrowUpRight,
  Sun,
  Moon,
} from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('portfolio-theme') || 'dark';
    }

    return 'dark';
  });

  // Apply and remember the selected theme
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  // Switch between dark and light mode
  const toggleTheme = () => {
    setTheme((currentTheme) =>
      currentTheme === 'dark' ? 'light' : 'dark'
    );
  };

  const isDark = theme === 'dark';

  return (
    <header className="portfolio-navbar fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[#111315]/95 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">

        {/* Logo */}
        <a
          href="#home"
          className="whitespace-nowrap text-2xl font-bold tracking-tight text-white transition-colors duration-300"
        >
          Toheeb<span className="text-orange-500"> Abobarin</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-5 lg:flex xl:gap-7">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-400 transition-colors duration-300 hover:text-orange-400"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-4 lg:flex">

          {/* Theme Toggle */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
            title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
            className="theme-toggle flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-orange-500/50 hover:text-orange-400"
          >
            {isDark ? <Sun size={19} /> : <Moon size={19} />}
          </button>

          {/* Contact Button */}
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-orange-600 px-5 py-2.5 text-sm font-medium text-white shadow-lg shadow-orange-600/15 transition-all duration-300 hover:-translate-y-0.5 hover:bg-orange-500 hover:shadow-orange-500/25"
          >
            Let's Talk
            <ArrowUpRight size={16} />
          </a>
        </div>

        {/* Mobile Actions */}
        <div className="flex items-center gap-3 lg:hidden">

          {/* Mobile Theme Toggle */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
            title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
            className="theme-toggle flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-300 transition-all duration-300 hover:border-orange-500/50 hover:text-orange-400"
          >
            {isDark ? <Sun size={19} /> : <Moon size={19} />}
          </button>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="text-white transition-colors hover:text-orange-400"
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={25} /> : <Menu size={25} />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="mobile-navigation border-t border-white/10 bg-[#181A1D] px-6 py-6 lg:hidden">
          <div className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-sm font-medium text-gray-300 transition-colors duration-300 hover:text-orange-400"
              >
                {link.name}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2 text-sm font-medium text-orange-400"
            >
              Let's Talk
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
