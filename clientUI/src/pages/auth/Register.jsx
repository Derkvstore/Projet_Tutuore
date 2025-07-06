import { useState } from "react";
import toast from "react-hot-toast";
import { siginAPI } from "../../apiCalls/auth";

// Fonction pour formater un numéro 8 chiffres en "12 34 56 78"
function formatPhoneWithSpaces(number) {
  return number.replace(/(\d{2})(?=\d)/g, "$1 ");
}

function Register() {
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    filiere: "",
    quartier: "",
    tell: "",
    mail: "",
    passW: "",
    confirmPassW: "",
    photo: "",
    date_Naissance: "",
  });

  const [errors, setErrors] = useState({
    date_Naissance: "",
    tell: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  async function onFormSubmit(event) {
    event.preventDefault();

    let response = null;
    const newErrors = { date_Naissance: "", tell: "" };

    // Vérification des mots de passe
    if (user.passW !== user.confirmPassW) {
      toast.error("Les mots de passe ne correspondent pas ❌.");
      return;
    }

    // Vérification âge >= 14 ans
    const birthDate = new Date(user.date_Naissance);
    const today = new Date();
    const age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    const dayDiff = today.getDate() - birthDate.getDate();
    const isAtLeast14 =
      age > 14 || (age === 14 && (monthDiff > 0 || (monthDiff === 0 && dayDiff >= 0)));

    if (!isAtLeast14) {
      newErrors.date_Naissance = "Vous devez avoir au moins 14 ans.";
    }

    // Vérification téléphone : doit contenir exactement 8 chiffres
    if (user.tell.length !== 8) {
      newErrors.tell = "Le numéro doit contenir exactement 8 chiffres après +223.";
    }

    if (newErrors.date_Naissance || newErrors.tell) {
      setErrors(newErrors);
      return;
    }

    setErrors({ date_Naissance: "", tell: "" });

    try {
      response = await siginAPI(user);
      if (response.success) {
        localStorage.setItem("token", response.token);
        toast.success(response.message);
        window.location.href = "/profil";
      } else {
        toast.error(response.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  }

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4 py-6">
      <form
        onSubmit={onFormSubmit}
        className="w-full max-w-4xl bg-white text-gray-800 rounded-xl shadow-xl p-6 sm:p-8 md:p-10 grid gap-6 animate-fade-in-up"
      >
        <div className="flex justify-center">
          <img
            src="/assets/logo.jpg"
            alt="Logo Techno-Lab"
            className="w-20 h-20 rounded-full border-4 border-blue-600 shadow-md object-cover mb-4"
          />
        </div>

        <div className="text-center">
          <h1 className="text-3xl font-bold text-blue-700">TECHNO-LAB ISTA</h1>
          <p className="text-sm text-gray-500">Formulaire étudiant</p>
          <span className="mt-2 inline-block px-3 py-1 text-xs font-medium bg-yellow-400 text-blue-900 rounded-full">
            Nouveau compte
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 gap-y-2">
          <InputField
            placeholder="Prénom"
            value={user.firstname}
            onChange={(e) => setUser({ ...user, firstname: e.target.value })}
          />
          <InputField
            placeholder="Nom"
            value={user.lastname}
            onChange={(e) => setUser({ ...user, lastname: e.target.value })}
          />
          <SelectFiliere
            value={user.filiere}
            onChange={(e) => setUser({ ...user, filiere: e.target.value })}
          />
          <InputField
            placeholder="Quartier"
            value={user.quartier}
            onChange={(e) => setUser({ ...user, quartier: e.target.value })}
          />

          {/* Téléphone avec préfixe +223 et formatage */}
          <div>
            <label className="block mb-1 font-medium text-gray-700">Téléphone</label>
            <div className="flex items-center space-x-2">
              <span className="inline-block px-3 py-2 bg-gray-200 rounded-l-lg text-gray-700 select-none">
                +223
              </span>
              <input
                type="tel"
                placeholder="8 chiffres"
                value={formatPhoneWithSpaces(user.tell)}
                onChange={(e) => {
                  // Nettoyer pour garder que les chiffres, max 8
                  const val = e.target.value.replace(/\D/g, "").slice(0, 8);
                  setUser({ ...user, tell: val });
                  setErrors({ ...errors, tell: "" });
                }}
                className={`flex-1 p-3 rounded-r-lg border ${
                  errors.tell ? "border-red-500" : "border-gray-300"
                } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                required
              />
            </div>
            {errors.tell && <p className="text-red-600 text-sm mt-1">{errors.tell}</p>}
          </div>

          <InputField
            type="email"
            placeholder="Email"
            value={user.mail}
            onChange={(e) => setUser({ ...user, mail: e.target.value })}
          />

          {/* Mot de passe */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Mot de passe"
              value={user.passW}
              onChange={(e) => setUser({ ...user, passW: e.target.value })}
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-sm text-blue-700"
              onClick={() => setShowPassword(!showPassword)}
            >
              👁️
            </button>
          </div>

          {/* Confirmation mot de passe */}
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Confirmer le mot de passe"
            value={user.confirmPassW}
            onChange={(e) => setUser({ ...user, confirmPassW: e.target.value })}
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          {/* Date de naissance avec erreur */}
          <div>
            <input
              type="date"
              value={user.date_Naissance}
              onChange={(e) => setUser({ ...user, date_Naissance: e.target.value })}
              className={`w-full p-3 rounded-lg border ${
                errors.date_Naissance ? "border-red-500" : "border-gray-300"
              } focus:outline-none focus:ring-2 focus:ring-blue-500`}
              required
            />
            {errors.date_Naissance && (
              <p className="text-red-600 text-sm mt-1">{errors.date_Naissance}</p>
            )}
          </div>
        </div>

        {/* Upload photo */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Photo d'identité</label>
          <input
            type="file"
            onChange={(e) => setUser({ ...user, photo: e.target.files })}
            className="block w-full text-sm text-gray-600
              file:mr-4 file:py-2 file:px-4
              file:rounded-lg file:border-0
              file:text-sm file:font-medium
              file:bg-blue-100 file:text-blue-700
              hover:file:bg-blue-200 transition-all"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white py-3 rounded-lg font-semibold shadow-md hover:scale-105 hover:shadow-lg transition-all duration-300"
        >
          🚀 S'inscrire
        </button>

        <p className="text-center text-sm text-gray-600 mt-2">
          Déjà inscrit ?{" "}
          <a
            href="/login"
            className="text-blue-700 font-semibold hover:underline hover:text-blue-900 transition-colors"
          >
            Connectez-vous ici
          </a>
        </p>
      </form>
    </div>
  );
}

function InputField({ type = "text", placeholder, value, onChange }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
      required
    />
  );
}

function SelectFiliere({ value, onChange }) {
  return (
    <select
      value={value}
      onChange={onChange}
      required
      className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
    >
      <option value="">-- Choisir une Filière --</option>
      <option value="AP">Analyste Programmation (AP)</option>
      <option value="IG">Informatique de Gestion (IG)</option>
      <option value="Marketing">Marketing</option>
      <option value="GRH">Gestion des Ressources Humaine (GRH)</option>
      <option value="GLT">Gestion Logistique et Transport (GLT)</option>
      <option value="FBA">Banque Finance Assurance (FBA)</option>
    </select>
  );
}

export default Register;
