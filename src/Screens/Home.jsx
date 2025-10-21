import React, { useState, useEffect, useRef } from "react";
import {
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaCode,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaMobile,
  FaRocket,
  FaLaptopCode,
  FaChevronDown,
  FaDownload,
  FaExternalLinkAlt,
  FaUser,
  FaGraduationCap,
  FaCoffee,
  FaBrain,
  FaUsers
} from "react-icons/fa";
import {
  SiJavascript,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiNextdotjs,
  SiTypescript,
  SiPython,
  SiOpenai
} from "react-icons/si";

// Custom hook for scroll animations
const useScrollAnimation = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px"
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return [ref, isVisible];
};

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [skillsRef, skillsVisible] = useScrollAnimation();
  const [statsRef, statsVisible] = useScrollAnimation();
  const [aboutRef, aboutVisible] = useScrollAnimation();
  const [ctaRef, ctaVisible] = useScrollAnimation();

  const roles = [
    "Front-End Developer",
    "MERN Stack Developer",
    "Full-Stack Developer",
    "React Specialist"
  ];

  useEffect(() => {
    const roleInterval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);

    return () => clearInterval(roleInterval);
  }, []);

  const skills = [
    { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
    { name: "React.js", icon: FaReact, color: "text-cyan-400" },
    { name: "Node.js", icon: FaNodeJs, color: "text-green-500" },
    { name: "MongoDB", icon: SiMongodb, color: "text-green-600" },
    { name: "Express.js", icon: SiExpress, color: "text-gray-800" },
    { name: "TailwindCSS", icon: SiTailwindcss, color: "text-cyan-400" },
    { name: "Next.js", icon: SiNextdotjs, color: "text-gray-900" },
    { name: "AI Integration", icon: SiOpenai, color: "text-blue-600" }
  ];

  const stats = [
    { number: "10+", label: "Practical Projects", icon: FaCode },
    { number: "1", label: "Year of Hands-on Experience", icon: FaLaptopCode },
    { number: "5+", label: "Collaborations & Team Projects", icon: FaUsers },
    { number: "Ongoing", label: "Continuous Learning & Growth", icon: FaBrain }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden text-white">
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(60px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(59, 130, 246, 0.5);
          }
          50% {
            box-shadow: 0 0 40px rgba(59, 130, 246, 0.8);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animate-fade-in-left {
          animation: fadeInLeft 0.8s ease-out forwards;
        }

        .animate-fade-in-right {
          animation: fadeInRight 0.8s ease-out forwards;
        }

        .animate-scale-in {
          animation: scaleIn 0.8s ease-out forwards;
        }

        .animate-slide-up {
          animation: slideUp 0.8s ease-out forwards;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-glow {
          animation: glow 2s ease-in-out infinite;
        }

        .stagger-1 {
          animation-delay: 0.1s;
        }
        .stagger-2 {
          animation-delay: 0.2s;
        }
        .stagger-3 {
          animation-delay: 0.3s;
        }
        .stagger-4 {
          animation-delay: 0.4s;
        }
        .stagger-5 {
          animation-delay: 0.5s;
        }
        .stagger-6 {
          animation-delay: 0.6s;
        }
        .stagger-7 {
          animation-delay: 0.7s;
        }
        .stagger-8 {
          animation-delay: 0.8s;
        }

        .gradient-text {
          background: linear-gradient(90deg, #3b82f6, #8b5cf6, #ec4899);
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
          -webkit-background-clip: text;
          background-clip: text;
        }

        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes slideRole {
          0% {
            opacity: 0;
            transform: translateX(-100%);
          }
          10% {
            opacity: 1;
            transform: translateX(0);
          }
          90% {
            opacity: 1;
            transform: translateX(0);
          }
          100% {
            opacity: 0;
            transform: translateX(100%);
          }
        }

        .animate-slide-role {
          animation: slideRole 3s ease-in-out;
        }

        .glass-effect {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        @keyframes roleSlide {
  0% {
    opacity: 0;
    transform: translateX(-80%);
  }
  15% {
    opacity: 1;
    transform: translateX(0);
  }
  85% {
    opacity: 1;
    transform: translateX(0);
  }
  100% {
    opacity: 0;
    transform: translateX(80%);
  }
}

.animate-role-slide {
  animation: roleSlide 3s ease-in-out forwards;
}

      `}</style>

      <div className="relative z-10">
        <div className="absolute inset-0 bg-[radial-gradient(#fff,transparent_1px)] bg-[length:25px_25px] opacity-30"></div>

        {/* Hero Section */}
        <section className="min-h-screen mt-10 lg:mt-0 flex flex-col justify-center items-center px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-snug tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500 animate-slide-up">
            Hi, I'm Deepak Thakur
          </h1>

          <div className="relative h-16 overflow-hidden w-full flex justify-center">
            <p
              key={roles[currentRole]}
              className="absolute text-2xl md:text-3xl font-bold gradient-text animate-role-slide"
            >
              {roles[currentRole]}
            </p>
          </div>


          <p className="text-lg md:text-xl text-gray-200 max-w-4xl mx-auto mb-8 leading-relaxed animate-fade-in-up stagger-3">
            I'm a passionate developer who creates{" "}
            <span className="font-bold text-blue-300">
              modern, scalable web applications
            </span>{" "}
            that solve real-world problems. With expertise in{" "}
            <span className="font-semibold text-purple-300">MERN stack</span>, I
            build <span className="italic">pixel-perfect interfaces</span> and{" "}
            <span className="font-semibold">robust backend systems</span>.
            Currently seeking{" "}
            <span className="font-bold text-indigo-300">
              Full-Stack opportunities
            </span>{" "}
            to make an impact.
          </p>

          <div className="flex gap-4 mb-12 animate-fade-in-up stagger-4">
            <a
              href="https://github.com/Deepak-thakur-321"
              target="_blank"
              rel="noopener noreferrer"
              className="group glass-effect p-4 rounded-full shadow-lg hover:shadow-xl border border-gray-700 hover:border-gray-300 transition-all duration-300 transform hover:scale-110 hover:rotate-6"
            >
              <FaGithub className="text-2xl text-white group-hover:text-gray-200" />
            </a>

            <a
              href="https://www.linkedin.com/in/deepakthakur22/"
              target="_blank"
              rel="noopener noreferrer"
              className="group glass-effect p-4 rounded-full shadow-lg hover:shadow-xl border border-gray-700 hover:border-blue-400 transition-all duration-300 transform hover:scale-110 hover:rotate-6"
            >
              <FaLinkedin className="text-2xl text-white group-hover:text-blue-400" />
            </a>

            <a
              href="https://x.com/DeepakThakur738"
              target="_blank"
              rel="noopener noreferrer"
              className="group glass-effect p-4 rounded-full shadow-lg hover:shadow-xl border border-gray-700 hover:border-sky-400 transition-all duration-300 transform hover:scale-110 hover:rotate-6"
            >
              <FaTwitter className="text-2xl text-white group-hover:text-sky-400" />
            </a>
          </div>

          <div className="animate-bounce animate-float">
            <FaChevronDown className="text-3xl text-gray-300" />
          </div>
        </section>

        {/* Skills Section */}
        <section
          ref={skillsRef}
          className="py-20 px-6 bg-gradient-to-br from-[#f9fafb] to-[#f3f4f6] text-gray-900"
        >
          <div className="max-w-6xl mx-auto">
            <h2 className={`text-4xl md:text-5xl font-bold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 ${skillsVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
              My Tech Stack
            </h2>
            <p className={`text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto ${skillsVisible ? 'animate-fade-in-up stagger-1' : 'opacity-0'}`}>
              I work with cutting-edge technologies to build modern, scalable
              applications
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
              {skills.map((skill, index) => (
                <div
                  key={skill.name}
                  className={`group bg-white/80 backdrop-blur-lg p-6 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-2xl border border-gray-200 hover:border-blue-300 transition-all duration-300 transform hover:-translate-y-2 hover:rotate-2 ${skillsVisible ? `animate-scale-in stagger-${index + 1}` : 'opacity-0 scale-75'
                    }`}
                >
                  <skill.icon
                    className={`text-4xl ${skill.color} mb-4 group-hover:scale-125 group-hover:rotate-12 transition-transform duration-300`}
                  />
                  <h3 className="font-bold text-gray-800 text-lg">
                    {skill.name}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section
          ref={statsRef}
          className="py-20 px-6 bg-gradient-to-r from-[#4f46e5] via-[#7c3aed] to-[#2563eb] relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full filter blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-300 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>

          <div className="max-w-6xl mx-auto relative z-10">
            <h2 className={`text-4xl md:text-5xl font-bold text-center text-white mb-16 ${statsVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
              My Journey in{" "}
              <span className="text-yellow-300">Numbers</span>
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`text-center text-white transform hover:scale-110 transition-transform duration-300 ${statsVisible ? `animate-fade-in-up stagger-${index + 1}` : 'opacity-0'
                    }`}
                >
                  <stat.icon className="text-5xl mb-4 mx-auto opacity-90 animate-float" style={{ animationDelay: `${index * 0.2}s` }} />
                  <h3 className="text-4xl md:text-5xl font-bold mb-2">
                    {stat.number}
                  </h3>
                  <p className="text-lg opacity-90">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Preview */}
        <section
          ref={aboutRef}
          className="py-20 px-6 bg-gradient-to-br from-[#f9fafb] to-[#f3f4f6] text-gray-900"
        >
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className={aboutVisible ? 'animate-fade-in-left' : 'opacity-0'}>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600">
                  More About Me
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  I'm a self-taught developer with a passion for creating
                  digital experiences that matter. When I'm not coding, you'll
                  find me exploring new technologies, contributing to
                  open-source projects, or sharing knowledge with the developer
                  community.
                </p>

                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="flex items-center gap-3 transform hover:scale-105 transition-transform duration-300">
                    <FaGraduationCap className="text-2xl text-blue-600" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Education</h4>
                      <p className="text-gray-600">Computer Science</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 transform hover:scale-105 transition-transform duration-300">
                    <FaCoffee className="text-2xl text-orange-600" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Fuel</h4>
                      <p className="text-gray-600">Coffee & Code</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className={`relative ${aboutVisible ? 'animate-fade-in-right' : 'opacity-0'}`}>
                <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-8 rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-500 hover:rotate-1">
                  <div className="bg-white rounded-xl p-6">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">
                      Quick Facts
                    </h3>
                    <ul className="space-y-3 text-gray-600">
                      <li className="flex items-center gap-2 transform hover:translate-x-2 transition-transform duration-300">
                        <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
                        Based in India · Collaborating Remotely
                      </li>
                      <li className="flex items-center gap-2 transform hover:translate-x-2 transition-transform duration-300">
                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></span>
                        Focused on MERN Stack Development
                      </li>
                      <li className="flex items-center gap-2 transform hover:translate-x-2 transition-transform duration-300">
                        <span className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></span>
                        Built 10+ Practical Projects (Frontend & Fullstack)
                      </li>
                      <li className="flex items-center gap-2 transform hover:translate-x-2 transition-transform duration-300">
                        <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" style={{ animationDelay: '0.6s' }}></span>
                        Currently Exploring AI Integration with Web Apps
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section
          ref={ctaRef}
          className="py-20 px-6 bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
          </div>

          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${ctaVisible ? 'animate-scale-in' : 'opacity-0'}`}>
              Ready to Build Something{" "}
              <span className="text-blue-400">Amazing</span>?
            </h2>
            <p className={`text-xl text-gray-300 mb-8 max-w-2xl mx-auto ${ctaVisible ? 'animate-fade-in-up stagger-1' : 'opacity-0'}`}>
              I'm always excited to work on new projects and collaborate with
              amazing people. Let's create something extraordinary together!
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Hero;