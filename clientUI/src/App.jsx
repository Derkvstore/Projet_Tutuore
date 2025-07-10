import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Layouts & composants
import Layout from "./pages/layout";
import CenteredLayout from "./pages/layout/CenteredLayout"; // Optionnel si utilisé
import Protected_Route from "./components/protected_Route";

// Pages générales
import Home from "./pages/Home";
import MainContent from "./pages/components/mainContent";
import NotFound from "./pages/NotFound";
import Confidentialite from "./pages/Confidentialite";
import Filieres from "./pages/Filieres";

// Choix Connexion / Inscription
import ChoixConnexion from "./pages/auth/ChoixConnexion";
import ChoixInscription from "./pages/auth/ChoixInscription";

// Connexion dynamique (un seul composant gère les 3 rôles)
import Login from "./pages/auth/Login";

// Inscriptions personnalisées
import RegisterEtudiant from "./pages/auth/RegisterEtudiant";
import RegisterAdmin from "./pages/auth/RegisterAdmin";
import RegisterEnseignant from "./pages/auth/RegisterEnseignant";

// Dashboards
import AdminDashboard from "./pages/AdminDashboard";
import StudentDashboard from "./pages/StudentDashboard";
import EnseignantDashboard from "./pages/EnseignantDashboard";

// ✅ Router configuration
const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        element: <Home />,
        children: [
          { path: "/", element: <MainContent /> },
          {
            path: "/profil",
            element: (
              <Protected_Route>
                <MainContent />
              </Protected_Route>
            ),
          },
          { path: "/filieres", element: <Filieres /> },
          {
            path: "/politique-confidentialite",
            element: <Confidentialite />,
          },
        ],
      },

      // Choix de connexion / inscription
      { path: "/login", element: <ChoixConnexion /> },
      { path: "/register", element: <ChoixInscription /> },

      // Connexion dynamique selon rôle (1 seul composant)
      { path: "/login/:role", element: <Login /> },

      // Inscription par rôle (3 composants séparés)
      { path: "/register/etudiant", element: <RegisterEtudiant /> },
      { path: "/register/admin", element: <RegisterAdmin /> },
      { path: "/register/enseignant", element: <RegisterEnseignant /> },

      // Dashboards sécurisés (protégés)
      {
        path: "/AdminDashboard",
        element: (
          <Protected_Route>
            <AdminDashboard />
          </Protected_Route>
        ),
      },
      {
        path: "/StudentDashboard",
        element: (
          <Protected_Route>
            <StudentDashboard />
          </Protected_Route>
        ),
      },
      {
        path: "/EnseignantDashboard",
        element: (
          <Protected_Route>
            <EnseignantDashboard />
          </Protected_Route>
        ),
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
