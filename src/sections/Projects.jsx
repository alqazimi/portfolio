import { productionProjects, sideProjects, openSourceProjects } from '../data/projects'
import ProjectCard from '../components/ProjectCard'
import FeaturedProject from '../components/FeaturedProject'

const Projects = () => {
  const featuredProject = productionProjects.find(p => p.featured)
  const otherProductionProjects = productionProjects.filter(p => !p.featured)

  return (
    <section id="projects" className="py-24 px-6 sm:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12">Projects</h2>
        
        {/* Production Projects Section */}
        <div className="mb-16">
          {featuredProject && (
            <div className="mb-12">
              <FeaturedProject project={featuredProject} />
            </div>
          )}

          {otherProductionProjects.length > 0 && (
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Other Production Projects</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {otherProductionProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Side Projects & Tools Section */}
        {sideProjects.length > 0 && (
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Side Projects & Tools</h3>
            <p className="text-gray-600 mb-6 max-w-2xl">
              Personal and experimental projects built to learn new technologies and solve specific problems.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {sideProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        )}

        {/* Open Source Section */}
        {openSourceProjects.length > 0 && (
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Open Source Contributions</h3>
            <p className="text-gray-600 mb-6 max-w-2xl">
              Contributions to open source projects and community tools.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {openSourceProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Projects

