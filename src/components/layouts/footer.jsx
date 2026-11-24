
const footerLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#111315] px-6 py-12 lg:px-10">
      <div className="mx-auto max-w-7xl">

        <div className="flex flex-col justify-between gap-10 md:flex-row">

          {/* Brand */}
          <div className="max-w-sm">
            <a
              href="#home"
              className="text-2xl font-bold tracking-tight text-white"
            >
              Toheeb<span className="text-orange-500"> Abobarin</span>
            </a>

            <p className="mt-4 text-sm leading-7 text-slate-400">
              Software developer passionate about building
              useful, accessible, and user-friendly web applications.
            </p>

            <a
              href="mailto:toheebabobarin21@gmail.com"
              className="mt-5 inline-block text-sm text-orange-400 transition hover:text-orange-300"
            >
              toheebabobarin21@gmail.com
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Quick Links
            </h3>

            <div className="mt-5 grid grid-cols-2 gap-x-10 gap-y-4">
              {footerLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm text-slate-400 transition hover:text-orange-400"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Connect
            </h3>

            <div className="mt-5 flex flex-col gap-4">
              <a
                href="https://github.com/toheebayomide21"
                target="_blank"
                rel="noreferrer"
                className="text-sm text-slate-400 transition hover:text-orange-400"
              >
                GitHub ↗
              </a>

              <a
                href="mailto:toheebabobarin21@gmail.com"
                className="text-sm text-slate-400 transition hover:text-orange-400"
              >
                Email Me ↗
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col items-center justify-between gap-5 border-t border-white/10 pt-7 sm:flex-row">
          <p className="text-center text-xs text-slate-500">
            © {new Date().getFullYear()} Abobarin Toheeb. All rights reserved.
          </p>

          <a
            href="#home"
            className="text-xs font-medium text-slate-400 transition hover:text-orange-400"
          >
            Back to Top ↑
          </a>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
