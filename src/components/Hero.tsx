import { motion } from "framer-motion";
// 1. Importas la foto aquí arriba dándole un nombre (por ejemplo: fotoPerfil)
import fotoPerfil from "../assets/foto.jpg"; 

const Hero = () => {
  return (
    <section className="min-h-[85vh] flex flex-col items-center justify-center text-center px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col items-center max-w-3xl space-y-8"
      >
        {/* Imagen de Perfil */}
        <div className="relative">
          {/* 2. Pasas la variable entre llaves en lugar de la cadena de texto */}
          <img 
            src={fotoPerfil} 
            alt="Samuel Lapeira Pérez" 
            className="w-40 h-40 md:w-56 md:h-76 rounded-[2.5rem] object-cover shadow-sm border border-gray-200"
          />
        </div>

        <div className="space-y-4">
          <h1 className="text-5xl sm:text-7xl font-bold tracking-tight text-[#1d1d1f] leading-none">
            Samuel Lapeira Pérez
          </h1>
          <p className="text-[#86868b] text-xl sm:text-2xl font-normal max-w-2xl mx-auto leading-tight tracking-tight">
            Full Stack Developer. <br className="hidden sm:inline" />
            <span className="text-[#1d1d1f] font-medium">Desarrollo de Experiencias fluidas</span> y arquitecturas escalables.
        </p>
        </div>

        <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center items-center text-sm font-medium tracking-tight w-full sm:w-auto">
          <a
            href="#projects"
            className="w-full sm:w-auto bg-[#1d1d1f] hover:bg-black text-white px-8 py-3.5 rounded-full transition-colors duration-200 shadow-sm"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="w-full sm:w-auto bg-[#f5f5f7] hover:bg-[#e5e5ea] text-[#1d1d1f] px-8 py-3.5 rounded-full transition-colors duration-200"
          >
            Contact Me
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;