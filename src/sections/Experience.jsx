
const experiences = [
  {
    number: '01',
    role: 'Frontend Developer (NYSC)',
    organization: 'Macrotech Business Solution Limited',
    type: 'Professional Experience',
    period: 'Present',
    description:
      'Currently gaining professional software development experience at Macrotech Business Solution Limited, contributing to the development of web-based applications using modern frontend technologies.',
    responsibilities: [
      'Developing responsive user interfaces using React and Tailwind CSS.',
      'Integrating frontend features with backend REST APIs.',
      'Working on project management, task workflows, and team management features.',
      'Implementing role-based access control and permission-driven user experiences.',
      'Identifying and resolving frontend issues while improving application usability.',
      'Collaborating with other developers throughout the software development process.',
    ],
    technologies: [
      'React',
      'JavaScript',
      'Tailwind CSS',
      'REST APIs',
      'Git',
      'GitHub',
    ],
  },
  {
    number: '02',
    role: 'IT Trainee',
    organization: 'Fortpremium International',
    type: 'Professional Training',
    period: 'Training Experience',
    description:
      'Received practical IT and computer applications training, gaining hands-on experience in office productivity tools, graphic design, computer operations, and digital services.',
    responsibilities: [
      'Used Microsoft Word, Excel, and PowerPoint for document creation, data management, and presentations.',
      'Practised basic graphic design using CorelDRAW.',
      'Carried out computer operations, file management, and basic troubleshooting.',
      'Performed typing, data entry, printing, scanning, and photocopying.',
      'Assisted with internet usage and online registration activities.',
      'Created, formatted, and prepared documents for professional presentation.',
    ],
    technologies: [
      'Microsoft Word',
      'Microsoft Excel',
      'Microsoft PowerPoint',
      'CorelDRAW',
      'Computer Operations',
      'Data Entry',
      'Online Registration',
    ],
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
      className="relative overflow-hidden bg-[#111315] px-6 py-24 lg:px-10 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section heading */}
        <div className="mb-16 max-w-2xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-orange-500">
            My Journey
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Experience<span className="text-orange-500">.</span>
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-400">
            My professional and practical experiences, the skills I have
            developed, and the journey that continues to shape me as a
            developer.
          </p>
        </div>

        {/* Experience timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute bottom-0 left-[15px] top-2 w-px bg-orange-500/25 sm:left-[19px]" />

          <div className="space-y-10">
            {experiences.map((experience) => (
              <article
                key={experience.number}
                className="relative pl-12 sm:pl-16"
              >
                {/* Timeline marker */}
                <div className="absolute left-0 top-1 flex h-8 w-8 items-center justify-center rounded-full border border-orange-500/40 bg-[#202327] sm:h-10 sm:w-10">
                  <div className="h-2.5 w-2.5 rounded-full bg-orange-500 shadow-[0_0_12px_rgba(249,115,22,0.5)]" />
                </div>

                {/* Experience card */}
                <div className="rounded-2xl border border-white/10 bg-[#202327] p-6 transition duration-300 hover:-translate-y-1 hover:border-orange-500/35 hover:shadow-xl hover:shadow-orange-950/10 sm:p-9">
                  <div className="mb-7 flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
                    <div>
                      <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-orange-500">
                        {experience.type}
                      </p>

                      <h3 className="text-2xl font-semibold text-white transition-colors duration-300 hover:text-orange-400 sm:text-3xl">
                        {experience.role}
                      </h3>

                      <p className="mt-2 text-sm text-slate-400">
                        {experience.organization}
                      </p>
                    </div>

                    <span className="w-fit rounded-full border border-orange-500/25 bg-orange-500/10 px-4 py-2 text-xs font-medium text-orange-300">
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
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-500" />
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
                          className="rounded-lg border border-orange-500/10 bg-orange-500/10 px-3 py-2 text-xs font-medium text-orange-200 transition-colors duration-300 hover:border-orange-500/30 hover:bg-orange-500/15"
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
