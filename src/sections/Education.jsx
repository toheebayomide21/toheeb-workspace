
const education = [
  {
    number: '01',
    institution: 'Tai Solarin Federal University of Education (TASFUED)',
    qualification: 'B.Sc. Computer Science',
    type: 'University Education',
    description:
      'Studied Computer Science with an educational foundation, developing knowledge of computing concepts, information technology, software development, and instructional methods.',
    highlights: [
      'Built a foundation in computer science and information technology.',
      'Developed analytical and problem-solving skills.',
      'Gained knowledge of educational principles and teaching methods.',
    ],
  },
  {
    number: '02',
    institution: 'National Institute of Information Technology (NIIT)',
    qualification: 'Full-Stack Web Development',
    type: 'Professional Training',
    description:
      'Undertook practical training in full-stack web development, gaining exposure to building web applications and applying development concepts through hands-on projects.',
    highlights: [
      'Received practical training in full-stack web development.',
      'Worked on an E-learning Web Application as an assigned project.',
      'Applied web development concepts to build an application.',
    ],
  },
];

function Education() {
  return (
    <section
      id="education"
      className="bg-[#0c1020] px-6 py-24 lg:px-10 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mb-14 max-w-2xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-purple-400">
            Academic Background
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Education<span className="text-purple-400">.</span>
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-400">
            My academic background and professional training have helped
            shape my foundation in technology and software development.
          </p>
        </div>

        {/* Education cards */}
        <div className="grid gap-7 lg:grid-cols-2">
          {education.map((item) => (
            <article
              key={item.number}
              className="group rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition duration-300 hover:-translate-y-1 hover:border-purple-400/40 hover:bg-white/[0.05] sm:p-9"
            >
              <div className="mb-8 flex items-center justify-between">
                <span className="text-sm font-semibold text-purple-400">
                  {item.type}
                </span>

                <span className="text-sm font-medium text-slate-500">
                  {item.number}
                </span>
              </div>

              <h3 className="text-2xl font-semibold leading-snug text-white transition group-hover:text-purple-300 sm:text-3xl">
                {item.qualification}
              </h3>

              <p className="mt-4 text-base font-medium text-purple-300">
                {item.institution}
              </p>

              <p className="mt-6 text-sm leading-7 text-slate-400">
                {item.description}
              </p>

              <div className="mt-8 border-t border-white/10 pt-6">
                <h4 className="mb-5 text-sm font-semibold text-slate-200">
                  Key Highlights
                </h4>

                <ul className="space-y-4">
                  {item.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex items-start gap-3 text-sm leading-7 text-slate-400"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-purple-400" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
