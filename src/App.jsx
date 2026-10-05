import React, { Suspense, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial, Environment, Float, Stars } from '@react-three/drei';
import { FaGithub as Github, FaLinkedin as Linkedin, FaEnvelope as Mail, FaChevronDown as ChevronDown, FaTerminal as Terminal, FaDatabase as Database, FaBrain as BrainCircuit, FaCode as Code2, FaBriefcase as Briefcase, FaGraduationCap as GraduationCap, FaExternalLinkAlt as ExternalLink } from 'react-icons/fa';

// --- 3D Components ---
const AnimatedSphere = () => {
  return (
    <Float speed={2} rotationIntensity={2} floatIntensity={2}>
      <Sphere visible args={[1, 100, 200]} scale={2.5}>
        <MeshDistortMaterial 
          color="#4c1d95" 
          attach="material" 
          distort={0.5} 
          speed={2} 
          roughness={0.2}
          metalness={0.8}
        />
      </Sphere>
    </Float>
  );
};

const BackgroundStars = () => (
  <div className="fixed inset-0 z-[-1] pointer-events-none">
    <Canvas camera={{ position: [0, 0, 1] }}>
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
    </Canvas>
  </div>
);

// --- Sections ---

const Navbar = () => (
  <nav className="fixed top-0 w-full z-50 glass-panel border-b-0">
    <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
      <div className="text-xl font-bold tracking-tighter">S. Praneesh</div>
      <div className="hidden md:flex gap-8 text-sm font-medium text-gray-300">
        <a href="#about" className="hover:text-white transition-colors">About</a>
        <a href="#skills" className="hover:text-white transition-colors">Skills</a>
        <a href="#projects" className="hover:text-white transition-colors">Projects</a>
        <a href="#experience" className="hover:text-white transition-colors">Experience</a>
      </div>
      <a href="mailto:sk8710@srmist.edu.in" className="px-5 py-2.5 rounded-full bg-white text-black font-semibold text-sm hover:scale-105 transition-transform">
        Get in touch
      </a>
    </div>
  </nav>
);

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Canvas className="w-full h-full">
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <Environment preset="city" />
          <Suspense fallback={null}>
            <AnimatedSphere />
          </Suspense>
        </Canvas>
      </div>

      {/* Decorative Blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/30 rounded-full mix-blend-screen filter blur-[100px] animate-blob"></div>
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-600/30 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-2000"></div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
            <span className="text-sm font-medium text-gray-300">Available for opportunities</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter mb-6 leading-tight">
            AI/ML <span className="text-gradient">Engineer</span> <br/>
            & Developer.
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            I'm Praneesh Kumar, an undergraduate specializing in Artificial Intelligence, Machine Learning, and NLP pipelines, crafting intelligent and data-driven systems.
          </p>

          <div className="flex items-center justify-center gap-4">
            <a href="#projects" className="px-8 py-4 rounded-full bg-white text-black font-semibold hover:scale-105 transition-transform">
              View Work
            </a>
            <div className="flex gap-4 ml-4">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="p-4 rounded-full border border-white/10 hover:bg-white/10 transition-colors">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-4 rounded-full border border-white/10 hover:bg-white/10 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
};

const Skills = () => {
  const skills = [
    { name: 'Machine Learning', icon: <BrainCircuit size={24} />, desc: 'Scikit-learn, Logistic Regression, Naive Bayes' },
    { name: 'NLP', icon: <Terminal size={24} />, desc: 'Text Classification, Tokenization, TF-IDF, spaCy, NLTK' },
    { name: 'Data Analysis', icon: <Database size={24} />, desc: 'Pandas, SQL, Feature Extraction' },
    { name: 'Programming', icon: <Code2 size={24} />, desc: 'Python, C, C++' },
  ];

  return (
    <section id="skills" className="py-32 px-6 max-w-6xl mx-auto relative z-10">
      <div className="mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Technical Expertise</h2>
        <p className="text-gray-400 text-lg max-w-2xl">A comprehensive toolkit for building robust, scalable AI models and intelligent data systems.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="glass-panel p-8 rounded-3xl hover:bg-white/[0.02] transition-colors"
          >
            <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6 text-purple-400">
              {skill.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{skill.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Projects = () => {
  const projects = [
    {
      title: 'Automated Essay Grading & Feedback',
      tech: ['Python', 'Scikit-learn', 'Pandas', 'NLTK', 'spaCy'],
      desc: 'An NLP-based automated essay grading system evaluating written responses and generating constructive feedback. Applied TF-IDF feature extraction and readability metrics for deep analysis.',
    },
    {
      title: 'Fake News Detection System',
      tech: ['Python', 'Scikit-learn', 'Logistic Regression', 'NLP'],
      desc: 'Machine learning text classification system classifying news articles. Built a complete preprocessing pipeline and trained classification models on extracted TF-IDF features.',
    }
  ];

  return (
    <section id="projects" className="py-32 px-6 max-w-6xl mx-auto relative z-10">
      <h2 className="text-4xl md:text-5xl font-bold mb-16">Selected Work</h2>
      
      <div className="space-y-12">
        {projects.map((project, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
          >
            {/* Project Card */}
            <div className="md:col-span-7 glass-panel rounded-3xl p-8 md:p-12 overflow-hidden relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
              
              <h3 className="text-3xl font-bold mb-4">{project.title}</h3>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed max-w-xl">
                {project.desc}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.map(t => (
                  <span key={t} className="px-4 py-1.5 rounded-full text-sm font-medium bg-white/5 border border-white/10 text-gray-300">
                    {t}
                  </span>
                ))}
              </div>

              <a href="#" className="inline-flex items-center gap-2 text-white font-medium hover:text-purple-400 transition-colors">
                View Source <ExternalLink size={18} />
              </a>
            </div>

            {/* Abstract visual representation instead of a solid image */}
            <div className="md:col-span-5 h-[400px] rounded-3xl glass-panel relative overflow-hidden flex items-center justify-center">
              <div className="w-full h-full absolute inset-0 bg-gradient-to-br from-purple-900/20 to-blue-900/20"></div>
              <div className="relative w-48 h-48 border border-white/10 rounded-full flex items-center justify-center">
                <div className="w-32 h-32 border border-white/20 rounded-full animate-[spin_10s_linear_infinite]"></div>
                <div className="absolute w-16 h-16 bg-gradient-to-tr from-purple-500 to-blue-500 rounded-full blur-xl opacity-50"></div>
                <Code2 size={48} className="absolute text-white/50" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="py-32 px-6 max-w-4xl mx-auto relative z-10">
      <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">Journey</h2>

      <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/20 before:to-transparent">
        
        {/* Item 1 */}
        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
          <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/20 bg-[#0a0a0a] text-purple-400 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
            <GraduationCap size={20} />
          </div>
          <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass-panel p-6 rounded-2xl">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-bold text-xl text-white">B.Tech in CSE (AI & ML)</h3>
              <span className="text-sm font-medium text-purple-400">2023 - 2027</span>
            </div>
            <p className="text-gray-400 mb-2">SRM Institute of Science and Technology</p>
            <p className="text-sm text-gray-500">CGPA: 7.85/10. Building a strong foundation in predictive modeling, NLP, and feature engineering.</p>
          </div>
        </div>

        {/* Item 2 */}
        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
          <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/20 bg-[#0a0a0a] text-blue-400 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
            <Briefcase size={20} />
          </div>
          <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass-panel p-6 rounded-2xl">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-bold text-xl text-white">Volunteer</h3>
              <span className="text-sm font-medium text-blue-400">Jun 2025 - Jul 2025</span>
            </div>
            <p className="text-gray-400 mb-2">Hindu Dhaarmika Parirashana Charitable Trust</p>
            <p className="text-sm text-gray-500">Participated in community service activities and supported organizational initiatives.</p>
          </div>
        </div>

      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="border-t border-white/10 py-12 text-center relative z-10">
    <p className="text-gray-500 text-sm">© {new Date().getFullYear()} S Praneesh Kumar. All rights reserved.</p>
    <div className="flex justify-center gap-6 mt-6">
      <a href="mailto:sk8710@srmist.edu.in" className="text-gray-400 hover:text-white transition-colors"><Mail size={20} /></a>
      <a href="https://github.com" className="text-gray-400 hover:text-white transition-colors"><Github size={20} /></a>
      <a href="https://linkedin.com" className="text-gray-400 hover:text-white transition-colors"><Linkedin size={20} /></a>
    </div>
  </footer>
);

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div className="relative w-full bg-[#0a0a0a] selection:bg-purple-500/30">
      <BackgroundStars />
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-blue-500 origin-left z-[100]" 
        style={{ scaleX }} 
      />
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Experience />
      <Footer />
    </div>
  );
}

export default App;
