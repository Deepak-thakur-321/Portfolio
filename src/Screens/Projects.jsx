import React, { useMemo, useState } from "react";
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
   },
   {
      title: "E‑commerce Platform",
      description:
         "Full‑stack style front‑end with product gallery, filters, cart, and checkout flow. Focus on performance and accessibility.",
      liveLink: "https://react-ecommerce-project-475w.vercel.app/",
      repoLink: "https://github.com/Deepak-thakur-321/react-ecommerce-project",
      category: "Web App",
      tech: ["React", "TailwindCSS", "Context API", "Router"],
      year: 2025,
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
   },
   {
      title: "Gaming Website",
      description:
         "Interactive gaming front‑end with hover cards, match listings, and animated sections.",
      liveLink: "https://tailwind-gaming-website.vercel.app/",
      repoLink: "https://github.com/Deepak-thakur-321/tailwind-gaming-website",
      category: "Landing Page",
      tech: ["React", "TailwindCSS", "GSAP"],
      year: 2025,
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
   },


];

const categories = ["All", "Web App", "Landing Page", "Browser Extension"];

function classNames(...c) {
   return c.filter(Boolean).join(" ");
}

const Projects = () => {
   const [query, setQuery] = useState("");
   const [category, setCategory] = useState("All");
   const [sortBy, setSortBy] = useState("Newest");

   const filtered = useMemo(() => {
      let list = [...projectsData];

      // Search
      if (query.trim()) {
         const q = query.toLowerCase();
         list = list.filter(
            (p) =>
               p.title.toLowerCase().includes(q) ||
               p.description.toLowerCase().includes(q) ||
               (p.tech?.join(" ").toLowerCase().includes(q) ?? false)
         );
      }

      // Category
      if (category !== "All") {
         list = list.filter((p) => p.category === category);
      }

      // Sort
      if (sortBy === "Newest") list.sort((a, b) => b.year - a.year || a.title.localeCompare(b.title));
      if (sortBy === "Oldest") list.sort((a, b) => a.year - b.year || a.title.localeCompare(b.title));
      if (sortBy === "A‑Z") list.sort((a, b) => a.title.localeCompare(b.title));

      return list;
   }, [query, category, sortBy]);

   return (
      <section className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 px-6 py-20">
         <div className="container mx-auto">
            {/* Heading */}
            <div className="text-center mb-10">
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
            <div className="grid grid-cols-12 gap-4 items-center mb-8">
               {/* Search */}
               <div className="col-span-12 md:col-span-6 lg:col-span-5">
                  <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-2 shadow-sm">
                     <FaSearch className="opacity-70" />
                     <input
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Search by title, tech, or description..."
                        className="w-full outline-none text-slate-700 placeholder:slae-400"
                     />
                  </div>
               </div>

               {/* Category pills */}
               <div className="col-span-12 md:col-span-6 lg:col-span-5 flex flex-wrap gap-2">
                  {categories.map((c) => (
                     <button
                        key={c}
                        onClick={() => setCategory(c)}
                        className={classNames(
                           "px-4 py-2 rounded-full text-sm border transition-all",
                           category === c
                              ? "bg-blue-600 text-white border-blue-600 shadow"
                              : "bg-white text-slate-700 border-slate-200 hover:border-slate-300"
                        )}
                     >
                        {c}
                     </button>
                  ))}
               </div>

               {/* Sort */}
               <div className="col-span-12 lg:col-span-2 flex justify-start lg:justify-end">
                  <div className="flex items-center gap-2 border border-slate-300/60 bg-white px-3 py-2 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                     <FaFilter className="text-slate-500" />
                     <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                        className="bg-transparent outline-none text-slate-700 font-medium cursor-pointer focus:text-slate-900"
                     >
                        <option value="newest">Newest</option>
                        <option value="oldest">Oldest</option>
                        <option value="az">A-Z</option>
                     </select>
                  </div>
               </div>

            </div>

            {/* Grid */}
            <div className="grid grid-cols-12 gap-6">
               {filtered.map((project, idx) => (
                  <article
                     key={idx}
                     className="col-span-12 sm:col-span-6 lg:col-span-4 group relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-lg transition-shadow"
                  >
                     {/* Decorative gradient */}
                     <div className="absolute inset-x-0 -top-24 h-40 bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-fuchsia-500/10 blur-2xl" />

                     <div className="relative p-6">
                        <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                           {project.title}
                        </h3>
                        <p className="mt-2 text-slate-600 min-h-[72px]">{project.description}</p>

                        {/* Tags */}
                        <div className="mt-4 flex flex-wrap gap-2">
                           {project.tech?.map((t) => (
                              <span
                                 key={t}
                                 className="px-2.5 py-1 rounded-full text-xs bg-slate-100 text-slate-700 border border-slate-200"
                              >
                                 {t}
                              </span>
                           ))}
                        </div>

                        {/* Footer */}
                        <div className="mt-6 flex items-center justify-between">
                           <span className="text-xs font-medium text-slate-500">{project.category} • {project.year}</span>

                           <div className="flex gap-2">
                              {project.repoLink && (
                                 <a
                                    href={project.repoLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-3 py-2 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 text-sm"
                                    aria-label={`Open repository of ${project.title}`}
                                 >
                                    <FaGithub />
                                    Code
                                 </a>
                              )}
                              {project.liveLink ? (
                                 <a
                                    href={project.liveLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-blue-600 text-white hover:bg-blue-700 text-sm"
                                    aria-label={`Visit live demo of ${project.title}`}
                                 >
                                    <FaExternalLinkAlt />
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
