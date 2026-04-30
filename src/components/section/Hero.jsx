import React from 'react';

const Hero = () => {
  return (
    <section className="relative w-full py-20 lg:py-32 overflow-hidden bg-white">
      {/* Background Decoration (Optional Tailwind "Blobs") */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-50 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-indigo-50 rounded-full blur-3xl opacity-50"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
        
        {/* Badge */}
        <span className="px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-sm font-semibold mb-6">
          Available for Internships
        </span>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight mb-6">
          Building digital products with <br />
          <span className="text-transparent bg-clip-text from-blue-600 to-indigo-500">
            React & Tailwind CSS
          </span>
        </h1>

        {/* Description */}
        <p className="max-w-2xl text-lg md:text-xl text-slate-600 mb-10 leading-relaxed">
          Hi, I'm <span className="font-semibold text-slate-900">[Joyce David]</span>. 
          A Computer Science student passionate about front-end development and 
          creating user-friendly web applications.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <a 
            href="#projects" 
            className="px-8 py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl"
          >
            View My Projects
          </a>
          <a 
            href="#contact" 
            className="px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-xl font-bold hover:bg-slate-50 transition-all"
          >
            Let's Talk
          </a>
        </div>

        {/* Tech Stack Preview */}
        <div className="mt-16 flex flex-col items-center">
          <p className="text-sm font-medium text-slate-400 uppercase tracking-widest mb-4">Current Stack</p>
          <div className="flex flex-wrap justify-center gap-6 opacity-60 grayscale hover:grayscale-0 transition-all">
             {/* You can replace these with actual icons later */}
             <span className="font-bold text-xl">HTML</span>
             <span className="font-bold text-xl">React</span>
             <span className="font-bold text-xl">Tailwindcss</span>
             <span className="font-bold text-xl">JavaScript</span>
             <span className="font-bold text-xl">PHP</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;