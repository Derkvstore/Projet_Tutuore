import React, { useState } from 'react';

const horaires = ['8h - 10h', '10h30 - 12h30', '12h15 - 14h15'];
const jours = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];

const emploiParFiliere = {
  AP: {
    "1ère année": [
      [
        { matiere: 'SGBD / SQL', professeur: '', numero: '+223' },
        { matiere: 'Recherche Opérationnelle', professeur: '', numero: '+223' },
        { matiere: 'Réact', professeur: '', numero: '+223' },
        { matiere: 'HTML/CSS/JS', professeur: '', numero: '+223' },
        null,
        null
      ],
      [
        { matiere: 'Théorie des Graphes', professeur: '', numero: '+223' },
        { matiere: 'Projet tutoré', professeur: '', numero: '+223' },
        { matiere: 'Réseaux Info', professeur: '', numero: '+223' },
        { matiere: 'Java Swing', professeur: '', numero: '+223' },
        null,
        null
      ],
      [
        null,
        null,
        null,
        { matiere: 'PHP 1', professeur: '', numero: '+223' },
        { matiere: 'CMS', professeur: '', numero: '+223' },
        null
      ]
    ],
    "2ᵉ année": [
      [
        { matiere: 'POO', professeur: '', numero: '+223' },
        { matiere: 'UML', professeur: '', numero: '+223' },
        null,
        { matiere: 'JavaFX', professeur: '', numero: '+223' },
        null,
        null
      ],
      [
        { matiere: 'Bases de données avancées', professeur: '', numero: '+223' },
        null,
        null,
        { matiere: 'Dev mobile', professeur: '', numero: '+223' },
        null,
        null
      ],
      [
        null,
        null,
        null,
        { matiere: 'Spring Boot', professeur: '', numero: '+223' },
        null,
        null
      ]
    ],
    "3ᵉ année": [
      [
        { matiere: 'IA', professeur: '', numero: '+223' },
        { matiere: 'Big Data', professeur: '', numero: '+223' },
        null,
        { matiere: 'DevOps', professeur: '', numero: '+223' },
        null,
        null
      ],
      [
        { matiere: 'Projet Fin d’étude', professeur: '', numero: '+223' },
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null
      ]
    ]
  },

  IG: {
    "1ère année": [
      [
        { matiere: 'Comptabilité', professeur: '', numero: '+223' },
        { matiere: 'Analyse financière', professeur: '', numero: '+223' },
        null,
        { matiere: 'HTML/CSS/JS', professeur: '', numero: '+223' },
        null,
        null
      ],
      [
        { matiere: 'Systèmes Info', professeur: '', numero: '+223' },
        { matiere: 'Projet tutoré', professeur: '', numero: '+223' },
        { matiere: 'Réseaux Info', professeur: '', numero: '+223' },
        { matiere: 'Java Swing', professeur: '', numero: '+223' },
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        { matiere: 'CMS', professeur: '', numero: '+223' },
        null
      ]
    ],
    "2ᵉ année": [
      [
        { matiere: 'Audit SI', professeur: '', numero: '+223' },
        null,
        null,
        { matiere: 'Java EE', professeur: '', numero: '+223' },
        null,
        null
      ],
      [
        { matiere: 'SQL Server', professeur: '', numero: '+223' },
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        { matiere: 'Angular', professeur: '', numero: '+223' },
        null,
        null
      ]
    ],
    "3ᵉ année": [
      [
        { matiere: 'Data Mining', professeur: '', numero: '+223' },
        null,
        null,
        { matiere: 'BI', professeur: '', numero: '+223' },
        null,
        null
      ],
      [
        { matiere: 'Projet Fin d’étude', professeur: '', numero: '+223' },
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null
      ]
    ]
  },

  Marketing: {
    "1ère année": [
      [
        { matiere: 'Stratégie Marketing', professeur: '', numero: '+223' },
        null,
        null,
        { matiere: 'Communication', professeur: '', numero: '+223' },
        null,
        null
      ],
      [
        { matiere: 'Étude de Marché', professeur: '', numero: '+223' },
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null
      ]
    ],
    "2ᵉ année": [
      [
        { matiere: 'Comportement du consommateur', professeur: '', numero: '+223' },
        null,
        null,
        null,
        null,
        null
      ],
      [
        { matiere: 'Marketing Digital', professeur: '', numero: '+223' },
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null
      ]
    ],
    "3ᵉ année": [
      [
        { matiere: 'Stratégie de marque', professeur: '', numero: '+223' },
        null,
        null,
        null,
        null,
        null
      ],
      [
        { matiere: 'Projet Marketing', professeur: '', numero: '+223' },
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null
      ]
    ]
  },
  
  GRH: {
    "1ère année": [
      [
        { matiere: 'Gestion RH', professeur: '', numero: '+223' },
        null,
        null,
        { matiere: 'Droit du travail', professeur: '', numero: '+223' },
        null,
        null
      ],
      [
        { matiere: 'Psychologie', professeur: '', numero: '+223' },
        null,
        null,
        null,
        null,
        null
      ],
      [null, null, null, null, null, null],
    ],
    "2ᵉ année": [
      [
        { matiere: 'Recrutement', professeur: '', numero: '+223' },
        { matiere: 'Organisation', professeur: '', numero: '+223' },
        null,
        { matiere: 'Conflit & Médiation', professeur: '', numero: '+223' },
        null,
        null
      ],
      [
        { matiere: 'Gestion des compétences', professeur: '', numero: '+223' },
        null,
        null,
        null,
        null,
        null
      ],
      [null, null, null, null, null, null],
    ],
    "3ᵉ année": [
      [
        { matiere: 'Stratégie RH', professeur: '', numero: '+223' },
        { matiere: 'Dialogue social', professeur: '', numero: '+223' },
        null,
        null,
        null,
        null
      ],
      [
        { matiere: 'Projet RH', professeur: '', numero: '+223' },
        null,
        null,
        null,
        null,
        null
      ],
      [null, null, null, null, null, null],
    ]
  },

  GLT: {
    "1ère année": [
      [
        { matiere: 'Gestion Stocks', professeur: '', numero: '+223' },
        null,
        null,
        { matiere: 'Transport', professeur: '', numero: '+223' },
        null,
        null
      ],
      [
        { matiere: 'Logistique urbaine', professeur: '', numero: '+223' },
        null,
        null,
        null,
        null,
        null
      ],
      [null, null, null, null, null, null],
    ],
    "2ᵉ année": [
      [
        { matiere: 'Supply Chain', professeur: '', numero: '+223' },
        { matiere: 'ERP', professeur: '', numero: '+223' },
        null,
        null,
        null,
        null
      ],
      [
        { matiere: 'Douane & commerce', professeur: '', numero: '+223' },
        null,
        null,
        null,
        null,
        null
      ],
      [null, null, null, null, null, null],
    ],
    "3ᵉ année": [
      [
        { matiere: 'Stratégie logistique', professeur: '', numero: '+223' },
        null,
        null,
        null,
        null,
        null
      ],
      [
        { matiere: 'Projet GLT', professeur: '', numero: '+223' },
        null,
        null,
        null,
        null,
        null
      ],
      [null, null, null, null, null, null],
    ]
  },

  FBA: {
    "1ère année": [
      [
        { matiere: 'Économie', professeur: '', numero: '+223' },
        null,
        null,
        { matiere: 'Assurance', professeur: '', numero: '+223' },
        null,
        null
      ],
      [
        { matiere: 'Maths Financières', professeur: '', numero: '+223' },
        null,
        null,
        null,
        null,
        null
      ],
      [null, null, null, null, null, null],
    ],
    "2ᵉ année": [
      [
        { matiere: 'Statistiques', professeur: '', numero: '+223' },
        { matiere: 'Finance marché', professeur: '', numero: '+223' },
        null,
        { matiere: 'Banque', professeur: '', numero: '+223' },
        null,
        null
      ],
      [
        { matiere: 'Comptabilité approfondie', professeur: '', numero: '+223' },
        null,
        null,
        null,
        null,
        null
      ],
      [null, null, null, null, null, null],
    ],
    "3ᵉ année": [
      [
        { matiere: 'Audit', professeur: '', numero: '+223' },
        { matiere: 'Stratégie bancaire', professeur: '', numero: '+223' },
        null,
        null,
        null,
        null
      ],
      [
        { matiere: 'Projet FBA', professeur: '', numero: '+223' },
        null,
        null,
        null,
        null,
        null
      ],
      [null, null, null, null, null, null],
    ]
  }
};


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

function FiliereSection({ filiere, niveaux }) {
  const [selectedNiveau, setSelectedNiveau] = useState(Object.keys(niveaux)[0]);

  return (
    <div className="mb-16 animate-fade-in-down">
      <h2 className="text-2xl font-bold text-blue-700 mb-3">{filiere}</h2>

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

      <Table data={niveaux[selectedNiveau]} />
    </div>
  );
}

export default function Filieres() {
  return (
    <div className="min-h-screen px-4 py-8 bg-gray-50 text-gray-800 animate-fade-in">
      <h1 className="text-3xl font-bold text-center text-blue-800 mb-10 animate-fade-in-down">
        Filières & Emplois du Temps
      </h1>
      {Object.entries(emploiParFiliere).map(([filiere, niveaux]) => (
        <FiliereSection key={filiere} filiere={filiere} niveaux={niveaux} />
      ))}
    </div>
  );
}
