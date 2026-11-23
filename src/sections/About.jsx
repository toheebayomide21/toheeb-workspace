function About() {
  const focusAreas = [
    'Frontend Development',
    'Responsive Web Design',
    'Backend Development',
    'Problem Solving',
  ];

  const technologies = [
    'HTML5',
    'CSS3',
    'JavaScript',
    'React',
    'Tailwind CSS',
    'PHP',
    'MySQL',
  ];

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#0b0e1b] px-6 py-24 lg:px-10 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="mb-16">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-purple-400">
            Get to know me
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            About <span className="text-purple-400">Me.</span>
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-8 text-gray-400">
            A little introduction to who I am, what I do, and what drives
            me as a developer.
          </p>
        </div>

        {/* About Content */}
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">

          {/* Introduction */}
          <div>
            <h3 className="mb-6 text-2xl font-semibold leading-relaxed text-white">
              Building digital experiences through code and creativity.
            </h3>

            <div className="space-y-5 text-base leading-8 text-gray-400">
              <p>
                I'm Abobarin Toheeb, a Computer and Information Science
                graduate with a strong interest in software development
                and building meaningful digital solutions.
              </p>

              <p>
                My development journey has involved working with
                technologies such as HTML, CSS, JavaScript, React,
                PHP, and MySQL to create responsive and functional
                web applications.
              </p>

              <p>
                I enjoy understanding how things work, solving
                development challenges, and improving my ability
                to write clean, maintainable code.
              </p>

              <p>
                I'm continuously exploring new technologies and
                looking for opportunities to contribute to projects
                where I can learn, collaborate, and grow as a developer.
              </p>
            </div>

            {/* Focus Areas */}
            <div className="mt-9">
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-300">
                Areas of Focus
              </h4>

              <div className="flex flex-wrap gap-3">
                {focusAreas.map((area) => (
                  <span
                    key={area}
                    className="rounded-full border border-purple-400/20 bg-purple-500/5 px-4 py-2 text-sm text-purple-300"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Skills Overview */}
          <div className="relative">

            {/* Background Glow */}
            <div className="absolute -right-10 top-10 h-64 w-64 rounded-full bg-purple-600/10 blur-[100px]" />

            <div className="relative rounded-3xl border border-white/10 bg-white/[0.03] p-7 sm:p-9">

              <div className="mb-8">
                <p className="text-sm font-medium text-purple-400">
                  My Development Toolkit
                </p>

                <h3 className="mt-3 text-2xl font-bold text-white">
                  Technologies I Work With
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-400">
                  Tools and technologies I use to develop web
                  applications and bring ideas to life.
                </p>
              </div>

              {/* Technology Tags */}
              <div className="flex flex-wrap gap-3">
                {technologies.map((technology) => (
                  <div
                    key={technology}
                    className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-medium text-gray-300 transition-all hover:border-purple-400/40 hover:bg-purple-500/10 hover:text-purple-300"
                  >
                    {technology}
                  </div>
                ))}
              </div>

              {/* Bottom Note */}
              <div className="mt-10 border-t border-white/10 pt-7">
                <p className="text-sm leading-7 text-gray-400">
                  <span className="font-semibold text-white">
                    My mindset:
                  </span>{' '}
                  Stay curious, keep learning, and build solutions
                  that make a difference.
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;
