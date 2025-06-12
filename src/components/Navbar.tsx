export default function Navbar() {
    return (
      <nav className="w-full py-4 px-6 bg-[#0f172a]/90 backdrop-blur-md text-white fixed top-0 z-50 shadow-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold tracking-wide">SINA Studio</h1>
          <div className="space-x-6 text-sm md:text-base">
            <a href="#services" className="hover:underline">Services</a>
            <a href="#portfolio" className="hover:underline">Portfolio</a>
            <a href="#testimonials" className="hover:underline">Testimonials</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </div>
        </div>
      </nav>
    );
  }
  