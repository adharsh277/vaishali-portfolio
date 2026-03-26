import React from 'react';

const educationData = [
  {
    institution: 'Lovely Professional University Phagwara, Punjab',
    degree: 'Bachelor of Technology',
    duration: "Aug’ 23 – Present",
    details: 'Computer Science and Engineering; CGPA: 7.9',
  },
  {
    institution: 'Durga Higher Secondary School Kanhangad, Kerala',
    degree: 'Intermediate',
    duration: "Mar’ 22 – May’ 23",
    details: 'PCM; Percentage: 98%',
  },
  {
    institution: 'Sadguru Public School Kanhangad, Kerala',
    degree: 'Matriculation',
    duration: "Mar’ 20 – May’ 21",
    details: 'Percentage: 92%',
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="relative py-20 px-6 md:px-12 lg:px-20 w-full overflow-hidden">
      {/* Decorative blurred background shape */}
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-r from-red-500 via-pink-500 to-orange-400 opacity-30 blur-3xl rounded-full z-0" />
      <div className="relative z-10">
        {/* Section Title */}
        <div className="flex items-center justify-center mb-12">
          <div className="flex items-center w-full max-w-xl">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-red-400 to-transparent" />
            <span className="mx-4 px-6 py-2 rounded-full border-2 border-gradient-to-r from-red-400 via-pink-500 to-orange-400 bg-black/60 backdrop-blur-md text-white font-bold text-2xl md:text-3xl tracking-wide shadow-lg">
              EDUCATION
            </span>
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-red-400 to-transparent" />
          </div>
        </div>
        {/* Education Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {educationData.map((edu, idx) => (
            <div
              key={idx}
              className="relative bg-white/10 border border-white/20 rounded-2xl shadow-xl p-8 flex flex-col gap-2 backdrop-blur-md transition-transform hover:scale-105 hover:shadow-2xl"
              style={{ boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)' }}
            >
              <div className="text-lg font-semibold text-white mb-1">{edu.institution}</div>
              <div className="text-base font-medium text-red-300 mb-1">{edu.degree}</div>
              <div className="text-sm text-white/70 mb-1">{edu.duration}</div>
              <div className="text-sm text-white/80">{edu.details}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
