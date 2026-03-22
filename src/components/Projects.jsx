import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LightRays from './LightRays'; // Import the LightRays component
import {
    FiCode,
    FiExternalLink,
    FiGithub,
    FiCalendar,
    FiUser,
    FiTrendingUp,
    FiDatabase,
    FiCpu,
    FiLayers,
    FiZap,
    FiShield,
    FiActivity
} from 'react-icons/fi';

// 🎯 PROJECT DATA CONFIGURATION
const projectsData = [
    {
        id: 1,
        title: "Enterprise Financial AI Assistant (RAG-Based NLP System)",
        category: "Machine Learning",
        period: "Jan 2026 - Ongoing",
        status: "Ongoing",
        type: "Academic",
        description: "Built an AI-powered financial research assistant using Retrieval-Augmented Generation (RAG) to enable semantic search, evidence-grounded question answering, and executive-level summarization of large-scale earnings call transcripts. The system uses vector embeddings with FAISS-based similarity search to retrieve relevant financial insights and generate context-aware responses using local LLM inference.",
        longDescription: "Apparel Classifier is a neural network model that classifies grayscale images of size (28X28)pixels and provides which category of clothing like shirts, T-shirts, Handbags e.tc. This model uses fasion dataset collected from various sources containing images of clothing('Footwear', 'Handbags', 'Shirts', 'T-shirts'). Te dataset has a total o 10,714 images in total",
        technologies: ["Python", "NLP", "RAG", "FAISS", "Streamlit", "LLM"],
        skills: [
            { name: "Python", level: 90 },
            { name: "NLP", level: 85 },
            { name: "RAG System", level: 80 },
            { name: "LLM Integration", level: 85 }
        ],
        achievements: [
            "Implemented semantic search using vector embeddings",
    "Integrated FAISS for efficient similarity retrieval",
    "Built context-aware Q&A and summarization system",
    "Developed interactive Streamlit interface"
        ],
        links: {
            github: "https://github.com/Vaishali-1234/enterprise-nlp-financial-rag",
            demo: "#",
            documentation: "#"
        },
        color: "#8b5cf6", // Purple theme for ML
        gradient: "from-purple-500 to-violet-600"
    },
    {
        id: 2,
        title: "Crime Analysis Dashboard",
        category: "Data Visualization",
        period: "Mar 2025 - May 2025",
        status: "Completed",
        type: "Academic",
        description: "Developed an interactive data analytics dashboard to analyze crime trends, identify high-risk regions, and support data-driven decision-making.",
        longDescription: "Built a data analytics system using Python and Power BI to process and visualize crime datasets. Implemented dynamic filtering, KPI indicators, and comparative analysis to uncover patterns and trends across regions and categories.",
        technologies: ["Python", "Pandas", "NumPy", "Power BI", "Data Visualization"],
        skills: [
            { name: "Data Analysis", level: 88 },
            { name: "Visualization", level: 82 },
            { name: "Pandas", level: 85 },
            { name: "Power BI", level: 84},
        ],
        achievements: [
               "Developed interactive dashboards with real-time filtering",
    "Implemented KPI indicators for trend analysis",
    "Enabled region-wise and category-wise crime insights",
    "Improved data storytelling with visual analytics"

        ],
        links: {
            github: "https://github.com/Vaishali-1234/interactive-crime-analysis-dashboard",
            demo: "#",
            documentation: "#"
        },
        color: "#10b981", // Green theme for healthcare
        gradient: "from-emerald-500 to-teal-600"
    },
    {
        id: 3,
        title: "Diabetes Prediction ML System",
        category: "Diabetes Prediction ML System",
        period: "Feb 2025 - Jun 2025",
        status: "In Production",
        type: "Professional",
        description: "Built a machine learning system to predict diabetes risk using patient health parameters and classification models.",
        longDescription: "Developed a predictive ML pipeline including data preprocessing, exploratory data analysis, feature selection, and model training. Evaluated multiple classification algorithms to achieve reliable performance and provided insights through visualizations.",
        technologies: ["Python", "Scikit-learn", "Machine Learning", "Pandas", "Data Visualization"],
        skills: [
            { name: "Python", level: 92 },
            { name: "Scikit-learn", level: 88 },
            { name: "Machine Learning", level: 85 },
            { name: "Data Visualization", level: 90 }
        ],
        achievements: [
            "Built classification model for diabetes prediction",
    "Performed feature selection and preprocessing",
    "Evaluated model performance using standard metrics",
    "Generated insights through visual analysis"
        ],
        links: {
            github:"https://github.com/Vaishali-1234/diabetes-prediction-ml",
            demo: null,
            documentation: null
        },
        color: "#f59e0b", // Amber theme for fintech
        gradient: "from-amber-500 to-orange-600"
    },
    {
        id: 4,
        title: "Dynamic CPU Load Balancer",
        category: "Personal Project",
        period: "Apr 2025 - May 2025",
        status: "In Development",
        type: " Personal",
        description: "Designed a dynamic CPU load balancing system to monitor utilization and distribute tasks across multiple cores in real time.",
        longDescription:  "Implemented a threshold-based load balancing mechanism using multiprocessing to optimize CPU usage and reduce bottlenecks. The system visualizes real-time performance through a GUI and demonstrates core operating system scheduling concepts.",
        technologies: ["Python", "Multiprocessing", "Operating Systems", "Tkinter"],
        skills: [
            { name: "Python", level: 92 },
            { name: "SQL", level: 88 },
            { name: "Multiprocessing", level: 85 },
            { name: "OS Concepts", level: 90 },
            { name: "Tkinter", level: 80 }
        ],
        achievements: [
            "Implemented real-time CPU utilization monitoring",
    "Designed threshold-based load balancing logic",
    "Reduced processing bottlenecks through task distribution",
    "Built interactive GUI using Tkinter"
        ],
        links: {
            github: "https://github.com/Vaishali-1234/Dynamic-Load-Balancing-", 
            demo: null,
            documentation: "#"
        },
        color: "#ff00ff", // Amber theme for fintech
        gradient: "from-amber-500 to-orange-600"
    },
    {
        id: 5,
        title: "Model Monitoring and Drift-Simulation",
        category: "ML Monitoring Platform",
        period: "2026",
        status: "Completed",
        type: "Professional",
        description: "An end-to-end ML monitoring platform that detects data drift using statistical tests and automatically retrains the model when performance degrades, with a live Streamlit dashboard.",
        longDescription: "Developed a robust ML monitoring system that continuously checks for data drift using statistical tests, triggers automated retraining when model performance drops, and provides real-time insights through a Streamlit dashboard. Integrated with Supabase and PostgreSQL for data management and used SMOTE for handling imbalanced data.",
        technologies: ["Python", "Scikit-learn", "Streamlit", "Supabase", "PostgreSQL", "Pandas", "SMOTE"],
        skills: [
            { name: "Python", level: 90 },
            { name: "Scikit-learn", level: 85 },
            { name: "Streamlit", level: 88 },
            { name: "Supabase", level: 80 },
            { name: "PostgreSQL", level: 80 },
            { name: "Pandas", level: 85 },
            { name: "SMOTE", level: 80 }
        ],
        achievements: [
            "Implemented statistical tests for drift detection",
            "Automated model retraining on performance drop",
            "Built a live dashboard with Streamlit",
            "Integrated Supabase and PostgreSQL for data storage"
        ],
        links: {
            github: "https://github.com/Shivali-10/Model-Monitoring-and-Drift-Simulation",
            demo: "https://model-monitoring-and-drift-simulation.streamlit.app/",
            documentation: null
        },
        color: "#2563eb", // Blue theme for monitoring
        gradient: "from-blue-500 to-cyan-600"
    }
];

