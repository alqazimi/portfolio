const About = () => {
  return (
    <section id="about" className="py-24 px-6 sm:px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">About</h2>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 leading-relaxed mb-4">
            I'm a full-stack developer who builds web applications from the ground up. 
            I've worked on everything from e-commerce platforms to real-time ordering systems, 
            always with a focus on user experience and code quality.
          </p>
          
          <p className="text-gray-700 leading-relaxed">
            My approach is straightforward: understand the problem, choose the right tools, 
            and write code that's easy to maintain. I prefer working with modern JavaScript, 
            React, and Node.js, but I'm comfortable adapting to whatever the project needs.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About

