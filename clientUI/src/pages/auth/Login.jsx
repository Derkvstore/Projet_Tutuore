import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Importez useNavigate
import { loginAPI } from '../../apiCalls/auth';
import toast from 'react-hot-toast';

function Login() {
  const { role } = useParams();
  const navigate = useNavigate(); // Initialisez le hook

  let [user, setUser] = useState({
    mail: '',
    passW: '',
  });

  async function handleLogin(e) {
    e.preventDefault();
    let response = null;

    try {
      response = await loginAPI({ ...user, role });

      if (response.success) {
        // Stockez le token ET le rôle de l'utilisateur
        localStorage.setItem('token', response.token);
        localStorage.setItem('userRole', role); // <-- Stockez le rôle ici
        toast.success(`${role ? role.toUpperCase() : ''} connecté avec succès ✅`);
        
        // Redirigez TOUJOURS vers la page d'accueil '/'
        navigate('/'); 
      } else {
        toast.error(response.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  }

  const roleLabel = {
    etudiant: "Étudiant",
    admin: "Administrateur",
    enseignant: "Enseignant",
  }[role] || "Utilisateur";

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4 py-10">
      <form
        onSubmit={handleLogin}
        className="w-full max-w-md bg-white text-gray-800 rounded-xl shadow-xl p-6 grid gap-6"
      >
        {/* ✅ Logo en haut */}
        <div className="flex justify-center mt-4">
          <img
            src="/assets/logo.jpg"
            alt="Logo"
            className="w-20 h-20 rounded-full border-4 border-blue-600 shadow-md object-cover"
          />
        </div>

        <h2 className="text-2xl font-bold text-center text-blue-700">Connexion {roleLabel}</h2>

        <input
          type="email"
          placeholder="Adresse e-mail"
          value={user.mail}
          onChange={(e) => setUser({ ...user, mail: e.target.value })}
          className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500"
          required
        />

        <input
          type="password"
          placeholder="Mot de passe"
          value={user.passW}
          onChange={(e) => setUser({ ...user, passW: e.target.value })}
          className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500"
          required
        />

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white py-3 rounded-lg font-semibold hover:scale-105 transition-all duration-300"
        >
          🚪 Se connecter
        </button>

        <p className="text-center text-sm text-gray-600">
          Vous n'avez pas de compte ?{' '}
          <a
            href={`/register/${role}`}
            className="text-blue-700 font-semibold hover:underline"
          >
            S’inscrire comme {roleLabel}
          </a>
        </p>
      </form>
    </div>
  );
}

export default Login;