const Home = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-6 sm:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          Software Engineer building
          <br />
          <span className="text-accent">web applications and mobile apps</span>
        </h1>
        
        <p className="text-lg sm:text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
          I work on web applications with teams and build projects independently. 
          I learn by building real applications that people use.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => scrollToSection('projects')}
            className="px-8 py-3 bg-accent text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
          >
            View Projects
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="px-8 py-3 border-2 border-gray-300 text-gray-900 font-medium rounded-lg hover:border-gray-400 transition-colors"
          >
            Contact
          </button>
        </div>
      </div>
    </section>
  )
}

export default Home

