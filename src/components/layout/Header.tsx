import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled ? 'py-4 bg-dark shadow-lg' : 'py-6 bg-transparent'
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        <NavLink to="/" className="font-serif text-xl md:text-2xl font-bold italic text-accent">
          faridalfais
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <NavLink
            to="/"
            className={({ isActive }) => `nav-link ${isActive ? 'active-nav-link' : ''}`}
          >
            Home
          </NavLink>
          <NavLink
            to="/About"
            className={({ isActive }) => `nav-link ${isActive ? 'active-nav-link' : ''}`}
          >
            About me
          </NavLink>
          <NavLink
            to="/Projects"
            className={({ isActive }) => `nav-link ${isActive ? 'active-nav-link' : ''}`}
          >
            Portofolio
          </NavLink>
          <NavLink
            to="/Contact"
            className={({ isActive }) => `nav-link ${isActive ? 'active-nav-link' : ''}`}
          >
            Contact
          </NavLink>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-light hover:text-accent transition-colors"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`fixed top-0 right-0 h-screen w-full bg-dark-lighter/80 backdrop-blur-sm transform transition-transform duration-300 ease-in-out z-40 md:hidden ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full justify-center items-center space-y-8 p-8">
          <NavLink
            to="/"
            className={({ isActive }) => `nav-link text-2xl ${isActive ? 'active-nav-link' : ''}`}
            onClick={closeMenu}
          >
            Home
          </NavLink>
          <NavLink
            to="/About"
            className={({ isActive }) => `nav-link text-2xl ${isActive ? 'active-nav-link' : ''}`}
            onClick={closeMenu}
          >
            About Me
          </NavLink>
          <NavLink
            to="/Projects"
            className={({ isActive }) => `nav-link text-2xl ${isActive ? 'active-nav-link' : ''}`}
            onClick={closeMenu}
          >
            Portofolio
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => `nav-link text-2xl ${isActive ? 'active-nav-link' : ''}`}
            onClick={closeMenu}
          >
            Contact
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header