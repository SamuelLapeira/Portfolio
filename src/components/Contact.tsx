import {
  FaGithub,
  FaLinkedin,
  FaEnvelope
} from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="section"
    >
      <h2 className="text-4xl font-bold">
        Contact
      </h2>

      <div className="mt-8 flex gap-8 text-3xl">

        <a href="mailto:samuellapeira333@gmail.com">
          <FaEnvelope />
        </a>

        <a
          href="https://github.com/SamuelLapeira"
          target="_blank"
        >
          <FaGithub />
        </a>

        <a
          href="#"
          target="_blank"
        >
          <FaLinkedin />
        </a>

      </div>

    </section>
  );
};

export default Contact;