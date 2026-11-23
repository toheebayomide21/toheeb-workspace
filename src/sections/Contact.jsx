
import { useState } from 'react';
import { Mail, ArrowUpRight, MapPin } from 'lucide-react';

// Contact links
const contactLinks = [
  {
    label: 'Email',
    value: 'toheebabobarin21@gmail.com',
    href: 'mailto:toheebabobarin21@gmail.com',
    icon: Mail,
  },
  {
    label: 'GitHub',
    value: 'github.com/toheebayomide21',
    href: 'https://github.com/toheebayomide21',
    icon: GithubIcon,
  },
  {
    label: 'LinkedIn',
    value: 'Visit LinkedIn',
    href: 'https://www.linkedin.com/',
    icon: LinkedinIcon,
  },
];

// Custom GitHub icon
function GithubIcon({ size = 21, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  );
}

// Custom LinkedIn icon
function LinkedinIcon({ size = 21, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.35V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.114 20.452H3.56V9h3.554v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    const emailBody = `
Name: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}
    `;

    const mailtoLink = `mailto:toheebabobarin21@gmail.com?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(emailBody)}`;

    window.location.href = mailtoLink;
  }

  return (
    <section
      id="contact"
      className="relative scroll-mt-24 overflow-hidden bg-[#080b16] px-6 py-24 lg:px-10 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section heading */}
        <div className="mb-14 max-w-2xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-purple-400">
            Get In Touch
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Let's Work Together<span className="text-purple-400">.</span>
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-400">
            Have an opportunity, project, or idea you'd like to discuss?
            I'd be happy to hear from you.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">

          {/* Contact information */}
          <div>
            <h3 className="text-2xl font-semibold text-white">
              Let's start a conversation.
            </h3>

            <p className="mt-4 max-w-md leading-7 text-slate-400">
              I'm open to software development opportunities,
              collaborations, and meaningful projects.
            </p>

            <div className="mt-9 space-y-5">
              {contactLinks.map((link) => {
                const Icon = link.icon;

                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.label === 'Email' ? undefined : '_blank'}
                    rel={link.label === 'Email' ? undefined : 'noreferrer'}
                    className="group flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-4 transition hover:border-purple-400/40 hover:bg-white/[0.06]"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-400/10 text-purple-300 transition group-hover:bg-purple-400/20">
                      <Icon size={21} />
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="text-xs text-slate-500">
                        {link.label}
                      </p>

                      <p className="mt-1 truncate text-sm font-medium text-white">
                        {link.value}
                      </p>
                    </div>

                    <ArrowUpRight
                      size={18}
                      className="text-slate-500 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-purple-300"
                    />
                  </a>
                );
              })}
            </div>

            <div className="mt-8 flex items-center gap-3 text-sm text-slate-400">
              <MapPin size={18} className="text-purple-400" />
              Lagos, Nigeria
            </div>
          </div>

          {/* Contact form */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
            <h3 className="text-xl font-semibold text-white">
              Send me a message
            </h3>

            <p className="mt-2 text-sm text-slate-400">
              Fill in the details below to get in touch.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">

              <div>
                <label
                  htmlFor="contact-name"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Your Name
                </label>

                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                  className="w-full rounded-lg border border-white/10 bg-[#0c1020] px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-purple-400"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Email Address
                </label>

                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                  className="w-full rounded-lg border border-white/10 bg-[#0c1020] px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-purple-400"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-subject"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Subject
                </label>

                <input
                  id="contact-subject"
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What is this about?"
                  required
                  className="w-full rounded-lg border border-white/10 bg-[#0c1020] px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-purple-400"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Message
                </label>

                <textarea
                  id="contact-message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message..."
                  required
                  className="w-full resize-none rounded-lg border border-white/10 bg-[#0c1020] px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-purple-400"
                />
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-purple-500 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-purple-400"
              >
                Send Message
                <ArrowUpRight size={18} />
              </button>

            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
