import React from 'react';
import profilePic from '../../assets/profile.jpg'; 

const About = () => (
  <section id="about" className="py-24 bg-slate-50">
    <div className="max-w-6xl mx-auto px-6">
      
      {/* Main Grid Container */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Side: Your Image */}
        <div className="relative group justify-self-center lg:justify-self-start">
          <div className="w-64 h-64 md:w-80 md:h-96 overflow-hidden shadow-2xl border-4 border-white transition-transform duration-500 hover:scale-[1.02]">
            <img 
              src={profilePic} 
              alt="SJCET Finalist Profile" 
              className="w-full h-full object-cover"
            />
          </div>
          {/* Decorative design element behind photo */}
          <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-600/10 rounded-full blur-3xl -z-10"></div>
        </div>

        {/* Right Side: Your Text Content */}
        <div>
          <h2 className="text-sm font-bold text-blue-600 uppercase tracking-[0.2em] mb-4 text-center lg:text-left">Background</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-8 text-slate-900 text-center lg:text-left">Education & Experience</h3>
          
          <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
            {/* Education Highlight */}
            <div className="p-6 bg-white rounded-2xl border-l-4 border-blue-600 shadow-sm">
              <p>
                I am currently a <span className="font-bold text-blue-600">Finalist Student</span> at 
                <span className="font-bold text-slate-900"> St. Joseph College of Engineering and Technology (SJCET)</span>. 
              </p>
            </div>

            <p>
              Beyond the classroom, I am applying my knowledge as an intern at 
              <span className="font-semibold text-slate-900"> Exxonim Company Ltd</span>. 
              This internship has allowed me to bridge the gap between academic theory and professional software development.
            </p>
            
            <p>
              I am currently focused on the <span className="font-bold text-slate-900">Tanzania Kiganjani</span> project, 
              where I am building a logistics web application that addresses real transport challenges in our country.
            </p>
          </div>
        </div>

      </div>
    </div>
  </section>
);

export default About;