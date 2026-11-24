
const projects = [
  {
    number: '01',
    category: 'Collaborative Platform',
    title: 'Project Management Application',
    description:
      'A project management platform designed to help teams organise projects, manage tasks, and collaborate effectively.',
    highlights: [
      'Project and task management',
      'Role-based access and permissions',
      'Project team management and API integration',
    ],
    technologies: [
      'React',
      'Tailwind CSS',
      'REST API',
      'Role-Based Access',
    ],
    preview: 'dashboard',
  },
  {
    number: '02',
    category: 'Education Technology',
    title: 'E-learning Web Application',
    description:
      'A web-based learning application developed during my full-stack web development training at NIIT.',
    highlights: [
      'Web-based learning experience',
      'Organised learning content',
      'Applied practical web development concepts',
    ],
    technologies: ['Web Development', 'E-learning'],
    preview: 'learning',
  },
];

function ProjectPreview({ type }) {
  if (type === 'dashboard') {
    return (
      <div className="flex h-full min-h-[230px] overflow-hidden rounded-xl bg-[#181A1D] p-3 sm:p-5">
        {/* Sidebar preview */}
        <div className="hidden w-1/4 space-y-4 border-r border-white/10 pr-3 sm:block">
          <div className="h-5 w-20 rounded bg-orange-500/80" />
          <div className="h-2 w-full rounded bg-white/20" />
          <div className="h-2 w-4/5 rounded bg-white/10" />
          <div className="h-2 w-full rounded bg-white/10" />
          <div className="h-2 w-3/4 rounded bg-white/10" />
        </div>

        {/* Dashboard preview */}
        <div className="flex-1 space-y-4 sm:pl-5">
          <div className="flex items-center justify-between">
            <div className="h-3 w-28 rounded bg-white/70" />
            <div className="h-6 w-6 rounded-full bg-orange-400/40" />
          </div>

          <div className="grid grid-cols-3 gap-2">
            {[
              'bg-orange-400/20',
              'bg-amber-400/20',
              'bg-emerald-400/20',
            ].map((color) => (
              <div
                key={color}
                className={`rounded-lg ${color} p-3`}
              >
                <div className="mb-3 h-2 w-10 rounded bg-white/30" />
                <div className="h-4 w-8 rounded bg-white/80" />
              </div>
            ))}
          </div>

          <div className="rounded-lg border border-white/10 bg-white/[0.03] p-3">
            <div className="mb-4 h-2 w-24 rounded bg-white/50" />

            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="mb-3 flex items-center gap-3"
              >
                <div className="h-7 w-7 rounded-md bg-orange-400/20" />
                <div className="flex-1 space-y-2">
                  <div className="h-2 w-3/4 rounded bg-white/30" />
                  <div className="h-1.5 w-1/2 rounded bg-white/10" />
                </div>
                <div className="h-2 w-10 rounded bg-emerald-400/50" />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-full min-h-[230px] items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-[#181A1D] via-[#25211E] to-[#3A2115] p-5">
      <div className="w-full max-w-sm rounded-xl border border-white/15 bg-white/[0.07] p-4 shadow-2xl backdrop-blur-sm">
        <div className="mb-5 flex items-center justify-between">
          <div className="h-4 w-24 rounded bg-white/80" />
          <div className="flex gap-2">
            <div className="h-2 w-8 rounded bg-white/30" />
            <div className="h-2 w-8 rounded bg-white/30" />
          </div>
        </div>

        <div className="mb-4 rounded-lg bg-gradient-to-r from-orange-500/30 to-amber-400/20 p-5">
          <div className="mb-3 h-3 w-2/3 rounded bg-white/70" />
          <div className="mb-2 h-2 w-full rounded bg-white/25" />
          <div className="h-2 w-3/4 rounded bg-white/25" />
          <div className="mt-5 h-7 w-24 rounded-md bg-orange-500/80" />
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="h-14 rounded-lg bg-white/10" />
          <div className="h-14 rounded-lg bg-white/10" />
        </div>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#181A1D] px-6 py-24 lg:px-10 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-14 max-w-2xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-orange-500">
            My Work
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Selected Projects<span className="text-orange-500">.</span>
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-400">
            A selection of projects I have contributed to and built while
            developing my skills in software development.
          </p>
        </div>

        {/* Project cards */}
        <div className="grid gap-8 lg:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.number}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-[#202327] transition duration-300 hover:-translate-y-1 hover:border-orange-500/40 hover:shadow-xl hover:shadow-orange-950/10"
            >
              {/* Project image and hover overlay */}
              <div className="relative overflow-hidden p-3 sm:p-4">
                <div className="overflow-hidden rounded-xl">
                  <div className="transition duration-700 group-hover:scale-105">
                    <ProjectPreview type={project.preview} />
                  </div>
                </div>

                {/* Hover overlay */}
                <div
                  className="absolute inset-3 flex flex-col items-center justify-center gap-4 rounded-xl bg-[#111315]/95 opacity-0 backdrop-blur-sm transition duration-300 group-hover:opacity-100 group-focus-within:opacity-100 [@media(hover:none)]:opacity-100 sm:inset-4"
                >
                  <p className="text-sm font-medium text-white">
                    Explore this project
                  </p>

                  <span className="inline-flex items-center gap-2 rounded-lg border border-orange-400/30 bg-orange-500/15 px-5 py-3 text-sm font-semibold text-orange-200">
                    Live Demo
                    <span className="rounded-full bg-orange-400/20 px-2 py-1 text-[10px] uppercase tracking-wide">
                      Coming Soon
                    </span>
                  </span>
                </div>

                {/* Project number */}
                <span className="absolute left-6 top-6 rounded-full border border-white/10 bg-[#111315]/80 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-md">
                  {project.number}
                </span>
              </div>

              {/* Project information */}
              <div className="px-6 pb-7 pt-3 sm:px-7 sm:pb-8">
                <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-orange-500">
                  {project.category}
                </p>

                <h3 className="text-2xl font-semibold text-white transition group-hover:text-orange-400">
                  {project.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-400">
                  {project.description}
                </p>

                {/* Highlights */}
                <div className="mt-7">
                  <h4 className="mb-4 text-sm font-semibold text-slate-200">
                    Key Contributions
                  </h4>

                  <ul className="space-y-3">
                    {project.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex items-start gap-3 text-sm leading-6 text-slate-400"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-500" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mt-7 border-t border-white/10 pt-6">
                  <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Technologies & Areas
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-lg border border-orange-500/10 bg-orange-500/10 px-3 py-2 text-xs font-medium text-orange-200 transition-colors hover:border-orange-500/30 hover:bg-orange-500/15"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Contact prompt */}
        <div className="mt-16 flex flex-col items-start justify-between gap-6 rounded-2xl border border-orange-500/20 bg-orange-500/[0.06] p-7 sm:flex-row sm:items-center sm:p-9">
          <div>
            <h3 className="text-xl font-semibold text-white">
              Have a project in mind?
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-400">
              I’m open to opportunities, collaborations, and interesting
              projects.
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-orange-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-orange-500"
          >
            Let’s Talk
            <span aria-hidden="true">↗</span>
          </a>
        </div>

      </div>
    </section>
  );
}

export default Projects;
