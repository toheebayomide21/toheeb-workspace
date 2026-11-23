const skillCategories = [
  {
    title: 'Frontend Development',
    description: 'Building responsive and interactive user interfaces.',
    skills: [
      'HTML5',
      'CSS3',
      'JavaScript',
      'React',
      'Tailwind CSS',
    ],
  },
  {
    title: 'Backend Development',
    description: 'Working with server-side logic and databases.',
    skills: [
      'PHP',
      'Object-Oriented PHP',
      'MySQL',
      'REST API Integration',
    ],
  },
  {
    title: 'Tools & Workflow',
    description: 'Tools I use during development and collaboration.',
    skills: [
      'Git',
      'GitHub',
      'VS Code',
      'Postman',
    ],
  },
];

function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[#080b16] px-6 py-24 lg:px-10 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="mb-16">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-purple-400">
            My Expertise
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Technical <span className="text-purple-400">Skills.</span>
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-8 text-gray-400">
            Technologies, tools, and skills I use to build web
            applications and develop practical digital solutions.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="group rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition-all duration-300 hover:-translate-y-2 hover:border-purple-400/30 hover:bg-white/[0.05]"
            >

              {/* Category Number */}
              <div className="mb-7 flex items-center justify-between">
                <span className="text-3xl font-bold text-purple-400/40">
                  0{index + 1}
                </span>

                <div className="h-10 w-10 rounded-xl border border-purple-400/20 bg-purple-500/10 transition-colors group-hover:bg-purple-500/20" />
              </div>

              {/* Category Details */}
              <h3 className="text-xl font-semibold text-white">
                {category.title}
              </h3>

              <p className="mt-3 min-h-12 text-sm leading-6 text-gray-400">
                {category.description}
              </p>

              {/* Skill List */}
              <div className="mt-7 flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 text-xs font-medium text-gray-300 transition-colors hover:border-purple-400/40 hover:text-purple-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>

            </div>
          ))}

        </div>

        {/* Bottom Message */}
        <div className="mt-12 rounded-2xl border border-purple-400/10 bg-purple-500/[0.04] p-6 sm:p-8">
          <p className="text-base leading-8 text-gray-300">
            <span className="font-semibold text-purple-300">
              Always growing.
            </span>{' '}
            I'm continuously improving my technical abilities,
            exploring modern development tools, and learning
            better ways to build reliable applications.
          </p>
        </div>

      </div>
    </section>
  );
}

export default Skills;
