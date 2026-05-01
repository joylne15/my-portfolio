import React from 'react';

const ProjectCard = ({ title, category, description, tags, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className="group cursor-pointer p-8 bg-white border border-slate-100 hover:border-blue-200 shadow-sm hover:shadow-xl transition-all duration-500"
    >
      <div className="flex justify-between items-start mb-6">
        <span className="px-3 py-1 bg-blue-50 text-blue-600 text-[10px] font-bold rounded-full uppercase tracking-wider">
          {category}
        </span>
      </div>
      
      <h4 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
        {title}
      </h4>
      
      <p className="text-slate-600 mb-8 leading-relaxed line-clamp-3">
        {description}
      </p>
      
      <div className="flex flex-wrap gap-2 mt-auto">
        {tags.map((tag, index) => (
          <span key={index} className="px-3 py-1 bg-slate-50 text-slate-500 rounded-md text-[10px] font-semibold border border-slate-100">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;