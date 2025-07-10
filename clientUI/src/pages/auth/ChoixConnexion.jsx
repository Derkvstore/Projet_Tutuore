import { useNavigate } from 'react-router-dom';
import { FaUserGraduate, FaUserShield, FaChalkboardTeacher } from 'react-icons/fa';

function ChoixConnexion() {
  const navigate = useNavigate();

  const options = [
    {
      label: 'Étudiant',
      path: '/login/etudiant',
      icon: <FaUserGraduate className="text-4xl text-blue-700" />,
      bg: 'bg-blue-100 hover:bg-blue-200',
    },
    {
      label: 'Administrateur',
      path: '/login/admin',
      icon: <FaUserShield className="text-4xl text-green-700" />,
      bg: 'bg-green-100 hover:bg-green-200',
    },
    {
      label: 'Enseignant',
      path: '/login/enseignant',
      icon: <FaChalkboardTeacher className="text-4xl text-yellow-600" />,
      bg: 'bg-yellow-100 hover:bg-yellow-200',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-white via-blue-50 to-white px-4 py-10">
      <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-blue-800 text-center">
        Choisissez votre type de connexion
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl px-4">
        {options.map((opt, index) => (
          <div
            key={index}
            onClick={() => navigate(opt.path)}
            className={`cursor-pointer ${opt.bg} rounded-xl shadow-md p-6 flex flex-col items-center text-center transition-all duration-300 transform hover:scale-105`}
          >
            {opt.icon}
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mt-3">{opt.label}</h3>
            <p className="text-sm text-gray-600 mt-1">Cliquez pour continuer</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ChoixConnexion;
