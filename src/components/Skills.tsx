import { skills } from "../data/skills";

const Skills = () => {
  return (
    <section
      id="skills"
      className="section"
    >
      <h2 className="text-4xl font-bold">
        Skills
      </h2>

      <div className="grid md:grid-cols-3 gap-6 mt-10">

        {Object.entries(skills).map(
          ([category, items]) => (
            <div
              key={category}
              className="bg-slate-800 p-6 rounded-xl"
            >
              <h3 className="capitalize text-xl mb-4">
                {category}
              </h3>

              {items.map(skill => (
                <p key={skill}>
                  {skill}
                </p>
              ))}
            </div>
          )
        )}

      </div>
    </section>
  );
};

export default Skills;