const ProjectsSection = () => {
    const [activeProject, setActiveProject] = useState(projectsData[0]);
    const [isMobile, setIsMobile] = useState(false);

    // Handle responsive design
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        if (typeof window !== 'undefined') {
            handleResize();
            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        }
    }, []);

    // Load fonts to match other sections
    useEffect(() => {
        const link = document.createElement('link');
        link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap';
        link.rel = 'stylesheet';
        document.head.appendChild(link);

        const style = document.createElement('style');
        style.textContent = `
      @font-face {
        font-family: 'SF Pro Display';
        src: url('${import.meta.env.BASE_URL}fonts/SF-Pro-Display-Medium.otf') format('opentype');
        font-weight: 500;
        font-display: swap;
      }
    `;
        document.head.appendChild(style);
    }, []);

    // Status badge component
    const StatusBadge = ({ status, type }) => {
        const getStatusColor = () => {
            switch (status) {
                case 'Completed': return 'bg-green-500/20 text-green-400 border-green-500/30';
                case 'In Progress': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
                default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
            }
        };

        const getTypeIcon = () => {
            switch (type) {
                case 'Academic': return '🎓';
                case 'Professional': return '💼';
                default: return '📋';
            }
        };

        return (
            <div className="flex items-center gap-2 mb-4">
                <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor()}`}>
                    {status}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-white/80 border border-white/20">
                    {getTypeIcon()} {type}
                </span>
            </div>
        );
    };

    // Skill bar component
    const SkillBar = ({ skill }) => (
        <div className="mb-3">
            <div className="flex justify-between items-center text-sm mb-2">
                <span className="text-white/80 font-medium">{skill.name}</span>
                <span className="text-white/60">{skill.level}%</span>
            </div>
            <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
                <motion.div
                    className="h-full rounded-full"
                    style={{ backgroundColor: activeProject.color }}
                    initial={{ width: '0%' }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                />
            </div>
        </div>
    );

    // Project navigation item
    const ProjectNavItem = ({ project, isActive, onClick }) => (
        <motion.div
            className={`cursor-pointer p-4 rounded-lg transition-all duration-300 border ${isActive
                ? 'bg-white/10 border-white/20 shadow-lg'
                : 'bg-white/5 border-white/10 hover:bg-white/8 hover:border-white/15'
                }`}
            onClick={onClick}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
        >
            <div className="flex items-center gap-3 mb-2">
                <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: project.color }}
                />
                <h3 className="font-semibold text-white text-sm md:text-base">
                    {project.title}
                </h3>
            </div>
            <p className="text-white/60 text-xs md:text-sm mb-2">{project.category}</p>
            <p className="text-white/50 text-xs">{project.period}</p>
        </motion.div>
    );

    return (
        <section
            id="projects"
            className="relative bg-black text-white py-20 px-6 md:px-12 lg:px-20 w-full overflow-hidden"
            style={{ fontFamily: "'SF Pro Display', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" }}
        >
            {/* Light Rays Background - Positioned behind everything */}
            <div className="absolute inset-0 z-0">
                <LightRays
                    raysOrigin="right"
                    raysColor="#f0abfc" // Purple color matching your theme
                    raysSpeed={1.0} // Slower, more elegant speed
                    lightSpread={1.5} // Wide spread for subtle effect
                    rayLength={1.8} // Extended length
                    pulsating={false} // No pulsating for professional look
                    fadeDistance={1.5} // Smooth fade
                    saturation={0.8} // Slightly desaturated
                    followMouse={true} // Interactive mouse following
                    mouseInfluence={0.15} // Subtle mouse influence
                    noiseAmount={0.08} // Very light noise for texture
                    distortion={0.03} // Minimal distortion
                    className="custom-rays" // Low opacity to not overpower content
                />
            </div>

            <div className="absolute inset-0 z-0">
                <LightRays
                    raysOrigin="left"
                    raysColor="#fb923c" // Purple color matching your theme
                    raysSpeed={1.0} // Slower, more elegant speed
                    lightSpread={1.5} // Wide spread for subtle effect
                    rayLength={1.5} // Extended length
                    pulsating={false} // No pulsating for professional look
                    fadeDistance={1.5} // Smooth fade
                    saturation={0.5} // Slightly desaturated
                    followMouse={true} // Interactive mouse following
                    mouseInfluence={0.15} // Subtle mouse influence
                    noiseAmount={0.08} // Very light noise for texture
                    distortion={0.03} // Minimal distortion
                    className="custom-rays" // Low opacity to not overpower content
                />
            </div>

            {/* Enhanced Background Overlay */}
            <div className="absolute inset-0 z-[1] overflow-hidden">
                {/* Gradient continuation from skills section */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/80" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/10 to-transparent" />

                {/* Enhanced tech grid pattern */}
                <motion.div
                    className="absolute inset-0"
                    animate={{ opacity: [0.02, 0.06, 0.02] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
                    style={{
                        backgroundImage: `
              linear-gradient(rgba(139,92,246,0.08) 1px, transparent 1px),
              linear-gradient(90deg, rgba(16,185,129,0.06) 1px, transparent 1px)
            `,
                        backgroundSize: '120px 120px'
                    }}
                />

                {/* Dynamic color-changing particles */}
                <motion.div
                    className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full"
                    style={{ backgroundColor: activeProject.color }}
                    animate={{
                        x: [0, 120, -60, 0],
                        y: [0, -100, 80, 0],
                        opacity: [0, 0.4, 0.2, 0],
                        scale: [0.5, 1.2, 0.8, 0.5],
                    }}
                    transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className="absolute top-3/4 right-1/3 w-1.5 h-1.5 rounded-full"
                    style={{ backgroundColor: activeProject.color, opacity: 0.3 }}
                    animate={{
                        x: [0, -100, 60, 0],
                        y: [0, 60, -40, 0],
                        opacity: [0, 0.6, 0.1, 0],
                        scale: [0.3, 1, 0.6, 0.3],
                    }}
                    transition={{ duration: 30, repeat: Infinity, ease: "easeInOut", delay: 8 }}
                />
                <motion.div
                    className="absolute top-1/2 right-1/4 w-1 h-1 rounded-full"
                    style={{ backgroundColor: '#10b981', opacity: 0.25 }}
                    animate={{
                        x: [0, 80, -120, 0],
                        y: [0, -70, 40, 0],
                        opacity: [0, 0.5, 0.15, 0],
                    }}
                    transition={{ duration: 35, repeat: Infinity, ease: "easeInOut", delay: 15 }}
                />
            </div>

            {/* Content */}
            <div className="relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.8 }}
                    className="mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-center">
                        Featured{' '}
                        <motion.span
                            className="bg-gradient-to-r from-purple-500 via-emerald-500 to-amber-500 bg-clip-text text-transparent"
                            animate={{
                                backgroundPosition: ['0% 0%', '100% 0%', '0% 0%']
                            }}
                            transition={{
                                duration: 8,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: 1
                            }}
                            style={{
                                backgroundSize: '200% 100%'
                            }}
                        >
                            Projects
                        </motion.span>
                    </h2>
                    <p className="text-center text-white/60 mt-4 max-w-2xl mx-auto">
                        A showcase of my development journey from academic projects to professional implementations
                    </p>
                </motion.div>

                {/* Main Content Container */}
                <div className="max-w-7xl mx-auto">
                    {isMobile ? (
                        // Mobile: Stacked Layout
                        <div className="space-y-8">
                            {/* Mobile Project Selector */}
                            <div className="space-y-4">
                                {projectsData.map((project) => (
                                    <ProjectNavItem
                                        key={project.id}
                                        project={project}
                                        isActive={activeProject.id === project.id}
                                        onClick={() => setActiveProject(project)}
                                    />
                                ))}
                            </div>

                            {/* Mobile Project Details */}
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeProject.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.3 }}
                                    className="bg-white/5 rounded-xl p-6 border border-white/10 backdrop-blur-sm"
                                >
                                    <div className="mb-6">
                                        <div className="flex items-center gap-3 mb-4">
                                            <div
                                                className="w-4 h-4 rounded-full"
                                                style={{ backgroundColor: activeProject.color }}
                                            />
                                            <h3 className="text-2xl font-bold text-white">
                                                {activeProject.title}
                                            </h3>
                                        </div>
                                        <StatusBadge status={activeProject.status} type={activeProject.type} />
                                    </div>

                                    <p className="text-white/80 leading-relaxed mb-6">
                                        {activeProject.longDescription}
                                    </p>

                                    {/* Technologies */}
                                    <div className="mb-6">
                                        <h4 className="text-white/90 font-semibold mb-3 flex items-center gap-2">
                                            <FiCode className="text-lg" />
                                            Technologies
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {activeProject.technologies.map((tech, index) => (
                                                <span
                                                    key={index}
                                                    className="px-3 py-1 bg-white/10 rounded-full text-sm text-white/80 border border-white/20"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Skills */}
                                    <div className="mb-6">
                                        <h4 className="text-white/90 font-semibold mb-4 flex items-center gap-2">
                                            <FiTrendingUp className="text-lg" />
                                            Skills Developed
                                        </h4>
                                        {activeProject.skills.map((skill, index) => (
                                            <SkillBar key={index} skill={skill} />
                                        ))}
                                    </div>

                                    {/* Achievements */}
                                    <div className="mb-6">
                                        <h4 className="text-white/90 font-semibold mb-3 flex items-center gap-2">
                                            <FiActivity className="text-lg" />
                                            Key Achievements
                                        </h4>
                                        <ul className="space-y-2">
                                            {activeProject.achievements.map((achievement, index) => (
                                                <li key={index} className="flex items-start gap-2 text-white/80">
                                                    <div
                                                        className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                                                        style={{ backgroundColor: activeProject.color }}
                                                    />
                                                    {achievement}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Links */}
                                    <div className="flex flex-wrap gap-3">
                                        {activeProject.links.github && (
                                            <a
                                                href={activeProject.links.github}
                                                className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors duration-200 text-white/80 hover:text-white border border-white/20"
                                            >
                                                <FiGithub />
                                                <span>Source Code</span>
                                            </a>
                                        )}
                                        {activeProject.links.demo && (
                                            <a
                                                href={activeProject.links.demo}
                                                className="flex items-center gap-2 px-4 py-2 rounded-lg transition-colors duration-200 text-white border-2"
                                                style={{
                                                    backgroundColor: `${activeProject.color}20`,
                                                    borderColor: activeProject.color,
                                                    color: activeProject.color
                                                }}
                                            >
                                                <FiExternalLink />
                                                <span>Live Demo</span>
                                            </a>
                                        )}
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    ) : (
                        // Desktop: Split Screen Layout
                        <div className="grid grid-cols-12 gap-8 min-h-[600px]">
                            {/* Left Panel - Project Navigation */}
                            <div className="col-span-4">
                                <motion.div
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6 }}
                                    className="sticky top-8"
                                >
                                    <h3 className="text-xl font-semibold text-white/90 mb-6 flex items-center gap-2">
                                        <FiLayers />
                                        Project Archive
                                    </h3>
                                    <div className="space-y-4">
                                        {projectsData.map((project) => (
                                            <ProjectNavItem
                                                key={project.id}
                                                project={project}
                                                isActive={activeProject.id === project.id}
                                                onClick={() => setActiveProject(project)}
                                            />
                                        ))}
                                    </div>

                                    {/* Add New Project Placeholder */}
                                    <motion.div
                                        className="mt-6 p-4 border-2 border-dashed border-white/20 rounded-lg text-center cursor-pointer hover:border-white/30 transition-colors duration-200"
                                        whileHover={{ scale: 1.02 }}
                                    >
                                        <div className="text-white/50 text-sm">
                                            <FiZap className="mx-auto mb-2" />
                                            More projects coming soon...
                                        </div>
                                    </motion.div>
                                </motion.div>
                            </div>

                            {/* Right Panel - Project Details */}
                            <div className="col-span-8">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={activeProject.id}
                                        initial={{ opacity: 0, x: 30 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -30 }}
                                        transition={{ duration: 0.4 }}
                                        className="bg-white/5 rounded-xl p-8 border border-white/10 backdrop-blur-sm"
                                    >
                                        {/* Project Header */}
                                        <div className="mb-8">
                                            <div className="flex items-center gap-4 mb-4">
                                                <div
                                                    className="w-5 h-5 rounded-full"
                                                    style={{ backgroundColor: activeProject.color }}
                                                />
                                                <h3 className="text-3xl font-bold text-white">
                                                    {activeProject.title}
                                                </h3>
                                            </div>
                                            <StatusBadge status={activeProject.status} type={activeProject.type} />
                                            <div className="flex items-center gap-4 text-white/60 text-sm">
                                                <div className="flex items-center gap-2">
                                                    <FiCalendar />
                                                    {activeProject.period}
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <FiUser />
                                                    {activeProject.category}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Project Description */}
                                        <div className="mb-8">
                                            <p className="text-white/80 leading-relaxed text-lg">
                                                {activeProject.longDescription}
                                            </p>
                                        </div>

                                        {/* Two Column Layout for Details */}
                                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                            {/* Left Column */}
                                            <div className="space-y-6">
                                                {/* Technologies */}
                                                <div>
                                                    <h4 className="text-white/90 font-semibold mb-4 flex items-center gap-2">
                                                        <FiCode className="text-lg" />
                                                        Technologies Used
                                                    </h4>
                                                    <div className="flex flex-wrap gap-2">
                                                        {activeProject.technologies.map((tech, index) => (
                                                            <motion.span
                                                                key={index}
                                                                initial={{ opacity: 0, scale: 0.8 }}
                                                                animate={{ opacity: 1, scale: 1 }}
                                                                transition={{ delay: index * 0.1 }}
                                                                className="px-3 py-2 bg-white/10 rounded-lg text-sm text-white/80 border border-white/20 hover:bg-white/20 transition-colors duration-200"
                                                            >
                                                                {tech}
                                                            </motion.span>
                                                        ))}
                                                    </div>
                                                </div>

                                                {/* Achievements */}
                                                <div>
                                                    <h4 className="text-white/90 font-semibold mb-4 flex items-center gap-2">
                                                        <FiActivity className="text-lg" />
                                                        Key Achievements
                                                    </h4>
                                                    <ul className="space-y-3">
                                                        {activeProject.achievements.map((achievement, index) => (
                                                            <motion.li
                                                                key={index}
                                                                initial={{ opacity: 0, x: -20 }}
                                                                animate={{ opacity: 1, x: 0 }}
                                                                transition={{ delay: index * 0.1 }}
                                                                className="flex items-start gap-3 text-white/80"
                                                            >
                                                                <div
                                                                    className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                                                                    style={{ backgroundColor: activeProject.color }}
                                                                />
                                                                {achievement}
                                                            </motion.li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>

                                            {/* Right Column */}
                                            <div>
                                                {/* Skills Developed */}
                                                <div>
                                                    <h4 className="text-white/90 font-semibold mb-4 flex items-center gap-2">
                                                        <FiTrendingUp className="text-lg" />
                                                        Skills Developed
                                                    </h4>
                                                    <div className="space-y-4">
                                                        {activeProject.skills.map((skill, index) => (
                                                            <SkillBar key={index} skill={skill} />
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Action Buttons */}
                                        <div className="mt-8 pt-6 border-t border-white/10">
                                            <div className="flex flex-wrap gap-4">
                                                {activeProject.links.github && (
                                                    <motion.a
                                                        href={activeProject.links.github}
                                                        whileHover={{ scale: 1.05 }}
                                                        whileTap={{ scale: 0.95 }}
                                                        className="flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 rounded-lg transition-colors duration-200 text-white/80 hover:text-white border border-white/20"
                                                    >
                                                        <FiGithub />
                                                        <span>Source Code</span>
                                                    </motion.a>
                                                )}
                                                {activeProject.links.demo && (
                                                    <motion.a
                                                        href={activeProject.links.demo}
                                                        whileHover={{ scale: 1.05 }}
                                                        whileTap={{ scale: 0.95 }}
                                                        className="flex items-center gap-2 px-6 py-3 rounded-lg transition-colors duration-200 text-white border-2"
                                                        style={{
                                                            backgroundColor: `${activeProject.color}20`,
                                                            borderColor: activeProject.color,
                                                            color: activeProject.color
                                                        }}
                                                    >
                                                        <FiExternalLink />
                                                        <span>Live Demo</span>
                                                    </motion.a>
                                                )}
                                                {activeProject.links.documentation && (
                                                    <motion.a
                                                        href={activeProject.links.documentation}
                                                        whileHover={{ scale: 1.05 }}
                                                        whileTap={{ scale: 0.95 }}
                                                        className="flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 rounded-lg transition-colors duration-200 text-white/60 hover:text-white/80 border border-white/10"
                                                    >
                                                        <FiShield />
                                                        <span>Documentation</span>
                                                    </motion.a>
                                                )}
                                            </div>
                                        </div>
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;