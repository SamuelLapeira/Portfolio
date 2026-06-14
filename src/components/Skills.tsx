import { skills } from "../data/skills";

const Skills = () => {
  return (
    <section id="skills" className="scroll-mt-24">
      <p className="text-xs font-semibold tracking-widest uppercase text-[#86868b] mb-3">
        Capabilities
      </p>
      <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#1d1d1f] mb-12">
        Skills & Tools
      </h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
        {Object.entries(skills).map(([category, items]) => (
          <div
            key={category}
            className="space-y-8 bg-white/60 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(0,0,0,0.04)] border border-white/70 rounded-[2.5rem] p-8 md:p-12 shadow-sm transition-all duration-200 hover:shadow-md"
          >
            <div>
              <h3 className="capitalize text-lg font-semibold text-[#1d1d1f] tracking-tight mb-5 ">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2 bg-white p-4 rounded-lg  ">
                {items.map((skill) => (
                  <span 
                    key={skill}
                    className="text-[#1d1d1f] text-xs font-medium px-3.5 py-1.5 rounded-full border border-gray-100 shadow-sm transition-all duration-200 hover:bg-[#e5e5e7] hover:scale-[1.03]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;