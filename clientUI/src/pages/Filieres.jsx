import React, { useState, useEffect } from 'react';

// Définition des plages horaires des cours
const horaires = ['8h - 10h', '10h30 - 12h30', '12h15 - 14h15'];
// Définition des jours de la semaine
const jours = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];

// Structure des emplois du temps par filière, année et semestre
const emploiParFiliere = {
  AP: { // Filière Analyse et Programmation
    "1ère année": {
      "Semestre 1": [
        [{ matiere: 'SGBD / SQL', professeur: 'Mr Camara', numero: '+223' }, { matiere: 'Recherche Opérationnelle', professeur: '', numero: '+223' }, { matiere: 'Réact', professeur: '', numero: '+223' }, { matiere: 'HTML/CSS/JS', professeur: '', numero: '+223' }, null, null],
        [{ matiere: 'Théorie des Graphes', professeur: '', numero: '+223' }, { matiere: 'Projet tutoré', professeur: '', numero: '+223' }, { matiere: 'Réseaux Info', professeur: '', numero: '+223' }, { matiere: 'Java Swing', professeur: '', numero: '+223' }, null, null],
        [null, null, null, { matiere: 'PHP 1', professeur: '', numero: '+223' }, { matiere: 'CMS', professeur: '', numero: '+223' }, null]
      ],
      "Semestre 2": [
        [{ matiere: 'Algorithmique Avancée', professeur: 'Mme Traoré', numero: '+223' }, { matiere: 'POO C++', professeur: 'Mr Diallo', numero: '+223' }, null, null, null, null],
        [{ matiere: 'Base de Données II', professeur: 'Mr Keita', numero: '+223' }, null, { matiere: 'Développement Web II', professeur: 'Mme Coulibaly', numero: '+223' }, null, null, null],
        [null, null, null, null, null, null]
      ]
    },
    "2ᵉ année": {
      "Semestre 3": [
        [{ matiere: 'POO', professeur: '', numero: '+223' }, { matiere: 'UML', professeur: '', numero: '+223' }, null, { matiere: 'JavaFX', professeur: '', numero: '+223' }, null, null],
        [{ matiere: 'Bases de données avancées', professeur: '', numero: '+223' }, null, null, { matiere: 'Dev mobile', professeur: '', numero: '+223' }, null, null],
        [null, null, null, { matiere: 'Spring Boot', professeur: '', numero: '+223' }, null, null]
      ],
      "Semestre 4": [
        [{ matiere: 'Cloud Computing', professeur: '', numero: '+223' }, { matiere: 'Sécurité Réseaux', professeur: '', numero: '+223' }, null, null, null, null],
        [null, { matiere: 'Big Data Fondamentaux', professeur: '', numero: '+223' }, null, null, null, null],
        [null, null, null, null, null, null]
      ]
    },
    "3ᵉ année": {
      "Semestre 5": [
        [{ matiere: 'IA', professeur: '', numero: '+223' }, { matiere: 'Big Data', professeur: '', numero: '+223' }, null, { matiere: 'DevOps', professeur: '', numero: '+223' }, null, null],
        [{ matiere: 'Projet Fin d’étude', professeur: '', numero: '+223' }, null, null, null, null, null],
        [null, null, null, null, null, null]
      ],
      "Semestre 6": [
        [null, null, null, null, null, null],
        [null, null, null, null, null, null],
        [null, null, null, null, null, null]
      ]
    }
  },

  IG: { // Filière Ingénierie Logicielle
    "1ère année": {
      "Semestre 1": [
        [{ matiere: 'Comptabilité', professeur: '', numero: '+223' }, { matiere: 'Analyse financière', professeur: '', numero: '+223' }, null, { matiere: 'HTML/CSS/JS', professeur: '', numero: '+223' }, null, null],
        [{ matiere: 'Systèmes Info', professeur: '', numero: '+223' }, { matiere: 'Projet tutoré', professeur: '', numero: '+223' }, { matiere: 'Réseaux Info', professeur: '', numero: '+223' }, { matiere: 'Java Swing', professeur: '', numero: '+223' }, null, null],
        [null, null, null, null, { matiere: 'CMS', professeur: '', numero: '+223' }, null]
      ],
      "Semestre 2": [
        [{ matiere: 'Introduction au Droit', professeur: '', numero: '+223' }, { matiere: 'Statistiques', professeur: '', numero: '+223' }, null, null, null, null],
        [{ matiere: 'Base de Données', professeur: '', numero: '+223' }, null, { matiere: 'Web Dynamique', professeur: '', numero: '+223' }, null, null, null],
        [null, null, null, null, null, null]
      ]
    },
    "2ᵉ année": {
      "Semestre 3": [
        [{ matiere: 'Audit SI', professeur: '', numero: '+223' }, null, null, { matiere: 'Java EE', professeur: '', numero: '+223' }, null, null],
        [{ matiere: 'SQL Server', professeur: '', numero: '+223' }, null, null, null, null, null],
        [null, null, null, { matiere: 'Angular', professeur: '', numero: '+223' }, null, null]
      ],
      "Semestre 4": [
        [{ matiere: 'Gestion de Projet', professeur: '', numero: '+223' }, { matiere: 'Sécurité des SI', professeur: '', numero: '+223' }, null, null, null, null],
        [{ matiere: 'Développement Mobile', professeur: '', numero: '+223' }, null, null, null, null, null],
        [null, null, null, null, null, null]
      ]
    },
    "3ᵉ année": {
      "Semestre 5": [
        [{ matiere: 'Data Mining', professeur: '', numero: '+223' }, null, null, { matiere: 'BI', professeur: '', numero: '+223' }, null, null],
        [{ matiere: 'Projet Fin d’étude', professeur: '', numero: '+223' }, null, null, null, null, null],
        [null, null, null, null, null, null]
      ],
      "Semestre 6": [
        [null, null, null, null, null, null],
        [null, null, null, null, null, null],
        [null, null, null, null, null, null]
      ]
    }
  },

  Marketing: { // Filière Marketing
    "1ère année": {
      "Semestre 1": [
        [{ matiere: 'Stratégie Marketing', professeur: '', numero: '+223' }, null, null, { matiere: 'Communication', professeur: '', numero: '+223' }, null, null],
        [{ matiere: 'Étude de Marché', professeur: '', numero: '+223' }, null, null, null, null, null],
        [null, null, null, null, null, null]
      ],
      "Semestre 2": [
        [{ matiere: 'Comportement du Consommateur', professeur: '', numero: '+223' }, null, null, null, null, null],
        [{ matiere: 'Fondamentaux de la Vente', professeur: '', numero: '+223' }, null, null, null, null, null],
        [null, null, null, null, null, null]
      ]
    },
    "2ᵉ année": {
      "Semestre 3": [
        [{ matiere: 'Marketing Digital', professeur: '', numero: '+223' }, null, null, null, null, null],
        [{ matiere: 'CRM', professeur: '', numero: '+223' }, null, null, null, null, null],
        [null, null, null, null, null, null]
      ],
      "Semestre 4": [
        [{ matiere: 'Brand Management', professeur: '', numero: '+223' }, null, null, null, null, null],
        [{ matiere: 'E-commerce', professeur: '', numero: '+223' }, null, null, null, null, null],
        [null, null, null, null, null, null]
      ]
    },
    "3ᵉ année": {
      "Semestre 5": [
        [{ matiere: 'Stratégie de marque', professeur: '', numero: '+223' }, null, null, null, null, null],
        [{ matiere: 'Projet Marketing', professeur: '', numero: '+223' }, null, null, null, null, null],
        [null, null, null, null, null, null]
      ],
      "Semestre 6": [
        [null, null, null, null, null, null],
        [null, null, null, null, null, null],
        [null, null, null, null, null, null]
      ]
    }
  },

  GRH: { // Filière Gestion des Ressources Humaines
    "1ère année": {
      "Semestre 1": [
        [{ matiere: 'Gestion RH', professeur: '', numero: '+223' }, null, null, { matiere: 'Droit du travail', professeur: '', numero: '+223' }, null, null],
        [{ matiere: 'Psychologie du travail', professeur: '', numero: '+223' }, null, null, null, null, null],
        [null, null, null, null, null, null],
      ],
      "Semestre 2": [
        [{ matiere: 'Sociologie des Organisations', professeur: '', numero: '+223' }, null, null, null, null, null],
        [{ matiere: 'Comptabilité Générale', professeur: '', numero: '+223' }, null, null, null, null, null],
        [null, null, null, null, null, null],
      ]
    },
    "2ᵉ année": {
      "Semestre 3": [
        [{ matiere: 'Recrutement', professeur: '', numero: '+223' }, { matiere: 'Organisation', professeur: '', numero: '+223' }, null, { matiere: 'Conflit & Médiation', professeur: '', numero: '+223' }, null, null],
        [{ matiere: 'Gestion des compétences', professeur: '', numero: '+223' }, null, null, null, null, null],
        [null, null, null, null, null, null],
      ],
      "Semestre 4": [
        [{ matiere: 'Formation et Développement', professeur: '', numero: '+223' }, null, null, null, null, null],
        [{ matiere: 'Gestion de la Rémunération', professeur: '', numero: '+223' }, null, null, null, null, null],
        [null, null, null, null, null, null],
      ]
    },
    "3ᵉ année": {
      "Semestre 5": [
        [{ matiere: 'Stratégie RH', professeur: '', numero: '+223' }, { matiere: 'Dialogue social', professeur: '', numero: '+223' }, null, null, null, null],
        [{ matiere: 'Projet RH', professeur: '', numero: '+223' }, null, null, null, null, null],
        [null, null, null, null, null, null],
      ],
      "Semestre 6": [
        [null, null, null, null, null, null],
        [null, null, null, null, null, null],
        [null, null, null, null, null, null],
      ]
    }
  },

  GLT: { // Filière Gestion Logistique et Transport
    "1ère année": {
      "Semestre 1": [
        [{ matiere: 'Gestion Stocks', professeur: '', numero: '+223' }, null, null, { matiere: 'Transport', professeur: '', numero: '+223' }, null, null],
        [{ matiere: 'Logistique urbaine', professeur: '', numero: '+223' }, null, null, null, null, null],
        [null, null, null, null, null, null],
      ],
      "Semestre 2": [
        [{ matiere: 'Approvisionnement', professeur: '', numero: '+223' }, null, null, null, null, null],
        [{ matiere: 'Distribution', professeur: '', numero: '+223' }, null, null, null, null, null],
        [null, null, null, null, null, null],
      ]
    },
    "2ᵉ année": {
      "Semestre 3": [
        [{ matiere: 'Supply Chain', professeur: '', numero: '+223' }, { matiere: 'ERP', professeur: '', numero: '+223' }, null, null, null, null],
        [{ matiere: 'Douane & commerce', professeur: '', numero: '+223' }, null, null, null, null, null],
        [null, null, null, null, null, null],
      ],
      "Semestre 4": [
        [{ matiere: 'Optimisation Logistique', professeur: '', numero: '+223' }, null, null, null, null, null],
        [{ matiere: 'Gestion d\'Entrepôt', professeur: '', numero: '+223' }, null, null, null, null, null],
        [null, null, null, null, null, null],
      ]
    },
    "3ᵉ année": {
      "Semestre 5": [
        [{ matiere: 'Stratégie logistique', professeur: '', numero: '+223' }, null, null, null, null, null],
        [{ matiere: 'Projet GLT', professeur: '', numero: '+223' }, null, null, null, null, null],
        [null, null, null, null, null, null],
      ],
      "Semestre 6": [
        [null, null, null, null, null, null],
        [null, null, null, null, null, null],
        [null, null, null, null, null, null],
      ]
    }
  },

  FBA: { // Filière Finance Banque Assurance
    "1ère année": {
      "Semestre 1": [
        [{ matiere: 'Économie Générale', professeur: '', numero: '+223' }, null, null, { matiere: 'Assurance', professeur: '', numero: '+223' }, null, null],
        [{ matiere: 'Maths Financières', professeur: '', numero: '+223' }, null, null, null, null, null],
        [null, null, null, null, null, null],
      ],
      "Semestre 2": [
        [{ matiere: 'Droit Bancaire', professeur: '', numero: '+223' }, null, null, null, null, null],
        [{ matiere: 'Microéconomie', professeur: '', numero: '+223' }, null, null, null, null, null],
        [null, null, null, null, null, null],
      ]
    },
    "2ᵉ année": {
      "Semestre 3": [
        [{ matiere: 'Statistiques', professeur: '', numero: '+223' }, { matiere: 'Finance de Marché', professeur: '', numero: '+223' }, null, { matiere: 'Banque', professeur: '', numero: '+223' }, null, null],
        [{ matiere: 'Comptabilité approfondie', professeur: '', numero: '+223' }, null, null, null, null, null],
        [null, null, null, null, null, null],
      ],
      "Semestre 4": [
        [{ matiere: 'Produits Financiers', professeur: '', numero: '+223' }, null, null, null, null, null],
        [{ matiere: 'Analyse Financière Approfondie', professeur: '', numero: '+223' }, null, null, null, null, null],
        [null, null, null, null, null, null],
      ]
    },
    "3ᵉ année": {
      "Semestre 5": [
        [{ matiere: 'Audit Bancaire', professeur: '', numero: '+223' }, { matiere: 'Stratégie Bancaire', professeur: '', numero: '+223' }, null, null, null, null],
        [{ matiere: 'Projet FBA', professeur: '', numero: '+223' }, null, null, null, null, null],
        [null, null, null, null, null, null],
      ],
      "Semestre 6": [
        [null, null, null, null, null, null],
        [null, null, null, null, null, null],
        [null, null, null, null, null, null],
      ]
    }
  }
};



