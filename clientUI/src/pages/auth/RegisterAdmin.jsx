import { useState } from "react";
import toast from "react-hot-toast";
import { siginAPI } from "../../apiCalls/auth";

function RegisterAdmin() {
  const [admin, setAdmin] = useState({
    firstname: '',
    lastname: '',
    mail: '',
    passW: '',
    confirmPassW: ''
  });

  const [showPassword, setShowPassword] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    if (admin.passW !== admin.confirmPassW) {
      toast.error("Les mots de passe ne correspondent pas ❌.");
      return;
    }

    try {
      const response = await siginAPI({ ...admin, role: "admin" });

      if (response.success) {
        localStorage.setItem("token", response.token);
        toast.success("Administrateur enregistré avec succès ✅");
        window.location.href = "/AdminDashboard";
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
          Inscription Administrateur
        </h2>

        <input
          type="text"
          placeholder="Prénom"
          value={admin.firstname}
          onChange={(e) => setAdmin({ ...admin, firstname: e.target.value })}
          className="p-3 rounded-lg border border-gray-300"
          required
        />
        <input
          type="text"
          placeholder="Nom"
          value={admin.lastname}
          onChange={(e) => setAdmin({ ...admin, lastname: e.target.value })}
          className="p-3 rounded-lg border border-gray-300"
          required
        />
        <input
          type="email"
          placeholder="Adresse e-mail"
          value={admin.mail}
          onChange={(e) => setAdmin({ ...admin, mail: e.target.value })}
          className="p-3 rounded-lg border border-gray-300"
          required
        />
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Mot de passe"
          value={admin.passW}
          onChange={(e) => setAdmin({ ...admin, passW: e.target.value })}
          className="p-3 rounded-lg border border-gray-300"
          required
        />
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Confirmer mot de passe"
          value={admin.confirmPassW}
          onChange={(e) => setAdmin({ ...admin, confirmPassW: e.target.value })}
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
          <a href="/login/admin" className="text-blue-600 hover:underline">
            Connexion ici
          </a>
        </p>
      </form>
    </div>
  );
}

export default RegisterAdmin;
