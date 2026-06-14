import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center">

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <h1 className="text-6xl font-bold">
          Full Stack Developer
        </h1>

        <p className="mt-6 text-slate-400 text-xl">
          Building scalable web applications
          with React and TypeScript.
        </p>

        <div className="mt-8 flex gap-4">
          <a
            href="#projects"
            className="bg-blue-500 px-6 py-3 rounded-lg"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="border px-6 py-3 rounded-lg"
          >
            Contact
          </a>
        </div>
      </motion.div>

    </section>
  );
};

export default Hero;