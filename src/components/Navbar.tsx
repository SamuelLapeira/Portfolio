const Navbar = () => {
  return (
    <header className="fixed w-full bg-slate-950/80 backdrop-blur-md z-50">

      <div className="max-w-6xl mx-auto flex justify-between items-center p-5">

        <h2 className="font-bold text-xl">
          Samuel Lapeira
        </h2>

        <nav>
          <ul className="flex gap-6">

            <li>
              <a href="#about">About</a>
            </li>

            <li>
              <a href="#skills">Skills</a>
            </li>

            <li>
              <a href="#experience">Experience</a>
            </li>

            <li>
              <a href="#projects">Projects</a>
            </li>

            <li>
              <a href="#contact">Contact</a>
            </li>

          </ul>
        </nav>

      </div>

    </header>
  );
};

export default Navbar;