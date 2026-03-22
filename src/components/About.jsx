import BlurText from './BlurText';
import Carousel from './Carousel'; // Back to original
import { motion } from 'framer-motion';
import { TextGenerateEffect } from './TextGenerateEffect';
import PortfolioBox from './PortfolioBox';

const About = () => {
  const handleAnimationComplete = () => {
    console.log("Blur animation done");
  };

  return (
    <section
      id="about"
      className="relative bg-black text-white py-20 px-6 md:px-12 lg:px-20 w-full overflow-hidden"
      style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
        <motion.div
          className="absolute inset-0"
          animate={{ opacity: [0.02, 0.05, 0.02] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          style={{
            backgroundImage: `
              linear-gradient(rgba(139,92,246,0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(16,185,129,0.03) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      <div className="relative z-10">
        {/* Header with Mobile-Friendly TextGenerateEffect */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <div className="text-4xl md:text-5xl font-bold mb-4">
            <div className="flex flex-wrap justify-center items-baseline gap-2 md:gap-3">
              <TextGenerateEffect 
                words="About"
                className="text-center"
                filter={true}
                duration={0.8}
              />
              <motion.span
                className="bg-gradient-to-r from-orange-400 via-pink-500 to-red-500 bg-clip-text text-transparent inline-block"
                initial={{ opacity: 0, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, filter: "blur(0px)" }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                }}
                style={{
                  backgroundSize: '200% 200%',
                  animationDuration: '4s',
                  animationIterationCount: 'infinite',
                  animationTimingFunction: 'ease-in-out'
                }}
              >
                Me
              </motion.span>
            </div>
          </div>
          <p className="text-white/60 max-w-2xl mx-auto text-lg px-4">
            Get to know the person behind the code
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-start justify-between gap-12">

          {/* Left Side - Clean Highlighted Bio Text with Gradients */}
          <motion.div
            className="w-full lg:w-1/2 flex flex-col justify-start"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            {/* First Paragraph with BNP Paribas Gradient */}
            <div className="text-lg md:text-xl leading-relaxed font-semibold font-[Inter,sans-serif] text-gray-200 mb-6">
              <span>A passionate aspiring data engineer who enjoys building intelligent, data-driven solutions. Curious about transforming raw data into meaningful insights and designing scalable systems that solve real-world problems.</span>
            </div>

            {/* Second Paragraph with Python/SQL and DevOps Gradients */}
            <div className="text-lg md:text-xl leading-relaxed font-medium font-[Inter,sans-serif] text-gray-200 mb-6">
              <span>I learn by working on hands-on projects in machine learning, natural language processing, and analytical dashboards, which have helped me develop strong analytical thinking and structured problem-solving skills. My goal is to grow into a skilled data engineer who builds robust data pipelines and contributes to impactful technology solutions.</span>
            </div>

            {/* Portfolio Box styled like the provided image */}
          </motion.div>

          {/* Right Side - Profile Image */}
          <motion.div
            className="w-full lg:w-1/2 flex items-center justify-center lg:justify-end"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              <img
                src="/images/vaishali_v.png"
                alt="Vaishali V"
                className="w-80 h-80 md:w-96 md:h-96 lg:w-[400px] lg:h-[400px] object-cover object-center shadow-2xl rounded-xl"
                style={{
                  filter: 'contrast(1.05) saturate(1.1)',
                  imageRendering: 'auto',
                  WebkitBackfaceVisibility: 'hidden',
                  backfaceVisibility: 'hidden',
                  transform: 'translateZ(0)'
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-blue-500/10 blur-xl -z-10 rounded-xl" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;