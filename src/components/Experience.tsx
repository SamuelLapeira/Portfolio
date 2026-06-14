import { experience } from "../data/experience";

const Experience = () => {
  return (
    <section
      id="experience"
      className="section"
    >
      <h2 className="text-4xl font-bold">
        Experience
      </h2>

      <div className="mt-10 space-y-8">

        {experience.map(job => (

          <div
            key={job.company}
            className="bg-slate-800 p-8 rounded-xl"
          >

            <h3 className="text-2xl font-bold">
              {job.role}
            </h3>

            <p className="text-blue-400">
              {job.company}
            </p>

            <p className="text-slate-500 mb-4">
              {job.period}
            </p>

            <ul className="space-y-2">

              {job.description.map(item => (
                <li key={item}>
                  • {item}
                </li>
              ))}

            </ul>

          </div>

        ))}

      </div>

    </section>
  );
};

export default Experience;