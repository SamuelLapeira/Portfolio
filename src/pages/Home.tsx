import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <div className="space-y-32 md:space-y-48 pb-32">
      <Hero />
      <div className="max-w-5xl mx-auto px-6 sm:px-8 space-y-32 md:space-y-48">
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </div>
  );
};

export default Home;