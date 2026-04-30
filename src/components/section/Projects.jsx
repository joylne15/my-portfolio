import React from 'react';

const Projects = () => {
  const professionalProjects = [
    {
      title: "Oddity Tech Solution Ltd",
      category: "Corporate Website",
      description: "Successfully built the official company website. Designed reusable components for the home, about, and services pages to establish a strong digital presence.",
      tags: ["React", "Tailwind CSS", "Vite"],
      status: "Completed"
    },
    {
      title: "Tanzania Kiganjani",
      category: "Logistics Web App",
      description: "Developing a real-world solution for vehicle transport. This app helps users manage logistics and fleet tracking efficiently within the Tanzanian market.",
      tags: ["React", "State Management", "Client Project"],
      status: "In Progress"
    }
  ];

  const futureRoadmap = [
    {
      title: "SaaS Analytics Dashboard",
      description: "A business control center focused on data visualization. This project explores complex layouts and how to display business metrics effectively.",
      tags: ["Data Vis", "React", "Recharts"],
      type: "High Priority"
    },
    {
      title: "Python Data Automator",
      description: "A backend script designed to scrape and organize web data automatically. This marks my transition into Python for automation and data handling.",
      tags: ["Python", "Web Scraping", "Automation"],
      type: "New Language"
    }
  ];

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Project Portfolio</h2>
          <p className="text-slate-600 mt-2">Professional work and my journey into new technologies like Python.</p>
        </div>

        {/* 1. Professional Work Section */}
        <div className="flex items-center gap-4 mb-10">
          <h3 className="text-sm font-bold text-blue-600 uppercase tracking-widest">Real-World Experience</h3>
          <div className=" bg-slate-100"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-24">
          {professionalProjects.map((project, index) => (
            <div key={index} className="group p-8 bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl transition-all duration-500">
              <div className="flex justify-between items-start mb-6">
                <span className="px-3 py-1 bg-white border border-slate-200 text-[10px] font-bold rounded-full text-slate-500 uppercase">
                  {project.status}
                </span>
              </div>
              <h4 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                {project.title}
              </h4>
              <p className="text-slate-600 mb-8 leading-relaxed text-sm">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-blue-50 text-blue-600 rounded-md text-xs font-semibold">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* 2. Future Concepts Section */}
        <div className="bg-slate-900 rounded-[3rem] p-10 md:p-16 text-white relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-10 text-blue-400">Future Roadmap</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {futureRoadmap.map((item, index) => (
                <div key={index} className="flex flex-col border-l border-slate-700 pl-8 relative">
                  <div className="absolute top-0 left-[-4.5px] w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-blue-400 text-xs font-mono mb-2 uppercase">{item.type}</span>
                  <h4 className="text-xl font-bold mb-3">{item.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6 italic">
                    "{item.description}"
                  </p>
                  <div className="mt-auto flex flex-wrap gap-3">
                     {item.tags.map(t => (
                       <span key={t} className="text-[10px] text-slate-500 border border-slate-800 px-2 py-1 rounded">
                         #{t}
                       </span>
                     ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Projects;