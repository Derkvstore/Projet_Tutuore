import { useState } from "react";
import toast from "react-hot-toast";
import { siginAPI } from "../../apiCalls/auth";
import { useNavigate } from 'react-router-dom'; // ✅ Ajout : Import de useNavigate

function RegisterEnseignant() {
  const navigate = useNavigate(); // ✅ Ajout : Initialisation de useNavigate

  const [teacher, setTeacher] = useState({
    firstname: '',
    lastname: '',
    specialite: '',
    mail: '',
    passW: '',
    confirmPassW: ''
  });

  const [showPassword, setShowPassword] = useState(false); // Bien que non utilisé, gardé si future implémentation

  async function handleSubmit(e) {
    e.preventDefault();

    if (teacher.passW !== teacher.confirmPassW) {
      toast.error("Les mots de passe ne correspondent pas ❌.");
      return;
    }

    try {
      const response = await siginAPI({ ...teacher, role: "enseignant" });

      if (response.success) {
        // ❌ CORRECTION : Suppression du stockage du token ici. 
        // Le token est obtenu lors de la CONNEXION, pas de l'inscription.
        // localStorage.setItem("token", response.token); 

        toast.success("Enseignant enregistré avec succès ✅. Veuillez vous connecter.");
        // ✅ CORRECTION : Utilisation de useNavigate pour la redirection SPA
        navigate("/login/enseignant"); 
      } else {
        toast.error(response.message);
      }
    } catch (err) {
      toast.error(err.message);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4 py-10">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-white p-6 rounded-xl shadow-xl grid gap-5"
      >
        <div className="flex justify-center">
          <img
            src="/assets/logo.jpg"
            alt="Logo"
            className="w-20 h-20 rounded-full border-4 border-blue-600 shadow-md object-cover"
          />
        </div>

        <h2 className="text-2xl text-center font-bold text-blue-700">
          Inscription Enseignant
        </h2>

        <input
          type="text"
          placeholder="Prénom"
          value={teacher.firstname}
          onChange={(e) => setTeacher({ ...teacher, firstname: e.target.value })}
          className="p-3 rounded-lg border border-gray-300"
          required
        />
        <input
          type="text"
          placeholder="Nom"
          value={teacher.lastname}
          onChange={(e) => setTeacher({ ...teacher, lastname: e.target.value })}
          className="p-3 rounded-lg border border-gray-300"
          required
        />
        <input
          type="text"
          placeholder="Spécialité"
          value={teacher.specialite}
          onChange={(e) => setTeacher({ ...teacher, specialite: e.target.value })}
          className="p-3 rounded-lg border border-gray-300"
          required
        />
        <input
          type="email"
          placeholder="Adresse e-mail"
          value={teacher.mail}
          onChange={(e) => setTeacher({ ...teacher, mail: e.target.value })}
          className="p-3 rounded-lg border border-gray-300"
          required
        />
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Mot de passe"
          value={teacher.passW}
          onChange={(e) => setTeacher({ ...teacher, passW: e.target.value })}
          className="p-3 rounded-lg border border-gray-300"
          required
        />
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Confirmer mot de passe"
          value={teacher.confirmPassW}
          onChange={(e) => setTeacher({ ...teacher, confirmPassW: e.target.value })}
          className="p-3 rounded-lg border border-gray-300"
          required
        />

        <button
          type="submit"
          className="bg-blue-700 text-white py-3 rounded-lg font-semibold hover:scale-105 transition"
        >
          🚀 Créer le compte
        </button>

        <p className="text-center text-sm text-gray-600">
          Déjà un compte ?{" "}
          <a href="/login/enseignant" className="text-blue-600 hover:underline">
            Connexion ici
          </a>
        </p>
      </form>
    </div>
  );
}

export default RegisterEnseignant;