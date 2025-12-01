import React from 'react';

const Pill = ({ children = 'EDUCATION' }) => (
  <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-neutral-900 px-3.5 py-1 text-[11px] uppercase tracking-[0.16em] text-neutral-300">
    <span className="h-2 w-2 rounded-full bg-lime-400 shadow-[0_0_8px_rgba(163,230,53,0.8)]" />
    {children}
  </span>
);

const EducationRow = ({ title, institute, details }) => (
  <div className="border-b border-white/10 py-6 last:border-none">
    <div className="grid grid-cols-[1fr_auto] gap-x-8 gap-y-1 items-start">
      {/* Left Side */}
      <div className="text-lg sm:text-[18px] font-medium text-white">
        {institute}
      </div>

      {/* Right Side */}
      <div className="text-right text-neutral-300">{title}</div>

      {/* Sub info */}
      <div className="col-start-2 text-right text-[18px] text-neutral-400 leading-tight">
        {details.map((d, i) => (
          <span key={i} className="block text-neutral-500">
            {d}
          </span>
        ))}
      </div>
    </div>
  </div>
);

export default function Education() {
  const educationData = [
    {
      title: '3rd Year (Running)',
      institute: 'Northern University Bangladesh',
      details: ['B.Sc in Computer Science & Engineering'],
    },
    {
      title: 'HSC - 2021',
      institute: 'Samsul Hoque Khan School & College',
      details: ['GPA: 5.00', 'Group: Science'],
    },
    {
      title: 'SSC - 2019',
      institute: 'Samsul Hoque Khan School & College',
      details: ['GPA: 5.00', 'Group: Science'],
    },
  ];

  return (
    <section className="bg-black text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
          {/* Left Heading */}
          <div>
            <Pill>Education</Pill>
            <h1 className="mt-4 font-semibold tracking-tight leading-none text-[clamp(36px,6vw,88px)]">
              My Education
              <br /> Background
            </h1>
          </div>

          {/* Right Content */}
          <div className="max-w-2xl w-full">
            {educationData.map((item, i) => (
              <EducationRow key={i} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
