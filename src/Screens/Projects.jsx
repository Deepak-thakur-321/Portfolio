import React, { useMemo, useState, useEffect, useRef } from "react";
import { FaExternalLinkAlt, FaGithub, FaSearch, FaFilter } from "react-icons/fa";

const projectsData = [
   {
      title: "Quick Code Review (AI Web App)",
      description:
         "AI-powered review generator that helps users get concise, intelligent summaries and feedback in real time.",
      liveLink: "https://quick-code-review.vercel.app/",
      repoLink: "https://github.com/Deepak-thakur-321/Quick-Code-Review ",
      category: "AI Web App",
      tech: ["React", "Tailwind", "Node.js", "Express", "MongoDB", "Gemini API"],
      year: 2025,
      priority: 1,
   },
   {
      title: "Perplexity (AI Web App)",
      description:
         "AI-powered platform that provides clear, real-time summaries and actionable feedback with a modern MERN stack architecture.",
      liveLink: "https://perplexity-clone-nu.vercel.app/",
      repoLink: "https://github.com/Deepak-thakur-321/Perplexity-Clone",
      category: "AI Web App",
      tech: ["React", "Tailwind", "Node.js", "Express", "MongoDB", "Gemini API"],
      year: 2025,
      priority: 2,
   },
   {
      title: "Xsports (Gaming Site)",
      description:
         "Interactive gaming front‑end with hover cards, match listings, and animated sections.",
      liveLink: "https://tailwind-gaming-website.vercel.app/",
      repoLink: "https://github.com/Deepak-thakur-321/tailwind-gaming-website",
      category: "Landing Page",
      tech: ["React", "TailwindCSS", "GSAP"],
      year: 2025,
      priority: 3,
   },
   {
      title: "Apple Landing Page",
      description:
         "Minimal, Apple‑style product hero with sticky highlights and smooth scroll sections.",
      liveLink: "https://deepak-thakur-321.github.io/Apple-Store-Landing-page/",
      repoLink: "https://github.com/Deepak-thakur-321/Apple-Store-Landing-page",
      category: "Landing Page",
      tech: ["React", "TailwindCSS"],
      year: 2024,
      priority: 4,
   },
   {
      title: "Restaurant Website",
      description:
         "Premium restaurant landing with menu, reservation form, hero animations, and responsive layout.",
      liveLink: "https://indian-delecious-restaurant.vercel.app/",
      repoLink: "https://github.com/Deepak-thakur-321/Delicious-Restaurant",
      category: "Landing Page",
      tech: ["React", "TailwindCSS", "GSAP"],
      year: 2025,
      priority: 5,
   },
   {
      title: "E‑commerce Landing Page",
      description:
         "Full‑stack style front‑end with product gallery, filters, cart, and checkout flow. Focus on performance and accessibility.",
      liveLink: "https://react-ecommerce-project-475w.vercel.app/",
      repoLink: "https://github.com/Deepak-thakur-321/react-ecommerce-project",
      category: "Web App",
      tech: ["React", "TailwindCSS", "Context API", "Router"],
      year: 2025,
      priority: 6,
   },
   {
      title: "Job Application Tracker",
      description:
         "A simple tracker to manage job applications with filters, statuses, and progress tracking.",
      liveLink: "https://job-application-tracker-virid.vercel.app/",
      repoLink: "https://github.com/Deepak-thakur-321/Job-Application-Tracker",
      category: "Productivity Tool",
      tech: ["React", "Tailwind", "LocalStorage / MongoDB"],
      year: 2025,
      priority: 7,
   },
   {
      title: "Expense Tracker",
      description:
         "Track expenses by category with charts, persistent storage, and monthly insights.",
      liveLink: "https://expense-tracker-pied-nu.vercel.app/",
      repoLink: "https://github.com/Deepak-thakur-321/expense-tracker",
      category: "Web App",
      tech: ["React", "LocalStorage", "Charts"],
      year: 2025,
      priority: 8,
   },
   {
      title: "Task Tracker",
      description:
         "Create, complete, and filter tasks by due date and status; responsive and snappy UI.",
      liveLink: "https://task-tracker-mu-gold.vercel.app/",
      repoLink: "https://github.com/Deepak-thakur-321/task-tracker",
      category: "Web App",
      tech: ["React", "TailwindCSS"],
      year: 2024,
      priority: 9,
   },
   {
      title: "Bookmark Extension",
      description:
         "Chrome extension to save and organize links with tags and quick search.",
      liveLink: "https://bookmark-extension-eight.vercel.app/",
      repoLink: "https://github.com/Deepak-thakur-321/bookmark-extension",
      category: "Browser Extension",
      tech: ["JavaScript", "Chrome APIs"],
      year: 2024,
      priority: 10,
   },
   {
      title: "Notes App",
      description:
         "Minimal notes app with CRUD, pinning, and keyboard shortcuts.",
      liveLink: "https://notes-project-ten.vercel.app/",
      repoLink: "https://github.com/Deepak-thakur-321/Notes-project",
      category: "Web App",
      tech: ["React", "LocalStorage"],
      year: 2024,
      priority: 11,
   },
];

