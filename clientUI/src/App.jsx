import { createBrowserRouter, RouterProvider, } from 'react-router-dom'

import Home from './pages/Home'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import AdminDashboard from './pages/AdminDashboard'
import StudentDashboard from './pages/StudentDashboard'
import NotFound from './pages/NotFound'
import Layout from './pages/layout'
import MainContent from './pages/components/mainContent'
import Protected_Route from './components/protected_Route'
// Ajouter @Kader
import Confidentialite from './pages/Confidentialite';
import Filieres from './pages/Filieres';

// Nous avons creer notre router
const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        element: <Home />,
        children: [
          {
            path: '/',
            element: <MainContent />
          },
          {
            path: '/profil',
            element: <Protected_Route><MainContent /></Protected_Route>
          },

          // Ajout de la page Dashboard Admin

          {
            path: '/AdminDashboard',
            element: <AdminDashboard/>
          },

          // Ajout de la page Filiere et emploi du temps 

          {
            path: '/filieres',
            element: <Filieres />
            },

          // Ajout de la page Polique Confidentialite
          {
            path: '/politique-confidentialite',  
            element: <Confidentialite />
          }
        ]
        
      },
      {
        path: '/register',
        element: <Register />
      },
      {
        path: '/login',
        element: <Login />
      }
    ]
  }
]);


function App() {
    return <>
        <RouterProvider router={router} />
    </>

    
}

export default App;