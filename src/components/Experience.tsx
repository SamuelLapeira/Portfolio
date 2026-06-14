import { experience } from "../data/experience";

const Experience = () => {
  return (
    <section id="experience" className="scroll-mt-24">
      <p className="text-xs font-semibold tracking-widest uppercase text-[#86868b] mb-3">
        History
      </p>
      <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#1d1d1f] mb-16">
        Experience
      </h2>

      <div className="border-l border-gray-200 ml-2 md:ml-4 space-y-12 max-w-3xl">
        {experience.map((job) => (
          <div key={job.company} className="relative pl-8 group">
            <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-[#d2d2d7] group-hover:bg-[#1d1d1f] transition-colors duration-300" />
            
            <div className="space-y-1">
              <span className="text-xs font-mono text-[#86868b] uppercase tracking-wider">
                {job.period}
              </span>
              
              <h3 className="text-2xl font-bold text-[#1d1d1f] tracking-tight">
                {job.role}
              </h3>
              
              <p className="text-[#86868b] text-sm font-medium">
                {job.company}
              </p>

              <ul className="mt-4 space-y-3 pt-3 text-[#1d1d1f] text-sm font-normal leading-relaxed">
                {job.description.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-gray-300 select-none">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;