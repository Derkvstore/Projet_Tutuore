import { useState, useEffect } from 'react'; // Importez useEffect
import { Link, useNavigate } from 'react-router-dom'; // Importez useNavigate
import { FaHome, FaSignInAlt, FaUserPlus, FaShieldAlt, FaTachometerAlt, FaSignOutAlt } from 'react-icons/fa'; // Nouvelles icônes
import toast from 'react-hot-toast'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState(null);
  const navigate = useNavigate(); // Initialisez le hook de navigation

  // Utilisez useEffect pour vérifier l'état de connexion et le rôle au chargement du composant
  useEffect(() => {
    const token = localStorage.getItem('token');
    const role = localStorage.getItem('userRole');
    if (token && role) {
      setIsLoggedIn(true);
      setUserRole(role);
    } else {
      setIsLoggedIn(false);
      setUserRole(null);
    }

    // Ajoutez un écouteur pour les changements dans localStorage (par exemple, déconnexion ailleurs)
    const handleStorageChange = () => {
      const updatedToken = localStorage.getItem('token');
      const updatedRole = localStorage.getItem('userRole');
      setIsLoggedIn(!!updatedToken);
      setUserRole(updatedRole);
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []); // Le tableau vide assure que l'effet ne s'exécute qu'une fois au montage

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userRole');
    setIsLoggedIn(false);
    setUserRole(null);
    toast.success("Déconnexion réussie ! 👋");
    navigate('/'); // Rediriger vers la page d'accueil après déconnexion
  };

  // Déterminez le chemin du tableau de bord en fonction du rôle
  const dashboardPath = userRole 
    ? `/${userRole}Dashboard` 
    : '/'; // Fallback au cas où

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
         <span className="text-base sm:text-lg md:text-xl font-extrabold uppercase tracking-wide text-blue-600">
            Institut Supérieur de Technologies Appliquées
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
          
          {/* Afficher ces liens si l'utilisateur N'EST PAS connecté */}
          {!isLoggedIn && (
            <>
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
            </>
          )}

          {/* Afficher ces liens si l'utilisateur EST connecté */}
          {isLoggedIn && (
            <>
              // ...
              <li className="text-center md:text-left">
                <Link
                  to={dashboardPath} // Le commentaire est maintenant à l'extérieur des accolades
                  className="flex items-center gap-2 py-2 px-4 rounded hover:bg-blue-100 hover:text-blue-800 transition duration-200"
                >
                  <FaTachometerAlt /> Mon Tableau de Bord
                </Link>
              </li>

              <li className="text-center md:text-left">
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-2 py-2 px-4 rounded hover:bg-red-100 hover:text-red-800 transition duration-200 w-full"
                  aria-label="Déconnexion"
                >
                  <FaSignOutAlt /> Se déconnecter
                </button>
              </li>
            </>
          )}

          {/* Politique de confidentialité (toujours visible) */}
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