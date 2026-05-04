import React from 'react';
import background from '../../assets/Home-bg.jpg';

const Home = () => {
  return (
    <section id="home" className="relative w-full min-h-screen flex items-center overflow-hidden bg-slate-900">
      
      {/* Background Layer */}
      <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none"> 
        <img
          src={background}
          alt="Background"
          // Increased opacity slightly to see it better, or decrease it if text is hard to read
          className="w-full h-full object-cover opacity-40 scale-110"
        />
        {/* FIX 1: Corrected bg-black/200 to bg-black/60 for a professional dark overlay */}
        <div className="absolute inset-0 backdrop-blur-[1px] bg-black/60"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
        
        {/* Badge */}
        <span className="px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-semibold mb-6">
          SJCET Finalist | Exxonim Intern
        </span>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6">
          Building digital products with <br />
          <span className="bg-clip-text text-transparent from-blue-400 to-indigo-400">
            React & Tailwind CSS
          </span>
        </h1>

        {/* Description */}
        <p className="max-w-2xl text-lg md:text-xl text-slate-300 mb-10 leading-relaxed">
          Hi, I'm <span className="font-semibold text-white">Joyce David</span>. 
          A Computer Science student at <span className="font-semibold text-white">SJCET</span> passionate about front-end development and 
          creating solutions like <span className="italic">Tanzania Kiganjani</span>.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="#projects" className="px-8 py-4 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-500 transition-all shadow-lg shadow-blue-500/20">
            View My Projects
          </a>
          <a href="#contact" className="px-8 py-4 bg-white/10 text-white border border-white/20 rounded-xl font-bold hover:bg-white/20 backdrop-blur-md transition-all">
            Let's Talk
          </a>
        </div>

        {/* FIX 2: Tech Stack Visibility */}
        <div className="mt-16 flex flex-col items-center">
          <p className="text-sm font-medium text-blue-400 uppercase tracking-widest mb-4">Current Stack</p>
          {/* Removed opacity-60 and changed text-slate-400 to text-white/80 for better contrast */}
          <div className="flex flex-wrap justify-center gap-6 font-bold text-white/80">
             <span className="hover:text-blue-400 transition-colors">HTML</span>
             <span className="hover:text-blue-400 transition-colors">React</span>
             <span className="hover:text-blue-400 transition-colors">Tailwindcss</span>
             <span className="hover:text-blue-400 transition-colors">JavaScript</span>
             <span className="hover:text-blue-400 transition-colors">Python</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Home;