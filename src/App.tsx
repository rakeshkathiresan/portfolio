import React, { useState, useEffect, useCallback } from 'react';
import { 
  Github, 
  Mail, 
  MessageCircle, 
  Download, 
  Menu, 
  X, 
  Moon, 
  Sun,
  Sparkles,
  Shield,
  Lock,
  Code,
  Award,
  Briefcase,
  GraduationCap,
  User,
  Phone,
  MapPin,
  ExternalLink,
  ChevronDown
} from 'lucide-react';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
import type { Container, Engine } from 'tsparticles-engine';
import {motion} from 'motion/react';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [particlesEnabled, setParticlesEnabled] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'certifications', 'education', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    console.log(container);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const toggleParticles = () => {
    setParticlesEnabled(!particlesEnabled);
  };

  const downloadResume = () => {
    // In a real implementation, this would download the actual resume file
    const link = document.createElement("a");
    link.href = "/portfolio/Rakesh.pdf";
    link.download = "Rakesh.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    // alert('Resume download would start here. ');
  };

  const skills = [
    { name: 'Penetration Testing', level: 95, icon: Shield },
    { name: 'Network Security', level: 90, icon: Lock },
    { name: 'Python Programming', level: 88, icon: Code },
    { name: 'Ethical Hacking', level: 92, icon: Shield },
    { name: 'Incident Response', level: 85, icon: Award },
    { name: 'Risk Assessment', level: 87, icon: Briefcase },
  ];

  const projects = [
    {
      title: 'Comparative Analysis of Steganography Techniques in Real and AI-Generated Images: Embedding Efficacy and Detection Resistance',
      description: 'Evaluated various steganography methods to assess their embedding capacity and resistance to detection in both real and AI-generated images. Helped identify the most secure and covert data hiding approaches.',
      tech: ['Stegdetetct', 'Steganography', 'Python', 'Docker'],
      // link: '#'
    },
    {
      title: 'Image recognition-based attendance system with spoof detection using python',
      description: 'Built an attendance system using facial recognition with anti-spoofing techniques to prevent fraudulent entries. Improved authentication accuracy and security using OpenCV and machine learning.',
      tech: ['Python', 'OpenCV', 'Cmake', 'ML', 'Pycharm'],
      link: '#'
    },
    {
      title: 'Surveillance of species at risk by unarmed aerial vehicles using python',
      description: 'Developed a Python-based system to analyze aerial footage for identifying endangered species in natural habitats. Enabled real-time monitoring using object detection algorithms.',
      tech: ['Python', 'CNN', 'OpenCV'],
      link: '#'
    },
    {
      title: 'E-Forms Service- Generating secure electronic forms with validation and digital signature integration using XAMPP',
      description: 'Created a secure e-form platform using XAMPP with input validation and integrated digital signatures. Enhanced data integrity and user authentication for sensitive submissions.',
      tech: ['PHP', 'XAMPP', 'Digital Signature'],
      link: '#'
    }
  ];

  const certifications = [
    { name: 'CompTIA Security+', issuer: 'CompTIA', year: '2025' },
    { name: 'Cyber Security Professional', issuer: 'Google', year: '2025' },
    { name: 'Junior Penetration Tester', issuer: 'INE', year: '2025' },
    { name: 'Ethical Hacking Bootcamp Zero to Mastery', issuer: 'Udemy', year: '2023' }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      {/* Particles Background */}
      {particlesEnabled && (
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          className="fixed inset-0 z-0"
          options={{
            background: {
              color: {
                value: "transparent",
              },
            },
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: "#00ff41",
              },
              links: {
                color: "#00ff41",
                distance: 150,
                enable: true,
                opacity: 0.3,
                width: 1,
              },
              collisions: {
                enable: true,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: false,
                speed: 1,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 80,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 1, max: 5 },
              },
            },
            detectRetina: true,
          }}
        />
      )}

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${darkMode ? 'bg-gray-900/80' : 'bg-white/80'} backdrop-blur-md border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Shield className="w-8 h-8 text-green-400" />
              <span className="text-xl font-bold">Rakesh Kathiresan</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {['home', 'about', 'skills', 'projects', 'experience', 'certifications', 'education', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-colors duration-200 hover:text-green-400 ${
                    activeSection === item ? 'text-green-400' : ''
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Controls */}
            <div className="flex items-center space-x-4">
              <button
                onClick={toggleParticles}
                className="p-2 rounded-lg transition-colors duration-200 hover:bg-gray-200 dark:hover:bg-gray-700"
                title="Toggle Particles"
              >
                <Sparkles className={`w-5 h-5 ${particlesEnabled ? 'text-green-400' : 'text-gray-500'}`} />
              </button>
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg transition-colors duration-200 hover:bg-gray-200 dark:hover:bg-gray-700"
                title="Toggle Theme"
              >
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              
              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-lg transition-colors duration-200 hover:bg-gray-200 dark:hover:bg-gray-700"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200 dark:border-gray-700">
              <div className="flex flex-col space-y-4">
                {['home', 'about', 'skills', 'projects', 'experience', 'certifications', 'education', 'contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className="text-left capitalize transition-colors duration-200 hover:text-green-400"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative z-10 px-4">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-5xl md:text-6xl font-bold font-serif mb-4 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              Rakesh Kathiresan
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold font-mono mb-6 text-gray-300">
              Cybersecurity Professional
            </h2>
            <p className="text-lg md:text-l text-gray-400 mb-8 max-w-2xl mx-auto">
              Protecting digital assets and securing infrastructure with expertise in penetration testing, 
              ethical hacking, and incident response.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
            <button
              onClick={downloadResume}
              className="flex items-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg transition-colors duration-200"
            >
              <Download className="w-5 h-5" />
              <span>Download Resume</span>
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="flex items-center space-x-2 border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-white px-6 py-3 rounded-lg transition-colors duration-200"
            >
              <Mail className="w-5 h-5" />
              <span>Get In Touch</span>
            </button>
          </div>

          <div className="flex items-center justify-center space-x-6">
            <a
              href="https://github.com/rakesh"
              className="text-gray-400 hover:text-green-400 transition-colors duration-200"
              title="GitHub"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="mailto:rakeshofficial.cse@gmail.com"
              className="text-gray-400 hover:text-green-400 transition-colors duration-200"
              title="Email"
            >
              <Mail className="w-6 h-6" />
            </a>
            <a
              href="https://discord.com/users/rakesh"
              className="text-gray-400 hover:text-green-400 transition-colors duration-200"
              title="Discord"
            >
              <MessageCircle className="w-6 h-6" />
            </a>
          </div>

          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-6 h-6 text-gray-400" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative z-10 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 flex items-center justify-center">
              <User className="w-8 h-8 mr-3 text-green-400" />
              About Me
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Cybersecurity Analyst experienced in implementing security tools, frameworks, and vulnerability management programs. Proven track record 
in coordinating patch schedules, producing clear reporting, and supporting global infrastructure assessments. Known for delivering measurable 
improvements through teamwork, continuous improvement, and precise execution in both applications and network security environments.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className={`p-8 rounded-xl ${darkMode ? 'bg-gray-800/50' : 'bg-white/50'} backdrop-blur-sm border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
              <h3 className="text-2xl font-semibold mb-4 text-green-400">Professional Journey</h3>
              <p className="text-gray-300 mb-4">
                I'm Rakesh, a dedicated cybersecurity specialist with expertise in penetration testing, 
                vulnerability assessment, and incident response. My mission is to help organizations 
                build resilient security frameworks that protect against evolving cyber threats.
              </p>
              <p className="text-gray-300 mb-6">
                With hands-on experience in both offensive and defensive security, I bring a comprehensive 
                approach to cybersecurity that combines technical expertise with strategic thinking.
              </p>
              
              {/* <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400">50+</div>
                  <div className="text-sm text-gray-400">Security Audits</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400">5+</div>
                  <div className="text-sm text-gray-400">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400">100+</div>
                  <div className="text-sm text-gray-400">Vulnerabilities Found</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400">10+</div>
                  <div className="text-sm text-gray-400">Certifications</div>
                </div>
              </div> */}
            </div>

            <div className="space-y-6">
              <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800/30' : 'bg-white/30'} backdrop-blur-sm border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                <Shield className="w-8 h-8 text-green-400 mb-3" />
                <h3 className="text-xl font-semibold mb-2">Security First</h3>
                <p className="text-gray-400">
                  Every solution I implement prioritizes security without compromising functionality or user experience.
                </p>
              </div>

              <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800/30' : 'bg-white/30'} backdrop-blur-sm border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                <Lock className="w-8 h-8 text-green-400 mb-3" />
                <h3 className="text-xl font-semibold mb-2">Continuous Learning</h3>
                <p className="text-gray-400">
                  Staying ahead of emerging threats through continuous education and hands-on practice.
                </p>
              </div>

              <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800/30' : 'bg-white/30'} backdrop-blur-sm border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                <Code className="w-8 h-8 text-green-400 mb-3" />
                <h3 className="text-xl font-semibold mb-2">Technical Excellence</h3>
                <p className="text-gray-400">
                  Combining deep technical knowledge with practical experience to deliver effective security solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      {/* <section id="skills" className={`py-20 relative z-10 px-4 ${darkMode ? 'bg-gray-800/20' : 'bg-gray-100/20'}`}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 flex items-center justify-center">
              <Code className="w-8 h-8 mr-3 text-green-400" />
              Technical Skills
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A comprehensive skill set covering all aspects of cybersecurity, from offensive testing to defensive strategies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div
                key={index}
                className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800/50' : 'bg-white/50'} backdrop-blur-sm border ${darkMode ? 'border-gray-700' : 'border-gray-200'} hover:scale-105 transition-transform duration-200`}
              >
                <div className="flex items-center mb-4">
                  <skill.icon className="w-6 h-6 text-green-400 mr-3" />
                  <h3 className="text-lg font-semibold">{skill.name}</h3>
                </div>
                <div className="mb-2">
                  <div className={`w-full ${darkMode ? 'bg-gray-700' : 'bg-gray-300'} rounded-full h-2`}>
                    <div
                      className="bg-gradient-to-r from-green-400 to-blue-500 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
                <div className="text-right text-sm text-gray-400">{skill.level}%</div>
              </div>
            ))}
          </div>
        </div>
      </section> */}
      <section id="skills" className={`py-20 relative z-10 px-4 ${darkMode ? 'bg-gray-800/20' : 'bg-gray-100/20'}`}>
  <div className="max-w-6xl mx-auto">
    <motion.div 
      className="text-center mb-12"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="text-4xl font-bold mb-4 flex items-center justify-center">
        <Code className="w-8 h-8 mr-3 text-green-400" />
        Technical Skills
      </h2>
      <p className="text-gray-400 max-w-2xl mx-auto">
        A comprehensive skill set covering all aspects of cybersecurity, from offensive testing to defensive strategies.
      </p>
    </motion.div>

    {/* Skill Categories Grid */}
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
      {[
        {
          title: 'Security Tools',
          icon: <Shield className="w-6 h-6 text-green-400" />,
          skills: ['Nmap', 'Wireshark', 'Metasploit', 'Burp Suite', 'OWASP ZAP', 'Nessus', 'OpenVAS', 'John the Ripper']
        },
        {
          title: 'Operating Systems',
          icon: <Shield className="w-6 h-6 text-green-400" />,
          skills: ['Kali Linux', 'Ubuntu', 'Windows', 'macOS']
        },
        {
          title: 'Programming',
          icon: <Shield className="w-6 h-6 text-green-400" />,
          skills: ['Python', 'JavaScript', 'Bash', 'PowerShell', 'SQL', 'C++', 'C', 'HTML', 'CSS']
        },
        {
          title: 'Networking',
          icon: <Shield className="w-6 h-6 text-green-400" />,
          skills: ['TCP/IP', 'DNS', 'VPN', 'Firewall', 'IDS/IPS', 'Subnetting', 'Routing']
        },
        {
          title: 'Security Domains',
          icon: <Lock className="w-6 h-6 text-green-400" />,
          skills: ['Web Security', 'Network Security', 'Forensics', 'Incident Response']
        },
        {
          title: 'Analysis & Testing',
          icon: <Shield className="w-6 h-6 text-green-400" />,
          skills: ['Penetration Testing', 'Vulnerability Assessment', 'Risk Analysis']
        }
      ].map((category, idx) => (
        <motion.div 
          key={idx}
          className={`rounded-lg p-6 cursor-default transition-transform transform hover:-translate-y-1 hover:shadow-2xl ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'}`}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: idx * 0.1 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center mb-3 space-x-2">
            {category.icon}
            <h3 className="text-xl font-semibold">{category.title}</h3>
          </div>
          <ul className="list-disc list-inside text-gray-400 dark:text-gray-300 space-y-1">
            {category.skills.map((skill, i) => (
              <li key={i}>{skill}</li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  </div>
</section>




      {/* Projects Section */}
      <section id="projects" className="py-20 relative z-10 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 flex items-center justify-center">
              <Shield className="w-8 h-8 mr-3 text-green-400" />
              Featured Projects
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Showcasing key cybersecurity projects that demonstrate my expertise in threat detection, 
              vulnerability assessment, and security implementation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800/50' : 'bg-white/50'} backdrop-blur-sm border ${darkMode ? 'border-gray-700' : 'border-gray-200'} hover:scale-105 transition-transform duration-200`}
              >
                <h3 className="text-xl font-semibold mb-3 text-green-400">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`px-3 py-1 text-sm rounded-full ${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700'}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* <a
                  href={project.link}
                  className="inline-flex items-center text-green-400 hover:text-green-300 transition-colors duration-200"
                >
                  <span>View Details</span>
                  <ExternalLink className="w-4 h-4 ml-1" />
                </a> */}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className={`py-20 relative z-10 px-4 ${darkMode ? 'bg-gray-800/20' : 'bg-gray-100/20'}`}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 flex items-center justify-center">
              <Briefcase className="w-8 h-8 mr-3 text-green-400" />
              Work Experience
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Professional journey in cybersecurity with progressive responsibilities and impactful achievements.
            </p>
          </div>

          <div className="space-y-8">
            <div className={`p-8 rounded-xl ${darkMode ? 'bg-gray-800/50' : 'bg-white/50'} backdrop-blur-sm border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-green-400">Security Operations Centre Analyst</h3>
                  <p className="text-lg text-gray-300">Renderways Technology Pvt Ltd</p>
                </div>
                <span className="text-gray-400">May 2023 - January 2025</span>
              </div>
              <ul className="text-gray-300 space-y-2">
                <li>• Monitored and triaged 1,000+ weekly alerts using Splunk SIEM, escalating 150+ critical threats to engineering teams for containment and 
remediation.</li>
                <li>• Developed Python and PowerShell scripts to automate log parsing and alert enrichment, reducing manual triage effort by 35%.</li>
                <li>• Performed vulnerability assessments and supported patch implementation aligned with ISO 27001 and NIST CSF guidelines, reducing 
critical risks by 40% in six months.</li>
                <li>• Designed MITRE ATT&CK-aligned detection use cases and tuned alert logic, improving signal-to-noise ratio by 25%.</li>
                <li>• Automated repetitive security tasks using scripting and SOAR tools, improving efficiency and reducing manual workload by 40%.</li>
                <li>• Produced clear weekly incident and compliance reports to assist internal audits and maintain operational transparency.</li>
              </ul>
            </div>

            <div className={`p-8 rounded-xl ${darkMode ? 'bg-gray-800/50' : 'bg-white/50'} backdrop-blur-sm border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-green-400">Freelance Front-End and E-Learning Developer</h3>
                  <p className="text-lg text-gray-300">MF Media Pvt Ltd</p>
                </div>
                <span className="text-gray-400">June 2022 - April 2023</span>
              </div>
              <ul className="text-gray-300 space-y-2">
                <li>• Delivered adaptable and secure coding for SNCF Virtual Train Simulator and social media-based e-learning modules.</li>
                <li>• Collaborated with cross-functional teams to monitor security and performance, ensuring 25% higher platform responsiveness.</li>
                <li>• Communicated project progress clearly and implemented improvements based on analytical insights and IT best practices.</li>
              </ul>
            </div>

            <div className={`p-8 rounded-xl ${darkMode ? 'bg-gray-800/50' : 'bg-white/50'} backdrop-blur-sm border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-green-400">Cyber Security Intern</h3>
                  <p className="text-lg text-gray-300">Necurity Solutions Pvt Ltd</p>
                </div>
                <span className="text-gray-400">Feb 2022 - May 2022</span>
              </div>
              <ul className="text-gray-300 space-y-2">
                <li>• Analyzed logs and identified 30+ suspicious events, supporting early-stage breach investigation and incident documentation.</li>
                <li>• Contributed to vulnerability testing and remediation simulations in Linux lab environments, based on OWASP Top 10 and NIST 800-53 
frameworks.</li>
                <li>• Performed basic static and dynamic malware analysis to assist engineering teams with early threat validation.</li>
                <li>• Built Python scripts to automate threat indicator extraction and IOC correlation from SIEM logs.</li>
                <li>• Helped configure and maintain open-source security tools across Linux and Windows systems for technical skill-building and lab testing.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 relative z-10 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 flex items-center justify-center">
              <Award className="w-8 h-8 mr-3 text-green-400" />
              Certifications
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Industry-recognized certifications demonstrating expertise and commitment to cybersecurity excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800/50' : 'bg-white/50'} backdrop-blur-sm border ${darkMode ? 'border-gray-700' : 'border-gray-200'} hover:scale-105 transition-transform duration-200`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-green-400">{cert.name}</h3>
                    <p className="text-gray-300">{cert.issuer}</p>
                  </div>
                  <span className="text-2xl font-bold text-gray-400">{cert.year}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className={`py-20 relative z-10 px-4 ${darkMode ? 'bg-gray-800/20' : 'bg-gray-100/20'}`}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 flex items-center justify-center">
              <GraduationCap className="w-8 h-8 mr-3 text-green-400" />
              Education
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Academic foundation in computer science and cybersecurity with continuous learning approach.
            </p>
          </div>

          <div className="space-y-8">
            <div className={`p-8 rounded-xl ${darkMode ? 'bg-gray-800/50' : 'bg-white/50'} backdrop-blur-sm border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-green-400">Master of Science in Cybersecurity</h3>
                  <p className="text-lg text-gray-300">University of Southampton</p>
                </div>
                <span className="text-gray-400">2023 - 2024</span>
              </div>
              <p className="text-gray-300">
                Graduated with Distinction.
                Specialized in network security, cryptography, and digital forensics. 
                Thesis on "Comparative Analysis of Steganography Techniques in Real and AI-Generated Images: Embedding Efficacy and Detection Resistance  
".
              </p>
            </div>

            <div className={`p-8 rounded-xl ${darkMode ? 'bg-gray-800/50' : 'bg-white/50'} backdrop-blur-sm border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-green-400">Bachelor of Engineering in Computer Science and Engineering</h3>
                  <p className="text-lg text-gray-300">Saveetha Engineering College</p>
                </div>
                <span className="text-gray-400">2019 - 2023</span>
              </div>
              <p className="text-gray-300">
                Graduated with Distinction.
                Foundation in computer science with focus on software engineering, algorithms, and system security.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative z-10 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 flex items-center justify-center">
              <Mail className="w-8 h-8 mr-3 text-green-400" />
              Get In Touch
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Ready to discuss cybersecurity challenges or opportunities? 
              Let's connect and explore how I can help secure your organization.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <div className={`p-3 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-gray-200'}`}>
                  <Mail className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Email</h3>
                  <p className="text-gray-400">rakeshofficial.cse@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className={`p-3 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-gray-200'}`}>
                  <Phone className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Phone</h3>
                  <p className="text-gray-400">+44 7393153168</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className={`p-3 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-gray-200'}`}>
                  <MapPin className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Location</h3>
                  <p className="text-gray-400">Southampton, United Kingdom</p>
                </div>
              </div>

              <div className="flex space-x-4 pt-4">
                <a
                  href="https://github.com/rakesh"
                  className={`p-3 rounded-lg ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'} transition-colors duration-200`}
                >
                  <Github className="w-6 h-6 text-green-400" />
                </a>
                <a
                  href="mailto:rakeshofficial.cse@gmail.com"
                  className={`p-3 rounded-lg ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'} transition-colors duration-200`}
                >
                  <Mail className="w-6 h-6 text-green-400" />
                </a>
                <a
                  href="https://discord.com/users/rakesh"
                  className={`p-3 rounded-lg ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'} transition-colors duration-200`}
                >
                  <MessageCircle className="w-6 h-6 text-green-400" />
                </a>
              </div>
            </div>

            <div className={`p-8 rounded-xl ${darkMode ? 'bg-gray-800/50' : 'bg-white/50'} backdrop-blur-sm border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className={`w-full px-4 py-3 rounded-lg border ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'} focus:ring-2 focus:ring-green-400 focus:border-transparent`}
                    placeholder="Your Name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className={`w-full px-4 py-3 rounded-lg border ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'} focus:ring-2 focus:ring-green-400 focus:border-transparent`}
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className={`w-full px-4 py-3 rounded-lg border ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'} focus:ring-2 focus:ring-green-400 focus:border-transparent`}
                    placeholder="Your message..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-lg transition-colors duration-200"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 relative z-10 border-t ${darkMode ? 'border-gray-700 bg-gray-900' : 'border-gray-300 bg-gray-50'}`}>
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Shield className="w-6 h-6 text-green-400" />
            <span className="text-xl font-bold">Rakesh</span>
          </div>
          <p className="text-gray-400 mb-4">
            Cybersecurity Professional • Protecting Digital Assets • Building Secure Solutions
          </p>
          <div className="flex items-center justify-center space-x-6 mb-4">
            <a
              href="https://github.com/rakesh"
              className="text-gray-400 hover:text-green-400 transition-colors duration-200"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="mailto:rakeshofficial.cse@gmail.com"
              className="text-gray-400 hover:text-green-400 transition-colors duration-200"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="https://discord.com/users/rakesh"
              className="text-gray-400 hover:text-green-400 transition-colors duration-200"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
          </div>
          <p className="text-sm text-gray-500">
            © 2025 Rakesh. All rights reserved. Built with React & Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;