
const experiences = [
  {
    number: '01',
    role: 'Software Development Experience',
    organization: 'NYSC / PPA',
    type: 'Professional Experience',
    period: 'Present',
    description:
      'Building practical software development experience through contributing to web application development and working with modern frontend technologies.',
    responsibilities: [
      'Developing responsive user interfaces using React and Tailwind CSS.',
      'Integrating frontend features with backend REST APIs.',
      'Working on project management, task workflows, and team management features.',
      'Implementing role-based access and permissions.',
      'Collaborating with other developers to improve application functionality.',
    ],
    technologies: ['React', 'JavaScript', 'Tailwind CSS', 'REST APIs'],
  },
  {
    number: '02',
    role: 'Trainee',
    organization: 'Fortpremium International',
    type: 'Professional Training',
    period: 'Training Experience',
    description:
      'Gained practical exposure to a professional working environment through training at Fortpremium International.',
    responsibilities: [
      'Participated in practical workplace training.',
      'Developed professional skills through hands-on experience.',
      'Gained exposure to working with a team and handling assigned responsibilities.',
    ],
    technologies: ['Professional Development', 'Practical Training'],
  },
  {
    number: '03',
    role: 'Teaching Practice',
    organization: 'Educational Experience',
    type: 'Teaching Experience',
    period: 'Academic Experience',
    description:
      'Gained practical teaching experience through lesson planning, classroom instruction, student engagement, and assessment.',
    responsibilities: [
      'Prepared lesson plans and learning materials.',
      'Delivered classroom instruction and engaged students in learning activities.',
      'Assessed students’ understanding and academic progress.',
      'Developed communication, classroom management, and instructional skills.',
    ],
    technologies: [
      'Lesson Planning',
      'Classroom Management',
      'Communication',
      'Assessment',
    ],
  },
];

function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-[#080b16] px-6 py-24 lg:px-10 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mb-16 max-w-2xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-purple-400">
            My Journey
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Experience<span className="text-purple-400">.</span>
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-400">
            My professional and practical experiences, the skills I have
            developed, and the journey that continues to shape me as a
            developer.
          </p>
        </div>

        {/* Experience timeline */}
        <div className="relative">
          <div className="absolute bottom-0 left-[15px] top-2 w-px bg-purple-400/20 sm:left-[19px]" />

          <div className="space-y-10">
            {experiences.map((experience) => (
              <article
                key={experience.number}
                className="relative pl-12 sm:pl-16"
              >
                {/* Timeline marker */}
                <div className="absolute left-0 top-1 flex h-8 w-8 items-center justify-center rounded-full border border-purple-400/40 bg-[#151027] sm:h-10 sm:w-10">
                  <div className="h-2.5 w-2.5 rounded-full bg-purple-400" />
                </div>

                {/* Experience card */}
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:border-purple-400/30 sm:p-9">
                  <div className="mb-7 flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
                    <div>
                      <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-purple-400">
                        {experience.type}
                      </p>

                      <h3 className="text-2xl font-semibold text-white sm:text-3xl">
                        {experience.role}
                      </h3>

                      <p className="mt-2 text-sm text-slate-400">
                        {experience.organization}
                      </p>
                    </div>

                    <span className="w-fit rounded-full border border-purple-400/20 bg-purple-400/10 px-4 py-2 text-xs font-medium text-purple-200">
                      {experience.period}
                    </span>
                  </div>

                  <p className="max-w-3xl leading-7 text-slate-400">
                    {experience.description}
                  </p>

                  <div className="mt-8">
                    <h4 className="mb-5 text-sm font-semibold text-slate-200">
                      Responsibilities & Contributions
                    </h4>

                    <ul className="space-y-4">
                      {experience.responsibilities.map((responsibility) => (
                        <li
                          key={responsibility}
                          className="flex items-start gap-3 text-sm leading-7 text-slate-400"
                        >
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-purple-400" />
                          {responsibility}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8 border-t border-white/10 pt-6">
                    <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
                      Skills & Areas
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="rounded-lg bg-purple-400/10 px-3 py-2 text-xs font-medium text-purple-200"
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
        </div>
      </div>
    </section>
  );
}

export default Experience;
