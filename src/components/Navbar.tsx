const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full ios-glass border-b border-gray-200 z-50">
      <div className="max-w-5xl mx-auto flex justify-between items-center h-14 px-6 sm:px-8">
        <h2 className="font-semibold text-sm tracking-tight text-[#1d1d1f] hover:text-gray-600 transition-colors duration-200">
          <a href="#">Samuel Lapeira</a>
        </h2>

        <nav className="hidden sm:block mb-3">
          <ul className="flex gap-7 text-xs font-medium text-[#86868b]">
            {["about", "skills", "experience", "projects", "contact"].map((item) => (
              <li key={item}>
                <a 
                  href={`#${item}`} 
                  className="capitalize hover:text-[#1d1d1f] transition-colors duration-200"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;