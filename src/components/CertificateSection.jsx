import React from "react";

const certificates = [
  {
    title: "Git and Github - Cipher Schools",
    // cover removed
    link: "https://drive.google.com/file/d/1gLjufFJR-DVpKoLNN685yALZaqk6HTx8/view?usp=sharing" // Google Drive link placeholder
  },
  {
    title: "A Guide to ML with Data Science",
    // cover removed
    link: "https://drive.google.com/file/d/1KBZBp1ZTyu0vAVqFIa2C5gE4frcggQFe/view?usp=sharing"
  },
  {
    title: "Data Visualisation: Empowering Business with Effective Insights - TATA",
    // cover removed
    link: "https://drive.google.com/file/d/134XVsC-0-i6yO06CFjeKL2qNN8riBHgj/view?usp=sharing"
  },
  {
    title: "Cloud Computing - NPTEL",
    // cover removed
    link: "https://drive.google.com/file/d/1HLqX5Vdms3ETgG42mRd6T49hnuDmp6cz/view?usp=sharing"
  },
];

const CertificateSection = () => {
  return (
    <section className="py-16 px-4 bg-black text-white">
      <h2 className="text-3xl font-bold mb-8 text-center">Certificates & Recognitions</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
        {certificates.map((cert, idx) => (
          <div key={idx} className="bg-zinc-900 rounded-lg shadow-lg p-4 flex flex-col items-center w-full max-w-xs">
            {/* Cover image removed as per user request */}
            <p className="text-lg font-semibold text-center mb-2">{cert.title}</p>
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 mt-auto bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded hover:from-blue-600 hover:to-purple-600 transition-colors duration-200 font-medium shadow"
            >
              View Certificate
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CertificateSection;
