import React from 'react';

const Footer = () => {
    return (
  <footer className="border-t border-slate-800/50 bg-slate-900/50 backdrop-blur-xl mt-32 pt-12 pb-8">
    <div className="container mx-auto px-6 text-center">
      <div className="text-2xl font-black  from-purple-400 via-pink-400 to-purple-500 bg-clip-text text-transparent mb-4">
        YourName
      </div>
      
      <p className="text-gray-400 mb-6">
        © 2026 joey. Built with React & Tailwind.
      </p>
    </div>
  </footer>
);
};

export default Footer;