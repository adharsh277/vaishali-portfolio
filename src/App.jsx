import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutText from "./components/About";
import EducationSection from "./components/EducationSection";
import Experience from "./components/Experience";
import SkillsSection from './components/SkillsSection';
import { SpeedInsights } from "@vercel/speed-insights/react";
import ProjectsSection from "./components/Projects";
import ContactSection  from "./components/Contact";
import CertificateSection from "./components/CertificateSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen w-screen overflow-x-hidden bg-black text-white">
      <SpeedInsights />
      <Navbar />
      <Hero />
      <AboutText />
      <EducationSection />
      <Experience />
      <SkillsSection/>
      <ProjectsSection />
      <CertificateSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
