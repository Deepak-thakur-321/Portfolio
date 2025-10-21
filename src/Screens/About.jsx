import React, { useState, useEffect, useRef } from "react";
import { FaCode, FaBookOpen, FaBullseye, FaUsers, FaBriefcase, FaAward } from "react-icons/fa";

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
            rootMargin: "0px 0px -50px 0px"
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

const About = () => {
   const [headerRef, headerVisible] = useScrollAnimation();
   const [leftRef, leftVisible] = useScrollAnimation();
   const [rightRef, rightVisible] = useScrollAnimation();
   const [visionRef, visionVisible] = useScrollAnimation();

   return (
      <section className="min-h-screen flex items-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 px-6 py-20">
         <style>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

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
            transform: translateX(-60px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(60px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes slideInRotate {
          from {
            opacity: 0;
            transform: translateY(30px) rotate(-5deg);
          }
          to {
            opacity: 1;
            transform: translateY(0) rotate(0deg);
          }
        }

        @keyframes pulse-glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(59, 130, 246, 0.3);
          }
          50% {
            box-shadow: 0 0 40px rgba(59, 130, 246, 0.6);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes shimmer {
          0% {
            background-position: -1000px 0;
          }
          100% {
            background-position: 1000px 0;
          }
        }

        .animate-fade-in-down {
          animation: fadeInDown 0.8s ease-out forwards;
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

        .animate-slide-rotate {
          animation: slideInRotate 0.8s ease-out forwards;
        }

        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-shimmer {
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
          background-size: 1000px 100%;
          animation: shimmer 2s infinite;
        }

        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }
        .delay-600 { animation-delay: 0.6s; }

        .card-hover {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .card-hover:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        }

        .icon-spin-hover {
          transition: transform 0.5s ease;
        }

        .icon-spin-hover:hover {
          transform: rotate(360deg) scale(1.1);
        }
      `}</style>

         <div className="container mx-auto max-w-6xl">
            {/* Header */}
            <div
               ref={headerRef}
               className="text-center mb-16"
            >
               <h2 className={`text-5xl font-bold text-gray-900 mb-4 relative inline-block ${headerVisible ? 'animate-fade-in-down' : 'opacity-0'
                  }`}>
                  About Me
                  <span className="absolute left-1/2 transform -translate-x-1/2 -bottom-3 w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full animate-shimmer"></span>
               </h2>
               <p className={`text-xl text-gray-600 max-w-3xl mx-auto mt-6 ${headerVisible ? 'animate-fade-in-up delay-200' : 'opacity-0'
                  }`}>
                  Transforming passion into expertise through dedicated learning and hands-on development
               </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
               {/* Left Side - Personal Introduction */}
               <div ref={leftRef} className="space-y-8">
                  <div className={`bg-white rounded-2xl p-8 shadow-lg border border-gray-100 card-hover ${leftVisible ? 'animate-fade-in-left' : 'opacity-0'
                     }`}>
                     <div className="flex items-center mb-6">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center mr-4 icon-spin-hover animate-float">
                           <FaCode className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800">Who I Am</h3>
                     </div>
                     <p className="text-gray-700 leading-relaxed text-lg">
                        I'm <span className="text-blue-600 font-semibold">Deepak Thakur</span>,
                        a dedicated <span className="font-semibold">Full-Stack Developer in training </span>
                        currently pursuing the MERN Stack at <span className="font-semibold text-indigo-600">Sheryians Coding School</span>.
                        My journey represents a complete mindset transformation from curiosity to commitment,
                        from basics to building scalable applications.
                     </p>
                  </div>

                  <div className={`bg-white rounded-2xl p-8 shadow-lg border border-gray-100 card-hover ${leftVisible ? 'animate-fade-in-left delay-200' : 'opacity-0'
                     }`}>
                     <div className="flex items-center mb-6">
                        <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-teal-600 rounded-lg flex items-center justify-center mr-4 icon-spin-hover animate-float" style={{ animationDelay: '0.5s' }}>
                           <FaBookOpen className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800">Current Learning Path</h3>
                     </div>
                     <div className="space-y-4">
                        <div className="transform transition-all duration-300 hover:translate-x-2">
                           <h4 className="text-lg font-semibold text-green-600 mb-2">MERN Stack Mastery</h4>
                           <p className="text-gray-600">
                              Diving deep into MongoDB, Express.js, React, and Node.js to build end-to-end applications.
                              Currently focusing on advanced React patterns, state management, and API development.
                           </p>
                        </div>
                        <div className="transform transition-all duration-300 hover:translate-x-2">
                           <h4 className="text-lg font-semibold text-green-600 mb-2">Professional Development</h4>
                           <p className="text-gray-600">
                              Learning industry best practices, clean code principles, version control with Git,
                              deployment strategies, and collaborative development workflows.
                           </p>
                        </div>
                     </div>
                  </div>
               </div>

               {/* Right Side - Skills & Achievements */}
               <div ref={rightRef} className="space-y-8">
                  <div className={`bg-white rounded-2xl p-8 shadow-lg border border-gray-100 card-hover ${rightVisible ? 'animate-fade-in-right' : 'opacity-0'
                     }`}>
                     <div className="flex items-center mb-6">
                        <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center mr-4 icon-spin-hover animate-float" style={{ animationDelay: '1s' }}>
                           <FaAward className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800">Technical Skills</h3>
                     </div>
                     <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-3 transform transition-all duration-300 hover:scale-105">
                           <h4 className="font-semibold text-purple-600">Frontend</h4>
                           <ul className="text-gray-600 space-y-1 text-sm">
                              <li className="transform transition-all duration-200 hover:translate-x-1 hover:text-purple-600">• React.js & Hooks</li>
                              <li className="transform transition-all duration-200 hover:translate-x-1 hover:text-purple-600">• JavaScript (ES6+)</li>
                              <li className="transform transition-all duration-200 hover:translate-x-1 hover:text-purple-600">• HTML5 & CSS3</li>
                              <li className="transform transition-all duration-200 hover:translate-x-1 hover:text-purple-600">• TailwindCSS</li>
                              <li className="transform transition-all duration-200 hover:translate-x-1 hover:text-purple-600">• Responsive Design</li>
                           </ul>
                        </div>
                        <div className="space-y-3 transform transition-all duration-300 hover:scale-105">
                           <h4 className="font-semibold text-purple-600">Backend & Tools</h4>
                           <ul className="text-gray-600 space-y-1 text-sm">
                              <li className="transform transition-all duration-200 hover:translate-x-1 hover:text-purple-600">• Node.js & Express.js</li>
                              <li className="transform transition-all duration-200 hover:translate-x-1 hover:text-purple-600">• MongoDB & Mongoose</li>
                              <li className="transform transition-all duration-200 hover:translate-x-1 hover:text-purple-600">• RESTful APIs</li>
                              <li className="transform transition-all duration-200 hover:translate-x-1 hover:text-purple-600">• Git & GitHub</li>
                              <li className="transform transition-all duration-200 hover:translate-x-1 hover:text-purple-600">• Postman</li>
                           </ul>
                        </div>
                     </div>
                  </div>

                  <div className={`bg-white rounded-2xl p-8 shadow-lg border border-gray-100 card-hover ${rightVisible ? 'animate-fade-in-right delay-200' : 'opacity-0'
                     }`}>
                     <div className="flex items-center mb-6">
                        <div className="w-12 h-12 bg-gradient-to-r from-orange-600 to-red-600 rounded-lg flex items-center justify-center mr-4 icon-spin-hover animate-float" style={{ animationDelay: '1.5s' }}>
                           <FaBriefcase className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800">What I've Built</h3>
                     </div>
                     <div className="space-y-4">
                        <div className="transform transition-all duration-300 hover:translate-x-2">
                           <h4 className="text-lg font-semibold text-orange-600 mb-2">Portfolio Projects</h4>
                           <p className="text-gray-600 text-sm">
                              Responsive web applications showcasing modern UI/UX principles,
                              API integration, and interactive user experiences.
                           </p>
                        </div>
                        <div className="transform transition-all duration-300 hover:translate-x-2">
                           <h4 className="text-lg font-semibold text-orange-600 mb-2">Learning Projects</h4>
                           <p className="text-gray-600 text-sm">
                              E-commerce platforms, task management apps, and social media interfaces
                              built with React, featuring state management and real-time functionality.
                           </p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            {/* Bottom Section - Vision & Goals */}
            <div
               ref={visionRef}
               className={`mt-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white relative overflow-hidden ${visionVisible ? 'animate-scale-in' : 'opacity-0'
                  }`}
            >
               <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full filter blur-3xl animate-pulse"></div>
                  <div className="absolute bottom-0 right-0 w-64 h-64 bg-pink-300 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
               </div>

               <div className="text-center mb-8 relative z-10">
                  <FaBullseye className="w-12 h-12 mx-auto mb-4 opacity-90 animate-float" />
                  <h3 className="text-3xl font-bold mb-4">My Professional Vision</h3>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center relative z-10">
                  <div className={`transform transition-all duration-500 hover:scale-110 hover:-translate-y-2 ${visionVisible ? 'animate-fade-in-up delay-100' : 'opacity-0'
                     }`}>
                     <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                        <h4 className="text-xl font-semibold mb-3">Immediate Goals</h4>
                        <p className="opacity-90 text-sm">
                           Master the MERN stack, contribute to open-source projects,
                           and build a portfolio of impactful applications.
                        </p>
                     </div>
                  </div>
                  <div className={`transform transition-all duration-500 hover:scale-110 hover:-translate-y-2 ${visionVisible ? 'animate-fade-in-up delay-300' : 'opacity-0'
                     }`}>
                     <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                        <h4 className="text-xl font-semibold mb-3">Professional Aspirations</h4>
                        <p className="opacity-90 text-sm">
                           Join a dynamic development team, work on scalable products,
                           and continuously evolve with emerging technologies.
                        </p>
                     </div>
                  </div>
                  <div className={`transform transition-all duration-500 hover:scale-110 hover:-translate-y-2 ${visionVisible ? 'animate-fade-in-up delay-500' : 'opacity-0'
                     }`}>
                     <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                        <h4 className="text-xl font-semibold mb-3">Long-term Vision</h4>
                        <p className="opacity-90 text-sm">
                           Become a senior full-stack developer, mentor upcoming developers,
                           and contribute to innovative tech solutions.
                        </p>
                     </div>
                  </div>
               </div>

               <div className={`text-center mt-8 pt-6 border-t border-blue-400 relative z-10 ${visionVisible ? 'animate-fade-in-up delay-600' : 'opacity-0'
                  }`}>
                  <p className="text-lg font-medium opacity-95 italic">
                     "Every line of code is a step towards mastery, every project a milestone in my journey."
                  </p>
               </div>
            </div>
         </div>
      </section>
   );
};

export default About;