function Confidentialite() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-10 text-gray-800 leading-relaxed animate-fade-in">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">
        Politique de Confidentialité – Techno-Lab ISTA
      </h1>

      <p className="mb-4">
        À <strong>Techno-Lab ISTA</strong>, nous accordons une importance primordiale à la confidentialité de nos étudiants, enseignants, collaborateurs et visiteurs. Cette politique vous informe de la manière dont nous <span className="text-red-600 font-semibold">collectons, utilisons, protégeons et partageons vos données personnelles</span> conformément aux normes éducatives et réglementaires en vigueur.
      </p>

      <h2 className="text-xl font-semibold text-blue-600 mt-6 mb-2">1. Données collectées</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Identité : nom, prénom, adresse email, numéro d’inscription, quartier</li>
        <li>Données pédagogiques : filière, résultats académiques, présence</li>
        <li>Données techniques : adresse IP, navigateur, journaux de connexion</li>
      </ul>

      <h2 className="text-xl font-semibold text-blue-600 mt-6 mb-2">2. Finalité du traitement</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Assurer la gestion administrative et académique (inscriptions, évaluations, délivrance de diplômes)</li>
        <li>Offrir un accès sécurisé et personnalisé aux services numériques</li>
        <li>Maintenir une communication efficace avec les apprenants et le personnel</li>
        <li><span className="text-red-600 font-semibold">Optimiser la qualité de l’enseignement et de l’accompagnement pédagogique</span></li>
      </ul>

      <h2 className="text-xl font-semibold text-blue-600 mt-6 mb-2">3. Sécurité et confidentialité</h2>
      <p className="mb-4">
        Des mesures techniques et organisationnelles rigoureuses sont mises en place pour garantir la sécurité de vos informations. L’accès aux données est restreint aux seules personnes habilitées dans le cadre de leurs fonctions.
      </p>

      <h2 className="text-xl font-semibold text-blue-600 mt-6 mb-2">4. Partage des données</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Services internes de Techno-Lab ISTA concernés par la gestion académique</li>
        <li>Partenaires technologiques dans le respect strict de la confidentialité</li>
        <li><span className="text-red-600 font-semibold">Autorités compétentes uniquement en cas d’obligation légale</span></li>
      </ul>

      <h2 className="text-xl font-semibold text-blue-600 mt-6 mb-2">5. Durée de conservation</h2>
      <p className="mb-4">
        Vos données sont conservées pour une durée limitée, proportionnelle aux objectifs pour lesquels elles ont été collectées, puis <span className="text-red-600 font-semibold">supprimées ou anonymisées</span> conformément aux exigences légales en vigueur.
      </p>

      <h2 className="text-xl font-semibold text-blue-600 mt-6 mb-2">6. Vos droits</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Accéder à vos informations personnelles</li>
        <li>Demander leur rectification, suppression ou limitation</li>
        <li>Vous opposer à certains traitements selon les conditions légales</li>
      </ul>

      <h2 className="text-xl font-semibold text-blue-600 mt-6 mb-2">7. Contact</h2>
      <p className="mb-2">
        Pour toute question relative à vos données personnelles, vous pouvez contacter notre Délégué à la Protection des Données (DPO) :
      </p>
      <ul className="mb-6">
        <li><strong>Email :</strong> <a href="mailto:technolab@malijaw.com" className="text-blue-600 hover:underline">technolab@malijaw.com</a></li>
        <li><strong>Adresse :</strong> Techno-Lab ISTA, B.P: E3123, Bamako, MALI</li>
        <li><strong>Téléphone :</strong> 229 01 54 / 229 62 72 — <strong>Fax :</strong> 229 32 66</li>
      </ul>

      <div className="mt-8 text-sm text-gray-700 leading-snug border-t pt-4">
        <p><strong className="text-red-600">Agrément Création :</strong> N° 0699/98 MESSRS</p>
        <p><strong className="text-red-600">Ouvertures :</strong> N° 1529/98, N° 0145/99 - 2446/00, N° 2284/01</p>
        <p><strong className="text-red-600">Localisation :</strong> Bamako, MALI — À proximité du centre-ville</p>
      </div>

      <p className="text-sm text-gray-500 mt-6 text-center">
        © 2025 Techno-Lab ISTA — Tous droits réservés.
      </p>
    </div>
  );
}

export default Confidentialite;
