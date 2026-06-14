import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="scroll-mt-24 text-center max-w-xl mx-auto py-12">
      <p className="text-xs font-semibold tracking-widest uppercase text-[#86868b] mb-3">
        Connect
      </p>
      <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#1d1d1f] mb-4">
        Get In Touch
      </h2>
      <p className="text-[#86868b] font-normal text-base sm:text-lg tracking-tight mb-10">
        I am currently open to new opportunities. Let's talk.
      </p>

      <div className="flex justify-center gap-5">
        {[
          { icon: <FaEnvelope />, href: "mailto:samuellapeira333@gmail.com" },
          { icon: <FaGithub />, href: "https://github.com/SamuelLapeira" },
          { icon: <FaLinkedin />, href: "#" },
        ].map((platform, index) => (
          <a
            key={index}
            href={platform.href}
            target={platform.href.startsWith("http") ? "_blank" : undefined}
            rel="noopener noreferrer"
            className="flex items-center justify-center w-14 h-14 bg-white hover:bg-[#f5f5f7] border border-gray-200 rounded-full text-[#1d1d1f] transition-all duration-200 text-xl shadow-sm"
          >
            {platform.icon}
          </a>
        ))}
      </div>
    </section>
  );
};

export default Contact;