const categories = ["All", "Web App", "Landing Page", "Browser Extension"];

function classNames(...c) {
   return c.filter(Boolean).join(" ");
}

const Projects = () => {
   const [query, setQuery] = useState("");
   const [category, setCategory] = useState("All");
   const [sortBy, setSortBy] = useState("Featured");
   const [isLoading, setIsLoading] = useState(true);
   const [visibleCards, setVisibleCards] = useState(new Set());
   const observerRef = useRef(null);

   useEffect(() => {
      // Simulate loading
      const timer = setTimeout(() => setIsLoading(false), 100);
      return () => clearTimeout(timer);
   }, []);

   useEffect(() => {
      // Intersection Observer for scroll animations
      observerRef.current = new IntersectionObserver(
         (entries) => {
            entries.forEach((entry) => {
               if (entry.isIntersecting) {
                  setVisibleCards((prev) => new Set([...prev, entry.target.dataset.index]));
               }
            });
         },
         { threshold: 0.1 }
      );

      return () => {
         if (observerRef.current) {
            observerRef.current.disconnect();
         }
      };
   }, []);

   const filtered = useMemo(() => {
      let list = [...projectsData];

      if (query.trim()) {
         const q = query.toLowerCase();
         list = list.filter(
            (p) =>
               p.title.toLowerCase().includes(q) ||
               p.description.toLowerCase().includes(q) ||
               (p.tech?.join(" ").toLowerCase().includes(q) ?? false)
         );
      }

      if (category !== "All") {
         list = list.filter((p) => p.category === category);
      }

      if (sortBy === "Featured") list.sort((a, b) => a.priority - b.priority);
      if (sortBy === "Newest") list.sort((a, b) => b.year - a.year || a.title.localeCompare(b.title));
      if (sortBy === "Oldest") list.sort((a, b) => a.year - b.year || a.title.localeCompare(b.title));
      if (sortBy === "A‑Z") list.sort((a, b) => a.title.localeCompare(b.title));

      return list;
   }, [query, category, sortBy]);

   const cardRef = (el) => {
      if (el && observerRef.current) {
         observerRef.current.observe(el);
      }
   };

   if (isLoading) {
      return (
         <section className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 px-6 py-20 flex items-center justify-center">
            <div className="text-center">
               <div className="relative w-20 h-20 mx-auto mb-6">
                  <div className="absolute inset-0 border-4 border-blue-200 rounded-full animate-ping"></div>
                  <div className="absolute inset-0 border-4 border-t-blue-600 rounded-full animate-spin"></div>
               </div>
               <p className="text-slate-600 text-lg font-medium animate-pulse">Loading Projects...</p>
            </div>
         </section>
      );
   }

   return (
      <section className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 px-6 py-20">
         <div className="container mx-auto">
            {/* Heading */}
            <div className="text-center mb-10 animate-fade-in-down">
               <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
                  <span className="bg-gradient-to-r from-blue-700 to-indigo-600 bg-clip-text text-transparent">
                     Projects
                  </span>
               </h2>
               <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
                  A curated selection of my recent work. Explore live demos and source code.
               </p>
            </div>

            {/* Controls */}
            <div className="grid grid-cols-12 gap-4 items-center mb-8 animate-fade-in-down" style={{ animationDelay: '0.1s' }}>
               {/* Search */}
               <div className="col-span-12 md:col-span-6 lg:col-span-5">
                  <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-2 shadow-sm hover:shadow-md transition-all duration-300 hover:border-blue-300">
                     <FaSearch className="opacity-70 text-blue-600" />
                     <input
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Search by title, tech, or description..."
                        className="w-full outline-none text-slate-700 placeholder:slate-400"
                     />
                  </div>
               </div>

               {/* Category pills */}
               <div className="col-span-12 md:col-span-6 lg:col-span-5 flex flex-wrap gap-2">
                  {categories.map((c, idx) => (
                     <button
                        key={c}
                        onClick={() => setCategory(c)}
                        style={{ animationDelay: `${0.2 + idx * 0.05}s` }}
                        className={classNames(
                           "px-4 py-2 rounded-full text-sm border transition-all duration-300 transform hover:scale-105 animate-scale-in",
                           category === c
                              ? "bg-blue-600 text-white border-blue-600 shadow-lg shadow-blue-200"
                              : "bg-white text-slate-700 border-slate-200 hover:border-blue-300 hover:bg-blue-50"
                        )}
                     >
                        {c}
                     </button>
                  ))}
               </div>

               {/* Sort */}
               <div className="col-span-12 lg:col-span-2 flex justify-start lg:justify-end">
                  <div className="flex items-center gap-2 border border-slate-300/60 bg-white px-3 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:border-blue-300">
                     <FaFilter className="text-slate-500" />
                     <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                        className="bg-transparent outline-none text-slate-700 font-medium cursor-pointer focus:text-slate-900"
                     >
                        <option value="Featured">Featured</option>
                        <option value="Newest">Newest</option>
                        <option value="Oldest">Oldest</option>
                        <option value="A‑Z">A-Z</option>
                     </select>
                  </div>
               </div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-12 gap-6">
               {filtered.map((project, idx) => (
                  <article
                     key={idx}
                     ref={(el) => cardRef(el, idx)}
                     data-index={idx}
                     className={classNames(
                        "col-span-12 sm:col-span-6 lg:col-span-4 group relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm hover-lift",
                        visibleCards.has(String(idx)) ? "card-visible" : "card-hidden"
                     )}
                     style={{ animationDelay: `${(idx % 3) * 0.1}s` }}
                  >

                     {/* Decorative gradient with hover effect */}
                     <div className="absolute inset-x-0 -top-24 h-40 bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-fuchsia-500/10 blur-2xl group-hover:blur-3xl transition-all duration-500" />

                     {/* Shimmer effect on hover */}
                     <div className="absolute inset-0 shimmer-effect opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                     {/* Glowing border on hover */}
                     <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-blue-500/20 via-indigo-500/20 to-fuchsia-500/20 blur-xl -z-10" />

                     <div className="relative p-6">
                        <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-700 transition-all duration-300 group-hover:translate-x-1">
                           {project.title}
                        </h3>
                        <p className="mt-2 text-slate-600 min-h-[72px] group-hover:text-slate-700 transition-colors duration-300">
                           {project.description}
                        </p>

                        {/* Tags */}
                        <div className="mt-4 flex flex-wrap gap-2">
                           {project.tech?.map((t, tidx) => (
                              <span
                                 key={t}
                                 className="px-2.5 py-1 rounded-full text-xs bg-slate-100 text-slate-700 border border-slate-200 hover:bg-blue-50 hover:border-blue-300 hover:text-blue-700 transition-all duration-300 hover:scale-105 transform"
                                 style={{ transitionDelay: `${tidx * 30}ms` }}
                              >
                                 {t}
                              </span>
                           ))}
                        </div>

                        {/* Footer */}
                        <div className="mt-6 flex items-center justify-between">
                           <span className="text-xs font-medium text-slate-500 group-hover:text-slate-700 transition-colors duration-300">
                              {project.category} • {project.year}
                           </span>

                           <div className="flex gap-2">
                              {project.repoLink && (
                                 <a
                                    href={project.repoLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-3 py-2 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300 text-sm transition-all duration-300 hover:shadow-md transform hover:-translate-y-0.5"
                                    aria-label={`Open repository of ${project.title}`}
                                 >
                                    <FaGithub className="transition-transform duration-300 group-hover:rotate-12" />
                                    Code
                                 </a>
                              )}
                              {project.liveLink ? (
                                 <a
                                    href={project.liveLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-blue-600 text-white hover:bg-blue-700 text-sm transition-all duration-300 hover:shadow-lg hover:shadow-blue-200 transform hover:-translate-y-0.5"
                                    aria-label={`Visit live demo of ${project.title}`}
                                 >
                                    <FaExternalLinkAlt className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                    Live
                                 </a>
                              ) : (
                                 <button
                                    disabled
                                    className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-200 text-slate-500 text-sm cursor-not-allowed"
                                    title="Live link coming soon"
                                 >
                                    <FaExternalLinkAlt />
                                    Live
                                 </button>
                              )}
                           </div>
                        </div>
                     </div>
                  </article>
               ))}
            </div>
         </div>
      </section>
   );
};

export default Projects;