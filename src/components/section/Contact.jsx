import React from 'react';

const Contact = () => (
  <section id="contact" className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-6 text-center">
      <h2 className="text-4xl font-bold text-slate-900 mb-4">Let's Connect</h2>
      <p className="text-slate-500 mb-10">Interested in a project or an internship? Send me a message!</p>
      
      <div className="flex flex-col md:flex-row justify-center gap-8 items-center">
        {/* Email Card */}
        <a href="mailto:jdavidmangula@gmail.comm" className="w-full md:w-64 p-6 border border-slate-100 rounded-3xl hover:border-blue-500 transition shadow-sm hover:shadow-xl">
          <div className="text-3xl mb-4">✉️</div>
          <h4 className="font-bold">Email Me</h4>
          <p className="text-sm text-slate-400">jdavidmangula@gmail.com</p>
        </a>

        {/* LinkedIn or WhatsApp Card */}
        <a href="https://wa.me/255673206180" target="_blank" rel="noopener noreferrer" className="w-full md:w-64 p-6 border border-slate-100 rounded-3xl hover:border-blue-500 transition shadow-sm hover:shadow-xl">
          <div className="text-3xl mb-4">📱</div>
          <h4 className="font-bold">WhatsApp</h4>
          <p className="text-sm text-slate-400">+255 673206180</p>
        </a>
      </div>

    </div>
  </section>
);
export default Contact;