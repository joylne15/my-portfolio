import React from 'react';

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-slate-100 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* Logo/Name */}
        <div className="text-xl font-bold tracking-tight text-blue-600">
          <a href="/">DevJOEY<span className="text-slate-900">.</span></a>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-8 text-sm font-medium text-slate-600">
          <a href="#home" className="hover:text-blue-600 transition-colors">Home</a>
          <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
          <a href="#skills" className="hover:text-blue-600 transition-colors">Skills</a>
          <a href="#projects" className="hover:text-blue-600 transition-colors">Projects</a>
          <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
        </div>
        {/* Call to Action Button */}
        <div>
          <a 
            href="#contact" 
            className="bg-slate-900 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-blue-600 transition-all shadow-sm"
          >
            Hire Me
          </a>
        </div>
        
      </div>
    </nav>
  );
};

export default Navbar;