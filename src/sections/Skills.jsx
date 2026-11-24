
import { Monitor, Server, Wrench } from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend Development',
    description: 'Building responsive and interactive user interfaces.',
    icon: Monitor,
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
    icon: Server,
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
    icon: Wrench,
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
      className="relative overflow-hidden bg-[#111315] px-6 py-24 lg:px-10 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="mb-16">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-orange-500">
            My Expertise
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Technical <span className="text-orange-500">Skills.</span>
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-8 text-gray-400">
            Technologies, tools, and skills I use to build web
            applications and develop practical digital solutions.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {skillCategories.map((category, index) => {
            const Icon = category.icon;

            return (
              <div
                key={category.title}
                className="group rounded-2xl border border-white/10 bg-[#202327] p-7 transition-all duration-300 hover:-translate-y-2 hover:border-orange-500/40 hover:shadow-xl hover:shadow-orange-950/10"
              >

                {/* Category Number and Icon */}
                <div className="mb-7 flex items-center justify-between">
                  <span className="text-3xl font-bold text-orange-500/40">
                    0{index + 1}
                  </span>

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-orange-500/25 bg-orange-500/10 text-orange-500 transition-all duration-300 group-hover:scale-110 group-hover:bg-orange-500/20 group-hover:text-orange-400">
                    <Icon size={24} strokeWidth={1.8} />
                  </div>
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
                      className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 text-xs font-medium text-gray-300 transition-colors duration-300 hover:border-orange-500/40 hover:bg-orange-500/10 hover:text-orange-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

              </div>
            );
          })}

        </div>

        {/* Bottom Message */}
        <div className="mt-12 rounded-2xl border border-orange-500/20 bg-orange-500/[0.05] p-6 transition-colors duration-300 hover:border-orange-500/30 sm:p-8">
          <p className="text-base leading-8 text-gray-300">
            <span className="font-semibold text-orange-400">
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
