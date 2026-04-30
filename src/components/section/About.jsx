import React from 'react';
const About = () => (
  <section id="about" className="py-20 bg-slate-50">
    <div className="max-w-4xl mx-auto px-6">
      <h2 className="text-sm font-bold text-blue-600 uppercase tracking-[0.2em] mb-4">Background</h2>
      <h3 className="text-3xl font-bold mb-8 text-slate-900">Education & Experience</h3>
      
      <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
        {/* Education Highlight */}
        <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
          <p>
            I am currently a <span className="font-bold text-blue-600">Finalist Student</span> at 
            <span className="font-bold text-slate-900"> St. Joseph College of Engineering and Technology (SJCET)</span>. 
            My academic background has provided me with a strong foundation in engineering principles and problem-solving.
          </p>
        </div>

        <p>
          Beyond the classroom, I am applying my knowledge as an intern at 
          <span className="font-semibold text-slate-900">Exxonim Company Ltd</span>. 
          This internship has allowed me to bridge the gap between academic theory and professional software development.
        </p>
        
        <p>
          I am currently focused on the <span className="font-bold text-slate-900">Tanzania Kiganjani</span> project, 
          where I am building a logistics web application that addresses real transport challenges in our country.
        </p>
      </div>
    </div>
  </section>
);
export default About;