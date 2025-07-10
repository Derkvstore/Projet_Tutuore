import { useState } from "react";
import toast from "react-hot-toast";
import { siginAPI } from "../../apiCalls/auth";

function RegisterEtudiant() {
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

  const [showPassword, setShowPassword] = useState(false);

  async function onFormSubmit(event) {
    event.preventDefault();

    if (user.passW !== user.confirmPassW) {
      toast.error("Les mots de passe ne correspondent pas ❌");
      return;
    }

    const formData = new FormData();
    Object.entries(user).forEach(([key, value]) => {
      if (key !== "confirmPassW") {
        formData.append(key, value);
      }
    });

    try {
      const response = await siginAPI({ ...user, role: "etudiant" });

      if (response.success) {
        localStorage.setItem("token", response.token);
        toast.success(response.message);
        window.location.href = "/StudentDashboard";
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
          <InputField placeholder="Prénom" value={user.firstname} onChange={(e) => setUser({ ...user, firstname: e.target.value })} />
          <InputField placeholder="Nom" value={user.lastname} onChange={(e) => setUser({ ...user, lastname: e.target.value })} />
          <SelectFiliere value={user.filiere} onChange={(e) => setUser({ ...user, filiere: e.target.value })} />
          <InputField placeholder="Quartier" value={user.quartier} onChange={(e) => setUser({ ...user, quartier: e.target.value })} />
          <InputField type="tel" placeholder="Téléphone" value={user.tell} onChange={(e) => setUser({ ...user, tell: e.target.value })} />
          <InputField type="email" placeholder="Email" value={user.mail} onChange={(e) => setUser({ ...user, mail: e.target.value })} />

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

          <input
            type={showPassword ? "text" : "password"}
            placeholder="Confirmer le mot de passe"
            value={user.confirmPassW}
            onChange={(e) => setUser({ ...user, confirmPassW: e.target.value })}
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <InputField type="date" onChange={(e) => setUser({ ...user, date_Naissance: e.target.value })} />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Photo d'identité</label>
          <input
            type="file"
            onChange={(e) => setUser({ ...user, photo: e.target.files[0] })}
            className="block w-full text-sm text-gray-600
            file:mr-4 file:py-2 file:px-4
            file:rounded-lg file:border-0
            file:text-sm file:font-medium
            file:bg-blue-100 file:text-blue-700
            hover:file:bg-blue-200 transition-all"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white py-3 rounded-lg font-semibold shadow-md hover:scale-105 hover:shadow-lg transition-all duration-300"
        >
          🚀 S'inscrire
        </button>

        <p className="text-center text-sm text-gray-600 mt-2">
          Déjà inscrit ?{" "}
          <a
            href="/login/etudiant"
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
      <option value="GRH">Gestion RH</option>
      <option value="GLT">Logistique & Transport</option>
      <option value="FBA">Banque Finance Assurance</option>
    </select>
  );
}

export default RegisterEtudiant;
