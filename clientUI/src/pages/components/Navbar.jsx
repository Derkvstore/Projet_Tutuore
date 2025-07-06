import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaSignInAlt, FaUserPlus, FaShieldAlt } from 'react-icons/fa';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50 animate-fade-in">
      <nav className="container mx-auto px-4 py-3 flex items-center justify-between flex-wrap">
        {/* Logo + Nom */}
        <div className="flex items-center gap-3">
          <img
            src="/assets/logo.jpg"
            alt="Logo Techno-Lab"
            className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border-2 border-blue-600 shadow-md object-cover"
          />
          <span className="text-xl sm:text-2xl md:text-3xl font-extrabold uppercase tracking-wide text-blue-700">
            Techno-Lab ISTA
          </span>
        </div>

        {/* Burger menu */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-blue-700 hover:text-blue-900 transition"
            aria-label="Toggle menu"
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Menu lien */}
        <ul
          className={`w-full md:w-auto md:flex md:items-center gap-6 mt-4 md:mt-0 text-sm font-medium transition-all duration-300 ease-in-out ${
            isOpen ? 'block' : 'hidden md:flex'
          }`}
        >
          <li className="text-center md:text-left">
            <Link
              to="/"
              className="flex items-center gap-2 py-2 px-4 rounded hover:bg-blue-100 hover:text-blue-800 transition duration-200"
            >
              <FaHome /> Accueil
            </Link>
          </li>
          <li className="text-center md:text-left">
            <Link
              to="/login"
              className="flex items-center gap-2 py-2 px-4 rounded hover:bg-blue-100 hover:text-blue-800 transition duration-200"
            >
              <FaSignInAlt /> Connexion
            </Link>
          </li>
          <li className="text-center md:text-left">
            <Link
              to="/register"
              className="flex items-center gap-2 py-2 px-4 rounded hover:bg-blue-100 hover:text-blue-800 transition duration-200"
            >
              <FaUserPlus /> Inscription
            </Link>
          </li>

          {/* Politique de confidentialité */}
          <li className="text-center md:text-left">
            <Link
              to="/politique-confidentialite"
              className="flex items-center gap-2 py-2 px-4 rounded hover:bg-blue-100 hover:text-blue-800 transition duration-200"
            >
              <FaShieldAlt /> Confidentialité
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