// Composant de la table d'emploi du temps
function Table({ data }) {
  return (
    <div className="overflow-x-auto animate-zoom-in">
      <table className="min-w-full border text-sm table-auto text-center shadow transition-transform duration-300 hover:scale-[1.01]">
        <thead className="bg-blue-100 text-blue-900">
          <tr>
            <th className="border px-2 py-1">Heure</th>
            {jours.map((jour, i) => (
              <th key={i} className="border px-2 py-1">{jour}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {horaires.map((heure, i) => (
            <tr key={i} className="transition-opacity duration-500 hover:opacity-80">
              <td className="border px-2 py-1 font-semibold">{heure}</td>
              {jours.map((_, j) => (
                <td key={j} className="border px-2 py-1 whitespace-nowrap transition duration-300 hover:bg-blue-50">
                  {data[i]?.[j] ? (
                    <>
                      <div className="font-medium">{data[i][j].matiere}</div>
                      <div className="text-xs text-gray-500 italic">Professeur : {data[i][j].professeur}</div>
                      <div className="text-xs text-gray-400">N° : {data[i][j].numero}</div>
                    </>
                  ) : (
                    <div className="text-gray-400 italic">—</div>
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}



// Composant pour afficher une section de filière avec les années et semestres
function FiliereSection({ filiere, niveaux }) {
  // État pour le niveau (année) sélectionné, initialisé à la première année disponible
  const [selectedNiveau, setSelectedNiveau] = useState(Object.keys(niveaux)[0]);
  // État pour le semestre sélectionné, initialisé au premier semestre de la première année
  const [selectedSemestre, setSelectedSemestre] = useState(
    Object.keys(niveaux[Object.keys(niveaux)[0]])[0]
  );

  // Effet pour mettre à jour le semestre sélectionné lorsque le niveau (année) change
  useEffect(() => {
    if (niveaux[selectedNiveau]) {
      const firstSemestreOfNewNiveau = Object.keys(niveaux[selectedNiveau])[0];
      setSelectedSemestre(firstSemestreOfNewNiveau);
    }
  }, [selectedNiveau, niveaux]); // Dépendances de l'effet

  // Récupère les semestres pour le niveau actuellement sélectionné
  const currentNiveauSemestres = niveaux[selectedNiveau];

  return (
    <div className="mb-16 animate-fade-in-down">
      <h2 className="text-2xl font-bold text-blue-700 mb-3">{filiere}</h2>

      {/* Boutons pour sélectionner l'Année */}
      <div className="mb-4">
        {Object.keys(niveaux).map((niveau) => (
          <button
            key={niveau}
            onClick={() => setSelectedNiveau(niveau)}
            className={`px-3 py-1 m-1 rounded-full text-sm font-medium transition-all duration-300 ${
              selectedNiveau === niveau
                ? 'bg-blue-600 text-white'
                : 'bg-blue-100 text-blue-700 hover:bg-blue-200'
            }`}
          >
            {niveau}
          </button>
        ))}
      </div>

      {/* Boutons pour sélectionner le Semestre (uniquement si le niveau sélectionné a des semestres) */}
      {currentNiveauSemestres && Object.keys(currentNiveauSemestres).length > 0 && (
        <div className="mb-6 ml-4"> {/* Marge à gauche pour une meilleure hiérarchie visuelle */}
          {Object.keys(currentNiveauSemestres).map((semestre) => (
            <button
              key={semestre}
              onClick={() => setSelectedSemestre(semestre)}
              className={`px-3 py-1 m-1 rounded-full text-xs font-medium transition-all duration-300 ${
                selectedSemestre === semestre
                  ? 'bg-purple-600 text-white' // Couleur différente pour les semestres
                  : 'bg-purple-100 text-purple-700 hover:bg-purple-200'
              }`}
            >
              {semestre}
            </button>
          ))}
        </div>
      )}

      {/* Affichage de la Table pour le Semestre sélectionné */}
      {currentNiveauSemestres && currentNiveauSemestres[selectedSemestre] ? (
        <Table data={currentNiveauSemestres[selectedSemestre]} />
      ) : (
        <p className="text-center text-gray-500 mt-8">Aucun emploi du temps disponible pour ce semestre.</p>
      )}
    </div>
  );
}



// Composant principal qui agrège toutes les sections de filières
export default function Filieres() {
  return (
    <div className="min-h-screen px-4 py-8 bg-gray-50 text-gray-800 animate-fade-in">
      <h1 className="text-3xl font-bold text-center text-blue-800 mb-10 animate-fade-in-down">
        Filières & Emplois du Temps
      </h1>
      {/* Parcourt chaque filière définie dans emploiParFiliere et rend un FiliereSection */}
      {Object.entries(emploiParFiliere).map(([filiere, niveaux]) => (
        <FiliereSection key={filiere} filiere={filiere} niveaux={niveaux} />
      ))}
    </div>
  );
}