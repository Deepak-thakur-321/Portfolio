import React, { useEffect, useRef, useState } from 'react';
import { FaGraduationCap, FaCode, FaLaptopCode, FaBriefcase, FaYoutube, FaCertificate, FaChevronRight, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Education = () => {
   const [activeCard, setActiveCard] = useState(0);
   const sectionRef = useRef(null);

   // 🔹 Scroll Animation
   useEffect(() => {
      const sections = sectionRef.current.querySelectorAll('.fade-up');
      const observer = new IntersectionObserver(
         (entries) => {
            entries.forEach((entry) => {
               if (entry.isIntersecting) {
                  entry.target.classList.add('show');
               }
            });
         },
         { threshold: 0.2 }
      );
      sections.forEach((el) => observer.observe(el));
      return () => observer.disconnect();
   }, []);

   const educationData = [
      {
         id: 0,
         title: "MERN Stack Development",
         institution: "Sheryians Coding School",
         period: "2025 - Present",
         status: "Currently Enrolled",
         type: "Full-Stack Development",
         icon: FaCode,
         color: "from-blue-600 to-indigo-600",
         bgColor: "bg-blue-50",
         textColor: "text-blue-600",
         description: "Mastering full-stack development with MongoDB, Express.js, React, and Node.js. Building scalable applications with modern development practices.",
         skills: ["MongoDB", "Express.js", "React", "Node.js", "Authentication", "Deployment"],
         achievements: ["Built 5+ Full-stack Projects", "REST API Development", "Database Design", "Modern UI/UX"]
      },
      {
         id: 1,
         title: "Self-Directed Learning",
         institution: "YouTube & Online Platforms",
         period: "2023 - Present",
         status: "Ongoing",
         type: "Continuous Learning",
         icon: FaYoutube,
         color: "from-red-600 to-pink-600",
         bgColor: "bg-red-50",
         textColor: "text-red-600",
         description: "Continuous upskilling through YouTube tutorials, documentation, and hands-on practice. Focus on practical implementation and problem-solving.",
         skills: ["JavaScript ES6+", "React Hooks", "Problem Solving", "Best Practices", "Git & GitHub"],
         achievements: ["50+ Hours Monthly Learning", "10+ Personal Projects", "Active on GitHub", "Tech Community Engagement"]
      },
      {
         id: 2,
         title: "Digital Marketing Professional",
         institution: "Industry Experience",
         period: "2023 - 2024",
         status: "1 Year Experience",
         type: "Professional Work",
         icon: FaBriefcase,
         color: "from-green-600 to-teal-600",
         bgColor: "bg-green-50",
         textColor: "text-green-600",
         description: "Professional experience in digital marketing campaigns, client management, and data analysis. Developed strong analytical and communication skills.",
         skills: ["Campaign Management", "Data Analytics", "Client Relations", "Project Management", "Communication"],
         achievements: ["Managed 20+ Campaigns", "Client Satisfaction 95%", "ROI Improvement 30%", "Team Collaboration"]
      },
      {
         id: 3,
         title: "Bachelor of Arts (BA)",
         institution: "University Graduate",
         period: "2019 - 2023",
         status: "Completed",
         type: "Formal Education",
         icon: FaGraduationCap,
         color: "from-purple-600 to-indigo-600",
         bgColor: "bg-purple-50",
         textColor: "text-purple-600",
         description: "Strong academic foundation with focus on critical thinking, research methodology, and effective communication skills.",
         skills: ["Critical Thinking", "Research Methods", "Communication", "Academic Writing", "Presentation"],
         achievements: ["Graduated Successfully", "Research Projects", "Academic Excellence", "Leadership Activities"]
      }
   ];

   return (
      <section
         ref={sectionRef}
         className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-20 px-6 scale-in"
      >
         <div className="container mx-auto max-w-7xl">
            {/* Header Section */}
            <div className="text-center mb-16 fade-up">
               <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl mb-6">
                  <FaCertificate className="w-8 h-8 text-white" />
               </div>
               <h1 className="text-5xl font-bold text-gray-900 mb-4">
                  Education & Professional Journey
               </h1>
               <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  A comprehensive path of continuous learning, professional growth, and skill development
               </p>
            </div>

            {/* Interactive Education Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 fade-up">
               {/* Left Side */}
               <div className="space-y-4">
                  {educationData.map((item, index) => {
                     const IconComponent = item.icon;
                     return (
                        <div
                           key={item.id}
                           onClick={() => setActiveCard(index)}
                           className={`cursor-pointer p-6 rounded-2xl border-2 transition-all duration-300 ${activeCard === index
                              ? `${item.bgColor} border-current ${item.textColor} shadow-lg scale-105`
                              : 'bg-white border-gray-200 hover:border-gray-300 hover:shadow-md'
                              }`}
                        >
                           <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-4">
                                 <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${activeCard === index ? 'bg-white' : `bg-gradient-to-r ${item.color}`}`}>
                                    <IconComponent className={`w-6 h-6 ${activeCard === index ? item.textColor : 'text-white'}`} />
                                 </div>
                                 <div>
                                    <h3 className={`font-bold text-lg ${activeCard === index ? item.textColor : 'text-gray-800'}`}>
                                       {item.title}
                                    </h3>
                                    <p className={`text-sm ${activeCard === index ? item.textColor : 'text-gray-600'}`}>
                                       {item.institution}
                                    </p>
                                 </div>
                              </div>
                              <FaChevronRight className={`w-5 h-5 transition-transform duration-300 ${activeCard === index ? `${item.textColor} rotate-90` : 'text-gray-400'}`} />
                           </div>
                           <div className="mt-4 flex items-center space-x-4 text-sm">
                              <div className="flex items-center space-x-1">
                                 <FaCalendarAlt className="w-4 h-4" />
                                 <span>{item.period}</span>
                              </div>
                              <span className={`px-3 py-1 rounded-full text-xs font-medium ${activeCard === index
                                 ? 'bg-white'
                                 : item.status === 'Currently Enrolled' ? 'bg-green-100 text-green-800'
                                    : item.status === 'Ongoing' ? 'bg-blue-100 text-blue-800'
                                       : item.status === '1 Year Experience' ? 'bg-orange-100 text-orange-800'
                                          : 'bg-purple-100 text-purple-800'
                                 }`}>
                                 {item.status}
                              </span>
                           </div>
                        </div>
                     );
                  })}
               </div>

               {/* Right Side */}
               <div className="bg-white rounded-3xl shadow-2xl overflow-hidden fade-up">
                  <div className={`h-2 bg-gradient-to-r ${educationData[activeCard].color}`}></div>
                  <div className="p-8">
                     <div className="flex items-center space-x-4 mb-6">
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${educationData[activeCard].color} flex items-center justify-center`}>
                           {React.createElement(educationData[activeCard].icon, {
                              className: "w-8 h-8 text-white"
                           })}
                        </div>
                        <div>
                           <h2 className="text-2xl font-bold text-gray-900">{educationData[activeCard].title}</h2>
                           <p className={`font-semibold ${educationData[activeCard].textColor}`}>
                              {educationData[activeCard].institution}
                           </p>
                           <p className="text-gray-500 text-sm">{educationData[activeCard].type}</p>
                        </div>
                     </div>
                     <p className="text-gray-700 leading-relaxed mb-8 text-lg">
                        {educationData[activeCard].description}
                     </p>
                     <div className="mb-8">
                        <h4 className="font-bold text-gray-800 mb-4 text-lg">Technical Skills & Technologies</h4>
                        <div className="grid grid-cols-2 gap-3">
                           {educationData[activeCard].skills.map((skill, index) => (
                              <div key={index} className={`${educationData[activeCard].bgColor} ${educationData[activeCard].textColor} px-4 py-2 rounded-lg text-center font-medium transition-transform hover:scale-105`}>
                                 {skill}
                              </div>
                           ))}
                        </div>
                     </div>
                     <div>
                        <h4 className="font-bold text-gray-800 mb-4 text-lg">Key Achievements</h4>
                        <div className="space-y-3">
                           {educationData[activeCard].achievements.map((achievement, index) => (
                              <div key={index} className="flex items-center space-x-3">
                                 <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${educationData[activeCard].color}`}></div>
                                 <span className="text-gray-700 font-medium">{achievement}</span>
                              </div>
                           ))}
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            {/* Professional Stats */}
            <div className="bg-gradient-to-r from-gray-900 to-blue-900 rounded-3xl p-8 text-white fade-up">
               <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold mb-4">Professional Impact</h3>
                  <p className="text-blue-200 text-lg">Measurable growth and continuous development</p>
               </div>

               <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                     { number: "15+", label: "Projects Completed", color: "text-blue-500" },
                     { number: "200+", label: "Hours of Learning", color: "text-green-500" },
                     { number: "10+", label: "Technologies Learned", color: "text-purple-500" },
                     { number: "1", label: "Year Industry Experience", color: "text-yellow-500" },
                  ].map((item, i) => (
                     <div
                        key={i}
                        className={`text-center bg-white bg-opacity-10 rounded-2xl p-6 backdrop-blur 
            transform transition-all duration-300 hover:-translate-y-2 hover:scale-105 
            hover:bg-opacity-20 hover:shadow-[0_0_15px_rgba(255,255,255,0.15)]`}
                     >
                        <div className={`text-3xl font-bold mb-2 ${item.color.replace('text-', 'text-')}`}>
                           {item.number}
                        </div>
                        <p className={`${item.color} text-sm font-medium`}>{item.label}</p>
                     </div>
                  ))}
               </div>
            </div>

         </div>
      </section>
   );
};

export default Education;