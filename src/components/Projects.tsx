import { projects } from "../data/projects";

const Projects = () => {
  return (
    <section id="projects" className="scroll-mt-24">
      <p className="text-xs font-semibold tracking-widest uppercase text-[#86868b] mb-3">
        Showcase
      </p>
      <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#1d1d1f] mb-12">
        Featured Work
      </h2>

      <div className="space-y-8 bg-white/60 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(0,0,0,0.04)] border border-white/70 rounded-[2.5rem] p-8 md:p-12 shadow-sm transition-all duration-200 hover:shadow-md">
        {projects.map((project) => (
          <div
            key={project.title}
            className="ios-card p-8 md:p-12 rounded-[2.5rem]"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-[#1d1d1f] tracking-tight">
              {project.title}
            </h3>

            <p className="mt-4 text-[#86868b] text-base md:text-lg font-normal leading-relaxed max-w-3xl">
              {project.description}
            </p>

            <div className="mt-8 pt-6 border-t border-gray-100">
              <h4 className="text-xs font-semibold uppercase tracking-widest text-[#86868b] mb-4">
                Key Features
              </h4>
              <ul className="grid sm:grid-cols-2 gap-3 text-sm text-[#1d1d1f]">
                {project.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2.5">
                    <span className="text-gray-400 font-bold">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-2 mt-8">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="text-xs font-medium px-3.5 py-1.5 rounded-full border border-gray-100 shadow-sm transition-all duration-200 hover:bg-[#e5e5e7] hover:scale-[1.03] "
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;