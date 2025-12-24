const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['React', 'JavaScript (ES6+)', 'HTML/CSS', 'Tailwind CSS']
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Express', 'REST APIs']
    },
    {
      title: 'Tools',
      skills: ['Git', 'Vite', 'Vercel']
    }
  ]

  return (
    <section id="skills" className="py-24 px-6 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">Skills</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div key={category.title} className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{category.title}</h3>
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li key={skill} className="text-gray-700 flex items-center">
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills

