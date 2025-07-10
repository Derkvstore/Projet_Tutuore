import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { siginAPI } from '../../apiCalls/auth';

function Register() {
  const { role } = useParams(); // ex: etudiant, admin, enseignant
  const navigate = useNavigate();

  const [user, setUser] = useState({
    firstname: '',
    lastname: '',
    mail: '',
    passW: '',
    confirmPassW: '',
  });

  const [error, setError] = useState('');

  const roleLabel = {
    etudiant: 'Étudiant',
    admin: 'Administrateur',
    enseignant: 'Enseignant',
  }[role] || 'Utilisateur';

  async function handleSubmit(e) {
    e.preventDefault();

    if (user.passW !== user.confirmPassW) {
      toast.error("Les mots de passe ne correspondent pas ❌");
      return;
    }

    try {
      const response = await siginAPI({ ...user, role });

      if (response.success) {
        toast.success(`Inscription ${roleLabel} réussie 🎉`);
        navigate(`/login/${role}`);
      } else {
        toast.error(response.message || 'Erreur lors de l’inscription');
      }
    } catch (err) {
      console.error(err);
      toast.error("Une erreur est survenue");
    }
  }

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4 py-10">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white shadow-lg p-6 rounded-lg grid gap-4 animate-fade-in"
      >
        <div className="text-center">
          <img
            src="/assets/logo.jpg"
            alt="Logo"
            className="mx-auto w-16 h-16 rounded-full border-2 border-blue-600 mb-4"
          />
          <h2 className="text-2xl font-bold text-blue-700">
            Inscription {roleLabel}
          </h2>
        </div>

        <input
          type="text"
          placeholder="Prénom"
          value={user.firstname}
          onChange={(e) => setUser({ ...user, firstname: e.target.value })}
          className="p-3 border rounded focus:ring focus:ring-blue-300"
          required
        />
        <input
          type="text"
          placeholder="Nom"
          value={user.lastname}
          onChange={(e) => setUser({ ...user, lastname: e.target.value })}
          className="p-3 border rounded focus:ring focus:ring-blue-300"
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={user.mail}
          onChange={(e) => setUser({ ...user, mail: e.target.value })}
          className="p-3 border rounded focus:ring focus:ring-blue-300"
          required
        />
        <input
          type="password"
          placeholder="Mot de passe"
          value={user.passW}
          onChange={(e) => setUser({ ...user, passW: e.target.value })}
          className="p-3 border rounded focus:ring focus:ring-blue-300"
          required
        />
        <input
          type="password"
          placeholder="Confirmer le mot de passe"
          value={user.confirmPassW}
          onChange={(e) => setUser({ ...user, confirmPassW: e.target.value })}
          className="p-3 border rounded focus:ring focus:ring-blue-300"
          required
        />

        <button
          type="submit"
          className="w-full bg-blue-700 text-white py-3 rounded font-semibold hover:bg-blue-800 transition"
        >
          🚀 S’inscrire
        </button>

        <p className="text-sm text-center text-gray-600 mt-2">
          Déjà inscrit ?{' '}
          <a
            href={`/login/${role}`}
            className="text-blue-600 hover:underline"
          >
            Se connecter comme {roleLabel}
          </a>
        </p>
      </form>
    </div>
  );
}

export default Register;
