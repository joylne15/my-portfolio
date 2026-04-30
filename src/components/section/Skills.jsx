import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      color: "blue",
      skills: [
        { name: "React", level: "40%" },
        { name: "Tailwind CSS", level: "40%" },
        { name: "JavaScript", level: "60%" },
        { name: "HTML/CSS", level: "90%" },
      ],
    },
    {
      title: "Backend",
      color: "indigo",
      skills: [
        { name: "PHP", level: "50%" },
        { name: "MySQL", level: "85%" },
        { name: "Node.js", level: "30%" },
      ],
    },
    {
      title: "Tools & Learning",
      color: "emerald",
      skills: [
        { name: "Git & GitHub", level: "65%" },
        { name: "Responsive Design", level: "70%" },
        { name: "UI Design", level: "60%" },
      ],
    }
  ];

  // Helper function to handle dynamic tailwind colors
  const getColorClasses = (color) => {
    const colors = {
      blue: "text-blue-600 bg-blue-600",
      indigo: "text-indigo-600 bg-indigo-600",
      emerald: "text-emerald-600 bg-emerald-600",
    };
    return colors[color] || colors.blue;
  };

  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900">Technical Proficiency</h2>
          <p className="text-slate-600 mt-2">Where I currently stand in my development journey.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm"
            >
              <h3 className={`text-xl font-bold mb-8 ${getColorClasses(category.color).split(' ')[0]}`}>
                {category.title}
              </h3>
              
              <div className="space-y-6">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    {/* Skill Name & Percentage Label */}
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-semibold text-slate-700">{skill.name}</span>
                      <span className="text-xs font-medium text-slate-400">{skill.level}</span>
                    </div>

                    {/* Progress Bar Background */}
                    <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                      {/* Animated Progress Bar Fill */}
                      <div 
                        className={`h-full rounded-full transition-all duration-1000 ${getColorClasses(category.color).split(' ')[1]}`}
                        style={{ width: skill.level }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;