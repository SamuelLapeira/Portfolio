import { projects } from "../data/projects";

const Projects = () => {
  return (
    <section
      id="projects"
      className="section"
    >
      <h2 className="text-4xl font-bold">
        Featured Project
      </h2>

      {projects.map(project => (

        <div
          key={project.title}
          className="bg-slate-800 p-10 rounded-xl mt-10"
        >

          <h3 className="text-3xl font-bold">
            {project.title}
          </h3>

          <p className="mt-4 text-slate-300">
            {project.description}
          </p>

          <div className="mt-6">

            <h4 className="font-semibold mb-2">
              Features
            </h4>

            <ul>

              {project.features.map(feature => (
                <li key={feature}>
                  ✓ {feature}
                </li>
              ))}

            </ul>

          </div>

          <div className="flex flex-wrap gap-3 mt-6">

            {project.technologies.map(tech => (
              <span
                key={tech}
                className="bg-blue-600 px-3 py-1 rounded"
              >
                {tech}
              </span>
            ))}

          </div>

        </div>

      ))}

    </section>
  );
};

export default Projects;